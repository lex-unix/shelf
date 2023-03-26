import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-RHVRC62O.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/components/library-nav-link.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LibraryNavLink({
  href,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    NavLink,
    {
      to: href,
      end: true,
      className: ({ isActive }) => `${isActive ? "border-b-gray-100" : "border-b-transparent text-gray-400"} -mb-[1px] block border-b border-r border-l border-transparent px-2 text-lg outline-none transition-colors hover:text-gray-100 focus-visible:border-r focus-visible:border-l focus-visible:border-r-gray-500 focus-visible:border-l-gray-500`,
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/library-nav-link.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}

// app/routes/library.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function LibraryPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 w-full md:mt-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-10 w-full gap-8 border-b border-b-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LibraryNavLink, { href: "/library", children: "Books" }, void 0, false, {
        fileName: "app/routes/library.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LibraryNavLink, { href: "/library/reviews", children: "Reviews" }, void 0, false, {
        fileName: "app/routes/library.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LibraryNavLink, { href: "/library/highlights", children: "Highlights" }, void 0, false, {
        fileName: "app/routes/library.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/library.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/library.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/library.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
export {
  LibraryPage as default
};
//# sourceMappingURL=/build/routes/library-XPNHLD6D.js.map
