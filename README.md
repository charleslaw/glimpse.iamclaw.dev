# glimpse.iamclaw.dev

The product website for [Glimpse](https://github.com/charleslaw/glimpse), a fast, lightweight image viewer for macOS. Static HTML and CSS with a small optional release lookup. No build tools or package installation.

Local folder: `~/src/glimpse.iamclaw.dev`. Planned repository: `charleslaw/glimpse.iamclaw.dev`. Custom domain: `glimpse.iamclaw.dev`.

## Preview

```sh
cd ~/src/glimpse.iamclaw.dev
python3 -m http.server 4174 --bind 127.0.0.1
```

Open http://127.0.0.1:4174/.

## Source

- `index.html`: all product copy, navigation, keyboard shortcuts, FAQ, and availability information.
- `assets/style.css`: responsive dark layout, using warm colors from the existing app icon and system fonts.
- `assets/releases.js`: optional public GitHub release lookup.
- `assets/glimpse-window.jpg`: a screenshot of the actual installed Glimpse app displaying a public-domain sample image.
- `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `404.html`: GitHub Pages and search configuration.

The website is separate from the app source repository. It does not modify the app or package a binary.

## Download behavior

At creation, the app has no public GitHub releases. Source-build links work immediately, and the page states the current availability accurately. There are no placeholder download links.

On page load, `releases.js` checks the app’s five most recent public releases. It selects a stable release with a `Glimpse-*.zip` or `.dmg` asset, excluding local tests, source packages, debug archives, and notarization uploads. Matching GitHub download links replace the source-build buttons. Release version and actual download size are shown. Offline, rate-limited, missing, draft, and prerelease results keep the source-build fallback.

The website assumes that public release artifacts are reviewed and published by the app maintainer. Signing and notarization belong to the app’s distribution workflow, documented in its own repository. This website does not sign, inspect, or certify binaries.

## Hosting

Use a public repository named **glimpse.iamclaw.dev**. Enable GitHub Pages from **main → / (root)** and set the custom domain to **glimpse.iamclaw.dev**.

In Namecheap, add one **CNAME Record** with Host **glimpse**, Value **charleslaw.github.io**, TTL **Automatic**. The main `iamclaw.dev` website, `www`, and email DNS records remain separate. Enable Enforce HTTPS in this repository’s Pages settings after DNS validates and the certificate is issued.

## Asset credits

- Glimpse icon: copied from the user’s existing app assets; unchanged.
- App screenshot: captured directly from the installed Glimpse app. The screenshot has been resized and compressed for the website.
- Sample photo: [Antelope Canyon by Justin Roy](https://commons.wikimedia.org/wiki/File:Antelope_Canyon_(Unsplash).jpg), published under **CC0 1.0**. The photo appears inside the screenshot. A visible photo credit is included in the footer.
- Product features and requirements: verified against the app’s local README, source code, and distribution documentation. No benchmark numbers, ratings, testimonials, or unreleased binary availability are invented.
