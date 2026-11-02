# Cyber Security Jobs Finder Chromium QA

Playwright + Chromium is used as a local/CI browser test for the static jobs-finder interface. It checks page rendering, responsive layout at mobile/tablet/desktop widths, and uncaught JavaScript errors. It does not call the live Adzuna service with credentials or scrape third-party job boards.

## Local run

Serve the repository root:

```bash
python -m http.server 8080
```

In another terminal:

```bash
python -m pip install -r tests/browser/requirements.txt
python -m playwright install chromium
python -m pytest -q tests/browser
```

Set `CYBERJOBS_BASE_URL` for another authorised local URL. Live API behaviour requires separately configured test credentials and is intentionally outside this smoke suite.
