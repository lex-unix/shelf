import {
  Dropdown,
  Keyboard
} from "/build/_shared/chunk-MRMAQGKP.js";
import {
  Popover,
  button_default
} from "/build/_shared/chunk-AKLQ3LOS.js";
import "/build/_shared/chunk-YZ63PQDW.js";
import "/build/_shared/chunk-H4DDBPLF.js";
import {
  require_outline
} from "/build/_shared/chunk-WYEDHXKS.js";
import {
  Link,
  useFetcher,
  useLoaderData,
  useSearchParams
} from "/build/_shared/chunk-RHVRC62O.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/library/index.tsx
var import_react4 = __toESM(require_react());

// app/components/library-view-bar.tsx
var import_outline = __toESM(require_outline());

// app/components/book-form.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BookForm() {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { replace: true, method: "post", className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-gray-400", children: [
      "Author",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          name: "author",
          required: true,
          placeholder: "Stephen King",
          className: "mt-2 block"
        },
        void 0,
        false,
        {
          fileName: "app/components/book-form.tsx",
          lineNumber: 10,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/book-form.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-gray-400", children: [
      "Book",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          name: "book",
          required: true,
          placeholder: "The Shining",
          className: "mt-2 block"
        },
        void 0,
        false,
        {
          fileName: "app/components/book-form.tsx",
          lineNumber: 19,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/book-form.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-gray-400", children: [
      "Tag",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "tag", required: true, className: "mt-2 block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "currentlyReading", children: "Currently reading" }, void 0, false, {
          fileName: "app/components/book-form.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "wantToRead", children: "Want to read" }, void 0, false, {
          fileName: "app/components/book-form.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "favorite", children: "Favorite" }, void 0, false, {
          fileName: "app/components/book-form.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "finished", children: "Finished" }, void 0, false, {
          fileName: "app/components/book-form.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/book-form.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/book-form.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "mt-3 h-10 w-fit rounded bg-gray-100 px-3 text-gray-900", children: "Add new book" }, void 0, false, {
      fileName: "app/components/book-form.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/book-form.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/library-view-bar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function LibraryViewBar({
  currentView,
  search,
  toggleListView,
  toggleTileView,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-10 items-center justify-between gap-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-full flex-1 gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "input",
        {
          placeholder: "Search...",
          value: search,
          onChange,
          className: "h-full w-full max-w-sm rounded border border-gray-700 bg-[#1C1C1C] px-2.5 outline-none placeholder:text-gray-400 focus:border-gray-500"
        },
        void 0,
        false,
        {
          fileName: "app/components/library-view-bar.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center rounded border border-gray-700 p-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            onClick: toggleTileView,
            className: `${currentView === "tile" ? "bg-white/5" : "opacity-40 hover:opacity-100"} inline-flex h-8 w-8 items-center justify-center rounded outline-none transition-opacity focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-gray-400`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.Squares2X2Icon, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/components/library-view-bar.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/library-view-bar.tsx",
            lineNumber: 36,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            onClick: toggleListView,
            className: `${currentView === "list" ? "bg-white/5" : "opacity-30 hover:opacity-100"} inline-flex h-8 w-8 items-center justify-center rounded outline-none transition-opacity focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-gray-400`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ListBulletIcon, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/components/library-view-bar.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/library-view-bar.tsx",
            lineNumber: 46,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/library-view-bar.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden h-10 md:inline-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Popover, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Popover.Button, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(button_default, { leading: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.PlusIcon, { className: "h-5 w-5" }, void 0, false, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 61,
        columnNumber: 30
      }, this), children: "Add new" }, void 0, false, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Popover.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "mb-4 text-lg font-semibold", children: "New book" }, void 0, false, {
          fileName: "app/components/library-view-bar.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BookForm, {}, void 0, false, {
          fileName: "app/components/library-view-bar.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/library-view-bar.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/library-view-bar.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/library-view-bar.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/library-view-bar.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/list-view.tsx
var import_outline2 = __toESM(require_outline());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var vocab = {
  finished: "Finished",
  currentlyReading: "Reading",
  wantToRead: "Want to read",
  favorite: "Favorite"
};
function ListView({ books }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: books.map((book, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "li",
    {
      className: "border-b border-b-gray-700 py-5 last:border-none",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pr-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mb-2", children: book.book }, void 0, false, {
            fileName: "app/components/list-view.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400", children: book.author }, void 0, false, {
            fileName: "app/components/list-view.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/list-view.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex shrink-0 items-center justify-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-full bg-white/5 py-2.5 px-4", children: vocab[book.tag] }, void 0, false, {
            fileName: "app/components/list-view.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown.Button, { className: "rounded focus:ring-2 focus:ring-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline2.EllipsisVerticalIcon, { className: "h-6 w-6" }, void 0, false, {
              fileName: "app/components/list-view.tsx",
              lineNumber: 42,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/list-view.tsx",
              lineNumber: 41,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown.Menu, { className: "!w-[200px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline2.DocumentDuplicateIcon, { className: "h-5 w-5" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 48,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "pl-3", children: "Copy" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 49,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 47,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 52,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Keyboard, { children: "C" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 53,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 51,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 46,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 45,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline2.PencilIcon, { className: "h-5 w-5" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 60,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "pl-3", children: "Rename" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 61,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 59,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 64,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Keyboard, { children: "E" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 65,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 63,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 58,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 57,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline2.TagIcon, { className: "h-5 w-5" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 72,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "pl-3", children: "Add tag" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 73,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 71,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 76,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Keyboard, { children: "J" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 77,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 75,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 70,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 69,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown.MenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 items-center justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline2.TrashIcon, { className: "h-5 w-5" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 84,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "pl-3", children: "Delete" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 85,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 83,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Keyboard, { children: "\u2318" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 88,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Keyboard, { children: "\u232B" }, void 0, false, {
                    fileName: "app/components/list-view.tsx",
                    lineNumber: 89,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/list-view.tsx",
                  lineNumber: 87,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 82,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/list-view.tsx",
                lineNumber: 81,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/list-view.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/list-view.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/list-view.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/list-view.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    },
    i,
    false,
    {
      fileName: "app/components/list-view.tsx",
      lineNumber: 27,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/list-view.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/sidebar.tsx
var import_outline3 = __toESM(require_outline());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Sidebar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden min-w-[220px] md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sticky inset-x-0 top-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-2 font-medium", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SidebarItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline3.BookOpenIcon, { className: "h-6 w-6" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "All books" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 17,
        columnNumber: 50
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SidebarItem, { tag: "favorite", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline3.StarIcon, { className: "h-6 w-6" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Favorites" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 20,
        columnNumber: 46
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SidebarItem, { tag: "currentlyReading", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline3.BookmarkIcon, { className: "h-6 w-6" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Currently reading" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 23,
        columnNumber: 50
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SidebarItem, { tag: "wantToRead", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline3.InboxIcon, { className: "h-6 w-6" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Want to read" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 26,
        columnNumber: 47
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SidebarItem, { tag: "finished", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline3.CheckIcon, { className: "h-6 w-6" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Finished" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 29,
        columnNumber: 47
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/sidebar.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/sidebar.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/sidebar.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function SidebarItem({ tag, children }) {
  const href = tag ? `/library?tag=${tag}` : "/library";
  const [params] = useSearchParams();
  const isActive = tag === params.get("tag") || !tag && !params.get("tag");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Link,
    {
      to: href,
      replace: true,
      className: `${isActive ? "bg-white/5" : "bg-transparent"} flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 outline-none transition-colors hover:bg-white/5 focus-visible:ring focus-visible:ring-gray-500`,
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}

// app/components/book.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Book({ author, book }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "aspect-[2/3]  rounded border border-gray-700 bg-gray-800 shadow-[inset_6px_-4px_12px_rgba(0,0,0,0.1)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-full justify-between px-2.5 font-medium", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full w-[1px] bg-gray-700" }, void 0, false, {
      fileName: "app/components/book.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-full flex-1 flex-col items-center px-2.5 pt-8 pb-4 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-lg md:text-base", children: book }, void 0, false, {
        fileName: "app/components/book.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-auto text-base text-gray-400 md:text-sm", children: author }, void 0, false, {
        fileName: "app/components/book.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/book.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/book.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/book.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/tile-view.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function TileView({ books }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-y-10 gap-x-4", children: books.map((book, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Book, { author: book.author, book: book.book }, i, false, {
    fileName: "app/components/tile-view.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/tile-view.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/library/index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function LibraryIndexPage() {
  const books = useLoaderData();
  const [view, setView] = (0, import_react4.useState)("tile");
  const [search, setSearch] = (0, import_react4.useState)("");
  const filteredBooks = (0, import_react4.useMemo)(
    () => books.filter(
      (b) => b.author.toLowerCase().includes(search.toLowerCase()) || b.book.toLowerCase().includes(search.toLowerCase())
    ),
    [books, search]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/library/index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-1 md:ml-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sticky top-0 -mt-8 bg-gray-900 pt-8 pb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        LibraryViewBar,
        {
          currentView: view,
          search,
          toggleListView: () => setView("list"),
          toggleTileView: () => setView("tile"),
          onChange: (e) => setSearch(e.target.value)
        },
        void 0,
        false,
        {
          fileName: "app/routes/library/index.tsx",
          lineNumber: 56,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/library/index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      view === "tile" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TileView, { books: filteredBooks }, void 0, false, {
        fileName: "app/routes/library/index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ListView, { books: filteredBooks }, void 0, false, {
        fileName: "app/routes/library/index.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/library/index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/library/index.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
export {
  LibraryIndexPage as default
};
//# sourceMappingURL=/build/routes/library/index-H62QYIXS.js.map
