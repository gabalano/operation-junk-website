# Operation Junk Change Log

This is the business-readable record of material production changes. Code history remains the technical source of truth; this file explains the business reason and how the change will be evaluated.

## Change template

- **Change ID:**
- **Date live:**
- **Area:** Website / Pricing / Sales / Operations / CRM / Marketing
- **Status:** Planned / Live / Learning / Kept / Revised / Reverted
- **Problem observed:**
- **Hypothesis:**
- **Exact change:**
- **Primary metric:**
- **Guardrail metric:**
- **Review date:**
- **Decision and evidence:**

---

## 2026-06-21 — Conversation-first lead capture

- **Change ID:** WEB-CTA-002
- **Date live:** Pending production merge
- **Area:** Website / Sales
- **Status:** Planned
- **Problem observed:** The homepage and contact page asked prospects to complete a multi-step job questionnaire, estimate load size, and view public price ranges before speaking with Operation Junk. That can create price resistance and prevents the owner from qualifying and scheduling the job live.
- **Hypothesis:** A call-first funnel with text and callback options will increase the share of qualified conversations and onsite closes, while preserving owner control over pickup scheduling.
- **Exact change:** Removed public load-size pricing, photo-quote promises, and active questionnaires. Replaced active CTAs with Call Now, Text Us, and Schedule a Callback. The callback flow captures only name, mobile number, city/suburb, a preferred callback day/time, and optional notes. Pickup appointments remain manually coordinated after the conversation.
- **Primary metric:** Qualified conversations and onsite close rate per website lead.
- **Guardrail metric:** Callback no-show rate and missed-call response time.
- **Review date:** 2026-07-19
- **Decision and evidence:** Pending production deployment and four weeks of lead-source, callback, booked-visit, and closed-job data.

## 2026-06-19 — Learning-system baseline

- **Change ID:** OPS-001
- **Date live:** 2026-06-19
- **Area:** Operations / Website governance
- **Status:** Live
- **Problem observed:** Website and business changes were being discussed and implemented without a confirmed, durable decision and measurement record.
- **Hypothesis:** A mandatory GitHub change log, experiment record, lead/job data standard, and weekly review will prevent repeated mistakes and connect website changes to booked-job margin.
- **Exact change:** Added `docs/LEARNING_SYSTEM.md`, this change log, and an experiment register.
- **Primary metric:** Percentage of material changes with a documented hypothesis, deployment reference, and review decision.
- **Guardrail metric:** Time required to ship a normal website improvement.
- **Review date:** 2026-06-26
- **Decision and evidence:** Baseline created. Historical implementation claims before this entry are not treated as verified releases unless they can be tied to a Git commit and Vercel deployment.

## Unverified historical website work — requires reconciliation

- **Change ID:** WEB-REC-001
- **Date live:** Unknown
- **Area:** Website
- **Status:** Needs reconciliation
- **Problem observed:** Recent discussions describe a booking-first request flow, revised load-size/pricing section, and revised communication options. The repository history before OPS-001 does not provide a matching sequence of commits.
- **Required action:** Compare the current production website, Vercel deployment source, and repository main branch. Commit the real current source as a documented baseline before further design changes.
- **Primary metric:** Production source matches the repository default branch.
- **Review date:** Before the next production website release.
