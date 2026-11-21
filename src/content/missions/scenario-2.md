---
title: "Scenario 2: Stripe to S3 with a 3-day lookback"
image: /diagrams/scenario-2.png
alt: "Diagram: a nightly Lambda pulls the last 3 days of payments from the Stripe API and writes raw/payments/2026-10-26.json to an S3 bucket as versions 1, 2 and 3. From 28 November a lifecycle rule with NoncurrentDays 30 has deleted versions 1 and 2, and version 3 stays."
whatThisShows: "You are asked to design a pipeline that pulls payments from Stripe's API into raw/payments/ in shop-data-lake, with a 3-day lookback window to pick up refunds."
featured: true
order: 0
page: /mission-files/scenario-2/
---
