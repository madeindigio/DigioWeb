# Digio Landing Web — Agentic Development Guide

> This guide is for AI Agents working on this repository. It defines:
> - project-specific build/test/development commands and coding conventions;
> - **MANDATORY operating rules** that apply to every task, regardless of size.

## Build & Test Commands (pnpm)
- `pnpm dev` — Start the Vite development server with HMR at http://localhost:5173
- `pnpm build` — Production bundle (`dist/` output)
- `pnpm test --testPathPattern=pattern` — Run specific tests only
- `pnpm test --watch` — Interactive watch mode for TDD/rapid iterations
- `pnpm lint` — Lint and format (fixes auto-fixable issues via ESLint/Prettier hooks)

## Code Style Guidelines

### Project Setup
- Use **ES modules** (`export * as X from "package"`) over CommonJS.
  Import syntax: `const { foo } = import "…` for named imports.

### Formatting
- Prettier with base16 dark theme — auto format via git hooks (pre-commit/post-checkout).
- Single quotes, single-line objects/arrays on same line as their key.
- Wrap object/array values only at closing bracket if needed.
- Keep imports grouped: side-effect > type = > external named > internal.
- Always use `as` in barrel reexports (`export { foo } from "… as bar"`)

### Types
- Prefer **type unions over intersection** when possible — unions simplify variance and make subtyping predictable.
- Prefer concrete/structured types — avoid plain object + partial for shape validation.

### Naming Conventions  
- Components in PascalCase; pages/routes/files in kebab-case (e.g. `index.ts`)
- Hooks: `use` prefix, imperative present tense verb (`useFetch`, not `useFetcher`)
- Constants and config exports in UPPER_CASE with `_` separators.
- Internal-only functions start with `__`
- File exports named clearly — avoid `.mjs`/`.cjs` unless using top-level await

### Error Handling  
- Distinguish between expected (no-op) errors, runtime errors, and invariant/asserts.
- Never rethrow wrapped errors — unwrap first for logging.
- Prefer `const err = new Error(…); throw err;` over chaining `.cause` on strings or `.wrap()`

### React Patterns  
- Use functional components + hooks; keep files under 100 lines when possible.
- For large files, consider splitting into chunks of ~35 lines grouped by theme.
- Handle async errors consistently — `try/catch` at boundaries prefer explicit error shapes (name, errorCode, message) over generic strings.
- Use Tailwind CSS for styling — utility classes instead of styled-components or inline styles.

## MANDATORY Operating Rules

These rules are **MANDATORY**. They are not suggestions: an AI agent working on this repo **MUST follow every rule below** on every task, even for one-line changes. When a rule conflicts with habit or shortcut, the rule wins.

The rules assume availability of these tools:
- `kb_search_documents` and `hybrid_search_remembrances` (knowledge base)
- Code-indexing: `code_get_symbols_overview`, `code_find_symbol`, `code_hybrid_search`, `code_search_pattern`
- External research: Context7 (`c7_resolve_library_id`, `c7_get_library_docs`), web search (`google_search`, `brave_search`, `exa_search`)
- Web UI verification: `browser_navigate`, `browser_get_content`, `browser_evaluate`, `browser_click`, `browser_fill`, `browser_screenshot`, `browser_console_logs`, `browser_network`

### 1. MANDATORY: gather context BEFORE starting any task
Before writing code, designing, fixing, or planning anything that builds on prior work:

1. **Knowledge base first.** Search with `kb_search_documents` (or `hybrid_search_remembrances` when you want indexed sessions + code). Use it without a `tags` filter for broad context recovery; only add `tags` to deliberately narrow.
2. **Then the code index.** Use `code_get_symbols_overview` (file/package shape), `code_find_symbol` (locate function/type/signature), and `code_hybrid_search` (semantic search across the repo + related indexed projects).
3. Recall only when you know what key to fetch with it; do not substitute recall for KB/code-index searches.

If no relevant context exists, state that briefly and proceed.
### 2. MANDATORY: external research when the answer is not in the repo
When a task requires knowledge not present in the repository or KB:

- **Library/framework/API usage** → use Context7 (resolve ID with `c7_resolve_library_id`, then fetch docs via `c7_get_library_docs`). Prefer Context7 for any third-party API surface.
- **General/unknown facts, current events, error messages, release notes** → use web search (`google_search`, `brave_search`, or `exa_search`) and `fetch` to read the most relevant sources. Always cross-check more than one source for anything load-bearing.
- **Frontend/web UI work** (rendering, layout, DOM, console errors, visual verification) → actually drive the page with browser tools (`browser_navigate`, `browser_get_content`, `browser_evaluate`, `browser_click`, `browser_fill`, `browser_screenshot`, `browser_console_logs`, `browser_network`). Do not assume behavior; verify it.
### 3. MANDATORY: plan before non-trivial work
For anything larger than a trivial change:
- Break the work into **phases**, each independently testable.
- Save the plan to KB with `kb_add_document` under a clear path (e.g., `<project>/plans/<short-slug>_plan.md`) so it survives and is recoverable via `kb_search_documents`.
- If unsure whether a plan exists, search for it first; confirm with the user before diverging from it
- Update the plan as phases complete
The format of plans will vary by project but must be reproducible and self-contained
### 4. MANDATORY: implement in small, verified increments
- **Write code in small chunks** — each increment should be a testable behavioral fragment matching surrounding conventions (names, style, comment density).
- **Run the tests / build after every increment** to confirm correctness before moving on.
- Add or update tests for new behavior; place them where the project expects them
- Never report something as done unless verified — test passed, build succeeded, or behavior confirmed through direct observation.
### 5. MANDATORY: document every change in the knowledge base
After modifying, implementing, fixing, or refactoring anything:
- Record a summary with `kb_add_document` using this format:
  ```markdown
  ## What changed
  (concise description of the behavior/code change)
  
  ## Files & symbols touched
  (`path/to/file.ts#L0`, path/to/module/index.js, etc.)
  
  ## Why  
  (motivation or bug being fixed — why this was needed / what edge case it addresses)
  
  ## How verified  
  - Tests/passes: `[command]` with exit code
  ```
- Use `file_path`: `<project>/changes/<slug>.md`, or match fix/features directory structure if present.
### 6. MANDATORY: choose the right memory tool
Know when to use which tool:
- **`remember / recall`** — ONLY for short, durable facts identified by key (e.g., `user.preferred_lang`, `project.test_cmd`). Use `remember(key="…", content=…)` to upsert; call `recall(key="…")` only when you know roughly what key you want. Never use these for long or structured text.
- **`kb_add_document / kb_search_documents`** — any extensive/ordered information: plans, analyses, design notes, multi-step decisions, references.
The KB is what the pre-task search queries by default; it also returns full-text matches alongside semantic results.
### 7. MANDATORY: general conduct
- **Language**: Use English for code, comments, and documentation, unless a durable team convention for this repo says otherwise.
- When delegating work through sub-agents, give them clear self-contained instructions and enough context to do the work without re-checking upstream docs (KB link or `hybrid_search` query).
- For actions that are hard to reverse or outward-facing, confirm first unless a durable authorization exists (e.g., signed commit policy).