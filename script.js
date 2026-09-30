(function () {
  "use strict";

  var yearNode = document.getElementById("current-year");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  var revealEls = document.querySelectorAll(".reveal");
  var navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  var sections = Array.prototype.map.call(navLinks, function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  function showAllReveals() {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    showAllReveals();
  }

  if ("IntersectionObserver" in window && navLinks.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px" });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }
})();


