# Medical Appointment Scheduler – Product & Testing Blueprint

*Last updated: 26 Apr 2025*

---

## 1. Vision
A web‑first scheduling portal for small‑to‑mid‑size medical practices that automates appointment booking, prevents double‑booking, and surfaces real‑time availability across multiple doctors, rooms and equipment.  
Backend services will eventually provide persistence and integration with EHR systems, but **this blueprint focuses on a front‑end‑only prototype** stubbing network calls with MSW.

### Core value points
| Stakeholder | Pain today | How the Scheduler helps |
|-------------|-----------|-------------------------|
| Receptionist | Manually juggles calendars in Outlook + paper notes | Unified grid view + conflict guardrails |
| Doctor | Last‑minute reschedules not propagated | Push notifications & live updates |
| Patient | Long phone waits | Self‑service mobile booking (future) |

---

## 2. MVP Scope (Phase 0)
### Functional requirements
1. **Calendar Grid** – week view, 15‑min slots, colour‑coded by status (free / tentative / confirmed / cancelled).
2. **Create Appointment Wizard**  
   1. Select patient (type‑ahead search over fake `/patients`).  
   2. Pick doctor & room (dropdown populated from `/resources`).  
   3. Choose slot → real‑time conflict detection.
3. **Edit / Cancel** – click existing slot → side drawer with actions.
4. **Validation & Feedback**  
   * Same‑doctor overlap check.  
   * Room capacity (max 1 appointment per room per slot).  
   * Time‑zone safe (UTC storage, local display).
5. **Attachment Viewer** – JPEG / PDF referral preview in modal.

### Non‑functional requirements
* **Accessibility** – full keyboard nav, ARIA roles on grid cells, focus traps in modals.
* **Performance** – render 2 000 slots < 50 ms; scrolling 60 fps on mid‑range laptop.
* **No backend** – all HTTP hits intercepted by MSW with seeded JSON.

### MSW stubs
| Route | Verb | Description |
|-------|------|-------------|
| `/appointments` | GET | return array per doctor between `start,end` query params |
| `/appointments` | POST | echo body with generated `id` |
| `/appointments/:id` | PUT | update in memory |
| `/patients?query=` | GET | fuzzy‑match 1 000 fake patients |
| `/resources` | GET | doctors + rooms list |

---

## 3. Testing Strategy
### Fast lane – **Node (vitest `test:node`)**
| Module | Pure function tests |
|--------|---------------------|
| `schedule.conflict()` | detect overlaps, double bookings |
| `date.utils.ts` | local ↔ UTC conversions, edge DST cases |
| `validation.rules.ts` | composite schema using Zod |

### Real lane – **Browser (vitest `test:browser`)**
| Flow | Assertions |
|------|-----------|
| Create appointment wizard | role queries, next‑step enablement, drag‑select slot |
| Edit drawer | ESC closes, focus returns, updates grid cell colour |
| Virtual scroll performance | expect frame budget < 16 ms on scroll |

### File naming convention
* `*.node.spec.ts` → Node env  
* `*.browser.spec.tsx` → Playwright via `@vitest/browser`

---

## 4. Roadmap for Load‑Testing Vitest
| Phase | Features added | Expected extra tests | Complexity driver |
|-------|---------------|----------------------|-------------------|
| **Wave 1** | Recurring visits (weekly physio), i18n, soft‑delete log | +40 Node, +25 Browser | Rule engine, mutation UI |
| **Wave 2** | Doctor vacations, patient self‑service booking, email mocks | +60 Node, +40 Browser | Real‑time WebSocket updates, auth flows |
| **Wave 3** | Payment capture stub, analytics dashboard, audit trail diff | +100 Node, +60 Browser | Charts, long‑list rendering |

Track CI wall‑clock per commit; stop adding breadth when > 120 s or any single spec > 5 s.

---

## 5. Extensibility Hooks (for when backend arrives)
* **Config‑driven API base URL** – single `ENV.API_URL` gate.
* **MSW toggle** – switch off mocks in prod build.
* **Type‑safe DTOs** – shared `@types/api` to match real backend contracts.
* **Offline queue** – `src/queue.ts` already retries on 503; will simply POST to real service later.