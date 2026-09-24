/**
 * VIBE UI SUITE — PORTFOLIO CLIENT LOGIC
 * Architect: Omid Zaferi (omid-io)
 * Features:
 * - Reactive Theme Switching (OKLCH Dark/Light)
 * - Zero-Reload Bilingual Engine (English LTR / Persian RTL)
 * - Live Tehran UTC+3:30 Ticker
 * - Dynamic Category Filtering
 * - Clipboard Micro-Actions & Tooltips
 * - Semantic BiDi & Monospace Guard
 */

(function () {
  "use strict";

  // Inlined Bilingual Dictionary for Zero-Latency & Offline/File Protocol Support
  const translations = {
    en: {
      meta: {
        title: "Omid Zaferi (omid-io) — Software Architect & Systems Engineer",
        desc: "Omid Zaferi (omid-io) — Systems Architect & Autonomous Agent Specialist. Engineering high-throughput kernel networks, resilient AI multi-agent protocols, and precision design compilers."
      },
      nav: {
        work: "Work",
        flagships: "Flagships",
        opensource: "Open Source",
        dna: "Engineering DNA",
        contact: "Contact",
        langBtn: "فارسی",
        themeDark: "Switch to dark mode",
        themeLight: "Switch to light mode"
      },
      hero: {
        status: "Available for High-Impact Architecture",
        greeting: "I build resilient software where",
        greetingAccent: "the details matter.",
        bio: "I am Omid Zaferi (omid-io) — Systems Architect & Autonomous Agent Specialist. I engineer high-throughput kernel networks, resilient AI multi-agent protocols, and precision design compilers from awkward constraints to robust production boundaries.",
        ctaWork: "Explore Flagship Work",
        ctaContact: "Start a Conversation",
        copyEmail: "Copy Email",
        emailCopied: "Email Copied!",
        role: "Systems Architect & Lead Engineer",
        stats: {
          prs: "Public PRs Found",
          upstream: "Upstream Repos",
          flagships: "Flagship Suites",
          downloads: "Extension Downloads"
        }
      },
      filter: {
        all: "All Systems",
        flagship: "Flagships",
        ai: "AI & Automation",
        network: "Kernel & Networking",
        extensions: "Engineered Forks"
      },
      projects: {
        eyebrow: "01 · Core Engineering",
        title: "Systems with a reason to exist.",
        subtitle: "Intentionally selective. These are production platforms and architectural solutions engineered with zero AI-slop.",
        viewRepo: "Repository ↗",
        liveDemo: "Live Demo ↗",
        vsMarketplace: "VS Marketplace ↗",
        items: {
          vibe: {
            tag: "Flagship Design System",
            title: "Vibe UI Suite",
            desc: "A contract-driven frontend engineering compiler and token architecture for autonomous coding assistants, combining 26 design families, mathematical WCAG AAA verification, Next.js 15 starters, and VS Code extensions.",
            proof: "Active releases on npm, VS Code Marketplace & Open-VSX with 620+ downloads."
          },
          airtun: {
            tag: "Kernel Networking & Tunneling",
            title: "AirTun",
            desc: "High-throughput mobile internet and VPN tunnel router for Windows 10/11 using Wintun kernel drivers, WinUI 3, C# .NET 8, and Kotlin without requiring Android root privileges.",
            proof: "Low-latency packet routing with event-driven architecture and native desktop client."
          },
          flow: {
            tag: "Automation & Generative Suite",
            title: "Google Flow Suite",
            desc: "High-throughput dual-engine automation combining Chrome MV3, Playwright CDP, FastMCP protocol, SQLite history persistence, and asynchronous AI media processing queues.",
            proof: "462 unit & integration tests passing with dual CDP/REST architecture."
          },
          pause: {
            tag: "Resilience & Security Guard",
            title: "antigravity-pause",
            desc: "Deep hibernation, graceful pause, and pre-flight data-leak protection engine for Google Antigravity (2.0 Desktop, IDE, and CLI) with deterministic state recovery.",
            proof: "Zero-orphan process tree teardown and network resilience safeguards."
          },
          pure: {
            tag: "DOM Engine & Anti-Ad",
            title: "Digikala Pure Search",
            desc: "Real-time client-side DOM mutation observer eliminating sponsored merchandise and ad feeds across massive e-commerce catalogs via Greasemonkey/uBlock and Chrome MV3.",
            proof: "Published userscript on Greasy Fork with instant zero-layout-shift filtering."
          },
          rtl: {
            tag: "Engineered Fork · BiDi Layer",
            title: "Antigravity RTL & UI Suite",
            desc: "Native RTL and BiDi layout patcher for Antigravity with fluid dragging physics (160px–420px), ghost click suppression on settings toggle, and scoped Persian typography.",
            proof: "Upstream pull request #5 with complete visual affordance isolation."
          }
        }
      },
      upstream: {
        eyebrow: "02 · Upstream Contributions",
        title: "Verified code merged into major engines.",
        subtitle: "Selected pull requests merged or submitted directly to established open-source projects.",
        browseAll: "Browse full GitHub activity on github.com/omid-io ↗"
      },
      dna: {
        eyebrow: "03 · Architectural DNA",
        title: "Different stacks. Unified engineering discipline.",
        subtitle: "I work from the constraint outward, prioritizing evidence over assumptions, failure mode analysis, and clean component boundaries.",
        col1Title: "Distributed & Systems",
        col1Desc: "Event-driven pipelines, Wintun kernel networking, async queues, SQLite state engines, and concurrency locking.",
        col2Title: "Autonomous AI & MCP",
        col2Desc: "Multi-agent coordination, Model Context Protocol servers, circadian stealth browser workers, and self-healing loops.",
        col3Title: "Frontend & Design Compilers",
        col3Desc: "OKLCH token mathematics, WCAG AAA accessibility, Next.js 15 App Router, and zero-slop UI systems."
      },
      cta: {
        title: "Have a high-complexity architectural challenge?",
        desc: "Bring the constraint, the failure mode, or the system boundary. Let's engineer a resilient solution.",
        emailBtn: "Email Omid Directly ↗"
      },
      footer: {
        rights: "All rights reserved. Engineered with Vibe UI Suite standards.",
        top: "Back to top ↑"
      }
    },
    fa: {
      meta: {
        title: "امید ظفری (omid-io) — معمار نرم افزار و مهندس سیستم ها",
        desc: "امید ظفری (omid-io) — معمار سیستم ها و متخصص عامل های هوشمند خودکار (AI Agents). طراحی شبکه های سطح کرنل، پروتکل های توزیع شده چند ایجنتی و کامپایلرهای دقیق طراحی سیستم."
      },
      nav: {
        work: "پروژه ها",
        flagships: "سیستم های اصلی",
        opensource: "متن باز",
        dna: "معماری مهندسی",
        contact: "ارتباط",
        langBtn: "English",
        themeDark: "تغییر به تم تاریک",
        themeLight: "تغییر به تم روشن"
      },
      hero: {
        status: "آماده برای معماری سیستم های مقیاس پذیر",
        greeting: "من نرم افزارهایی می سازم که در آنها",
        greetingAccent: "جزئیات اهمیت دارند.",
        bio: "من امید ظفری (omid-io) هستم — معمار سیستم و متخصص عامل های هوشمند خودکار (AI Agents). تخصص من در طراحی شبکه های سطح کرنل، پروتکل های توزیع شده چند ایجنتی بر بستر MCP و کامپایلرهای دقیق طراحی سیستم، با عبور از سخت ترین محدودیت ها است.",
        ctaWork: "مشاهده سیستم های اصلی",
        ctaContact: "آغاز گفتگو",
        copyEmail: "کپی ایمیل",
        emailCopied: "ایمیل کپی شد!",
        role: "معمار سیستم و مهندس ارشد",
        stats: {
          prs: "پول ریکوئست عمومی",
          upstream: "مخزن اصلی همکار",
          flagships: "سوئیت مهندسی پیشرو",
          downloads: "دانلود اکستنشن ها"
        }
      },
      filter: {
        all: "همه سیستم ها",
        flagship: "سیستم های اصلی",
        ai: "هوش مصنوعی و اتوماسیون",
        network: "کرنل و شبکه",
        extensions: "فورک های مهندسی شده"
      },
      projects: {
        eyebrow: "۰۱ · مهندسی سیستم های بنیادین",
        title: "سیستم هایی که دلیلی برای وجود دارند.",
        subtitle: "این ویترین با وسواس بالا انتخاب شده است؛ سیستم های عملیاتی و واقعی بدون هیچ گونه شعار یا زباله هوش مصنوعی.",
        viewRepo: "مشاهده مخزن ↗",
        liveDemo: "دموی زنده ↗",
        vsMarketplace: "مارکت پلیس VS Code ↗",
        items: {
          vibe: {
            tag: "سیستم طراحی پیشرو",
            title: "Vibe UI Suite",
            desc: "سیستم طراحی مبتنی بر قرارداد مهندسی و موتور کامپایلر توکن ها برای دستیاران کدنویسی هوش مصنوعی، شامل ۲۶ خانواده طراحی، راستی آزمایی ریاضی کنتراست WCAG AAA، استارتر Next.js 15 و اکستنشن های VS Code.",
            proof: "منتشر شده در npm و مخازن رسمی VS Code و Open-VSX با بیش از ۶۲۰ دانلود فعال."
          },
          airtun: {
            tag: "شبکه سازی کرنل و تانلینگ",
            title: "AirTun",
            desc: "مسیریاب و اشتراک گذار پرسرعت اینترنت و تونل های VPN از موبایل به ویندوز ۱۰ و ۱۱ با درایور سطح کرنل Wintun، رابط کاربری WinUI 3، فریمورک دات نت ۸ و کاتلین، بدون نیاز به روت اندروید.",
            proof: "مسیریابی پکت ها با حداقل تاخیر، معماری مبتنی بر رخداد و کلاینت بومی دسکتاپ."
          },
          flow: {
            tag: "سوئیت اتوماسیون و تولید محتوا",
            title: "Google Flow Suite",
            desc: "پلتفرم پرسرعت اتوماسیون با معماری دوگانه شامل اکستنشن کروم MV3، پروتکل Playwright CDP، پروتکل FastMCP، تاریخچه دیتابیس SQLite و صف های پردازش نامتقارن هوش مصنوعی.",
            proof: "دارای ۴۶۲ تست واحد و یکپارچه موفق با معماری منعطف CDP و REST."
          },
          pause: {
            tag: "پایداری سیستم و ضد نشت داده",
            title: "antigravity-pause",
            desc: "موتور توقف ایمن، خواب عمیق (هایبرنیشن) و محافظت پیشگیرانه از نشت اطلاعات برای گوگل آنتی گراویتی (نسخه های دسکتاپ، محیط توسعه و خط فرمان) با بازیابی قطعی وضعیت.",
            proof: "پاکسازی کامل درخت پردازش ها بدون باقی ماندن پروسه یتیم و تاب آوری شبکه."
          },
          pure: {
            tag: "موتور پالایش DOM و حذف تبلیغات",
            title: "Digikala Pure Search",
            desc: "موتور تحلیل و نظارت زنده بر جهش های DOM جهت حذف کامل کالاها و تبلیغات اسپانسری در فروشگاه های بزرگ اینترنتی با ترکیب یوزراسکریپت، uBlock و اکستنشن کروم MV3.",
            proof: "منتشر شده روی مخزن Greasy Fork با حذف آنی و بدون پرش ساختار صفحه."
          },
          rtl: {
            tag: "فورک مهندسی · لایه BiDi",
            title: "Antigravity RTL & UI Suite",
            desc: "لایه بومی سازی راست به چپ (RTL) و اصلاح جهت متن (BiDi) برای آنتی گراویتی با فیزیک درگ روان (۱۶۰ تا ۴۲۰ پیکسل)، حذف کلیک های شبح در پنل تنظیمات و تایپوگرافی اختصاصی فارسی.",
            proof: "پول ریکوئست شماره ۵ با ایزولاسیون کامل نمادهای بصری و دکمه ها."
          }
        }
      },
      upstream: {
        eyebrow: "۰۲ · مشارکت های متن باز جهانی",
        title: "کدهای تایید و مرج شده در پروژه های بین المللی.",
        subtitle: "نمونه هایی منتخب از پول ریکوئست های مرج شده در مخازن مشهور جهانی.",
        browseAll: "مشاهده تمامی فعالیت های گیت هاب در github.com/omid-io ↗"
      },
      dna: {
        eyebrow: "۰۳ · دی ان ای معماری سیستم",
        title: "استک های گوناگون. انضباط مهندسی واحد.",
        subtitle: "من طراحی را از تحلیل محدودیت ها و بدترین سناریوهای خرابی آغاز می کنم؛ با اولویت دادن به شواهد عینی، مرزهای شفاف و تاب آوری بالا.",
        col1Title: "سیستم های توزیع شده و زیرساخت",
        col1Desc: "پایپ لاین های رخدادمحور، شبکه سازی سطح کرنل با Wintun، صف های ناهمگام، موتورهای پایگاه داده و قفل های همروندی.",
        col2Title: "عامل های خودکار هوش مصنوعی و MCP",
        col2Desc: "ارکستراسیون ایجنت ها، سرورهای پروتکل کانتکست مدل (MCP)، ورکر های نامحسوس مرورگر و حلقه های خودبهبوددهنده.",
        col3Title: "فرانت اند و کامپایلرهای طراحی",
        col3Desc: "ریاضیات توکن های OKLCH، دسترسی پذیری سطح WCAG AAA، فریمورک Next.js 15 و سیستم های بدون زباله هوش مصنوعی."
      },
      cta: {
        title: "مسئله یا چالش فنی پیچیده ای در پیش دارید؟",
        desc: "محدودیت اصلی سیستم، الگوهای خرابی یا مرزهای معماری را مطرح کنید تا راهکاری پایدار بسازیم.",
        emailBtn: "ارسال مستقیم ایمیل به امید ↗"
      },
      footer: {
        rights: "تمامی حقوق محفوظ است. پیاده سازی شده با استانداردهای Vibe UI Suite.",
        top: "بازگشت به بالا ↑"
      }
    }
  };

  // State Management
  let currentLang = localStorage.getItem("omid_portfolio_lang") || "en";
  let currentTheme = localStorage.getItem("omid_portfolio_theme");

  const root = document.documentElement;
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const langSwitchBtn = document.getElementById("langSwitchBtn");
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const navMenu = document.getElementById("navMenu");
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const copyTooltip = document.getElementById("copyTooltip");
  const terminalCopyBtn = document.getElementById("terminalCopyBtn");
  const currentYearSpan = document.getElementById("currentYear");

  // 1. Theme Manager
  function initTheme() {
    if (!currentTheme) {
      currentTheme = "light";
    }
    applyTheme(currentTheme);
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("omid_portfolio_theme", theme);
    currentTheme = theme;
    updateThemeIcon();
  }

  function updateThemeIcon() {
    if (!themeToggleBtn) return;
    const isDark = root.getAttribute("data-theme") === "dark";
    themeToggleBtn.innerHTML = isDark
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    themeToggleBtn.setAttribute(
      "aria-label",
      isDark ? translations[currentLang].nav.themeLight : translations[currentLang].nav.themeDark
    );
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  // 2. Language & i18n Switcher
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("omid_portfolio_lang", lang);

    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");

    if (langSwitchBtn) {
      langSwitchBtn.textContent = translations[lang].nav.langBtn;
      langSwitchBtn.setAttribute("aria-label", lang === "fa" ? "Switch to English" : "تغییر زبان به فارسی");
    }

    const dict = translations[lang];

    // Traverse and replace text according to data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const path = el.getAttribute("data-i18n").split(".");
      let val = dict;
      for (const p of path) {
        if (val && val[p] !== undefined) {
          val = val[p];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null && typeof val === "string") {
        el.textContent = val;
      }
    });

    if (dict && dict.meta) {
      document.title = dict.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", dict.meta.desc);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", dict.meta.title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", dict.meta.desc);
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", dict.meta.title);
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", dict.meta.desc);
    }

    updateThemeIcon();
  }

  if (langSwitchBtn) {
    langSwitchBtn.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "fa" : "en");
    });
  }

  // 3. Email Copy Micro-Action
  if (copyEmailBtn && copyTooltip) {
    copyEmailBtn.addEventListener("click", () => {
      const email = "omidzaferi@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        copyTooltip.textContent = translations[currentLang].hero.emailCopied;
        copyTooltip.classList.add("show");
        setTimeout(() => {
          copyTooltip.classList.remove("show");
        }, 2200);
      });
    });
  }

  // 5. Terminal Command Copy
  if (terminalCopyBtn) {
    terminalCopyBtn.addEventListener("click", () => {
      const cmd = "npx vibe-ui-suite@latest";
      navigator.clipboard.writeText(cmd).then(() => {
        const originalText = terminalCopyBtn.textContent;
        terminalCopyBtn.textContent = currentLang === "fa" ? "کپی شد!" : "Copied!";
        setTimeout(() => {
          terminalCopyBtn.textContent = originalText;
        }, 2000);
      });
    });
  }

  // 6. Project Category Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 7. Mobile Navigation Drawer
  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    document.querySelectorAll(".nav-item").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  // 8. Auto Year Sync
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 9. Interactive Neural Mesh Background Canvas (Vibe UI Living Physics)
  // ==========================================================================
  const neuralCanvas = document.getElementById("neural-canvas");
  if (neuralCanvas) {
    const ctx = neuralCanvas.getContext("2d");
    let width = (neuralCanvas.width = window.innerWidth);
    let height = (neuralCanvas.height = window.innerHeight);
    let mouse = { x: null, y: null, radius: 160 };

    window.addEventListener("resize", () => {
      width = neuralCanvas.width = window.innerWidth;
      height = neuralCanvas.height = window.innerHeight;
      initParticles();
    });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.75;
        this.vy = (Math.random() - 0.5) * 0.75;
        this.radius = Math.random() * 1.8 + 1.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= Math.cos(angle) * force * 1.6;
            this.y -= Math.sin(angle) * force * 1.6;
          }
        }
      }

      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(56, 189, 248, 0.75)" : "rgba(37, 99, 235, 0.65)";
        if (isDark) {
          ctx.shadowColor = "rgba(56, 189, 248, 0.5)";
          ctx.shadowBlur = 8;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    let particles = [];
    function initParticles() {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 13000), 85);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }
    initParticles();

    function animateNeuralMesh() {
      ctx.clearRect(0, 0, width, height);
      const isDark = root.getAttribute("data-theme") === "dark";

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * (isDark ? 0.24 : 0.16);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${alpha})` : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw(isDark);
      });

      requestAnimationFrame(animateNeuralMesh);
    }
    animateNeuralMesh();
  }

  // ==========================================================================
  // 10. Live Pulse Waveform Canvas (ECG Network Oscilloscope)
  // ==========================================================================
  const pulseCanvas = document.getElementById("pulse-canvas");
  const latencyDisplay = document.getElementById("live-latency-val");

  if (pulseCanvas) {
    const pCtx = pulseCanvas.getContext("2d");
    const pWidth = (pulseCanvas.width = 100);
    const pHeight = (pulseCanvas.height = 22);

    let offset = 0;
    function drawPulse() {
      pCtx.clearRect(0, 0, pWidth, pHeight);
      pCtx.beginPath();
      pCtx.strokeStyle = "#10b981";
      pCtx.lineWidth = 1.6;
      pCtx.shadowColor = "rgba(16, 185, 129, 0.6)";
      pCtx.shadowBlur = 6;

      const midY = pHeight / 2;
      pCtx.moveTo(0, midY);

      for (let x = 0; x < pWidth; x++) {
        const cycle = (x + offset) % 50;
        let y = midY;
        if (cycle > 20 && cycle < 23) y -= 3;
        else if (cycle >= 23 && cycle < 27) y += 9;
        else if (cycle >= 27 && cycle < 31) y -= 11;
        else if (cycle >= 31 && cycle < 35) y += 4;
        pCtx.lineTo(x, y);
      }
      pCtx.stroke();
      pCtx.shadowBlur = 0;

      offset += 1.3;
      requestAnimationFrame(drawPulse);
    }
    drawPulse();

    if (latencyDisplay) {
      setInterval(() => {
        const jitter = Math.floor(Math.random() * 11) - 5;
        const base = 138;
        latencyDisplay.textContent = `${base + jitter}ms`;
      }, 2600);
    }
  }

  // ==========================================================================
  // 11. Mouse Spotlight Tracker on Cards (Linear/Vercel Style)
  // ==========================================================================
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // Initial Boot
  initTheme();
  applyLanguage(currentLang);
})();
