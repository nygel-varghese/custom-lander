# Nygel Online — Temporary Placeholder

Standalone Cloudflare Pages-ready static page for `nygelonline.com`.

This version uses a full-page background photograph with a configurable warm
overlay so the photograph remains visible while the interface retains strong
readability.

## Add your assets

Place these two files in `assets/`:

- `profile.jpg` — supplied profile photograph
- `background.jpg` — supplied background photograph

The CSS already points to those filenames.

## Background overlay

Open `assets/styles.css` and adjust:

`--overlay-opacity: 0.60;`

Higher = lighter image / stronger text contrast.
Lower = more visible image / less wash.

The current treatment is intentionally warm and fairly strong so black text,
red accents and fine rules remain readable across a range of photographs.

## Countdown and quotes

Open `assets/script.js` and edit:

- `CONFIG.launchDate`
- `CONFIG.quotes`

Use an explicit timezone offset, for example:

`2027-01-01T00:00:00+05:30`

## Deployment

Push this folder to a separate GitHub repository and connect that repository
to its own Cloudflare Pages project.

No framework, build command, backend, database or CMS is required.

This project is intentionally independent of the main Nygel Online website
repository.
