var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/.pnpm/@remix-run+dev@1.14.3_@remix-run+serve@1.14.3/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/.pnpm/@remix-run+dev@1.14.3_@remix-run+serve@1.14.3/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/.pnpm/@remix-run+dev@1.14.3_@remix-run+serve@1.14.3/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react5 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WEW26WBO.css";

// app/components/navbar.tsx
var import_outline = require("@heroicons/react/24/outline"), import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/components/avatar.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Avatar({ src, alt }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative h-10 w-10 overflow-hidden rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "img",
    {
      src,
      alt,
      className: "absolute inset-0 h-10 w-10 object-cover"
    },
    void 0,
    !1,
    {
      fileName: "app/components/avatar.tsx",
      lineNumber: 9,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/avatar.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/dropdown.tsx
var RadixDropdown = __toESM(require("@radix-ui/react-dropdown-menu")), import_react2 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Dropdown({ children }) {
  let [open, setOpen] = (0, import_react2.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RadixDropdown.Root, { open, onOpenChange: setOpen, children }, void 0, !1, {
    fileName: "app/components/dropdown.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var DropdownButton = (0, import_react2.forwardRef)(({ children, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RadixDropdown.Trigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "button",
  {
    ref,
    className: `inline-flex items-center justify-center outline-none data-[state=open]:opacity-60 ${className}`,
    ...props,
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/dropdown.tsx",
    lineNumber: 25,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/dropdown.tsx",
  lineNumber: 24,
  columnNumber: 5
}, this));
DropdownButton.displayName = "DropdownButton";
function DropdownMenu({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RadixDropdown.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    RadixDropdown.Content,
    {
      align: "end",
      sideOffset: 12,
      className: `z-10 flex w-[256px] flex-col gap-2.5 rounded-lg border border-gray-700 bg-gray-900 px-2 py-1.5 outline-none ${className}`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/dropdown.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/dropdown.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function DropdownMenuItem({
  children,
  onSelect
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    RadixDropdown.Item,
    {
      onSelect,
      className: "w-full rounded px-3 py-2 text-gray-400 outline-none hover:cursor-pointer hover:bg-white/5 hover:text-gray-100 focus:bg-white/5 focus:text-gray-100",
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/dropdown.tsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
}
function DropdownSeparator() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RadixDropdown.Separator, { className: "-my-1 h-[1px] w-full bg-gray-800" }, void 0, !1, {
    fileName: "app/components/dropdown.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;
Dropdown.Separator = DropdownSeparator;

// app/components/keyboard.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Keyboard({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 text-gray-400", children }, void 0, !1, {
    fileName: "app/components/keyboard.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/navbar.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Navbar() {
  let navigate = (0, import_react3.useNavigate)();
  return (0, import_react4.useEffect)(() => {
    let keyDown = (e) => {
      if (e.metaKey && e.key === "k")
        return navigate("/library");
      if (e.metaKey && e.key === "g")
        return navigate("/goals");
      if (e.metaKey && e.key === "o")
        return navigate("/preferences");
    };
    return document.addEventListener("keydown", keyDown), () => document.removeEventListener("keydown", keyDown);
  }, [navigate]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "borde-b mt-5 h-10 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-full max-w-5xl items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-xl font-semibold tracking-tight", children: "Shelf" }, void 0, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown.Button, { className: "rounded-full focus:ring focus:ring-orange-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Avatar,
        {
          src: "https://ltqrjjxsacmuogzvtlja.supabase.co/storage/v1/object/public/avatar/2/avatar.webp",
          alt: "Avatar"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navbar.tsx",
          lineNumber: 42,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown.MenuItem, { onSelect: () => navigate("/library"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_outline.BookOpenIcon, { className: "h-6 w-6" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 51,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "pl-3", children: "Library" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 52,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 55,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Keyboard, { children: "K" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown.MenuItem, { onSelect: () => navigate("/goals"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_outline.ArrowTrendingUpIcon, { className: "h-6 w-6" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "pl-3", children: "Goals" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 67,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Keyboard, { children: "G" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown.MenuItem, { onSelect: () => console.log("select 1"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_outline.CogIcon, { className: "h-6 w-6" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "pl-3", children: "Preferences" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Keyboard, { children: "O" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown.Separator, {}, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown.MenuItem, { onSelect: () => console.log("select 1"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_outline.ArrowLeftOnRectangleIcon, { className: "h-6 w-6" }, void 0, !1, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "pl-3", children: "Log out" }, void 0, !1, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 89,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "mx-auto max-w-5xl px-4 md:px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Navbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/library.tsx
var library_exports = {};
__export(library_exports, {
  default: () => LibraryPage
});
var import_react7 = require("@remix-run/react");

// app/components/library-nav-link.tsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function LibraryNavLink({
  href,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react6.NavLink,
    {
      to: href,
      end: !0,
      className: ({ isActive }) => `${isActive ? "border-b-gray-100" : "border-b-transparent text-gray-400"} -mb-[1px] block border-b border-r border-l border-transparent px-2 text-lg outline-none transition-colors hover:text-gray-100 focus-visible:border-r focus-visible:border-l focus-visible:border-r-gray-500 focus-visible:border-l-gray-500`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/library-nav-link.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}

// app/routes/library.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function LibraryPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-6 w-full md:mt-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex h-10 w-full gap-8 border-b border-b-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LibraryNavLink, { href: "/library", children: "Books" }, void 0, !1, {
        fileName: "app/routes/library.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LibraryNavLink, { href: "/library/reviews", children: "Reviews" }, void 0, !1, {
        fileName: "app/routes/library.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LibraryNavLink, { href: "/library/highlights", children: "Highlights" }, void 0, !1, {
        fileName: "app/routes/library.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/library.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
      fileName: "app/routes/library.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/library.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/library/highlights.tsx
var highlights_exports = {};
__export(highlights_exports, {
  default: () => HighlightsPage
});

// app/components/warning-banner.tsx
var import_outline2 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function WarningBanner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full rounded border border-yellow-700 bg-yellow-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-start py-2 px-3 text-yellow-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_outline2.ExclamationTriangleIcon, { className: "h-6 w-6" }, void 0, !1, {
      fileName: "app/components/warning-banner.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/warning-banner.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-2.5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "inline-block text-xl font-semibold", children: "This section is under construction" }, void 0, !1, {
        fileName: "app/components/warning-banner.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-2", children: "This feature will be available in the following major release. Stay tuned." }, void 0, !1, {
        fileName: "app/components/warning-banner.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/warning-banner.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/warning-banner.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/warning-banner.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/library/highlights.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function HighlightsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(WarningBanner, {}, void 0, !1, {
    fileName: "app/routes/library/highlights.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/library/highlights.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/library/reviews.tsx
var reviews_exports = {};
__export(reviews_exports, {
  default: () => ReviewsPage
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function ReviewsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(WarningBanner, {}, void 0, !1, {
    fileName: "app/routes/library/reviews.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/library/reviews.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/library/index.tsx
var library_exports2 = {};
__export(library_exports2, {
  action: () => action,
  default: () => LibraryIndexPage,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_react13 = require("react");

// app/components/library-view-bar.tsx
var import_outline3 = require("@heroicons/react/24/outline");

// app/components/book-form.tsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function BookForm() {
  let fetcher = (0, import_react8.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(fetcher.Form, { replace: !0, method: "post", className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { className: "text-gray-400", children: [
      "Author",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "input",
        {
          name: "author",
          required: !0,
          placeholder: "Stephen King",
          className: "mt-2 block"
        },
        void 0,
        !1,
        {
          fileName: "app/components/book-form.tsx",
          lineNumber: 10,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/book-form.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { className: "text-gray-400", children: [
      "Book",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "input",
        {
          name: "book",
          required: !0,
          placeholder: "The Shining",
          className: "mt-2 block"
        },
        void 0,
        !1,
        {
          fileName: "app/components/book-form.tsx",
          lineNumber: 19,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/book-form.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { className: "text-gray-400", children: [
      "Tag",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("select", { name: "tag", required: !0, className: "mt-2 block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "currentlyReading", children: "Currently reading" }, void 0, !1, {
          fileName: "app/components/book-form.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "wantToRead", children: "Want to read" }, void 0, !1, {
          fileName: "app/components/book-form.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "favorite", children: "Favorite" }, void 0, !1, {
          fileName: "app/components/book-form.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "finished", children: "Finished" }, void 0, !1, {
          fileName: "app/components/book-form.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/book-form.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/book-form.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { className: "mt-3 h-10 w-fit rounded bg-gray-100 px-3 text-gray-900", children: "Add new book" }, void 0, !1, {
      fileName: "app/components/book-form.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/book-form.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/button.tsx
var import_react9 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), button_default = (0, import_react9.forwardRef)(function({ leading, onClick, className, children, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "button",
    {
      ref,
      onClick,
      className: `inline-flex h-10 items-center rounded bg-gray-100 px-2 font-medium text-gray-900 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 ${className}`,
      ...props,
      children: [
        leading && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "mr-0.5", children: leading }, void 0, !1, {
          fileName: "app/components/button.tsx",
          lineNumber: 21,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children }, void 0, !1, {
          fileName: "app/components/button.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/button.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
});

// app/components/popover.tsx
var RadixPopover = __toESM(require("@radix-ui/react-popover")), import_react10 = require("react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Popover({ children }) {
  let [open, setOpen] = (0, import_react10.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(RadixPopover.Root, { open, onOpenChange: setOpen, children }, void 0, !1, {
    fileName: "app/components/popover.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function PopoverButton({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(RadixPopover.Trigger, { asChild: !0, className: "data-[state=open]:opacity-70", children }, void 0, !1, {
    fileName: "app/components/popover.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
PopoverButton.displayName = "PopoverButton";
function PopoverContent({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(RadixPopover.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    RadixPopover.Content,
    {
      side: "bottom",
      sideOffset: 12,
      align: "end",
      className: "rounded-lg border border-gray-700 bg-gray-900 py-7 px-8",
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/popover.tsx",
      lineNumber: 26,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/popover.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
Popover.Button = PopoverButton;
Popover.Content = PopoverContent;

// app/components/library-view-bar.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function LibraryViewBar({
  currentView,
  search,
  toggleListView,
  toggleTileView,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex h-10 items-center justify-between gap-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex h-full flex-1 gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "input",
        {
          placeholder: "Search...",
          value: search,
          onChange,
          className: "h-full w-full max-w-sm rounded border border-gray-700 bg-[#1C1C1C] px-2.5 outline-none placeholder:text-gray-400 focus:border-gray-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/library-view-bar.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center justify-center rounded border border-gray-700 p-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "button",
          {
            onClick: toggleTileView,
            className: `${currentView === "tile" ? "bg-white/5" : "opacity-40 hover:opacity-100"} inline-flex h-8 w-8 items-center justify-center rounded outline-none transition-opacity focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-gray-400`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_outline3.Squares2X2Icon, { className: "h-4 w-4" }, void 0, !1, {
              fileName: "app/components/library-view-bar.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/library-view-bar.tsx",
            lineNumber: 36,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "button",
          {
            onClick: toggleListView,
            className: `${currentView === "list" ? "bg-white/5" : "opacity-30 hover:opacity-100"} inline-flex h-8 w-8 items-center justify-center rounded outline-none transition-opacity focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-gray-400`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_outline3.ListBulletIcon, { className: "h-4 w-4" }, void 0, !1, {
              fileName: "app/components/library-view-bar.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/library-view-bar.tsx",
            lineNumber: 46,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/library-view-bar.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "hidden h-10 md:inline-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Popover, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Popover.Button, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(button_default, { leading: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_outline3.PlusIcon, { className: "h-5 w-5" }, void 0, !1, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 61,
        columnNumber: 30
      }, this), children: "Add new" }, void 0, !1, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Popover.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "mb-4 text-lg font-semibold", children: "New book" }, void 0, !1, {
          fileName: "app/components/library-view-bar.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(BookForm, {}, void 0, !1, {
          fileName: "app/components/library-view-bar.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/library-view-bar.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/library-view-bar.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/library-view-bar.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/list-view.tsx
var import_outline4 = require("@heroicons/react/24/outline");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), vocab = {
  finished: "Finished",
  currentlyReading: "Reading",
  wantToRead: "Want to read",
  favorite: "Favorite"
};
function ListView({ books }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("ul", { children: books.map((book, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    "li",
    {
      className: "border-b border-b-gray-700 py-5 last:border-none",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "pr-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "mb-2", children: book.book }, void 0, !1, {
            fileName: "app/components/list-view.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-gray-400", children: book.author }, void 0, !1, {
            fileName: "app/components/list-view.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/list-view.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex shrink-0 items-center justify-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "rounded-full bg-white/5 py-2.5 px-4", children: vocab[book.tag] }, void 0, !1, {
            fileName: "app/components/list-view.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Dropdown, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Dropdown.Button, { className: "rounded focus:ring-2 focus:ring-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_outline4.EllipsisVerticalIcon, { className: "h-6 w-6" }, void 0, !1, {
              fileName: "app/components/list-view.tsx",
              lineNumber: 42,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/list-view.tsx",
              lineNumber: 41,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Dropdown.Menu, { className: "!w-[200px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Dropdown.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_outline4.DocumentDuplicateIcon, { className: "h-5 w-5" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 48,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "pl-3", children: "Copy" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 49,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 47,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 52,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Keyboard, { children: "C" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 53,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 51,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 46,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 45,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Dropdown.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_outline4.PencilIcon, { className: "h-5 w-5" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 60,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "pl-3", children: "Rename" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 61,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 59,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 64,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Keyboard, { children: "E" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 65,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 63,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 58,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 57,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Dropdown.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_outline4.TagIcon, { className: "h-5 w-5" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 72,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "pl-3", children: "Add tag" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 73,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 71,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 76,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Keyboard, { children: "J" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 77,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 75,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 70,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 69,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Dropdown.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_outline4.TrashIcon, { className: "h-5 w-5" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 84,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "pl-3", children: "Delete" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 85,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 83,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 88,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Keyboard, { children: "\u232B" }, void 0, !1, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 89,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 87,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 82,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 81,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/list-view.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/list-view.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/list-view.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/list-view.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    },
    i,
    !1,
    {
      fileName: "app/components/list-view.tsx",
      lineNumber: 27,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/list-view.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/sidebar.tsx
var import_outline5 = require("@heroicons/react/24/outline"), import_react11 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Sidebar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "hidden min-w-[220px] md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "sticky inset-x-0 top-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col gap-2 font-medium", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline5.BookOpenIcon, { className: "h-6 w-6" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: "All books" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 17,
        columnNumber: 50
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarItem, { tag: "favorite", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline5.StarIcon, { className: "h-6 w-6" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: "Favorites" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 20,
        columnNumber: 46
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarItem, { tag: "currentlyReading", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline5.BookmarkIcon, { className: "h-6 w-6" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: "Currently reading" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 23,
        columnNumber: 50
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarItem, { tag: "wantToRead", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline5.InboxIcon, { className: "h-6 w-6" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: "Want to read" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 26,
        columnNumber: 47
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarItem, { tag: "finished", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline5.CheckIcon, { className: "h-6 w-6" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: "Finished" }, void 0, !1, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 29,
        columnNumber: 47
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/sidebar.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/sidebar.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/sidebar.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function SidebarItem({ tag, children }) {
  let href = tag ? `/library?tag=${tag}` : "/library", [params] = (0, import_react11.useSearchParams)(), isActive = tag === params.get("tag") || !tag && !params.get("tag");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_react11.Link,
    {
      to: href,
      replace: !0,
      className: `${isActive ? "bg-white/5" : "bg-transparent"} flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 outline-none transition-colors hover:bg-white/5 focus-visible:ring focus-visible:ring-gray-500`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}

// app/components/book.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Book({ author, book }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "aspect-[2/3]  rounded border border-gray-700 bg-gray-800 shadow-[inset_6px_-4px_12px_rgba(0,0,0,0.1)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex h-full justify-between px-2.5 font-medium", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "h-full w-[1px] bg-gray-700" }, void 0, !1, {
      fileName: "app/components/book.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex h-full flex-1 flex-col items-center px-2.5 pt-8 pb-4 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-lg md:text-base", children: book }, void 0, !1, {
        fileName: "app/components/book.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mt-auto text-base text-gray-400 md:text-sm", children: author }, void 0, !1, {
        fileName: "app/components/book.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/book.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/book.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/book.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/tile-view.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function TileView({ books }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-y-10 gap-x-4", children: books.map((book, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Book, { author: book.author, book: book.book }, i, !1, {
    fileName: "app/components/tile-view.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/tile-view.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/library/index.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), API = "https://api.jsonbin.io/v3/b/64201472ebd26539d09c8501", action = async ({ request }) => {
  let formData = await request.formData();
  return Object.fromEntries(formData);
}, loader = async ({ request }) => {
  let tag = new URL(request.url).searchParams.get("tag"), selecetedBooks = (await (await fetch(API)).json()).record;
  return tag && (selecetedBooks = selecetedBooks.filter((book) => book.tag === tag)), (0, import_node2.json)(selecetedBooks, {
    headers: {
      "cache-control": "max-age=3600"
    }
  });
};
function LibraryIndexPage() {
  let books = (0, import_react12.useLoaderData)(), [view, setView] = (0, import_react13.useState)("tile"), [search, setSearch] = (0, import_react13.useState)(""), filteredBooks = (0, import_react13.useMemo)(
    () => books.filter(
      (b) => b.author.toLowerCase().includes(search.toLowerCase()) || b.book.toLowerCase().includes(search.toLowerCase())
    ),
    [books, search]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Sidebar, {}, void 0, !1, {
      fileName: "app/routes/library/index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex-1 md:ml-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "sticky top-0 -mt-8 bg-gray-900 pt-8 pb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        LibraryViewBar,
        {
          currentView: view,
          search,
          toggleListView: () => setView("list"),
          toggleTileView: () => setView("tile"),
          onChange: (e) => setSearch(e.target.value)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/library/index.tsx",
          lineNumber: 56,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/library/index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      view === "tile" ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TileView, { books: filteredBooks }, void 0, !1, {
        fileName: "app/routes/library/index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ListView, { books: filteredBooks }, void 0, !1, {
        fileName: "app/routes/library/index.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/library/index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/library/index.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/goals.tsx
var goals_exports = {};
__export(goals_exports, {
  action: () => action2,
  default: () => GoalsPage
});
var import_outline7 = require("@heroicons/react/24/outline");

// app/components/circle-progress.tsx
var import_outline6 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), SIZE = 48, CENTER = SIZE / 2, STROKE_WIDTH = 3, RADIUS = CENTER - STROKE_WIDTH, ARC_LEN = 2 * Math.PI * RADIUS;
function CircleProgress({
  progress,
  currentCount
}) {
  let arcOffset = ARC_LEN * ((100 - progress) / 100);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "relative mr-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "svg",
      {
        width: SIZE,
        height: SIZE,
        className: "-rotate-90",
        fill: "none",
        strokeWidth: STROKE_WIDTH,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "circle",
            {
              cx: CENTER,
              cy: CENTER,
              r: RADIUS,
              stroke: "currentColor",
              className: "text-gray-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/circle-progress.tsx",
              lineNumber: 29,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "circle",
            {
              cx: CENTER,
              cy: CENTER,
              r: RADIUS,
              strokeDasharray: ARC_LEN,
              strokeDashoffset: arcOffset,
              strokeLinecap: "round",
              className: "text-green-500",
              stroke: "currentColor"
            },
            void 0,
            !1,
            {
              fileName: "app/components/circle-progress.tsx",
              lineNumber: 36,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/circle-progress.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "absolute inset-0 flex items-center justify-center", children: progress === 100 ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_outline6.CheckIcon, { className: "h-6 w-6 text-green-500" }, void 0, !1, {
      fileName: "app/components/circle-progress.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: [
      currentCount,
      " "
    ] }, void 0, !0, {
      fileName: "app/components/circle-progress.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/circle-progress.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/circle-progress.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/goal-form.tsx
var import_react14 = require("@remix-run/react");
var import_react15 = require("react");

// app/components/switch.tsx
var RadixSwitch = __toESM(require("@radix-ui/react-switch")), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Switch({
  checked,
  onCheck
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    RadixSwitch.Root,
    {
      checked,
      onCheckedChange: onCheck,
      className: "h-[25px] w-[42px] rounded-full border border-gray-700 outline-none focus-visible:ring focus-visible:ring-green-300 data-[state=checked]:bg-green-500",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(RadixSwitch.Thumb, { className: "block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-gray-100 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" }, void 0, !1, {
        fileName: "app/components/switch.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/switch.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/components/goal-form.tsx
var import_date_fns = require("date-fns"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function GoalForm() {
  let fetcher = (0, import_react14.useFetcher)(), [checked, setChecked] = (0, import_react15.useState)(!1), formRef = (0, import_react15.useRef)(null), inputRef = (0, import_react15.useRef)(null);
  return (0, import_react15.useEffect)(() => {
    var _a, _b;
    fetcher.state === "idle" && ((_a = formRef.current) == null || _a.reset(), (_b = inputRef.current) == null || _b.focus());
  }, [fetcher.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(fetcher.Form, { ref: formRef, method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "mb-6 text-lg font-semibold", children: "New reading goal" }, void 0, !1, {
      fileName: "app/components/goal-form.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "mb-1 block text-gray-400", children: "Books" }, void 0, !1, {
        fileName: "app/components/goal-form.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          ref: inputRef,
          name: "books",
          placeholder: "Number",
          autoComplete: "off",
          required: !0,
          pattern: "^[0-9]+$",
          title: "Number only"
        },
        void 0,
        !1,
        {
          fileName: "app/components/goal-form.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/goal-form.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex items-center justify-between pb-2 pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "text-gray-400", children: "Custom time period" }, void 0, !1, {
        fileName: "app/components/goal-form.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Switch, { checked, onCheck: () => setChecked(!checked) }, void 0, !1, {
        fileName: "app/components/goal-form.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/goal-form.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("fieldset", { disabled: !checked, className: "mb-4 disabled:opacity-40", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "mb-1 block text-gray-400", children: "Start date" }, void 0, !1, {
          fileName: "app/components/goal-form.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            type: "date",
            name: "startDate",
            required: checked,
            defaultValue: (0, import_date_fns.format)(new Date(), "yyyy-MM-dd"),
            className: "disabled:cursor-not-allowed"
          },
          void 0,
          !1,
          {
            fileName: "app/components/goal-form.tsx",
            lineNumber: 42,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/goal-form.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "mb-1 block text-gray-400", children: "End date" }, void 0, !1, {
          fileName: "app/components/goal-form.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            type: "date",
            name: "endDate",
            required: checked,
            defaultValue: (0, import_date_fns.format)(new Date(), "yyyy-MM-dd"),
            className: "disabled:cursor-not-allowed"
          },
          void 0,
          !1,
          {
            fileName: "app/components/goal-form.tsx",
            lineNumber: 52,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/goal-form.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/goal-form.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      button_default,
      {
        type: "submit",
        disabled: fetcher.state === "submitting",
        className: "disabled:opacity-70",
        children: fetcher.state === "submitting" ? "Adding..." : "Add new goal"
      },
      void 0,
      !1,
      {
        fileName: "app/components/goal-form.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/goal-form.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/goals.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let form = await request.formData(), data = Object.fromEntries(form);
  return console.log(data), await new Promise((resolve) => setTimeout(resolve, 2e3)), data;
};
function GoalsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mx-auto max-w-2xl py-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { className: "text-xl font-semibold", children: "Active goals" }, void 0, !1, {
        fileName: "app/routes/goals.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Popover, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Popover.Button, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(button_default, { leading: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_outline7.PlusIcon, { className: "h-5 w-5" }, void 0, !1, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 23,
          columnNumber: 30
        }, this), children: "Add new" }, void 0, !1, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Popover.Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(GoalForm, {}, void 0, !1, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/goals.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/goals.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "flex items-start rounded-md border border-gray-700 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(CircleProgress, { progress: 90, currentCount: 9 }, void 0, !1, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-gray-400", children: "Goal" }, void 0, !1, {
            fileName: "app/routes/goals.tsx",
            lineNumber: 34,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "mt-1", children: "2023 Reading goals" }, void 0, !1, {
            fileName: "app/routes/goals.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/goals.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "flex items-start rounded-md border border-gray-700 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(CircleProgress, { progress: 75, currentCount: 12 }, void 0, !1, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-gray-400", children: "Goal" }, void 0, !1, {
            fileName: "app/routes/goals.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "mt-1", children: "Programming" }, void 0, !1, {
            fileName: "app/routes/goals.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/goals.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/goals.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mb-6 flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { className: "text-xl font-semibold", children: "Past goals" }, void 0, !1, {
        fileName: "app/routes/goals.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/goals.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "flex items-start rounded-md border border-gray-700 p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(CircleProgress, { progress: 100, currentCount: 3 }, void 0, !1, {
            fileName: "app/routes/goals.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-gray-400", children: "Goal" }, void 0, !1, {
              fileName: "app/routes/goals.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "mt-1", children: "2022 reading goals" }, void 0, !1, {
              fileName: "app/routes/goals.tsx",
              lineNumber: 55,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/goals.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "flex items-start rounded-md border border-gray-700 p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(CircleProgress, { progress: 100, currentCount: 20 }, void 0, !1, {
            fileName: "app/routes/goals.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-gray-400", children: "Goal" }, void 0, !1, {
              fileName: "app/routes/goals.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "mt-1", children: "Ukrainian literature" }, void 0, !1, {
              fileName: "app/routes/goals.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/goals.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/goals.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/goals.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/goals.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/goals.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react16 = require("@remix-run/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "text-4xl", children: "Hello, Remix! \u{1F4BF}" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react16.Link, { to: "/library", className: "font-bold", children: "Library" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "5b8f48fc", entry: { module: "/build/entry.client-RU3MSCIZ.js", imports: ["/build/_shared/chunk-H4DDBPLF.js", "/build/_shared/chunk-RHVRC62O.js", "/build/_shared/chunk-AZD5HR3D.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UXKJCQQP.js", imports: ["/build/_shared/chunk-MRMAQGKP.js", "/build/_shared/chunk-YZ63PQDW.js", "/build/_shared/chunk-WYEDHXKS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/goals": { id: "routes/goals", parentId: "root", path: "goals", index: void 0, caseSensitive: void 0, module: "/build/routes/goals-5WW62YUL.js", imports: ["/build/_shared/chunk-AKLQ3LOS.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VQ4B4GKQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/library": { id: "routes/library", parentId: "root", path: "library", index: void 0, caseSensitive: void 0, module: "/build/routes/library-XPNHLD6D.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/library/highlights": { id: "routes/library/highlights", parentId: "routes/library", path: "highlights", index: void 0, caseSensitive: void 0, module: "/build/routes/library/highlights-W4QZOPVG.js", imports: ["/build/_shared/chunk-F2DQFZVP.js", "/build/_shared/chunk-WYEDHXKS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/library/index": { id: "routes/library/index", parentId: "routes/library", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/library/index-H62QYIXS.js", imports: ["/build/_shared/chunk-MRMAQGKP.js", "/build/_shared/chunk-AKLQ3LOS.js", "/build/_shared/chunk-YZ63PQDW.js", "/build/_shared/chunk-WYEDHXKS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/library/reviews": { id: "routes/library/reviews", parentId: "routes/library", path: "reviews", index: void 0, caseSensitive: void 0, module: "/build/routes/library/reviews-ZTCNVHVH.js", imports: ["/build/_shared/chunk-F2DQFZVP.js", "/build/_shared/chunk-WYEDHXKS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-5B8F48FC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/library": {
    id: "routes/library",
    parentId: "root",
    path: "library",
    index: void 0,
    caseSensitive: void 0,
    module: library_exports
  },
  "routes/library/highlights": {
    id: "routes/library/highlights",
    parentId: "routes/library",
    path: "highlights",
    index: void 0,
    caseSensitive: void 0,
    module: highlights_exports
  },
  "routes/library/reviews": {
    id: "routes/library/reviews",
    parentId: "routes/library",
    path: "reviews",
    index: void 0,
    caseSensitive: void 0,
    module: reviews_exports
  },
  "routes/library/index": {
    id: "routes/library/index",
    parentId: "routes/library",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: library_exports2
  },
  "routes/goals": {
    id: "routes/goals",
    parentId: "root",
    path: "goals",
    index: void 0,
    caseSensitive: void 0,
    module: goals_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
