document.addEventListener("DOMContentLoaded", function() {
  function t(t) {
    var e = document.querySelector(t);
    if (e && e.classList.contains("tabs__content-item")) {
      var a = document.querySelector(t).closest(".tabs")
        , o = "tabs__link-wrap--active"
        , r = "tabs__content-item--active";
      a.querySelectorAll("." + o).forEach(function(t) {
        t.classList.remove(o)
      }),
      (a.querySelector('[href="' + t + '"]') ? a.querySelector('[href="' + t + '"]') : a.querySelector('[data-target="' + t + '"]')).closest(".tabs__link-wrap").classList.add(o),
      a.querySelectorAll("." + r).forEach(function(t) {
        t.classList.remove(r)
      }),
      a.querySelector(t).classList.add(r)
    }
  }
  var e;
  location.hash && t(location.hash),
  document.addEventListener("click", function(e) {
    if ("tab" === e.target.dataset.toggle) {
      e.preventDefault();
      var a = void 0 === e.target.hash ? e.target.dataset.target : e.target.hash;
      if (void 0 !== a && (t(a),
      history && history.pushState && history.replaceState)) {
        var o = {
          url: a
        };
        window.location.hash && o.url !== window.location.hash ? window.history.pushState(o, document.title, window.location.pathname + a) : window.history.replaceState(o, document.title, window.location.pathname + a)
      }
    }
  })
});
