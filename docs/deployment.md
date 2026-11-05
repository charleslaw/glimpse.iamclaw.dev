# Glimpse website hosting

- Website repository: https://github.com/charleslaw/glimpse.iamclaw.dev
- Local folder: `~/src/glimpse.iamclaw.dev`
- Intended address: https://glimpse.iamclaw.dev
- GitHub Pages source: **Deploy from a branch → main → / (root)**.
- Pages settings: https://github.com/charleslaw/glimpse.iamclaw.dev/settings/pages

## Namecheap

In **Domain List → iamclaw.dev → Manage → Advanced DNS → Host Records**, add:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME Record | glimpse | charleslaw.github.io | Automatic |

If a record already exists for the `glimpse` host, replace the conflicting website record. Keep the root-domain, `www`, and email records unchanged.

After the DNS check succeeds and GitHub issues a certificate, enable **Enforce HTTPS** in the Pages settings above. The site’s CNAME file already contains `glimpse.iamclaw.dev`.

## App releases

The website is ready to show a public Mac download when the app has an appropriate stable release asset. Until then, it links to the source build instructions. Publishing the website does not publish or package the app itself.

## References

- [GitHub custom-domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Namecheap GitHub Pages setup](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/)
