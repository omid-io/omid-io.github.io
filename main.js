document.addEventListener("DOMContentLoaded", () => {
  // 1. Project Card Tab Switching
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

  // 2. 1-Click Clone Command Copy
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

  // 3. Interactive Terminal Playground
  const termScreen = document.getElementById("terminal-screen");
  const termInput = document.getElementById("terminal-input");

  const terminalCommands = {
    help: `Available commands:
  • projects   - List featured open-source repositories
  • status     - Real-time agent cluster & probe status
  • probe      - Execute sub-200ms anti-leak network probe
  • stack      - View core software architecture stack
  • whoami     - Display developer identity and profile
  • clear      - Clear terminal screen buffer`,

    projects: `[1] antigravity-pause (v0.1.0-stable)
    Graceful Pause, Deep Hibernation & Pre-Flight Leak Protection for Google Antigravity.
    Repo: https://github.com/omid-io/antigravity-pause

[2] telegram-mcp (v1.0.0)
    High-throughput Telegram Model Context Protocol (MCP) server powered by Telethon.
    Repo: https://github.com/omid-io/telegram-mcp

[3] omid-core (Active)
    Personal Distributed Automation & Multi-Agent Intelligence Engine.
    Repo: https://github.com/omid-io/omid-core`,

    status: `[CLUSTER HEALTH CHECK]
  ✓ Antigravity 2.0 Integration : Connected
  ✓ Active Subagent Isolation   : 100% Zero-Orphan
  ✓ MCP Tool Context Protocols  : telegram-mcp (active), browser-suite (ready)
  ✓ Network Guard State         : Armed (Anti-Leak Pre-Flight Active)`,

    probe: `Executing pre-flight connectivity verification...
  [+] Handshake latency: 138ms
  [+] Protocol: HTTP/2 TLS 1.3
  [+] Geo-Location: Non-Sanctioned Safe Exit Node
  [✓] RESULT: Green Light. Session safe from 403 Forbidden drops.`,

    stack: `ARCHITECTURAL FOCUS:
  • AI & Agents  : Google Antigravity 2.0, Claude Code, Autonomous Subagents
  • Protocols    : Model Context Protocol (MCP), FastMCP, REST, SSE, WebSockets
  • Runtimes     : Python 3.12 (AsyncIO), .NET 8/9 C#, Node.js
  • Systems      : Distributed Sockets, Fault-Tolerant Checkpointing, Git Locks`,

    whoami: `Omid Zaferi (omid-io)
Software Architect & Full-Stack Systems Engineer.
Obsessed with resilient autonomous AI agents, MCP ecosystems, and zero-downtime engineering.`
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

        // Print Input Command
        const entry = document.createElement("div");
        entry.className = "log-entry";
        entry.innerHTML = `<div><span class="log-prompt">omid@hub:~$</span> <span class="log-cmd">${rawCmd}</span></div>`;

        // Handle Command Output
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

  // 4. Update Footer Year
  const yearEl = document.getElementById("year-display");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
