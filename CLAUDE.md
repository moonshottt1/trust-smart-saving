# TrustSmartSaving.com — Project Rules

## What this is
Blog-style content site for trustsmartsaving.com. HomeBuddy visual style (deep navy + orange) + NerdWallet content structure. Static HTML/CSS, no build step.

## Hard rules (never violate)
- No tracking pixels (no Meta pixel, no GA, no Tag Manager, no Hotjar)
- No affiliate links, no external CTAs, no links to start.trustsmartsaving.com or go.trustsmartsaving.com
- No newsletter forms, no chat widgets, no popups, no countdown timers
- No stock photos — SVG illustrations and Tabler icons only
- No guaranteed-savings or qualification language
- No invented real people (bylines stay "Editorial Team")

## Colors
Primary navy #1B3A6B, CTA orange #F58220, accent light blue #4A9FD8, surface #F7F9FC, border #E5E9F2, text #1A2238 primary / #5A6478 secondary.

## Typography
Inter throughout. H1 36/700, H2 24/600, body 16/400 line-height 1.7. Eyebrows 11/700 uppercase.

## Tech
Static HTML + custom CSS + vanilla JS. Deploy via GitHub → Cloudflare Pages. Mobile responsive mandatory.

## Voice
Friendly, plain-English, NerdWallet-style. No exclamation points. Bylines: "Editorial Team". Date format: "March 14, 2026". Every blog post has "Updated: [date]".

## Adding new blog posts
- Place in /blog/{slug}.html using the standard article template
- Update /blog/index.html and sitemap.xml
- 1,000-1,400 words minimum
- Never link to a subdomain or external offer
