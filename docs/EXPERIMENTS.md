# Operation Junk Experiment Register

Use one entry per meaningful test or decision. The aim is not constant A/B testing; it is disciplined learning from real customer and job data.

## Experiment template

### EXP-### — Title
- **Status:** Planned / Live / Learning / Kept / Revised / Reverted
- **Owner:**
- **Start date:**
- **Review date:**
- **Observation:**
- **Hypothesis:**
- **Change:**
- **Audience / traffic segment:**
- **Primary metric:**
- **Guardrail metrics:**
- **Minimum evidence needed:**
- **Result:**
- **Decision:**
- **Next action:**

---

### EXP-001 — Booking-first request flow
- **Status:** Needs source reconciliation
- **Owner:** Operation Junk
- **Start date:** Unknown
- **Review date:** After the production source is confirmed and the flow has enough completed requests to evaluate.
- **Observation:** A photo-only estimate CTA can imply a level of price certainty that does not exist for varied access, volume, weight, and disposal conditions.
- **Hypothesis:** A guided request flow that collects job type, access, load size, special items, description, and communication preference will produce more actionable leads than a photo-first CTA alone.
- **Change:** Replace the primary photo-quote framing with a guided removal-request flow; make photos optional preparation material.
- **Audience / traffic segment:** All website visitors.
- **Primary metric:** Completed qualified requests per 100 website sessions.
- **Guardrail metrics:** Text abandonment rate, call-click rate, lead response time, quote-to-book rate, and average gross profit per booked job.
- **Minimum evidence needed:** At least 30 qualified requests or four weeks of traffic, whichever takes longer; compare by source and exclude obvious outliers.
- **Result:** Not yet measured.
- **Decision:** Pending.
- **Next action:** Verify the exact production implementation, then add CTA and form-step event tracking.

### EXP-002 — Public load-size price ranges
- **Status:** Planned
- **Owner:** Operation Junk
- **Observation:** Customers want a starting point, but fixed online prices can create unprofitable jobs when access, dense material, special disposal, or volume differs from the assumption.
- **Hypothesis:** Showing representative load sizes with typical ranges and a clear onsite-price-confirmation statement will increase qualified requests without materially increasing price objections or margin leakage.
- **Change:** Add a load-size guide with non-binding typical ranges and clear exclusions for dense materials and special disposal.
- **Primary metric:** Qualified request completion rate from visitors who reach the pricing section.
- **Guardrail metrics:** Final-price variance, quote-to-book rate, gross margin by load tier, and price-objection loss rate.
- **Minimum evidence needed:** 20 completed jobs with the published guide live.
- **Result:** Not yet measured.
- **Decision:** Pending.
