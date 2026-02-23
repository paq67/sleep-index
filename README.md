# Sleep Debt Economy

> Quantifying the hidden cost of lost sleep — an interactive data storytelling experience.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Overview

**Sleep Debt Economy** is a premium, dark-themed data storytelling website that explores the economic and health costs of sleep deprivation. It features:

- **Story Tab** — A narrative-driven vertical scroll experience with animated charts, key findings, and visual insights.
- **Notebook Tab** — A styled code viewer showcasing the Python analysis behind the data.

## Features

- Cursor-following gradient glow effect
- Smooth scroll-triggered reveal animations
- Interactive histogram, scatter plot & horizontal bar charts
- Responsive design (mobile, tablet, desktop)
- Keyboard navigation (`1` for Story, `2` for Notebook)
- Premium dark UI with orange accent palette

## Live Demo

After deploying to GitHub Pages, your site will be live at:

```
https://<your-username>.github.io/sleep-debt-economy/
```

## Getting Started

### Run Locally

No build tools needed — just open `index.html` in your browser:

```bash
# Clone the repository
git clone https://github.com/<your-username>/sleep-debt-economy.git

# Open in browser
cd sleep-debt-economy
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub named `sleep-debt-economy`.
2. **Push the code:**

   ```bash
   cd sleep-debt-economy
   git init
   git add .
   git commit -m "Initial commit: Sleep Debt Economy"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sleep-debt-economy.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo → **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

4. Your site will be live in ~1 minute at `https://<your-username>.github.io/sleep-debt-economy/`

## Project Structure

```
sleep-debt-economy/
├── index.html      # Main HTML — Story & Notebook tabs
├── styles.css      # Complete design system & responsive styles
├── script.js       # Animations, tab switching, chart rendering
├── README.md       # This file
├── LICENSE         # MIT License
└── .gitignore      # Git ignore rules
```

## Tech Stack

| Layer   | Technology                  |
| ------- | --------------------------- |
| Structure | Semantic HTML5             |
| Styling   | Vanilla CSS (custom props) |
| Logic     | Vanilla JavaScript (ES6+) |
| Fonts     | Inter, JetBrains Mono (Google Fonts) |

## License

This project is licensed under the [MIT License](LICENSE).
