

## GitHub/GitLab ToC Chrome Extension

This is a Google Chrome Extension which allows to show you a "table of content" generated by [GitHub](https://github.com) and [GitLab](https://gitlab.com) project README or WIKI.

This Project is cloned from [github-toc](https://github.com/summerblue/github-toc)

### Customize your private gitlab

Modify 'matches' in `manifest.json`, add your private gitlab url. For example, if your private gitlab domain is http://gitlab.ywheel.com/ , then the 'matches' in `manifest.json` looks like:

```json
  ...
  "content_scripts": [{
    "matches": [
      "https://gitlab.com/*",
      "https://github.com/*",
      "http://gitlab.ywheel.com/*"
    ],
  ...
```
