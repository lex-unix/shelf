import {
  Dropdown,
  Keyboard
} from "/build/_shared/chunk-MRMAQGKP.js";
import "/build/_shared/chunk-YZ63PQDW.js";
import "/build/_shared/chunk-H4DDBPLF.js";
import {
  require_outline
} from "/build/_shared/chunk-WYEDHXKS.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate
} from "/build/_shared/chunk-RHVRC62O.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WEW26WBO.css";

// app/components/navbar.tsx
var import_outline = __toESM(require_outline());
var import_react2 = __toESM(require_react());

// app/components/avatar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Avatar({ src, alt }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-10 w-10 overflow-hidden rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "img",
    {
      src,
      alt,
      className: "absolute inset-0 h-10 w-10 object-cover"
    },
    void 0,
    false,
    {
      fileName: "app/components/avatar.tsx",
      lineNumber: 9,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/avatar.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/navbar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Navbar() {
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    const keyDown = (e) => {
      if (e.metaKey && e.key === "k") {
        return navigate("/library");
      }
      if (e.metaKey && e.key === "g") {
        return navigate("/goals");
      }
      if (e.metaKey && e.key === "o") {
        return navigate("/preferences");
      }
    };
    document.addEventListener("keydown", keyDown);
    return () => document.removeEventListener("keydown", keyDown);
  }, [navigate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "borde-b mt-5 h-10 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-full max-w-5xl items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl font-semibold tracking-tight", children: "Shelf" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown.Button, { className: "rounded-full focus:ring focus:ring-orange-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Avatar,
        {
          src: "https://ltqrjjxsacmuogzvtlja.supabase.co/storage/v1/object/public/avatar/2/avatar.webp",
          alt: "Avatar"
        },
        void 0,
        false,
        {
          fileName: "app/components/navbar.tsx",
          lineNumber: 42,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown.MenuItem, { onSelect: () => navigate("/library"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.BookOpenIcon, { className: "h-6 w-6" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 51,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "pl-3", children: "Library" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 52,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 55,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Keyboard, { children: "K" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown.MenuItem, { onSelect: () => navigate("/goals"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ArrowTrendingUpIcon, { className: "h-6 w-6" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "pl-3", children: "Goals" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 67,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Keyboard, { children: "G" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown.MenuItem, { onSelect: () => console.log("select 1"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.CogIcon, { className: "h-6 w-6" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "pl-3", children: "Preferences" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Keyboard, { children: "O" }, void 0, false, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown.Separator, {}, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown.MenuItem, { onSelect: () => console.log("select 1"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ArrowLeftOnRectangleIcon, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "pl-3", children: "Log out" }, void 0, false, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 89,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "mx-auto max-w-5xl px-4 md:px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-UXKJCQQP.js.map
