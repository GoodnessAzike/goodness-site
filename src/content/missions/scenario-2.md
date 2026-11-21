---
title: "Scenario 2: Stripe to S3 with a 3-day lookback"
image: /diagrams/scenario-2.png
alt: "Diagram: a nightly Lambda pulls the last 3 days of payments from the Stripe API and writes raw/payments/2026-10-26.json to an S3 bucket as versions 1, 2 and 3. From 28 November a lifecycle rule with NoncurrentDays 30 has deleted versions 1 and 2, and version 3 stays."
whatThisShows: "You are asked to design a pipeline that pulls payments from Stripe's API into raw/payments/ in shop-data-lake, with a 3-day lookback window to pick up refunds."
featured: true
order: 0
diagram: scenario-2

# What is causing this? (the problem, and what produces it)
cause: "Refunds made later need to show up in the file. So each night the pipeline reads the last 3 days again."

# How is it all connected? (goes with the diagram)
connected: "The Stripe API sends payments from the last 3 days to a nightly Lambda at 22:00. The Lambda writes raw/payments/2026-10-26.json to the S3 bucket, and each new run puts a new version on top. A lifecycle rule (NoncurrentDays 30) deletes the old versions."

# What ripples? (what changes across the system, including 2nd, 3rd and 4th order effects)
ripples: "The 3-day lookback catches refunds, but it creates extra file versions, so a lifecycle rule is needed to clean them up."

# Still to rewrite in my own words. Remove a name once it is done.
drafts: [cause, connected, ripples]

quote:
  text: "To determine the number of days an object is noncurrent, Amazon S3 looks at when its successor was created."
  source: "AWS"
---
