// Content stays useful without JavaScript or GitHub API access.
// Public, stable Glimpse releases can replace the source-build links automatically.
(async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch('https://api.github.com/repos/charleslaw/glimpse/releases?per_page=5', {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
    });
    if (!response.ok) return;
    const releases = await response.json();
    if (!Array.isArray(releases)) return;

    let selection;
    for (const release of releases) {
      if (release.draft || release.prerelease || !Array.isArray(release.assets)) continue;
      const asset = release.assets.find(file => {
        if (!/^Glimpse-.*\.(?:zip|dmg)$/i.test(file.name || '')) return false;
        if (/local[-_ ]?test|source|debug|notarization/i.test(file.name)) return false;
        try {
          const url = new URL(file.browser_download_url);
          return url.protocol === 'https:' && url.hostname === 'github.com'
            && url.pathname.startsWith('/charleslaw/glimpse/releases/download/');
        } catch { return false; }
      });
      if (asset) { selection = { release, asset }; break; }
    }
    if (!selection) return;

    const { release, asset } = selection;
    document.querySelectorAll('[data-download-link]').forEach(link => {
      link.href = asset.browser_download_url;
      link.querySelector('[data-download-label]').textContent = 'Download for Mac';
    });
    const version = release.tag_name || release.name || 'Latest release';
    document.getElementById('release-status').textContent = `${version} is available for macOS. Download the app, unzip it if needed, and move Glimpse to your Applications folder.`;
    const size = Number(asset.size);
    document.getElementById('release-requirements').textContent = 'macOS 12+'
      + (Number.isFinite(size) && size > 0 ? ` · ${(size / 1048576).toFixed(1)} MB` : '');
    try {
      const notes = new URL(release.html_url);
      if (notes.protocol === 'https:' && notes.hostname === 'github.com'
          && notes.pathname.startsWith('/charleslaw/glimpse/releases/tag/')) {
        const link = document.querySelector('.release-notes');
        link.href = notes.href;
        link.hidden = false;
      }
    } catch { /* A working download does not require a release-notes link. */ }
  } catch {
    // Preserve the working source-build links when offline or rate-limited.
  } finally {
    clearTimeout(timeout);
  }
})();
