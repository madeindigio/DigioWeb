import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

/* ─── Chevron icon (dropdown arrow) ─── */
function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ─── Contact Form ─── */
function ContactForm() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dataExpanded, setDataExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const reasonOptions = [
    { key: "project", label: t("pages.contacto.form.reasonOptions.project") },
    { key: "collaboration", label: t("pages.contacto.form.reasonOptions.collaboration") },
    { key: "job", label: t("pages.contacto.form.reasonOptions.job") },
    { key: "other", label: t("pages.contacto.form.reasonOptions.other") },
  ];

  const selectedLabel = reasonOptions.find((o) => o.key === reason)?.label || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full h-[56px] px-[16px] bg-white border border-[#c5c5c5] font-['Manrope',sans-serif] text-[16px] text-[#191e25] placeholder:text-[#c0bbb3] outline-none focus:border-[#191e25] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
      {/* Name + Email row */}
      <div className="flex gap-[24px] max-md:flex-col">
        <div className="flex flex-col gap-[8px] w-full max-w-[354px] max-md:max-w-full">
          <label className="font-['Manrope',sans-serif] text-[16px] text-black">
            {t("pages.contacto.form.name")}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("pages.contacto.form.namePlaceholder")}
            className={inputClass}
            required
          />
        </div>
        <div className="flex flex-col gap-[8px] w-full max-w-[354px] max-md:max-w-full">
          <label className="font-['Manrope',sans-serif] text-[16px] text-black">
            {t("pages.contacto.form.email")}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("pages.contacto.form.emailPlaceholder")}
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Reason dropdown */}
      <div className="flex flex-col gap-[8px] w-full max-w-[732px] max-md:max-w-full">
        <label className="font-['Manrope',sans-serif] text-[16px] text-black">
          {t("pages.contacto.form.reason")}
        </label>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full h-[56px] px-[16px] bg-white border border-[#c5c5c5] flex items-center justify-between cursor-pointer hover:border-[#191e25] transition-colors"
          >
            <span
              className={`font-['Manrope',sans-serif] text-[16px] ${
                reason ? "text-[#191e25]" : "text-[#c0bbb3]"
              }`}
            >
              {reason ? selectedLabel : t("pages.contacto.form.reasonPlaceholder")}
            </span>
            <motion.div
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: EASE_SMOOTH }}
            >
              <ChevronDown className="text-[#191e25]" />
            </motion.div>
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE_SMOOTH }}
                className="absolute top-[58px] left-0 w-full bg-white border border-[#c5c5c5] z-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              >
                {reasonOptions.map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => {
                      setReason(opt.key);
                      setDropdownOpen(false);
                    }}
                    className={`w-full px-[16px] py-[14px] text-left font-['Manrope',sans-serif] text-[16px] hover:bg-[#f6f5f3] transition-colors cursor-pointer ${
                      reason === opt.key
                        ? "text-[#583bff] bg-[#f6f5f3]"
                        : "text-[#191e25]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Message textarea */}
      <div className="flex flex-col gap-[8px] w-full max-w-[732px] max-md:max-w-full">
        <label className="font-['Manrope',sans-serif] text-[16px] text-black">
          {t("pages.contacto.form.message")}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("pages.contacto.form.messagePlaceholder")}
          className="w-full h-[140px] px-[16px] py-[16px] bg-white border border-[#c5c5c5] font-['Manrope',sans-serif] text-[16px] text-[#191e25] placeholder:text-[#c0bbb3] outline-none focus:border-[#191e25] transition-colors resize-none"
          required
        />
      </div>

      {/* Data protection accordion */}
      <div className="w-full max-w-[732px] max-md:max-w-full">
        <button
          type="button"
          onClick={() => setDataExpanded(!dataExpanded)}
          className="flex items-center justify-between w-full pb-[8px] pr-[8px] cursor-pointer"
        >
          <span className="font-['Manrope',sans-serif] text-[16px] text-black text-left flex-1">
            {t("pages.contacto.form.dataProtection")}
          </span>
          <motion.div
            animate={{ rotate: dataExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: EASE_SMOOTH }}
          >
            <ChevronDown className="text-[#191e25]" />
          </motion.div>
        </button>
        <div className="w-full h-[1px] bg-[#c5c5c5]" />
        <AnimatePresence>
          {dataExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_SMOOTH }}
              className="overflow-hidden"
            >
              <p className="font-['Manrope',sans-serif] text-[14px] text-[#191e25]/70 leading-[1.6] pt-[16px] pb-[8px]">
                {t("pages.contacto.form.dataProtectionBody")}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Submit button */}
      <div className="relative">
        <motion.button
          type="submit"
          className="relative px-[48px] py-[16px] border border-[#191e25] bg-transparent cursor-pointer hover:bg-[#191e25] group transition-colors max-md:w-full"
          whileTap={{ scale: 0.97 }}
        >
          <span className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px] whitespace-nowrap group-hover:text-white transition-colors">
            {t("pages.contacto.form.submit")}
          </span>
        </motion.button>
        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4, ease: EASE_SMOOTH }}
              className="font-['Manrope',sans-serif] text-[16px] text-[#583bff] mt-[16px]"
            >
              {t("pages.contacto.form.successMessage")}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

/* ─── Offices Section ─── */
function OfficesSection() {
  const { t } = useTranslation();

  const offices = [
    {
      key: "murcia",
      name: t("pages.contacto.offices.murcia.name"),
      address: t("pages.contacto.offices.murcia.address"),
      phone: t("pages.contacto.offices.murcia.phone"),
      email: t("pages.contacto.offices.murcia.email"),
    },
    {
      key: "madrid",
      name: t("pages.contacto.offices.madrid.name"),
      address: t("pages.contacto.offices.madrid.address"),
    },
    {
      key: "barcelona",
      name: t("pages.contacto.offices.barcelona.name"),
      address: t("pages.contacto.offices.barcelona.address"),
    },
  ];

  return (
    <section className="bg-white w-full px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px]">
        <h2 className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] max-md:text-[28px] max-md:leading-[36px]">
          {t("pages.contacto.offices.title")}
        </h2>

        <div className="grid grid-cols-3 gap-[24px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {offices.map((office) => (
            <div key={office.key} className="flex flex-col gap-[16px]">
              <h3 className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px]">
                {office.name}
              </h3>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[1.5] max-w-[264px]">
                {office.address}
              </p>
              {(office.phone || office.email) && (
                <div className="flex flex-col gap-[0px]">
                  {office.phone && (
                    <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[1.5]">
                      {office.phone}
                    </p>
                  )}
                  {office.email && (
                    <a
                      href={`mailto:${office.email}`}
                      className="font-['Manrope',sans-serif] text-[#583bff] text-[16px] leading-[1.5] hover:underline"
                    >
                      {office.email}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Page ─── */
export function ContactoPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero + Form section */}
      <section className="bg-[#f6f5f3] w-full px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[64px]">
          {/* Title row */}
          <div className="flex items-end gap-[32px] max-lg:flex-col max-lg:items-start">
            <h1 className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[100px] tracking-[-3px] leading-[0.9] flex-1 whitespace-pre-line max-lg:text-[72px] max-md:text-[48px] max-md:leading-[0.95]">
              {t("pages.contacto.title")}
            </h1>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[24px] tracking-[0.48px] leading-[1.35] w-[370px] shrink-0 max-lg:w-full max-lg:max-w-[480px] max-md:text-[18px]">
              {t("pages.contacto.subtitle")}
            </p>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>

      {/* Offices */}
      <OfficesSection />
    </>
  );
}
