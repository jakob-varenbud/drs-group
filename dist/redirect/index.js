"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/redirect/index.ts
  var lang = navigator.language;
  if (!$.cookie("language-de-redirect-cookie") && lang.indexOf("de") !== -1) {
    const date = /* @__PURE__ */ new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1e3);
    $.cookie("language-de-redirect-cookie", true, { expires: date });
    window.location.href = "https://drs-staging1.webflow.io/de";
  } else {
    if (!$.cookie("language-en-redirect-cookie")) {
      const date = /* @__PURE__ */ new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1e3);
      $.cookie("language-en-redirect-cookie", true, { expires: date });
    }
    window.location.href = "https://drs-staging1.webflow.io/en";
  }
})();
//# sourceMappingURL=index.js.map
