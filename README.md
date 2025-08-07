# B3Analyzer 📈🇧🇷

An **Nx mono‑repo** with full‑stack Angular + Nest + RxJS tooling to inspect B3 (Brasil Bolsa Balcão) equities, funds and BDRs from the _Brapi_ public API.

| Stack | Main libs |
|-------|-----------|
| **Frontend** | Angular 17 · RxJS 8 · Angular Material |
| **Backend**  | NestJS 10 · TypeScript · Axios |
| **Dev‑Ops**  | Nx · Nx Cloud · Jest · ESLint · Prettier |

---

## ✨ Quick start

```bash
# 1. Install dependencies
pnpm i              # or yarn / npm

# 2. Serve everything with HMR
pnpm nx serve b3-analyzer
```

The app will be available at **http://localhost:4200**.

---

## ▶️ Typical developer workflow

```bash
# Lint, test & build affected projects after a commit
pnpm nx affected -t lint test build

# Visualise the dependency graph
pnpm nx graph
```

---

## 🛠️ Project structure (Nx)

```
apps/
  web/                # Angular SPA
  api/                # NestJS REST/Gateway
libs/
  core/data-access/   # Thin wrappers around Brapi endpoints
  core/util-finance/  # Graham number, DL/EBITDA, etc.
  ui/*                # Reusable Angular Material components
```

Use `pnpm nx list` to see all available generators, or install **Nx Console** in VS Code for a GUI.

---

## 🔌 Brapi API

We rely on the public [`brapi.dev`](https://brapi.dev) endpoints.  
If you hit the 50 req/min limit, create a free key and add it to:

```bash
# apps/api/.env
BRAPI_TOKEN=your‑token‑here
```

---

## 🚀 Deployment

| Target | Command |
|--------|---------|
| **Docker** | `docker compose up --build` |
| **Vercel** | Automatic with *vercel.json* |
| **CI** (GitHub Actions) | `pnpm nx g ci-workflow` |

Remote caching via **Nx Cloud** is already configured – just run:

```bash
pnpm nx connect
```

---

## 🤝 Contributing

1. Fork and clone.
2. Create a branch: `git checkout -b feat/my-feature`.
3. Commit with [Conventional Commits](https://www.conventionalcommits.org).
4. Run `pnpm nx format:write` before pushing.
5. Open a PR 😊️

---

## 📜 License

MIT © 2025 — _<your name/organisation here>_
