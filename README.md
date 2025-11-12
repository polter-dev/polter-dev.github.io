## Portfolio project

Hi, I'm Marcus, and this repo powers my personal portfolio. I built it with a simple React + Vite setup so I could experiment with a more front end work along with familiarizng myself with a front end framework. 

### What’s inside
- `src/` – React app for the main landing page.
- `public/github.html` – A standalone GitHub highlights page with live stats cards.
- `public/{about,resume,contact}.html` – Placeholder sections that share the same navigation bar while I write proper content.
- `public/toc.css` – Shared styles for the navigation tabs across every page.

### Scripts
- `npm run dev` – Start the Vite development server.
- `npm run build` – Build the production bundle (outputs to `dist/`).
- `npm run preview` – Preview the production build locally.

### Deployment
Every push to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`. It installs dependencies, builds the site, and deploys the `dist/` folder to GitHub Pages (`polter-dev.github.io`). If you fork this repo, update the workflow or disable it before pushing.

Feel free to reuse parts of the layout, but please credit or fork responsibly. Reach me via [LinkedIn](https://www.linkedin.com/in/marcusruth/) or email if you have feedback or want to collaborate.
