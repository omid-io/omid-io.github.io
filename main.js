document.addEventListener("DOMContentLoaded", () => {
  // Setup Quick Clone Copy
  document.querySelectorAll(".clone-cmd").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy");
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span style="color: var(--accent-emerald);">Copied!</span>`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 1800);
      } catch (err) {
        console.error("Clipboard copy failed:", err);
      }
    });
  });

  // Dynamic Year in Footer
  const yearElem = document.getElementById("current-year");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});
