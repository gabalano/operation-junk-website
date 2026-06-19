# Operation Junk Learning System

## Purpose
Turn every meaningful website, marketing, pricing, sales, and operational decision into a measurable learning loop.

A change is not considered complete until we can answer:
1. What changed?
2. Why did we change it?
3. What result did we expect?
4. Which metric will tell us whether it worked?
5. What did we learn?
6. What will we keep, revise, or reverse?

## Source of truth

| Area | System of record | What it must capture |
|---|---|---|
| Website code | GitHub repository | Every production code change, commit message, date, owner, and reason |
| Website releases | Vercel | Production deployment URL, deployment time, and release status |
| Leads and conversations | HighLevel | Source, form answers, text/call outcome, appointment status, and disposition |
| Completed jobs | Jobber or HighLevel pipeline | Sale price, labor hours, disposal cost, truck cost, job type, and outcome |
| Website behavior | Google Analytics 4 + Google Search Console | Traffic source, CTA clicks, form starts, form completion, calls, texts, and search performance |
| Decisions and experiments | This repository | Hypothesis, change, metric, result, decision, and next action |

## Required change workflow

### Before changing anything customer-facing
Create an entry in `CHANGELOG.md` and, for meaningful changes, in `docs/EXPERIMENTS.md`.

Each entry must include:
- Date
- Area: website, pricing, operations, ads, sales, CRM, or service delivery
- Change ID
- Problem or observation
- Hypothesis
- Exact change
- Primary metric
- Guardrail metric
- Review date
- Status: planned, live, learning, kept, revised, or reverted

### Website release rules
1. Make the change on a feature branch when practical.
2. Commit with a plain-English message describing the business reason, not only the technical change.
3. Deploy a preview.
4. Review desktop and mobile before production.
5. Log the release in `CHANGELOG.md`.
6. Do not call a change successful until customer behavior or job outcomes support it.

## Core metrics

### Funnel metrics
- Sessions by source
- Hero CTA click rate
- Request-flow start rate
- Request-flow completion rate
- Text-click rate
- Call-click rate
- Lead-to-contact rate
- Contact-to-booked-job rate
- Booked-job-to-completed-job rate
- Cost per lead and cost per booked job when ads begin

### Sales metrics
- Median first-response time
- Quote-to-book rate
- Average ticket
- Average discount
- Cancellation rate
- No-show rate
- Reasons won and lost

### Job economics
- Revenue
- Helper labor
- Truck rental and fuel
- Disposal/dump fees
- Donation/recycling costs
- Drive time
- Total labor hours
- Gross profit dollars
- Gross margin percent
- Revenue and gross profit by job type and load tier

### Quality metrics
- Damage claims
- Rework or return visits
- Customer rating/review request rate
- Review conversion rate
- Complaint category
- Safety incidents or near misses

## Minimum data captured for every lead
- Lead source and UTM campaign when applicable
- Date/time received
- Job category
- ZIP/city
- Access factors: stairs, elevator, long carry, parking/access restrictions
- Estimated load size
- Special items: mattress, appliance, refrigerator, tire, electronics, dense material, paint/chemicals
- Preferred communication method
- Contact outcome
- Estimate range or onsite price
- Final disposition: won, lost, no response, out of area, prohibited item, price objection, scheduling conflict, other

## Minimum closeout for every completed job
- Final price
- Estimated price/range before arrival
- Final load tier
- Labor hours and number of workers
- Truck, fuel, disposal, and special fees
- Photos before and after when customer permission allows
- Donation/recycling/disposal destination
- What went wrong or nearly went wrong
- One improvement note
- Review requested: yes/no
- Review received: yes/no

## Weekly operating review
Every Monday, review the previous seven days.

1. Funnel: Where did visitors and leads drop off?
2. Sales: Which lead types booked? Which objections caused losses?
3. Economics: Which job types actually made money after labor, truck, and disposal?
4. Operations: What created delays, damage risk, or quote mistakes?
5. Marketing: Which source produced booked jobs, not merely inquiries?
6. Experiment review: Keep, revise, or revert one change at a time.
7. Choose no more than three high-leverage changes for the next week.

## Decision principles
- Do not optimize for clicks when booked-job margin is the actual goal.
- Do not make pricing changes from one unusual job.
- Do not make website changes without a stated hypothesis.
- Do not treat an estimate as accurate until compared with the final onsite price.
- Preserve historical data: revise or revert; do not erase evidence.
- Add one tracking change at a time when traffic volume is low.

## Current baseline
- Repository history must be treated as the code record.
- Historical website changes that were not committed cannot be reliably reconstructed as code releases.
- Beginning with this file, all material changes must be logged before or at deployment.
