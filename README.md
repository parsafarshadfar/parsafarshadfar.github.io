Check out my resume!
https://parsafarshadfar.com/




Personal site of Parsa Farshadfar, PMP,
and creator of [Grand Print](https://grandprint.app), a free tool to print
large posters across multiple pages.

Static site deployed to GitHub Pages by `.github/workflows/static.yml`.
`parsafarshadfar.github.io` 301-redirects to the canonical host
`parsafarshadfar.com`.

## SEO / agent-readable files

| File | Purpose |
| --- | --- |
| `llms.txt` | Machine-readable profile summary for LLMs and AI agents |
| `robots.txt` | Crawl policy, points at the sitemap |
| `sitemap.xml` | Single canonical URL, update `lastmod` on meaningful edits |
| `humans.txt` | Authorship and credits |
| `CNAME` | Pins the custom domain for GitHub Pages |
| `404.html` | Custom, `noindex` error page |

Structured data (schema.org `Person`, `SoftwareApplication`, `WebSite`,
`ProfilePage`) lives in a single JSON-LD `@graph` at the end of `<head>` in
`index.html`.

> Keep `<head>` free of bare text. Any non-whitespace text node inside `<head>`
> terminates it early and pushes the remaining meta tags into `<body>`, where
> search engines ignore them.
