  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
      ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });

  // ── LANGUAGE SWITCHER ──
  const translations = {
    en: {
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.about": "About me",
      "nav.contact": "Contact",
      "hero.badge": "Available for work",
      "hero.desc": "// I build beautiful and functional interfaces<br>// with clean HTML, CSS and JavaScript.<br>// Focus on details &amp; performance.",
      "hero.cta1": "View projects →",
      "hero.cta2": "Contact",
      "skills.label": "Skills",
      "skills.title": "What I can do",
      "skills.html": "Semantic structure, accessibility, SEO-friendly markup, Forms, Canvas, Web Components.",
      "skills.css": "Flexbox, Grid, Animations, Transitions, Custom Properties, Media Queries, Pseudo-elements.",
      "skills.js": "ES6+, DOM API, Fetch, Async/Await, Event Handling, Local Storage, JSON manipulation.",
      "projects.label": "Projects",
      "projects.title": "My work",
      "projects.viewLink": "View project →",
      "projects.landing.desc": "Landing page for businesses, fully responsive, backend",
      "projects.todo.desc": "Task manager with Local Storage, filtering, drag-and-drop and dark/light mode toggle.",
      "projects.calc.desc": "A fully functional calculator app built with HTML, CSS and JavaScript. Supports basic arithmetic operations with a clean and responsive interface.",
      "projects.ecom.desc": "Full E-commerce app with product listing, shopping cart, and checkout functionality.",
      "projects.timer.desc": "A Pomodoro timer with circular countdown, work/break mode, start/pause/reset and animated progress ring.",
      "projects.password.desc": "Password generator with options for length, letters, numbers and symbols, with strength indicator and copy-to-clipboard.",
      "projects.quiz.desc": "Interactive quiz with 8 questions about HTML, CSS and JavaScript, with progress bar, score and visual feedback.",
      "projects.palette.desc": "Color palette generator with lock/unlock, copy hex, and responsive design. Create beautiful palettes with one click.",
      "about.label": "About me",
      "about.title": "Developer with a passion for details",
      "about.p1": "I'm a front-end developer focused on <span class=\"em\">creating beautiful and functional interfaces</span>. I treat every project as an opportunity to learn something new.",
      "about.p2": "I believe that <span class=\"em\">clean code, performance</span> and user experience are just as important as visual design. Currently exploring advanced JavaScript and modern frameworks.",
      "about.p3": "When I'm not coding, I'm exploring new designs, following web development trends and contributing to open source projects.",
      "about.cta": "Let's work together →",
      "about.stat1": "Completed Projects",
      "about.stat3": "Passion for Code",
      "contact.label": "Contact",
      "contact.title": "Shall we work together?",
      "contact.desc": "I'm available for freelance projects, collaborations and job opportunities. Contact me and let's build something amazing.",
      "footer.built": "Built with <span class=\"accent\">♥</span> using HTML, CSS &amp; JS"
    },
    sq: {
      "nav.skills": "Aftësitë",
      "nav.projects": "Projektet",
      "nav.about": "Rreth meje",
      "nav.contact": "Kontakt",
      "hero.badge": "I disponueshëm për punë",
      "hero.desc": "// Ndërtoj interface të bukura dhe funksionale<br>// me HTML, CSS dhe JavaScript të pastër.<br>// Fokus te detajet &amp; performanca.",
      "hero.cta1": "Shiko projektet →",
      "hero.cta2": "Kontakto",
      "skills.label": "Aftësitë",
      "skills.title": "Çfarë di të bëj",
      "skills.html": "Struktura semantike, accessibility, SEO-friendly markup, Forms, Canvas, Web Components.",
      "skills.css": "Flexbox, Grid, Animations, Transitions, Custom Properties, Media Queries, Pseudo-elements.",
      "skills.js": "ES6+, DOM API, Fetch, Async/Await, Event Handling, Local Storage, JSON manipulation.",
      "projects.label": "Projektet",
      "projects.title": "Punët e mia",
      "projects.viewLink": "Shiko projektin →",
      "projects.landing.desc": "Landing page për biznese, fully responsive, backend",
      "projects.todo.desc": "Task manager me Local Storage, filtrim, drag-and-drop dhe dark/light mode toggle.",
      "projects.calc.desc": "Një aplikacion kalkulatori plotësisht funksional i ndërtuar me HTML, CSS dhe JavaScript. Mbështet operacionet bazë aritmetike me një ndërfaqe të pastër dhe responsive.",
      "projects.ecom.desc": "Aplikacion i plotë E-commerce me listim produktesh, shopping cart dhe checkout.",
      "projects.timer.desc": "Një timer Pomodoro me countdown circular, work/break mode, start/pause/reset dhe progress ring animuar.",
      "projects.password.desc": "Gjenerator fjalëkalimesh me opsione për gjatësi, shkronja, numra dhe simbole, me tregues të fuqisë dhe copy-to-clipboard.",
      "projects.quiz.desc": "Quiz interaktiv me 8 pyetje rreth HTML, CSS dhe JavaScript, me progress bar, rezultat dhe feedback vizual.",
      "projects.palette.desc": "Gjenerator paletash ngjyrash me lock/unlock, copy hex, dhe responsive design. Krijo paleta të bukura me një klik.",
      "about.label": "Rreth meje",
      "about.title": "Developer me pasion për detajet",
      "about.p1": "Jam front-end developer me fokus te <span class=\"em\">krijimi i interface-ve të bukura dhe funksionale</span>. Çdo projekt e trajtoj si mundësi për të mësuar diçka të re.",
      "about.p2": "Besoj që <span class=\"em\">kodi i pastër, performanca</span> dhe user experience janë po aq të rëndësishme sa dizajni vizual. Aktualisht duke eksploruar JavaScript të avancuar dhe frameworks moderne.",
      "about.p3": "Kur nuk jam duke koduar, jam duke eksploruar dizajne të reja, duke ndjekur trendet e web development dhe duke kontribuar në projekte open source.",
      "about.cta": "Punojmë bashkë →",
      "about.stat1": "Projekte të Kompletuar",
      "about.stat3": "Pasion për Code",
      "contact.label": "Kontakt",
      "contact.title": "Të punojmë bashkë?",
      "contact.desc": "Jam i disponueshëm për projekte freelance, bashkëpunime dhe mundësi pune. Më kontakto dhe le të ndërtojmë diçka të mrekullueshme.",
      "footer.built": "Ndërtuar me <span class=\"accent\">♥</span> duke përdorur HTML, CSS &amp; JS"
    }
  };

  let currentLang = 'en';

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });
    // Update switcher button — show the CURRENT language flag
    const switcher = document.getElementById('langSwitch');
    if (lang === 'en') {
      switcher.innerHTML = '<img class="lang-flag" src="https://flagcdn.com/w40/gb.png" alt="EN" width="20" height="15"><span class="lang-code">EN</span>';
    } else {
      switcher.innerHTML = '<img class="lang-flag" src="https://flagcdn.com/w40/al.png" alt="SQ" width="20" height="15"><span class="lang-code">SQ</span>';
    }
    localStorage.setItem('portfolio-lang', lang);
  }

  document.getElementById('langSwitch').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'sq' : 'en');
  });

  // Load saved language preference (default: en) — always call to initialize button
  const savedLang = localStorage.getItem('portfolio-lang') || 'en';
  setLanguage(savedLang);


  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const linkObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => linkObserver.observe(s));