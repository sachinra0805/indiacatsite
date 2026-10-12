// IndiaCat — shared header/footer + interactions
(function () {
  var PAGES = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "Association" },
    { href: "learn.html", label: "Learn" },
    { href: "certification.html", label: "Certification" },
    { href: "community.html", label: "Community" },
    { href: "summit.html", label: "Summit" },
    { href: "careers.html", label: "Careers" },
  ];

  function currentPage() {
    var p = window.location.pathname.split("/").pop() || "index.html";
    return p;
  }

  function header() {
    var cur = currentPage();
    var links = PAGES.map(function (pg) {
      var cls = pg.href === cur ? ' class="active"' : "";
      return '<a href="' + pg.href + '"' + cls + ">" + pg.label + "</a>";
    }).join("");
    return (
      '<header class="site-header"><div class="container nav-inner">' +
      '<a class="brand" href="index.html"><span class="brand-mark">IC</span>' +
      '<span class="brand-name">India<span>Cat</span></span></a>' +
      '<button class="menu-toggle" aria-label="Menu" onclick="document.querySelector(\'.nav-links\').classList.toggle(\'open\')">☰</button>' +
      '<nav class="nav-links">' + links +
      '<a href="join.html" class="btn btn-amber nav-cta">Join the network</a></nav>' +
      "</div></header>"
    );
  }

  function footer() {
    return (
      '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
      '<div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark">IC</span>' +
      '<span class="brand-name">India<span>Cat</span></span></a>' +
      "<p>India's professional home for catastrophe modelers — learn the craft, grow the community, build the industry.</p></div>" +
      '<div><h4>Explore</h4><a href="about.html">The Association</a><a href="learn.html">Learning paths</a><a href="certification.html">Certification</a><a href="community.html">Community & events</a><a href="summit.html">India Cat Risk Summit</a><a href="careers.html">Careers</a></div>' +
      '<div><h4>Learn</h4><a href="learn.html#foundations">Cat modeling foundations</a><a href="learn.html#tools">Vendor platforms</a><a href="learn.html#code">Modeling with code</a><a href="learn.html#faq">FAQ</a></div>' +
      '<div><h4>Connect</h4><a href="join.html">Join the network</a><a href="community.html#events">Events</a><a href="mailto:hello@indiacat.org">hello@indiacat.org</a></div>' +
      "</div>" +
      '<div class="footer-bottom"><span>© 2026 IndiaCat · Catastrophe Modelers of India</span>' +
      "<span>Built for the community, by the community.</span></div>" +
      "</div></footer>"
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML("afterbegin", header());
    document.body.insertAdjacentHTML("beforeend", footer());
  });
})();
