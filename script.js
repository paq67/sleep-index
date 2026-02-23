/* ===================================================================
   SLEEP DEBT ECONOMY — JavaScript
   Cursor glow · Tab switching · Scroll reveals · Scatter chart dots
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Cursor-Following Gradient Glow ----------
  const glow = document.getElementById('cursorGlow');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    // Smooth lerp
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.transform = `translate(${glowX - 300}px, ${glowY - 300}px)`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  // ---------- Navbar Scroll Effect ----------
  const navbar = document.getElementById('navbar');
  let scrolling = false;

  window.addEventListener('scroll', () => {
    if (!scrolling) {
      scrolling = true;
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        scrolling = false;
      });
    }
  });

  // ---------- Tab Switching ----------
  const tabStory = document.getElementById('tabStory');
  const tabNotebook = document.getElementById('tabNotebook');
  const storyContent = document.getElementById('storyContent');
  const notebookContent = document.getElementById('notebookContent');

  function switchTab(targetTab) {
    const isStory = targetTab === 'story';

    tabStory.classList.toggle('active', isStory);
    tabNotebook.classList.toggle('active', !isStory);

    // Fade out current, then swap
    storyContent.style.opacity = '0';
    notebookContent.style.opacity = '0';

    setTimeout(() => {
      storyContent.classList.toggle('active', isStory);
      notebookContent.classList.toggle('active', !isStory);

      // Let the browser paint the display change, then fade in
      requestAnimationFrame(() => {
        if (isStory) {
          storyContent.style.opacity = '1';
        } else {
          notebookContent.style.opacity = '1';
        }
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }

  tabStory.addEventListener('click', () => switchTab('story'));
  tabNotebook.addEventListener('click', () => switchTab('notebook'));

  // Takeaway CTA → switch to notebook
  const takeawayCta = document.querySelector('.takeaway-cta');
  if (takeawayCta) {
    takeawayCta.addEventListener('click', () => switchTab('notebook'));
  }

  // ---------- Scroll Reveal (Intersection Observer) ----------
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ---------- Generate Scatter Dots ----------
  const scatterContainer = document.getElementById('scatterDots');
  if (scatterContainer) {
    const dotCount = 50;
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('scatter-dot');

      // Simulate a negative correlation between sleep debt (x) and productivity (y)
      const x = Math.random() * 100; // sleep debt axis
      // Higher x → lower y (negative correlation with noise)
      const yBase = 100 - x;
      const noise = (Math.random() - 0.5) * 40;
      const y = Math.max(5, Math.min(95, yBase + noise));

      dot.style.left = `${x}%`;
      dot.style.bottom = `${y}%`;
      dot.style.opacity = (0.35 + Math.random() * 0.5).toString();
      dot.style.width = `${4 + Math.random() * 5}px`;
      dot.style.height = dot.style.width;

      scatterContainer.appendChild(dot);
    }
  }

  // ---------- Animate Chart Bars on Visibility ----------
  const chartCards = document.querySelectorAll('.chart-card');

  const chartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger bar/fill animations by toggling a class
          entry.target.classList.add('chart-visible');

          // For histogram bars - animate from 0 to target height
          const bars = entry.target.querySelectorAll('.bar');
          bars.forEach((bar, i) => {
            const targetH = bar.style.getPropertyValue('--h');
            bar.style.height = '0%';
            setTimeout(() => {
              bar.style.height = targetH;
            }, 80 + i * 60);
          });

          // For horizontal bars
          const hBars = entry.target.querySelectorAll('.h-bar-fill');
          hBars.forEach((fill, i) => {
            const targetW = fill.style.getPropertyValue('--w');
            fill.style.width = '0%';
            setTimeout(() => {
              fill.style.width = targetW;
            }, 150 + i * 100);
          });

          chartObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  chartCards.forEach((card) => chartObserver.observe(card));

  // ---------- Parallax on Hero Orb ----------
  const heroOrb = document.getElementById('heroOrb');

  window.addEventListener('scroll', () => {
    if (heroOrb) {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      heroOrb.style.transform = `translateX(-50%) translateY(${-rate}px)`;
    }
  });

  // ---------- Keyboard Navigation ----------
  document.addEventListener('keydown', (e) => {
    if (e.key === '1') switchTab('story');
    if (e.key === '2') switchTab('notebook');
  });
});
