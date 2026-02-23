# 💤 Sleep Debt Economy

> **Quantifying the hidden cost of lost sleep — an interactive data storytelling experience.**

🌐 **Live Demo:** https://paq67.github.io/sleep-index/

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat\&logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat\&logo=javascript\&logoColor=black)

---

## 📖 Overview

**Sleep Debt Economy** is a premium dark-themed interactive storytelling website that explores how insufficient sleep impacts **health, productivity, and economic outcomes**.

The experience blends narrative design with data visualization to turn a lifestyle dataset into an engaging, insight-driven story.

### The Experience

* 🧭 **Story Tab**
  A scrollytelling journey with animated charts, insights, and key findings.

* 📓 **Notebook Tab**
  A clean, styled code viewer that showcases the Python analysis pipeline behind the visuals.

---

## ✨ Features

* 🌑 Premium dark UI with orange accent palette
* 🖱️ Cursor-following gradient glow effect
* 🎬 Scroll-triggered reveal animations
* 📊 Interactive visualizations

  * Histogram (sleep distribution)
  * Scatter plot (sleep vs productivity/health)
  * Horizontal bar charts (comparisons & rankings)
* 📱 Fully responsive (mobile, tablet, desktop)
* ⌨️ Keyboard navigation

  * Press **1 → Story**
  * Press **2 → Notebook**
* ⚡ Lightweight — no frameworks or build tools

---

## 🚀 Getting Started

### Run Locally

No dependencies required — simply open the HTML file.

```bash
# Clone the repository
git clone https://github.com/<your-username>/sleep-debt-economy.git

# Navigate into the folder
cd sleep-debt-economy

# Open in your browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

Or serve locally:

```bash
# Python
python -m http.server 3000

# Node
npx serve .
```

Then visit 👉 http://localhost:8080

---

## 🌍 Deployment (GitHub Pages)

1. Create a repository named **sleep-debt-economy**
2. Push your project

```bash
git init
git add .
git commit -m "Initial commit: Sleep Debt Economy"
git branch -M main
git remote add origin https://github.com/<your-username>/sleep-debt-economy.git
git push -u origin main
```

3. Enable **GitHub Pages**

* Go to **Settings → Pages**
* Select **Deploy from a branch**
* Choose **main / (root)**
* Save

Your site will be live at:

```
https://<your-username>.github.io/sleep-debt-economy/
```

---

## 🗂️ Project Structure

```
sleep-debt-economy/
├── index.html      # Story + Notebook interface
├── styles.css      # Design system & layout
├── script.js       # Interactions, animations, charts
├── README.md       # Project documentation
├── LICENSE         # MIT License
└── .gitignore
```

---

## 🧠 Data & Analysis

The visualizations are based on a sleep health and lifestyle dataset exploring relationships between:

* Sleep duration
* Stress levels
* Physical activity
* Productivity indicators
* Health risk factors

Python (Pandas + visualization libraries) was used to generate insights that informed the narrative.

---

## 🛠️ Tech Stack

| Layer         | Technology                      |
| ------------- | ------------------------------- |
| Structure     | Semantic HTML5                  |
| Styling       | Vanilla CSS (custom properties) |
| Logic         | Vanilla JavaScript (ES6+)       |
| Typography    | Inter & JetBrains Mono          |
| Visualization | Canvas / SVG charts             |

---

## 🎯 Purpose

This project demonstrates how **data storytelling can make personal health data relatable**, translating raw numbers into a narrative about:

* The economic cost of fatigue
* Lifestyle trade-offs
* Long-term wellbeing impacts

It serves as both:

* 📊 A portfolio data storytelling project
* 🧪 A UI/UX experiment in scrollytelling

---

## 🤝 Contributing

Contributions are welcome!

You can help by:

* Adding new datasets (e.g., productivity metrics)
* Improving chart interactivity
* Enhancing accessibility
* Adding more narrative sections
* Optimizing performance

### Steps

1. Fork the repo
2. Create a feature branch

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes
4. Push and open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the `LICENSE` file for details.

---

## 💡 Inspiration

Inspired by narrative data projects like economic indexes and lifestyle analytics dashboards that transform everyday metrics into compelling visual stories.

---

⭐ If you found this project interesting, consider giving it a star!
