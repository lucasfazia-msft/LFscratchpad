// scratchpad — renderizador. Sem build, sem dependências.
// Você só edita entries.js.

(function () {
  "use strict";

  var SITE = window.SITE || {};
  var ENTRIES = window.ENTRIES || [];

  // ---------- utilidades ----------

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function slugify(s) {
    return String(s)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function inline(text) {
    var h = escapeHtml(text);
    h = h.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    h = h.replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>");
    h = h.replace(
      /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>'
    );
    return h.replace(/\n/g, "<br>");
  }

  function paragraphs(body) {
    return String(body).trim().split(/\n\s*\n/).filter(Boolean);
  }

  function renderProse(body) {
    return paragraphs(body).map(function (p) {
      return "<p>" + inline(p.trim()) + "</p>";
    }).join("");
  }

  function formatDate(iso) {
    var d = new Date(iso + "T12:00:00");
    if (isNaN(d)) return iso;
    var months = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
  }

  // ---------- índice ----------

  var byOldest = ENTRIES.slice().sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  var byNewest = byOldest.slice().reverse();

  byOldest.forEach(function (e, i) {
    e._n = String(i + 1).padStart(3, "0");
    e._slug = e.slug || slugify(e.title || e.date);
  });

  function findBySlug(slug) {
    for (var i = 0; i < byNewest.length; i++) {
      if (byNewest[i]._slug === slug) return byNewest[i];
    }
    return null;
  }

  // ---------- blocos ----------

  function marginalia(entry) {
    return (
      '<div class="marginalia">' +
        '<span class="numeral">' + entry._n + "</span>" +
        '<span class="stamp">' + formatDate(entry.date) + "</span>" +
      "</div>"
    );
  }

  function feedItem(entry) {
    var deck = entry.deck
      ? '<p class="deck">' + inline(entry.deck) + "</p>"
      : "";
    var first = paragraphs(entry.body)[0] || "";
    var href = "#/" + entry._slug;
    return (
      '<article class="row">' +
        marginalia(entry) +
        '<div class="entry-body">' +
          '<h2 class="entry-title"><a href="' + href + '">' +
            escapeHtml(entry.title || "Sem título") +
          "</a></h2>" +
          deck +
          '<div class="excerpt"><p>' + inline(first.trim()) + "</p></div>" +
          '<a class="more" href="' + href + '">Ler <span class="arrow">&rarr;</span></a>' +
        "</div>" +
      "</article>"
    );
  }

  function renderFeed() {
    if (!ENTRIES.length) {
      return '<div class="sheet"><p class="empty">nenhuma entrada ainda. adicione uma em entries.js.</p></div>';
    }
    return (
      '<div class="sheet feed">' +
        byNewest.map(feedItem).join("") +
      "</div>"
    );
  }

  function renderPost(entry) {
    var deck = entry.deck
      ? '<p class="deck">' + inline(entry.deck) + "</p>"
      : "";
    return (
      '<div class="sheet post">' +
        '<p class="crumb"><a class="back" href="#/"><span class="arrow">&larr;</span> todas as notas</a></p>' +
        '<article class="row">' +
          marginalia(entry) +
          "<div>" +
            '<h1 class="post-title">' + escapeHtml(entry.title || "") + "</h1>" +
            deck +
            '<div class="prose">' + renderProse(entry.body) + "</div>" +
            '<nav class="post-nav"><a class="back" href="#/"><span class="arrow">&larr;</span> todas as notas</a></nav>' +
          "</div>" +
        "</article>" +
      "</div>"
    );
  }

  function renderNotFound() {
    return (
      '<div class="sheet post">' +
        '<p class="empty">nota não encontrada.</p>' +
        '<p><a class="back" href="#/"><span class="arrow">&larr;</span> todas as notas</a></p>' +
      "</div>"
    );
  }

  // ---------- moldura ----------

  function paintChrome() {
    var t = SITE.title || "scratchpad";
    setText("site-author", SITE.author || "");
    setText("site-title", t);
    setText("site-tagline", SITE.tagline || "");
    setText("foot-title", t);

    var links = SITE.links || [];
    var nav = document.getElementById("foot-links");
    if (nav) {
      nav.innerHTML = links
        .filter(function (l) { return l && l.url; })
        .map(function (l) {
          return '<a href="' + escapeHtml(l.url) + '" target="_blank" rel="noopener">' +
                 escapeHtml(l.label) + "</a>";
        })
        .join("");
    }
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  // ---------- roteador ----------

  function route() {
    var main = document.getElementById("main");
    var hash = (location.hash || "").replace(/^#\/?/, "");
    var siteTitle = SITE.title || "scratchpad";

    if (!hash) {
      main.innerHTML = renderFeed();
      document.title = siteTitle;
    } else {
      var entry = findBySlug(hash);
      if (entry) {
        main.innerHTML = renderPost(entry);
        document.title = entry.title + " — " + siteTitle;
      } else {
        main.innerHTML = renderNotFound();
        document.title = siteTitle;
      }
    }
    window.scrollTo(0, 0);
  }

  paintChrome();
  route();
  window.addEventListener("hashchange", route);
})();
