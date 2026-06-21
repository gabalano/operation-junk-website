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

## 2026-06-21 — Hero job proof gallery

- **Change ID:** WEB-CTA-004
- **Date live:** Pending production deployment verification
- **Area:** Website / Sales
- **Status:** Planned
- **Problem observed:** The hero-side card repeated Call, Text, and Callback choices that were already present in the header, main hero CTA, and mobile sticky bar. It used valuable above-the-fold space without showing evidence of completed work.
- **Hypothesis:** Replacing duplicate contact choices with an authentic before/after job gallery will increase trust and contact starts by showing proof of the type of work Operation Junk handles.
- **Exact change:** Replaced the hero-side card at runtime with a four-slide before/after gallery using the existing site job-photo sets. The gallery headline is `WHAT WE DO` and `Our past junk removal jobs`; every slide has explicit Before and After indicators, manual arrows/dots, slow autoplay that pauses on interaction, and a `Need a job like this? Call Now` action.
- **Primary metric:** Website-originated calls after viewing the hero gallery.
- **Guardrail metric:** Hero load performance, image failures, and decline in call/text CTA use.
- **Review date:** 2026-07-05
- **Decision and evidence:** Pending production deployment verification and a two-week review of contact activity and mobile engagement.

## 2026-06-21 — Primary header contact control

- **Change ID:** WEB-CTA-003
- **Date live:** Pending production deployment verification
- **Area:** Website / Sales
- **Status:** Planned
- **Problem observed:** The main header contact link blended into the green hero, did not visually prioritize the phone number, and used a single telephone link for both call and text language. The header contact action was also hidden on small screens.
- **Hypothesis:** A high-contrast split contact control with a prominent number, separate call and text actions, and a persistent mobile layout will increase direct contact starts without creating the pressure or distrust associated with flashing animations.
- **Exact change:** Replaced the header contact label at runtime with a bright-yellow two-action contact control: a primary Call Now action displaying `(872) 222-5502` and a distinct Text action. The control is full-width and remains visible in the mobile header.
- **Primary metric:** Website-originated calls and texts attributable to the header contact control.
- **Guardrail metric:** Mobile layout breakage, accidental contact taps, and decline in hero CTA use.
- **Review date:** 2026-07-05
- **Decision and evidence:** Pending production deployment verification and a two-week review of call/text behavior.

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
