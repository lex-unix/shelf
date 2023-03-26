import {
  require_react_dom
} from "/build/_shared/chunk-H4DDBPLF.js";
import {
  __toESM,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/.pnpm/@radix-ui+primitive@1.0.0/node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.0_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.module.js
var import_react = __toESM(require_react());
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/.pnpm/@radix-ui+react-context@1.0.0_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.module.js
var import_react2 = __toESM(require_react());
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = (0, import_react2.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react2.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = (0, import_react2.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react2.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react2.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
var import_react4 = __toESM(require_react());

// node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
var import_react3 = __toESM(require_react());
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react3.useRef)(callback);
  (0, import_react3.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react3.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react4.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react4.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react4.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react4.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/.pnpm/@radix-ui+react-slot@1.0.1_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.module.js
var import_react5 = __toESM(require_react());
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react5.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react5.Children.count(newElement) > 1)
          return import_react5.Children.only(null);
        return /* @__PURE__ */ (0, import_react5.isValidElement)(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ (0, import_react5.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ (0, import_react5.isValidElement)(newElement) ? /* @__PURE__ */ (0, import_react5.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ (0, import_react5.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ (0, import_react5.isValidElement)(children))
    return /* @__PURE__ */ (0, import_react5.cloneElement)(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    });
  return import_react5.Children.count(children) > 1 ? import_react5.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ (0, import_react5.createElement)(import_react5.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ (0, import_react5.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/.pnpm/@radix-ui+react-primitive@1.0.2_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-primitive/dist/index.module.js
var import_react6 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react6.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ (0, import_react6.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.3_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var import_react8 = __toESM(require_react());

// node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.0.2_react@18.2.0/node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
var import_react7 = __toESM(require_react());
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react7.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.3_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ (0, import_react8.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ (0, import_react8.forwardRef)((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react8.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react8.useState)(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = (0, import_react8.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  (0, import_react8.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react8.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react8.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ (0, import_react8.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react8.useRef)(false);
  const handleClickRef = (0, import_react8.useRef)(() => {
  });
  (0, import_react8.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react8.useRef)(false);
  (0, import_react8.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/.pnpm/@radix-ui+react-focus-guards@1.0.0_react@18.2.0/node_modules/@radix-ui/react-focus-guards/dist/index.module.js
var import_react9 = __toESM(require_react());
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  (0, import_react9.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/.pnpm/@radix-ui+react-focus-scope@1.0.2_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-focus-scope/dist/index.module.js
var import_react10 = __toESM(require_react());
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ (0, import_react10.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react10.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react10.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react10.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react10.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        if (!container1.contains(event.relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react10.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react10.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ (0, import_react10.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1)
    updatedArray.splice(index2, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/.pnpm/@radix-ui+react-id@1.0.0_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.module.js
var $2AODx$react = __toESM(require_react());

// node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
var import_react11 = __toESM(require_react());
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react11.useLayoutEffect : () => {
};

// node_modules/.pnpm/@radix-ui+react-id@1.0.0_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.module.js
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/.pnpm/@radix-ui+react-popper@1.1.1_zula6vjvt3wdocc4mwcxqa6nzi/node_modules/@radix-ui/react-popper/dist/index.module.js
var import_react14 = __toESM(require_react());

// node_modules/.pnpm/@floating-ui+core@0.7.3/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t2) {
  return t2.split("-")[0];
}
function e(t2) {
  return t2.split("-")[1];
}
function n(e2) {
  return ["top", "bottom"].includes(t(e2)) ? "x" : "y";
}
function r(t2) {
  return "y" === t2 ? "height" : "width";
}
function i(i3, o3, a3) {
  let { reference: l3, floating: s3 } = i3;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, u3 = n(o3), m3 = r(u3), g3 = l3[m3] / 2 - s3[m3] / 2, d3 = "x" === u3;
  let p3;
  switch (t(o3)) {
    case "top":
      p3 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p3 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p3 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p3 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p3 = { x: l3.x, y: l3.y };
  }
  switch (e(o3)) {
    case "start":
      p3[u3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p3[u3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p3;
}
var o = async (t2, e2, n3) => {
  const { placement: r3 = "bottom", strategy: o3 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e2));
  let c3 = await l3.getElementRects({ reference: t2, floating: e2, strategy: o3 }), { x: f3, y: u3 } = i(c3, r3, s3), m3 = r3, g3 = {}, d3 = 0;
  for (let n4 = 0; n4 < a3.length; n4++) {
    const { name: p3, fn: h3 } = a3[n4], { x: y3, y: x3, data: w3, reset: v3 } = await h3({ x: f3, y: u3, initialPlacement: r3, placement: m3, strategy: o3, middlewareData: g3, rects: c3, platform: l3, elements: { reference: t2, floating: e2 } });
    f3 = null != y3 ? y3 : f3, u3 = null != x3 ? x3 : u3, g3 = { ...g3, [p3]: { ...g3[p3], ...w3 } }, v3 && d3 <= 50 && (d3++, "object" == typeof v3 && (v3.placement && (m3 = v3.placement), v3.rects && (c3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e2, strategy: o3 }) : v3.rects), { x: f3, y: u3 } = i(c3, m3, s3)), n4 = -1);
  }
  return { x: f3, y: u3, placement: m3, strategy: o3, middlewareData: g3 };
};
function a(t2) {
  return "number" != typeof t2 ? function(t3) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
  }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function l(t2) {
  return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
}
async function s(t2, e2) {
  var n3;
  void 0 === e2 && (e2 = {});
  const { x: r3, y: i3, platform: o3, rects: s3, elements: c3, strategy: f3 } = t2, { boundary: u3 = "clippingAncestors", rootBoundary: m3 = "viewport", elementContext: g3 = "floating", altBoundary: d3 = false, padding: p3 = 0 } = e2, h3 = a(p3), y3 = c3[d3 ? "floating" === g3 ? "reference" : "floating" : g3], x3 = l(await o3.getClippingRect({ element: null == (n3 = await (null == o3.isElement ? void 0 : o3.isElement(y3))) || n3 ? y3 : y3.contextElement || await (null == o3.getDocumentElement ? void 0 : o3.getDocumentElement(c3.floating)), boundary: u3, rootBoundary: m3, strategy: f3 })), w3 = l(o3.convertOffsetParentRelativeRectToViewportRelativeRect ? await o3.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: "floating" === g3 ? { ...s3.floating, x: r3, y: i3 } : s3.reference, offsetParent: await (null == o3.getOffsetParent ? void 0 : o3.getOffsetParent(c3.floating)), strategy: f3 }) : s3[g3]);
  return { top: x3.top - w3.top + h3.top, bottom: w3.bottom - x3.bottom + h3.bottom, left: x3.left - w3.left + h3.left, right: w3.right - x3.right + h3.right };
}
var c = Math.min;
var f = Math.max;
function u(t2, e2, n3) {
  return f(t2, c(e2, n3));
}
var m = (t2) => ({ name: "arrow", options: t2, async fn(i3) {
  const { element: o3, padding: l3 = 0 } = null != t2 ? t2 : {}, { x: s3, y: c3, placement: f3, rects: m3, platform: g3 } = i3;
  if (null == o3)
    return {};
  const d3 = a(l3), p3 = { x: s3, y: c3 }, h3 = n(f3), y3 = e(f3), x3 = r(h3), w3 = await g3.getDimensions(o3), v3 = "y" === h3 ? "top" : "left", b3 = "y" === h3 ? "bottom" : "right", R3 = m3.reference[x3] + m3.reference[h3] - p3[h3] - m3.floating[x3], A2 = p3[h3] - m3.reference[h3], P2 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(o3));
  let T3 = P2 ? "y" === h3 ? P2.clientHeight || 0 : P2.clientWidth || 0 : 0;
  0 === T3 && (T3 = m3.floating[x3]);
  const O2 = R3 / 2 - A2 / 2, D3 = d3[v3], L3 = T3 - w3[x3] - d3[b3], k2 = T3 / 2 - w3[x3] / 2 + O2, E3 = u(D3, k2, L3), C2 = ("start" === y3 ? d3[v3] : d3[b3]) > 0 && k2 !== E3 && m3.reference[x3] <= m3.floating[x3];
  return { [h3]: p3[h3] - (C2 ? k2 < D3 ? D3 - k2 : L3 - k2 : 0), data: { [h3]: E3, centerOffset: k2 - E3 } };
} });
var g = { left: "right", right: "left", bottom: "top", top: "bottom" };
function d(t2) {
  return t2.replace(/left|right|bottom|top/g, (t3) => g[t3]);
}
function p(t2, i3, o3) {
  void 0 === o3 && (o3 = false);
  const a3 = e(t2), l3 = n(t2), s3 = r(l3);
  let c3 = "x" === l3 ? a3 === (o3 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
  return i3.reference[s3] > i3.floating[s3] && (c3 = d(c3)), { main: c3, cross: d(c3) };
}
var h = { start: "end", end: "start" };
function y(t2) {
  return t2.replace(/start|end/g, (t3) => h[t3]);
}
var x = ["top", "right", "bottom", "left"];
var w = x.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []);
var b = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "flip", options: e2, async fn(n3) {
    var r3;
    const { placement: i3, middlewareData: o3, rects: a3, initialPlacement: l3, platform: c3, elements: f3 } = n3, { mainAxis: u3 = true, crossAxis: m3 = true, fallbackPlacements: g3, fallbackStrategy: h3 = "bestFit", flipAlignment: x3 = true, ...w3 } = e2, v3 = t(i3), b3 = g3 || (v3 === l3 || !x3 ? [d(l3)] : function(t2) {
      const e3 = d(t2);
      return [y(t2), e3, y(e3)];
    }(l3)), R3 = [l3, ...b3], A2 = await s(n3, w3), P2 = [];
    let T3 = (null == (r3 = o3.flip) ? void 0 : r3.overflows) || [];
    if (u3 && P2.push(A2[v3]), m3) {
      const { main: t2, cross: e3 } = p(i3, a3, await (null == c3.isRTL ? void 0 : c3.isRTL(f3.floating)));
      P2.push(A2[t2], A2[e3]);
    }
    if (T3 = [...T3, { placement: i3, overflows: P2 }], !P2.every((t2) => t2 <= 0)) {
      var O2, D3;
      const t2 = (null != (O2 = null == (D3 = o3.flip) ? void 0 : D3.index) ? O2 : 0) + 1, e3 = R3[t2];
      if (e3)
        return { data: { index: t2, overflows: T3 }, reset: { placement: e3 } };
      let n4 = "bottom";
      switch (h3) {
        case "bestFit": {
          var L3;
          const t3 = null == (L3 = T3.map((t4) => [t4, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e4) => t5 + e4, 0)]).sort((t4, e4) => t4[1] - e4[1])[0]) ? void 0 : L3[0].placement;
          t3 && (n4 = t3);
          break;
        }
        case "initialPlacement":
          n4 = l3;
      }
      if (i3 !== n4)
        return { reset: { placement: n4 } };
    }
    return {};
  } };
};
function R(t2, e2) {
  return { top: t2.top - e2.height, right: t2.right - e2.width, bottom: t2.bottom - e2.height, left: t2.left - e2.width };
}
function A(t2) {
  return x.some((e2) => t2[e2] >= 0);
}
var P = function(t2) {
  let { strategy: e2 = "referenceHidden", ...n3 } = void 0 === t2 ? {} : t2;
  return { name: "hide", async fn(t3) {
    const { rects: r3 } = t3;
    switch (e2) {
      case "referenceHidden": {
        const e3 = R(await s(t3, { ...n3, elementContext: "reference" }), r3.reference);
        return { data: { referenceHiddenOffsets: e3, referenceHidden: A(e3) } };
      }
      case "escaped": {
        const e3 = R(await s(t3, { ...n3, altBoundary: true }), r3.floating);
        return { data: { escapedOffsets: e3, escaped: A(e3) } };
      }
      default:
        return {};
    }
  } };
};
var T = function(r3) {
  return void 0 === r3 && (r3 = 0), { name: "offset", options: r3, async fn(i3) {
    const { x: o3, y: a3 } = i3, l3 = await async function(r4, i4) {
      const { placement: o4, platform: a4, elements: l4 } = r4, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = t(o4), f3 = e(o4), u3 = "x" === n(o4), m3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && u3 ? -1 : 1, d3 = "function" == typeof i4 ? i4(r4) : i4;
      let { mainAxis: p3, crossAxis: h3, alignmentAxis: y3 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d3 };
      return f3 && "number" == typeof y3 && (h3 = "end" === f3 ? -1 * y3 : y3), u3 ? { x: h3 * g3, y: p3 * m3 } : { x: p3 * m3, y: h3 * g3 };
    }(i3, r3);
    return { x: o3 + l3.x, y: a3 + l3.y, data: l3 };
  } };
};
function O(t2) {
  return "x" === t2 ? "y" : "x";
}
var D = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "shift", options: e2, async fn(r3) {
    const { x: i3, y: o3, placement: a3 } = r3, { mainAxis: l3 = true, crossAxis: c3 = false, limiter: f3 = { fn: (t2) => {
      let { x: e3, y: n3 } = t2;
      return { x: e3, y: n3 };
    } }, ...m3 } = e2, g3 = { x: i3, y: o3 }, d3 = await s(r3, m3), p3 = n(t(a3)), h3 = O(p3);
    let y3 = g3[p3], x3 = g3[h3];
    if (l3) {
      const t2 = "y" === p3 ? "bottom" : "right";
      y3 = u(y3 + d3["y" === p3 ? "top" : "left"], y3, y3 - d3[t2]);
    }
    if (c3) {
      const t2 = "y" === h3 ? "bottom" : "right";
      x3 = u(x3 + d3["y" === h3 ? "top" : "left"], x3, x3 - d3[t2]);
    }
    const w3 = f3.fn({ ...r3, [p3]: y3, [h3]: x3 });
    return { ...w3, data: { x: w3.x - i3, y: w3.y - o3 } };
  } };
};
var L = function(e2) {
  return void 0 === e2 && (e2 = {}), { options: e2, fn(r3) {
    const { x: i3, y: o3, placement: a3, rects: l3, middlewareData: s3 } = r3, { offset: c3 = 0, mainAxis: f3 = true, crossAxis: u3 = true } = e2, m3 = { x: i3, y: o3 }, g3 = n(a3), d3 = O(g3);
    let p3 = m3[g3], h3 = m3[d3];
    const y3 = "function" == typeof c3 ? c3({ ...l3, placement: a3 }) : c3, x3 = "number" == typeof y3 ? { mainAxis: y3, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...y3 };
    if (f3) {
      const t2 = "y" === g3 ? "height" : "width", e3 = l3.reference[g3] - l3.floating[t2] + x3.mainAxis, n3 = l3.reference[g3] + l3.reference[t2] - x3.mainAxis;
      p3 < e3 ? p3 = e3 : p3 > n3 && (p3 = n3);
    }
    if (u3) {
      var w3, v3, b3, R3;
      const e3 = "y" === g3 ? "width" : "height", n3 = ["top", "left"].includes(t(a3)), r4 = l3.reference[d3] - l3.floating[e3] + (n3 && null != (w3 = null == (v3 = s3.offset) ? void 0 : v3[d3]) ? w3 : 0) + (n3 ? 0 : x3.crossAxis), i4 = l3.reference[d3] + l3.reference[e3] + (n3 ? 0 : null != (b3 = null == (R3 = s3.offset) ? void 0 : R3[d3]) ? b3 : 0) - (n3 ? x3.crossAxis : 0);
      h3 < r4 ? h3 = r4 : h3 > i4 && (h3 = i4);
    }
    return { [g3]: p3, [d3]: h3 };
  } };
};
var k = function(n3) {
  return void 0 === n3 && (n3 = {}), { name: "size", options: n3, async fn(r3) {
    const { placement: i3, rects: o3, platform: a3, elements: l3 } = r3, { apply: c3, ...u3 } = n3, m3 = await s(r3, u3), g3 = t(i3), d3 = e(i3);
    let p3, h3;
    "top" === g3 || "bottom" === g3 ? (p3 = g3, h3 = d3 === (await (null == a3.isRTL ? void 0 : a3.isRTL(l3.floating)) ? "start" : "end") ? "left" : "right") : (h3 = g3, p3 = "end" === d3 ? "top" : "bottom");
    const y3 = f(m3.left, 0), x3 = f(m3.right, 0), w3 = f(m3.top, 0), v3 = f(m3.bottom, 0), b3 = { availableHeight: o3.floating.height - (["left", "right"].includes(i3) ? 2 * (0 !== w3 || 0 !== v3 ? w3 + v3 : f(m3.top, m3.bottom)) : m3[p3]), availableWidth: o3.floating.width - (["top", "bottom"].includes(i3) ? 2 * (0 !== y3 || 0 !== x3 ? y3 + x3 : f(m3.left, m3.right)) : m3[h3]) }, R3 = await a3.getDimensions(l3.floating);
    null == c3 || c3({ ...r3, ...b3 });
    const A2 = await a3.getDimensions(l3.floating);
    return R3.width !== A2.width || R3.height !== A2.height ? { reset: { rects: true } } : {};
  } };
};

// node_modules/.pnpm/@floating-ui+dom@0.5.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n2(t2) {
  return t2 && t2.document && t2.location && t2.alert && t2.setInterval;
}
function o2(t2) {
  if (null == t2)
    return window;
  if (!n2(t2)) {
    const e2 = t2.ownerDocument;
    return e2 && e2.defaultView || window;
  }
  return t2;
}
function i2(t2) {
  return o2(t2).getComputedStyle(t2);
}
function r2(t2) {
  return n2(t2) ? "" : t2 ? (t2.nodeName || "").toLowerCase() : "";
}
function l2() {
  const t2 = navigator.userAgentData;
  return null != t2 && t2.brands ? t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" ") : navigator.userAgent;
}
function c2(t2) {
  return t2 instanceof o2(t2).HTMLElement;
}
function f2(t2) {
  return t2 instanceof o2(t2).Element;
}
function s2(t2) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t2 instanceof o2(t2).ShadowRoot || t2 instanceof ShadowRoot;
}
function u2(t2) {
  const { overflow: e2, overflowX: n3, overflowY: o3 } = i2(t2);
  return /auto|scroll|overlay|hidden/.test(e2 + o3 + n3);
}
function d2(t2) {
  return ["table", "td", "th"].includes(r2(t2));
}
function h2(t2) {
  const e2 = /firefox/i.test(l2()), n3 = i2(t2);
  return "none" !== n3.transform || "none" !== n3.perspective || "paint" === n3.contain || ["transform", "perspective"].includes(n3.willChange) || e2 && "filter" === n3.willChange || e2 && !!n3.filter && "none" !== n3.filter;
}
function a2() {
  return !/^((?!chrome|android).)*safari/i.test(l2());
}
var g2 = Math.min;
var p2 = Math.max;
var m2 = Math.round;
function w2(t2, e2, n3) {
  var i3, r3, l3, s3;
  void 0 === e2 && (e2 = false), void 0 === n3 && (n3 = false);
  const u3 = t2.getBoundingClientRect();
  let d3 = 1, h3 = 1;
  e2 && c2(t2) && (d3 = t2.offsetWidth > 0 && m2(u3.width) / t2.offsetWidth || 1, h3 = t2.offsetHeight > 0 && m2(u3.height) / t2.offsetHeight || 1);
  const g3 = f2(t2) ? o2(t2) : window, p3 = !a2() && n3, w3 = (u3.left + (p3 && null != (i3 = null == (r3 = g3.visualViewport) ? void 0 : r3.offsetLeft) ? i3 : 0)) / d3, v3 = (u3.top + (p3 && null != (l3 = null == (s3 = g3.visualViewport) ? void 0 : s3.offsetTop) ? l3 : 0)) / h3, y3 = u3.width / d3, x3 = u3.height / h3;
  return { width: y3, height: x3, top: v3, right: w3 + y3, bottom: v3 + x3, left: w3, x: w3, y: v3 };
}
function v2(t2) {
  return (e2 = t2, (e2 instanceof o2(e2).Node ? t2.ownerDocument : t2.document) || window.document).documentElement;
  var e2;
}
function y2(t2) {
  return f2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function x2(t2) {
  return w2(v2(t2)).left + y2(t2).scrollLeft;
}
function b2(t2, e2, n3) {
  const o3 = c2(e2), i3 = v2(e2), l3 = w2(t2, o3 && function(t3) {
    const e3 = w2(t3);
    return m2(e3.width) !== t3.offsetWidth || m2(e3.height) !== t3.offsetHeight;
  }(e2), "fixed" === n3);
  let f3 = { scrollLeft: 0, scrollTop: 0 };
  const s3 = { x: 0, y: 0 };
  if (o3 || !o3 && "fixed" !== n3)
    if (("body" !== r2(e2) || u2(i3)) && (f3 = y2(e2)), c2(e2)) {
      const t3 = w2(e2, true);
      s3.x = t3.x + e2.clientLeft, s3.y = t3.y + e2.clientTop;
    } else
      i3 && (s3.x = x2(i3));
  return { x: l3.left + f3.scrollLeft - s3.x, y: l3.top + f3.scrollTop - s3.y, width: l3.width, height: l3.height };
}
function L2(t2) {
  return "html" === r2(t2) ? t2 : t2.assignedSlot || t2.parentNode || (s2(t2) ? t2.host : null) || v2(t2);
}
function R2(t2) {
  return c2(t2) && "fixed" !== getComputedStyle(t2).position ? t2.offsetParent : null;
}
function T2(t2) {
  const e2 = o2(t2);
  let n3 = R2(t2);
  for (; n3 && d2(n3) && "static" === getComputedStyle(n3).position; )
    n3 = R2(n3);
  return n3 && ("html" === r2(n3) || "body" === r2(n3) && "static" === getComputedStyle(n3).position && !h2(n3)) ? e2 : n3 || function(t3) {
    let e3 = L2(t3);
    for (s2(e3) && (e3 = e3.host); c2(e3) && !["html", "body"].includes(r2(e3)); ) {
      if (h2(e3))
        return e3;
      e3 = e3.parentNode;
    }
    return null;
  }(t2) || e2;
}
function W(t2) {
  if (c2(t2))
    return { width: t2.offsetWidth, height: t2.offsetHeight };
  const e2 = w2(t2);
  return { width: e2.width, height: e2.height };
}
function E2(t2) {
  const e2 = L2(t2);
  return ["html", "body", "#document"].includes(r2(e2)) ? t2.ownerDocument.body : c2(e2) && u2(e2) ? e2 : E2(e2);
}
function H(t2, e2) {
  var n3;
  void 0 === e2 && (e2 = []);
  const i3 = E2(t2), r3 = i3 === (null == (n3 = t2.ownerDocument) ? void 0 : n3.body), l3 = o2(i3), c3 = r3 ? [l3].concat(l3.visualViewport || [], u2(i3) ? i3 : []) : i3, f3 = e2.concat(c3);
  return r3 ? f3 : f3.concat(H(c3));
}
function C(e2, n3, r3) {
  return "viewport" === n3 ? l(function(t2, e3) {
    const n4 = o2(t2), i3 = v2(t2), r4 = n4.visualViewport;
    let l3 = i3.clientWidth, c3 = i3.clientHeight, f3 = 0, s3 = 0;
    if (r4) {
      l3 = r4.width, c3 = r4.height;
      const t3 = a2();
      (t3 || !t3 && "fixed" === e3) && (f3 = r4.offsetLeft, s3 = r4.offsetTop);
    }
    return { width: l3, height: c3, x: f3, y: s3 };
  }(e2, r3)) : f2(n3) ? function(t2, e3) {
    const n4 = w2(t2, false, "fixed" === e3), o3 = n4.top + t2.clientTop, i3 = n4.left + t2.clientLeft;
    return { top: o3, left: i3, x: i3, y: o3, right: i3 + t2.clientWidth, bottom: o3 + t2.clientHeight, width: t2.clientWidth, height: t2.clientHeight };
  }(n3, r3) : l(function(t2) {
    var e3;
    const n4 = v2(t2), o3 = y2(t2), r4 = null == (e3 = t2.ownerDocument) ? void 0 : e3.body, l3 = p2(n4.scrollWidth, n4.clientWidth, r4 ? r4.scrollWidth : 0, r4 ? r4.clientWidth : 0), c3 = p2(n4.scrollHeight, n4.clientHeight, r4 ? r4.scrollHeight : 0, r4 ? r4.clientHeight : 0);
    let f3 = -o3.scrollLeft + x2(t2);
    const s3 = -o3.scrollTop;
    return "rtl" === i2(r4 || n4).direction && (f3 += p2(n4.clientWidth, r4 ? r4.clientWidth : 0) - l3), { width: l3, height: c3, x: f3, y: s3 };
  }(v2(e2)));
}
function S(t2) {
  const e2 = H(t2), n3 = ["absolute", "fixed"].includes(i2(t2).position) && c2(t2) ? T2(t2) : t2;
  return f2(n3) ? e2.filter((t3) => f2(t3) && function(t4, e3) {
    const n4 = null == e3.getRootNode ? void 0 : e3.getRootNode();
    if (t4.contains(e3))
      return true;
    if (n4 && s2(n4)) {
      let n5 = e3;
      do {
        if (n5 && t4 === n5)
          return true;
        n5 = n5.parentNode || n5.host;
      } while (n5);
    }
    return false;
  }(t3, n3) && "body" !== r2(t3)) : [];
}
var D2 = { getClippingRect: function(t2) {
  let { element: e2, boundary: n3, rootBoundary: o3, strategy: i3 } = t2;
  const r3 = [..."clippingAncestors" === n3 ? S(e2) : [].concat(n3), o3], l3 = r3[0], c3 = r3.reduce((t3, n4) => {
    const o4 = C(e2, n4, i3);
    return t3.top = p2(o4.top, t3.top), t3.right = g2(o4.right, t3.right), t3.bottom = g2(o4.bottom, t3.bottom), t3.left = p2(o4.left, t3.left), t3;
  }, C(e2, l3, i3));
  return { width: c3.right - c3.left, height: c3.bottom - c3.top, x: c3.left, y: c3.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e2, offsetParent: n3, strategy: o3 } = t2;
  const i3 = c2(n3), l3 = v2(n3);
  if (n3 === l3)
    return e2;
  let f3 = { scrollLeft: 0, scrollTop: 0 };
  const s3 = { x: 0, y: 0 };
  if ((i3 || !i3 && "fixed" !== o3) && (("body" !== r2(n3) || u2(l3)) && (f3 = y2(n3)), c2(n3))) {
    const t3 = w2(n3, true);
    s3.x = t3.x + n3.clientLeft, s3.y = t3.y + n3.clientTop;
  }
  return { ...e2, x: e2.x - f3.scrollLeft + s3.x, y: e2.y - f3.scrollTop + s3.y };
}, isElement: f2, getDimensions: W, getOffsetParent: T2, getDocumentElement: v2, getElementRects: (t2) => {
  let { reference: e2, floating: n3, strategy: o3 } = t2;
  return { reference: b2(e2, T2(n3), o3), floating: { ...W(n3), x: 0, y: 0 } };
}, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === i2(t2).direction };
function N(t2, e2, n3, o3) {
  void 0 === o3 && (o3 = {});
  const { ancestorScroll: i3 = true, ancestorResize: r3 = true, elementResize: l3 = true, animationFrame: c3 = false } = o3, s3 = i3 && !c3, u3 = r3 && !c3, d3 = s3 || u3 ? [...f2(t2) ? H(t2) : [], ...H(e2)] : [];
  d3.forEach((t3) => {
    s3 && t3.addEventListener("scroll", n3, { passive: true }), u3 && t3.addEventListener("resize", n3);
  });
  let h3, a3 = null;
  if (l3) {
    let o4 = true;
    a3 = new ResizeObserver(() => {
      o4 || n3(), o4 = false;
    }), f2(t2) && !c3 && a3.observe(t2), a3.observe(e2);
  }
  let g3 = c3 ? w2(t2) : null;
  return c3 && function e3() {
    const o4 = w2(t2);
    !g3 || o4.x === g3.x && o4.y === g3.y && o4.width === g3.width && o4.height === g3.height || n3();
    g3 = o4, h3 = requestAnimationFrame(e3);
  }(), n3(), () => {
    var t3;
    d3.forEach((t4) => {
      s3 && t4.removeEventListener("scroll", n3), u3 && t4.removeEventListener("resize", n3);
    }), null == (t3 = a3) || t3.disconnect(), a3 = null, c3 && cancelAnimationFrame(h3);
  };
}
var z = (t2, n3, o3) => o(t2, n3, { platform: D2, ...o3 });

// node_modules/.pnpm/@floating-ui+react-dom@0.7.2_zula6vjvt3wdocc4mwcxqa6nzi/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var React = __toESM(require_react());
var import_react12 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var index = typeof document !== "undefined" ? import_react12.useLayoutEffect : import_react12.useEffect;
function deepEqual(a3, b3) {
  if (a3 === b3) {
    return true;
  }
  if (typeof a3 !== typeof b3) {
    return false;
  }
  if (typeof a3 === "function" && a3.toString() === b3.toString()) {
    return true;
  }
  let length, i3, keys;
  if (a3 && b3 && typeof a3 == "object") {
    if (Array.isArray(a3)) {
      length = a3.length;
      if (length != b3.length)
        return false;
      for (i3 = length; i3-- !== 0; ) {
        if (!deepEqual(a3[i3], b3[i3])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a3);
    length = keys.length;
    if (length !== Object.keys(b3).length) {
      return false;
    }
    for (i3 = length; i3-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b3, keys[i3])) {
        return false;
      }
    }
    for (i3 = length; i3-- !== 0; ) {
      const key = keys[i3];
      if (key === "_owner" && a3.$$typeof) {
        continue;
      }
      if (!deepEqual(a3[key], b3[key])) {
        return false;
      }
    }
    return true;
  }
  return a3 !== a3 && b3 !== b3;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(_temp) {
  let {
    middleware,
    placement = "bottom",
    strategy = "absolute",
    whileElementsMounted
  } = _temp === void 0 ? {} : _temp;
  const reference = React.useRef(null);
  const floating = React.useRef(null);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const cleanupRef = React.useRef(null);
  const [data, setData] = React.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {}
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map((_ref) => {
    let {
      options
    } = _ref;
    return options;
  }), middleware == null ? void 0 : middleware.map((_ref2) => {
    let {
      options
    } = _ref2;
    return options;
  }))) {
    setLatestMiddleware(middleware);
  }
  const update = React.useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }
    z(reference.current, floating.current, {
      middleware: latestMiddleware,
      placement,
      strategy
    }).then((data2) => {
      if (isMountedRef.current) {
        ReactDOM.flushSync(() => {
          setData(data2);
        });
      }
    });
  }, [latestMiddleware, placement, strategy]);
  index(() => {
    if (isMountedRef.current) {
      update();
    }
  }, [update]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const runElementMountCallback = React.useCallback(() => {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (reference.current && floating.current) {
      if (whileElementsMountedRef.current) {
        const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
        cleanupRef.current = cleanupFn;
      } else {
        update();
      }
    }
  }, [update, whileElementsMountedRef]);
  const setReference = React.useCallback((node) => {
    reference.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const setFloating = React.useCallback((node) => {
    floating.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const refs = React.useMemo(() => ({
    reference,
    floating
  }), []);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, setReference, setFloating]);
}
var arrow = (options) => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return m({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return m({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
};

// node_modules/.pnpm/@radix-ui+react-use-size@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.module.js
var import_react13 = __toESM(require_react());
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size, setSize] = (0, import_react13.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size;
}

// node_modules/.pnpm/@radix-ui+react-popper@1.1.1_zula6vjvt3wdocc4mwcxqa6nzi/node_modules/@radix-ui/react-popper/dist/index.module.js
var $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
var [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
var [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
var $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = (0, import_react14.useState)(null);
  return /* @__PURE__ */ (0, import_react14.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
var $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
var $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react14.useEffect)(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
var $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
var [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
var [$cf1ac5d9fe0e8206$var$PositionContextProvider, $cf1ac5d9fe0e8206$var$usePositionContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, {
  hasParent: false,
  positionUpdateFns: /* @__PURE__ */ new Set()
});
var $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$hide, _middlewareData$trans, _middlewareData$trans2;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, avoidCollisions = true, onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = (0, import_react14.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow2, setArrow] = (0, import_react14.useState)(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow2);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    altBoundary: hasExplicitBoundaries
  };
  const { reference, floating, strategy, x: x3, y: y3, placement, middlewareData, update } = useFloating({
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: N,
    middleware: [
      $cf1ac5d9fe0e8206$var$anchorCssProperties(),
      T({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions ? D({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? L() : void 0,
        ...detectOverflowOptions
      }) : void 0,
      arrow2 ? arrow({
        element: arrow2,
        padding: arrowPadding
      }) : void 0,
      avoidCollisions ? b({
        ...detectOverflowOptions
      }) : void 0,
      k({
        ...detectOverflowOptions,
        apply: ({ elements, availableWidth: width, availableHeight: height }) => {
          elements.floating.style.setProperty("--radix-popper-available-width", `${width}px`);
          elements.floating.style.setProperty("--radix-popper-available-height", `${height}px`);
        }
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached ? P({
        strategy: "referenceHidden"
      }) : void 0
    ].filter($cf1ac5d9fe0e8206$var$isDefined)
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    reference(context.anchor);
  }, [
    reference,
    context.anchor
  ]);
  const isPlaced = x3 !== null && y3 !== null;
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPlaced)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPlaced,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = (0, import_react14.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  const { hasParent, positionUpdateFns } = $cf1ac5d9fe0e8206$var$usePositionContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const isRoot = !hasParent;
  (0, import_react14.useLayoutEffect)(() => {
    if (!isRoot) {
      positionUpdateFns.add(update);
      return () => {
        positionUpdateFns.delete(update);
      };
    }
  }, [
    isRoot,
    positionUpdateFns,
    update
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isRoot && isPlaced)
      Array.from(positionUpdateFns).reverse().forEach(
        (fn) => requestAnimationFrame(fn)
      );
  }, [
    isRoot,
    isPlaced,
    positionUpdateFns
  ]);
  const commonProps = {
    "data-side": placedSide,
    "data-align": placedAlign,
    ...contentProps,
    ref: composedRefs,
    style: {
      ...contentProps.style,
      animation: !isPlaced ? "none" : void 0,
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  };
  return /* @__PURE__ */ (0, import_react14.createElement)("div", {
    ref: floating,
    "data-radix-popper-content-wrapper": "",
    style: {
      position: strategy,
      left: 0,
      top: 0,
      transform: isPlaced ? `translate3d(${Math.round(x3)}px, ${Math.round(y3)}px, 0)` : "translate3d(0, -200%, 0)",
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, /* @__PURE__ */ (0, import_react14.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, isRoot ? /* @__PURE__ */ (0, import_react14.createElement)($cf1ac5d9fe0e8206$var$PositionContextProvider, {
    scope: __scopePopper,
    hasParent: true,
    positionUpdateFns
  }, /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, commonProps)) : /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, commonProps)));
});
function $cf1ac5d9fe0e8206$var$isDefined(value) {
  return value !== void 0;
}
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
var $cf1ac5d9fe0e8206$var$anchorCssProperties = () => ({
  name: "anchorCssProperties",
  fn(data) {
    const { rects, elements } = data;
    const { width, height } = rects.reference;
    elements.floating.style.setProperty("--radix-popper-anchor-width", `${width}px`);
    elements.floating.style.setProperty("--radix-popper-anchor-height", `${height}px`);
    return {};
  }
});
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x3 = "";
    let y3 = "";
    if (placedSide === "bottom") {
      x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y3 = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y3 = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x3 = `${-arrowHeight}px`;
      y3 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x3 = `${rects.floating.width + arrowHeight}px`;
      y3 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x: x3,
        y: y3
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
var $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
var $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;

// node_modules/.pnpm/@radix-ui+react-portal@1.0.2_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-portal/dist/index.module.js
var import_react15 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());
var $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ import_react_dom3.default.createPortal(/* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// node_modules/.pnpm/@radix-ui+react-presence@1.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-presence/dist/index.module.js
var import_react16 = __toESM(require_react());
var import_react_dom4 = __toESM(require_react_dom());
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react16.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react16.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react16.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react16.useState)();
  const stylesRef = (0, import_react16.useRef)({});
  const prevPresentRef = (0, import_react16.useRef)(present);
  const prevAnimationNameRef = (0, import_react16.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react16.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom4.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react16.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/.pnpm/aria-hidden@1.2.3/node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x3) {
    return Boolean(x3);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        var attr = node.getAttribute(controlAttribute);
        var alreadyHidden = attr !== null && attr !== "false";
        var counterValue = (counterMap.get(node) || 0) + 1;
        var markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenNodes.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node, true);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, "true");
        }
        if (!alreadyHidden) {
          node.setAttribute(controlAttribute, "true");
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/.pnpm/tslib@2.5.0/node_modules/tslib/tslib.es6.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s3, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
      s3 = arguments[i3];
      for (var p3 in s3)
        if (Object.prototype.hasOwnProperty.call(s3, p3))
          t2[p3] = s3[p3];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s3, e2) {
  var t2 = {};
  for (var p3 in s3)
    if (Object.prototype.hasOwnProperty.call(s3, p3) && e2.indexOf(p3) < 0)
      t2[p3] = s3[p3];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
      if (e2.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
        t2[p3[i3]] = s3[p3[i3]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i3 = 0, l3 = from.length, ar; i3 < l3; i3++) {
      if (ar || !(i3 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i3);
        ar[i3] = from[i3];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React7 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/UI.js
var React3 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/.pnpm/use-callback-ref@1.3.0_pmekkgnqduwlme35zpnqhenc34/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/.pnpm/use-callback-ref@1.3.0_pmekkgnqduwlme35zpnqhenc34/node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react17 = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react17.useState)(function() {
    return {
      value: initialValue,
      callback,
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/.pnpm/use-callback-ref@1.3.0_pmekkgnqduwlme35zpnqhenc34/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
}

// node_modules/.pnpm/use-sidecar@1.1.2_pmekkgnqduwlme35zpnqhenc34/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a3) {
  return a3;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x3) {
          return x3 !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x3) {
          return cb(x3);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x3) {
          pendingQueue.push(x3);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/.pnpm/use-sidecar@1.1.2_pmekkgnqduwlme35zpnqhenc34/node_modules/use-sidecar/dist/es2015/exports.js
var React2 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React2.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React3.forwardRef(function(props, parentRef) {
  var ref = React3.useRef(null);
  var _a = React3.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React3.createElement(
    React3.Fragment,
    null,
    enabled && React3.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React3.cloneElement(React3.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React3.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React6 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React5 = __toESM(require_react());

// node_modules/.pnpm/react-style-singleton@2.2.1_pmekkgnqduwlme35zpnqhenc34/node_modules/react-style-singleton/dist/es2015/hook.js
var React4 = __toESM(require_react());

// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/.pnpm/react-style-singleton@2.2.1_pmekkgnqduwlme35zpnqhenc34/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.1_pmekkgnqduwlme35zpnqhenc34/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React4.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.1_pmekkgnqduwlme35zpnqhenc34/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x3) {
  return parseInt(x3 || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React5.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React5.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s3 = _a[1], d3 = _a[2];
      if (s3 > d3) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x3, y3) {
  return x3[0] === y3[0] && x3[1] === y3[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React6.useRef([]);
  var touchStartRef = React6.useRef([0, 0]);
  var activeAxis = React6.useRef();
  var id = React6.useState(idCounter++)[0];
  var Style2 = React6.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React6.useRef(props);
  React6.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React6.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React6.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React6.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e2) {
      return e2.name === event.type && e2.target === event.target && deltaCompare(e2.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React6.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e2) {
        return e2 !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React6.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React6.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React6.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React6.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React6.createElement(
    React6.Fragment,
    null,
    inert ? React6.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React6.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/.pnpm/react-remove-scroll@2.5.5_pmekkgnqduwlme35zpnqhenc34/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React7.forwardRef(function(props, ref) {
  return React7.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

export {
  _extends,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $6ed0406888f73fc4$export$43e446d32b3d21af,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
  $d3863c46a17e8a28$export$20e40289641fbbb6,
  $1746a345f3d73bb7$export$f680877a34711e37,
  $db6c3485150b8e66$export$1ab7ae714698c4b8,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
  $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
  $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
  $f1701beae083dbae$export$602eac185826482c,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  hideOthers,
  Combination_default
};
//# sourceMappingURL=/build/_shared/chunk-YZ63PQDW.js.map
