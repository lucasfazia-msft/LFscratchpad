// Minimal renderer — no build step. Edit entries.js to publish.

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Very small markdown-lite: paragraphs (blank line), **bold**, *italic*, [text](url)
function renderBody(raw) {
  const paragraphs = raw.trim().split(/\n\s*\n/);
  return paragraphs
    .map((p) => {
      let html = escapeHtml(p.trim());
      html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
      html = html.replace(
        /\[(.+?)\]\((.+?)\)/g,
        '<a href="$2" target="_blank" rel="noopener">$1</a>'
      );
      html = html.replace(/\n/g, "<br>");
      return `<p>${html}</p>`;
    })
    .join("");
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function render() {
  const feed = document.getElementById("feed");
  const countEl = document.getElementById("entry-count");
  const entries = (window.ENTRIES || []).slice();

  if (entries.length === 0) {
    feed.innerHTML = `<p class="empty-state">nenhuma entrada ainda. adicione uma em entries.js.</p>`;
    countEl.textContent = "";
    return;
  }

  // chronological order determines the notebook index (oldest = 001)
  const chronological = [...entries].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const indexOf = new Map(chronological.map((e, i) => [e, i + 1]));

  const newestFirst = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const firstDate = formatDate(chronological[0].date);
  countEl.textContent = `${entries.length} ${
    entries.length === 1 ? "entrada" : "entradas"
  } desde ${firstDate}`;

  feed.innerHTML = newestFirst
    .map((entry) => {
      const num = String(indexOf.get(entry)).padStart(3, "0");
      const title = entry.title
        ? `<h2 class="entry-title">${escapeHtml(entry.title)}</h2>`
        : "";
      return `
        <article class="entry">
          <div class="entry-margin">
            <span class="entry-index">${num}</span>
            <span class="entry-date">${formatDate(entry.date)}</span>
          </div>
          <div class="entry-body">
            ${title}
            <div class="entry-text">${renderBody(entry.body)}</div>
          </div>
        </article>`;
    })
    .join("");
}

render();
