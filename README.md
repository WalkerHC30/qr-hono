[English](./README.md) | [繁體中文](./README.zh-TW.md)

# QR Code Generator: From Zero to One Million Requests

A production-oriented demo service built with Hono and TypeScript to illustrate how a QR code generation API can evolve from a minimal service foundation into a high-throughput backend.

This repository currently focuses on the service skeleton: server bootstrap, routing conventions, health checks, and a TypeScript build pipeline. It is intentionally small, so the architecture remains easy to extend as QR generation, persistence, validation, and observability features are added.

## Executive Summary

- Lightweight HTTP service powered by Hono on Node.js
- Strict TypeScript configuration for safer refactoring and long-term maintainability
- Modular router structure designed for API growth
- Health check endpoints for operational readiness
- Foundation dependencies already included for QR generation, schema validation, and local persistence

## Current Scope

The current repository snapshot includes:

- A Hono server running on port `3001`
- Global middleware for CORS and request logging
- A health check endpoint exposed at `GET /health`
- A namespaced API health endpoint exposed at `GET /api/health`
- Build and local development scripts

The following capabilities are not yet implemented in the current codebase, but the dependency set suggests they are intended next steps:

- QR code generation endpoints
- Input validation with Zod
- Database access via Drizzle ORM and SQLite
- Production-grade observability and automated testing

## Why This Project Structure

The project uses a modular routing layout so that infrastructure concerns remain separate from domain concerns:

- `src/server.ts` is responsible for bootstrapping the HTTP server and mounting middleware and top-level routes
- `src/routers/index.ts` acts as the API route aggregator
- `src/routers/health.ts` isolates the health check contract

This is a common enterprise-friendly pattern because it keeps service startup, routing composition, and feature modules loosely coupled.

## Architecture Overview

```text
Client
  -> Hono Application
     -> Global Middleware (CORS, Logger)
     -> /health
     -> /api/*
        -> Router Index
           -> /health
           -> Future QR / User / Admin routes
```

## Technology Stack

| Area | Technology | Notes |
| --- | --- | --- |
| Runtime | Node.js | Server runtime for local and deployed environments |
| Framework | Hono | Fast, lightweight web framework for API services |
| Language | TypeScript | Strict typing and maintainable service code |
| Dev Runner | tsx | Fast local development with watch mode |
| ORM | Drizzle ORM | Included for future data access layers |
| Database | SQLite via `better-sqlite3` | Suitable for local demos and prototyping |
| QR Library | `qrcode` | Included for future QR generation endpoints |
| Validation | Zod | Included for future request validation |

## Project Layout

```text
.
├── src/
│   ├── server.ts
│   └── routers/
│       ├── health.ts
│       └── index.ts
├── package.json
├── tsconfig.json
├── pnpm-workspace.yaml
├── README.md
└── README.zh-TW.md
```

## API Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/health` | Root-level health probe for infrastructure or load balancers |
| `GET` | `/api/health` | API-scoped health probe for application monitoring |

Example response:

```json
{
  "status": "ok",
  "timestamp": "2026-03-25T12:34:56.789Z"
}
```

## Getting Started

### Prerequisites

- A recent Node.js LTS release
- `pnpm` recommended

### Install

```bash
pnpm install
```

### Run in Development

```bash
pnpm dev
```

The service starts on:

```text
http://localhost:3001
```

### Verify Health Checks

```bash
curl http://localhost:3001/health
curl http://localhost:3001/api/health
```

### Build

```bash
pnpm build
```

### Start Compiled Output

```bash
pnpm start
```

## Engineering Notes

### Routing Strategy

The repository exposes a root health endpoint and also keeps health available under the `/api` namespace. This is a practical pattern when infrastructure checks and application checks may be consumed by different systems.

### Type Safety

`tsconfig.json` is configured with strict TypeScript options. This is a strong default for teams that expect the codebase to grow over time.

### Environment Handling

The development script loads `.env` when available. No mandatory environment variables are required by the current implementation.

## Recommended Next Steps

For a more complete "0 to 1,000,000 requests" demo, the next milestones would typically be:

1. Add QR generation endpoints with request validation
2. Introduce structured error handling and API response contracts
3. Add persistence for generated artifacts and request metadata
4. Add automated tests for routes and service logic
5. Add metrics, tracing, and deployment documentation
6. Introduce rate limiting, authentication, and versioned APIs if the demo expands

## Documentation Strategy

For bilingual documentation in professional teams, the most maintainable approach is:

- Keep `README.md` as the primary English document
- Provide a dedicated `README.zh-TW.md` for Traditional Chinese
- Add language switch links at the top of both files

This approach scales better than mixing two full languages in one file, especially once architecture notes, onboarding steps, and deployment guidance become longer.

## Chinese Summary

這個專案目前是一個以 Hono + TypeScript 建立的後端示範骨架，已經具備 server 啟動、middleware、模組化路由，以及 `/health` / `/api/health` 健康檢查。README 採英文主文件，並搭配獨立中文文件，比較符合團隊協作與長期維護的做法。

## License

No license has been defined in this repository yet. Add one before external distribution or commercial reuse.
