document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. Dynamic Typewriter in Hero Header
  // ==========================================
  const phrases = [
    "Autonomous AI Agents",
    "AirTun VPN & Kernel Runtimes",
    "Vibe UI Design Systems",
    "Anti-Leak Security Guards",
    "FastMCP Protocol Systems",
    "Self-Healing Subagent Clusters"
  ];
  const typeTarget = document.getElementById("typewriter-text");
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 90;

  function runTypewriter() {
    if (!typeTarget) return;
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      typeTarget.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 45;
    } else {
      typeTarget.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 85;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typeSpeed = 2200; // Pause at full phrase
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(runTypewriter, typeSpeed);
  }
  runTypewriter();

  // ==========================================
  // 2. Interactive Neural Mesh Background Canvas
  // ==========================================
  const canvas = document.getElementById("neural-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: null, y: null, radius: 150 };

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
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
        this.radius = Math.random() * 1.8 + 1;
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
            this.x -= Math.cos(angle) * force * 1.5;
            this.y -= Math.sin(angle) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.65)";
        ctx.shadowColor = "rgba(0, 240, 255, 0.4)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    let particles = [];
    function initParticles() {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 14000), 75);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }
    initParticles();

    function animateNeuralMesh() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const alpha = (1 - dist / 125) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animateNeuralMesh);
    }
    animateNeuralMesh();
  }

  // ==========================================
  // 3. Mouse Spotlight on Cards (Linear Style)
  // ==========================================
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // ==========================================
  // 4. Live Pulse Waveform Canvas & Ping Jitter
  // ==========================================
  const pulseCanvas = document.getElementById("pulse-canvas");
  const latencyDisplay = document.getElementById("live-latency-val");

  if (pulseCanvas) {
    const pCtx = pulseCanvas.getContext("2d");
    const pWidth = (pulseCanvas.width = 140);
    const pHeight = (pulseCanvas.height = 34);

    let offset = 0;
    function drawPulse() {
      pCtx.clearRect(0, 0, pWidth, pHeight);
      pCtx.beginPath();
      pCtx.strokeStyle = "#10b981";
      pCtx.lineWidth = 1.7;
      pCtx.shadowColor = "rgba(16, 185, 129, 0.5)";
      pCtx.shadowBlur = 6;

      const midY = pHeight / 2;
      pCtx.moveTo(0, midY);

      for (let x = 0; x < pWidth; x++) {
        const cycle = (x + offset) % 60;
        let y = midY;
        if (cycle > 24 && cycle < 28) y -= 4;
        else if (cycle >= 28 && cycle < 32) y += 12;
        else if (cycle >= 32 && cycle < 37) y -= 14;
        else if (cycle >= 37 && cycle < 42) y += 5;
        pCtx.lineTo(x, y);
      }
      pCtx.stroke();
      pCtx.shadowBlur = 0;

      offset += 1.4;
      requestAnimationFrame(drawPulse);
    }
    drawPulse();

    if (latencyDisplay) {
      setInterval(() => {
        const jitter = Math.floor(Math.random() * 11) - 5;
        const base = 138;
        latencyDisplay.textContent = `${base + jitter}ms`;
      }, 2400);
    }
  }

  // ==========================================
  // 5. Project Card Tab Switching
  // ==========================================
  document.querySelectorAll(".showcase-card").forEach((card) => {
    const tabBtns = card.querySelectorAll(".tab-btn");
    const tabPanes = card.querySelectorAll(".tab-pane");

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");

        tabBtns.forEach((b) => b.classList.remove("active"));
        tabPanes.forEach((p) => p.classList.remove("active"));

        btn.classList.add("active");
        const activePane = card.querySelector(`.tab-pane[data-pane="${targetTab}"]`);
        if (activePane) activePane.classList.add("active");
      });
    });
  });

  // ==========================================
  // 6. Category Filter for Catalog Cards
  // ==========================================
  const filterBtns = document.querySelectorAll(".filter-btn");
  const catalogCards = document.querySelectorAll(".catalog-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      catalogCards.forEach((card) => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // ==========================================
  // 7. 1-Click Clone Command Copy
  // ==========================================
  document.querySelectorAll(".quick-clone-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const copyText = btn.getAttribute("data-copy");
      if (!copyText) return;

      try {
        await navigator.clipboard.writeText(copyText);
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<span style="color: var(--emerald-bright); font-weight: 600;">✓ Copied to clipboard!</span>`;
        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 2000);
      } catch (err) {
        console.error("Clipboard write error:", err);
      }
    });
  });

  // ==========================================
  // 8. Interactive Terminal Playground
  // ==========================================
  const termScreen = document.getElementById("terminal-screen");
  const termInput = document.getElementById("terminal-input");

  const terminalCommands = {
    help: `Available commands:
  • projects     - List core featured repositories (AirTun, Vibe UI, etc.)
  • catalog      - Show full directory of 20+ repositories
  • upstream     - Show upstream contributions (.NET Runtime, LlamaIndex, etc.)
  • status       - Real-time agent cluster & probe status
  • probe        - Execute sub-200ms anti-leak network probe
  • whoami       - Display developer identity and profile
  • clear        - Clear terminal screen buffer`,

    projects: `[1] AirTun (Featured Flagship)
    Ultra-fast mobile internet & VPN tunnel sharing for Windows 10/11.
    Stack: Kotlin Jetpack Compose & WinUI 3 .NET 8.
    Repo: https://github.com/omid-io/AirTun

[2] vibe-ui-suite (Production System)
    Deterministic design contracts & WCAG AA evaluation gates for AI coding agents.
    Demo: https://omid-io.github.io/vibe-ui-suite/
    Repo: https://github.com/omid-io/vibe-ui-suite

[3] antigravity-pause (v0.1.0-stable)
    Graceful Pause, Deep Hibernation & Pre-Flight Leak Protection for Google Antigravity.
    Repo: https://github.com/omid-io/antigravity-pause

[4] Android-Todo-App (Glassmorphism)
    Ultra-Modern Android Task Manager with Room Flow and Dual Calendar.
    Repo: https://github.com/omid-io/Android-Todo-App`,

    catalog: `CATALOG DIRECTORY:
  • AirTun                - WinUI 3 + Kotlin low-latency tunnel
  • vibe-ui-suite         - Anti AI-Slop design system & CLI
  • antigravity-pause     - Pre-flight anti-leak session protection
  • Android-Todo-App      - Glassmorphism Jetpack Compose app
  • google-flow-suite     - Google flow automation suite (Playwright & FastMCP)
  • telegram-mcp          - Telegram context protocol bridge
  • antigravity-rtl       - Smart RTL UI patcher for Antigravity 2.0
  • digikala-pure-search  - Ad & sponsor cleaner userscript
  • arena.ai-downloader   - LMSYS Arena chat exporter
  • FontWoW-2.0           - Web font preview engine
  • omid-core             - Multi-agent orchestration engine`,

    upstream: `UPSTREAM CONTRIBUTIONS & FORKS:
  • dotnet/runtime       - .NET Core cross-platform runtime engine
  • run-llama/llama_index- Document processing & RAG framework for LLMs
  • astral-sh/uv         - Ultra-fast Rust package manager for Python
  • sst/opencode         - Open-source terminal coding agent
  • imaNNeo/fl_chart     - Top Flutter charting library
  • NousResearch/hermes  - Open-weights reasoning agent engine`,

    status: `[SYSTEM TELEMETRY]
  ✓ Core Repositories Sync  : Automated (GitHub Actions Workflow Active)
  ✓ Exit Node Connectivity  : Non-Sanctioned Safe Exit (138ms Latency)
  ✓ Antigravity 2.0 State   : Connected & Armed with Anti-Leak
  ✓ Upstream Contribution   : 6 Global Open-Source Repositories Monitored`,

    probe: `Executing pre-flight connectivity verification...
  [+] Handshake latency: 138ms
  [+] Protocol: HTTP/2 TLS 1.3
  [+] Geo-Location: Non-Sanctioned Safe Exit Node
  [✓] RESULT: Green Light. Session safe from 403 Forbidden drops.`,

    whoami: `Omid Zaferi (omid-io)
Software Architect & Full-Stack Systems Engineer.
Specialized in mobile-to-desktop low-latency tunneling, autonomous AI agents, and resilient backends.`
  };

  if (termInput && termScreen) {
    termInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const rawCmd = termInput.value.trim().toLowerCase();
        termInput.value = "";
        if (!rawCmd) return;

        if (rawCmd === "clear") {
          termScreen.innerHTML = "";
          return;
        }

        const entry = document.createElement("div");
        entry.className = "log-entry";
        entry.innerHTML = `<div><span class="log-prompt">omid@hub:~$</span> <span class="log-cmd">${rawCmd}</span></div>`;

        const output = document.createElement("div");
        output.className = "log-response";

        if (terminalCommands[rawCmd]) {
          output.textContent = terminalCommands[rawCmd];
        } else {
          output.textContent = `zsh: command not found: ${rawCmd}. Type "help" for a list of commands.`;
        }

        entry.appendChild(output);
        termScreen.appendChild(entry);
        termScreen.scrollTop = termScreen.scrollHeight;
      }
    });
  }

  // Footer Year
  const yearEl = document.getElementById("year-display");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
