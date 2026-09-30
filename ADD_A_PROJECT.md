# How to add a project to the portfolio

The site is static, so there is no upload button that writes files into the portfolio. Add project files to the site folder on your computer, then connect them with links in the HTML.

## Quick steps

1. Make a copy of the `projects/_template` folder and rename the copy to your project name, using lowercase words and hyphens. Example: `projects/network-security-lab`.
2. Copy your project assets into that new folder. Useful items include a screenshot (`.png` or `.jpg`), a short project README, and a demo or source URL. Avoid passwords, API keys, private information, or files you do not have permission to publish.
3. Open the new folder's `index.html`. Replace the bracketed project title and description, add screenshots with relative paths (for example `<img src="screenshot.png" alt="Description of the screenshot">`), and add real demo/source links when available.
4. Open `new_update.html` and copy one `<article class="project-card ...">` inside the projects grid. Change its title, description, technologies, and status. Point its “Project details” link to `projects/your-project-name/index.html` and its “Project files” link to `projects/your-project-name/`.
5. Preview the portfolio and click both links. Keep only details you can verify, then update `PROJECT_MEMORY.md` if the structure or shared behavior changes.

## Copy-ready card

Replace `PROJECT NAME`, `SHORT DESCRIPTION`, `PROJECT FOCUS`, `TECH 1`, and `TECH 2` with accurate details.

```html
<article class="project-card project-case-study reveal">
  <div class="project-topline">
    <span class="project-index">03</span>
    <span class="project-status">Featured project</span>
  </div>
  <div class="project-content">
    <h3>PROJECT NAME</h3>
    <p>SHORT DESCRIPTION</p>
    <p class="project-detail"><strong>Project focus</strong><span>PROJECT FOCUS</span></p>
    <ul class="project-tags" aria-label="Project technologies">
      <li>TECH 1</li>
      <li>TECH 2</li>
    </ul>
  </div>
  <div class="project-actions">
    <a class="project-link" href="projects/your-project-name/index.html">Project details <span aria-hidden="true">↗</span></a>
    <a class="project-link project-source" href="projects/your-project-name/">Project files <span aria-hidden="true">↗</span></a>
  </div>
</article>
```

If your project is already hosted online, link its live demo and source repository directly instead of using the local folder link.
