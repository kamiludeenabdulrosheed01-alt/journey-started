# Portfolio project memory

Last updated: 2026-09-30

## Purpose

Static personal portfolio for Kamaldeen Abdul Rasheed Dolapo, a cybersecurity undergraduate at Al-Hikmah University building toward cloud security and developing web/backend skills. Preserve the author's existing identity and source material. Add professional structure without inventing credentials, employment, dates, projects, or testimonials.

## Project files

- `new_update.html`: main page, sections, metadata, navigation, contact information.
- `styles.css`: dark visual system, responsive layout, keyboard focus, reduced-motion support.
- `script.js`: intersection-based reveal and active section navigation.
- `portrait.jpeg`: existing portrait; referenced with a relative path for subdirectory deployment.
- `favicon.svg`: new browser icon.
- `site.webmanifest`: new minimal web app metadata.
- `README.md`: local run and publishing notes.

## Work recorded

- Corrected text encoding artifacts and repaired the visible email address (in the earlier improvement pass).
- Changed the portrait path from root-relative to relative so static hosting under a subpath can load it.
- Removed unfinished testimonial, fake GitHub, and blank project placeholder content rather than presenting invented endorsements or links.
- Improved small-screen navigation, desktop sticky navigation, keyboard focus, reduced-motion reveal fallback, and current-section indication.
- Added Open Graph/Twitter preview metadata, theme color, SVG favicon, and site manifest.
- Added Journey content based only on the supplied university, learning platforms, and stated cloud-security direction.
- Added a concise work-approach section focused on learning, authorized practice, and documentation.

## Known issues and follow-up

1. The two project cards currently link back to the page top. Replace these with real repository/demo links or honest case-study pages when the project URLs and details are available.
2. No GitHub profile URL was supplied; don't invent one.
3. No rÃ©sumÃ©, certificate files, work history, dates, or project evidence were supplied. Add these only after the owner provides accurate source details.
4. Open Graph preview image points to the portrait. A dedicated 1200Ã—630 social preview image would look better when one is available.
5. The HTML filename is `new_update.html`; keep the manifest start URL aligned if renaming it.
6. The site uses Google Fonts from a CDN, so typography falls back to system sans-serif/monospace when offline or blocked.

## Error/change log

- Found Markdown link syntax printed as email text inside HTML; changed the visible value to the actual email address.
- Found testimonials with placeholder names/quotes, a placeholder project card, and a pretend GitHub link; these were removed because they are not verifiable content.
- Found a root-relative portrait URL that could break on subpath hosting; changed to `portrait.jpeg`.
- Found navigation labels inconsistent with sections; current links match existing and added sections.
- Added graceful reveal behavior when IntersectionObserver is unavailable and when reduced motion is requested.

## Working rule

Keep the existing claims and personal information intact unless the owner asks for copy changes. New claims must be directly supported by information in the project or explicitly confirmed by the owner. Keep this file current whenever substantial sections, assets, or behavior change.

## 2026-09-30 contact and footer refinement

- Reworked the contact area into a two-column call-to-action panel with stronger heading, clearer email priority, and the existing email/LinkedIn details.
- Rebuilt the footer with identity/discipline, section navigation, back-to-top link, and a JavaScript-updated current year.
- No new contact claims or external profiles were invented.

## 2026-09-30 project and credentials improvement

- Replaced project-card self-links with truthful project summaries and current-page labels; no repository/demo URLs were invented.
- Added a Résumé & Credentials section using supplied university and learning-platform details, with an explicit prompt where a future résumé can be linked.
- Added the Résumé section to primary/footer navigation and updated contact numbering.
- Added CSS for project case studies and credential entries. Updated local asset query versions to request fresh CSS/JS.


## 2026-09-30 clickable project folders

- Project cards now open local detail pages instead of only describing work inline.
- Added projects/cybersecurity-portfolio/ and projects/frontend-hero/, each with an index.html detail page and README.md instructions for adding screenshots, demos, and source files.
- Relative paths link the project pages back to 
ew_update.html; keep page title/content and project card descriptions accurate as files are added.


## 2026-09-30 project authoring workflow

- Project cards now use capability-focused copy and explicit Project details / Project files links.
- Added ADD_A_PROJECT.md with step-by-step folder, detail page, image, and card instructions plus a copy-ready card snippet.
- Added projects/_template/ as a duplicate-ready detail page and README. 
- Note: static HTML cannot accept browser uploads into the local workspace; users copy files into project folders and link them from HTML.

