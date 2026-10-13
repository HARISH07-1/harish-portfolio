# Harish M. — DevOps & Cloud Portfolio

A responsive, dark-themed portfolio for DevOps/Cloud roles, with software engineering as a secondary track.

## Run locally

No build tools are required. Open `index.html` in a browser, or serve the folder with a local static server.

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a repository (for example, `harish-portfolio`) in your GitHub account.
2. Upload the contents of this folder to the repository root, including the `.github/workflows/pages.yml` workflow.
3. In **Settings → Pages**, choose **GitHub Actions** as the deployment source.
4. Open the **Actions** tab and confirm that the Pages workflow succeeds.
5. Open the URL shown in the Pages settings.

The included `resume.pdf` is the resume provided for this portfolio update.

## Before sharing with recruiters

- Replace generic GitHub profile links on project cards with the exact repository URLs after verifying each repository is public.
- Add your LinkedIn profile URL after confirming it.
- Add real project screenshots, tests and deployment evidence where available.
- Review the resume PDF and replace it whenever the resume is updated.
- Do not claim live demos, production availability, metrics, monitoring or high availability unless you have implemented and verified them.
- Never publish cloud credentials, `.env` files, private keys or access tokens.

## Stack

HTML, CSS and vanilla JavaScript. GitHub Pages deploys the static site through GitHub Actions.
