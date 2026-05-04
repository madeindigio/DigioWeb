const ALLOWED_REASONS = new Set(["project", "collaboration", "job", "other"]);
const ipRequestLog = new Map();

const CONTACT_RATE_LIMIT_WINDOW_MS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS || 600000);
const CONTACT_RATE_LIMIT_MAX = Number(process.env.CONTACT_RATE_LIMIT_MAX || 6);
const CONTACT_MIN_FILL_MS = Number(process.env.CONTACT_MIN_FILL_MS || 2000);

function json(statusCode, payload, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      ...extraHeaders,
    },
    body: JSON.stringify(payload),
  };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientIp(event) {
  const forwardedFor = event.headers["x-forwarded-for"] || event.headers["X-Forwarded-For"];
  if (forwardedFor) {
    return String(forwardedFor).split(",")[0].trim();
  }

  const realIp = event.headers["x-real-ip"] || event.headers["X-Real-IP"];
  if (realIp) {
    return String(realIp).trim();
  }

  return "unknown";
}

function isRateLimited(ip, now) {
  const windowStart = now - CONTACT_RATE_LIMIT_WINDOW_MS;
  const previousHits = ipRequestLog.get(ip) || [];
  const recentHits = previousHits.filter((ts) => ts > windowStart);

  if (recentHits.length >= CONTACT_RATE_LIMIT_MAX) {
    ipRequestLog.set(ip, recentHits);
    return true;
  }

  recentHits.push(now);
  ipRequestLog.set(ip, recentHits);
  return false;
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return json(200, { ok: true });
  }

  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "Method not allowed" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "Invalid JSON body" });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const reason = String(payload.reason || "").trim();
  const reasonLabel = String(payload.reasonLabel || reason || "").trim();
  const message = String(payload.message || "").trim();
  const source = String(payload.source || "web-contact").trim();
  const locale = String(payload.locale || "es").trim();
  const hpField = String(payload.hpField || "").trim();
  const formStartedAt = Number(payload.formStartedAt || 0);
  const now = Date.now();
  const ip = getClientIp(event);

  if (hpField) {
    return json(200, { ok: true });
  }

  if (
    Number.isFinite(formStartedAt) &&
    formStartedAt > 0 &&
    now - formStartedAt < CONTACT_MIN_FILL_MS
  ) {
    return json(400, { ok: false, error: "Submission too fast" });
  }

  if (isRateLimited(ip, now)) {
    const retryAfterSeconds = Math.ceil(CONTACT_RATE_LIMIT_WINDOW_MS / 1000);
    return json(
      429,
      { ok: false, error: "Too many requests" },
      { "Retry-After": String(retryAfterSeconds) },
    );
  }

  if (!name || name.length < 2 || name.length > 120) {
    return json(400, { ok: false, error: "Invalid name" });
  }

  if (!isValidEmail(email) || email.length > 254) {
    return json(400, { ok: false, error: "Invalid email" });
  }

  if (!ALLOWED_REASONS.has(reason)) {
    return json(400, { ok: false, error: "Invalid reason" });
  }

  if (!message || message.length < 5 || message.length > 5000) {
    return json(400, { ok: false, error: "Invalid message" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Digio Contact <noreply@digio.es>";

  if (!resendApiKey || !toEmail) {
    return json(500, {
      ok: false,
      error: "Missing RESEND_API_KEY or CONTACT_TO_EMAIL",
    });
  }

  const subject = `[Web Contact] ${reasonLabel} - ${name}`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeReason = escapeHtml(reason);
  const safeReasonLabel = escapeHtml(reasonLabel);
  const safeLocale = escapeHtml(locale);
  const safeSource = escapeHtml(source);
  const safeMessage = escapeHtml(message);

  const html = `
    <h2>Nuevo contacto web</h2>
    <p><strong>Nombre:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Motivo:</strong> ${safeReasonLabel} (${safeReason})</p>
    <p><strong>Idioma:</strong> ${safeLocale}</p>
    <p><strong>Origen:</strong> ${safeSource}</p>
    <hr />
    <p style="white-space: pre-wrap;">${safeMessage}</p>
  `;

  const text = [
    "Nuevo contacto web",
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Motivo: ${reasonLabel} (${reason})`,
    `Idioma: ${locale}`,
    `Origen: ${source}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!resendResponse.ok) {
      await resendResponse.text();
      return json(502, {
        ok: false,
        error: "Email provider error",
        providerStatus: resendResponse.status,
      });
    }

    return json(200, { ok: true });
  } catch {
    return json(502, { ok: false, error: "Failed to send email" });
  }
}
