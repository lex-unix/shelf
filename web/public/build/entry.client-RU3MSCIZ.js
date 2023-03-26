import {
  require_react_dom
} from "/build/_shared/chunk-H4DDBPLF.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-RHVRC62O.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// node_modules/.pnpm/@remix-run+dev@1.14.3_@remix-run+serve@1.14.3/node_modules/@remix-run/dev/dist/config/defaults/entry.client.react.tsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function hydrate() {
  (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "node_modules/.pnpm/@remix-run+dev@1.14.3_@remix-run+serve@1.14.3/node_modules/@remix-run/dev/dist/config/defaults/entry.client.react.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "node_modules/.pnpm/@remix-run+dev@1.14.3_@remix-run+serve@1.14.3/node_modules/@remix-run/dev/dist/config/defaults/entry.client.react.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    );
  });
}
if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  setTimeout(hydrate, 1);
}
//# sourceMappingURL=/build/entry.client-RU3MSCIZ.js.map
