(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/BrailleCursor.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BrailleCursorGarage_3x3
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function BrailleCursorGarage_3x3() {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [merged, setMerged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trail, setTrail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const lastMoveTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrailleCursorGarage_3x3.useEffect": ()=>{
            const handleMove = {
                "BrailleCursorGarage_3x3.useEffect.handleMove": (e)=>{
                    const x = e.clientX;
                    const y = e.clientY;
                    setPosition({
                        x,
                        y
                    });
                    lastMoveTime.current = Date.now();
                    setMerged(true);
                    const uniqueId = crypto.randomUUID();
                    setTrail({
                        "BrailleCursorGarage_3x3.useEffect.handleMove": (prev)=>[
                                ...prev,
                                {
                                    x,
                                    y,
                                    id: uniqueId
                                }
                            ]
                    }["BrailleCursorGarage_3x3.useEffect.handleMove"]);
                    setTimeout({
                        "BrailleCursorGarage_3x3.useEffect.handleMove": ()=>{
                            setTrail({
                                "BrailleCursorGarage_3x3.useEffect.handleMove": (prev)=>prev.slice(1)
                            }["BrailleCursorGarage_3x3.useEffect.handleMove"]);
                        }
                    }["BrailleCursorGarage_3x3.useEffect.handleMove"], 400);
                }
            }["BrailleCursorGarage_3x3.useEffect.handleMove"];
            window.addEventListener('mousemove', handleMove);
            return ({
                "BrailleCursorGarage_3x3.useEffect": ()=>window.removeEventListener('mousemove', handleMove)
            })["BrailleCursorGarage_3x3.useEffect"];
        }
    }["BrailleCursorGarage_3x3.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrailleCursorGarage_3x3.useEffect": ()=>{
            const interval = setInterval({
                "BrailleCursorGarage_3x3.useEffect.interval": ()=>{
                    if (Date.now() - lastMoveTime.current > 1000) {
                        setMerged(false);
                    } else {
                        setMerged(true);
                    }
                }
            }["BrailleCursorGarage_3x3.useEffect.interval"], 200);
            return ({
                "BrailleCursorGarage_3x3.useEffect": ()=>clearInterval(interval)
            })["BrailleCursorGarage_3x3.useEffect"];
        }
    }["BrailleCursorGarage_3x3.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrailleCursorGarage_3x3.useEffect": ()=>{
            const handleClick = {
                "BrailleCursorGarage_3x3.useEffect.handleClick": ()=>{
                    if (navigator.vibrate) {
                        navigator.vibrate(30);
                    }
                }
            }["BrailleCursorGarage_3x3.useEffect.handleClick"];
            window.addEventListener('click', handleClick);
            return ({
                "BrailleCursorGarage_3x3.useEffect": ()=>window.removeEventListener('click', handleClick)
            })["BrailleCursorGarage_3x3.useEffect"];
        }
    }["BrailleCursorGarage_3x3.useEffect"], []);
    const dotCount = 9;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            trail.map((param)=>{
                let { x, y, id } = param;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        left: "".concat(x, "px"),
                        top: "".concat(y, "px"),
                        transform: "translate(0, 0)"
                    },
                    className: "jsx-78316c6db755cf48" + " " + "braille-cursor trail ".concat(merged ? 'merged' : 'expanded'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-78316c6db755cf48" + " " + "aura"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BrailleCursor.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        [
                            ...Array(dotCount)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-78316c6db755cf48" + " " + "dot dot-".concat(i)
                            }, i, false, {
                                fileName: "[project]/src/components/BrailleCursor.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this))
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/BrailleCursor.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                style: {
                    left: "".concat(position.x, "px"),
                    top: "".concat(position.y, "px"),
                    transform: 'translate(-50%, -50%)'
                },
                className: "jsx-78316c6db755cf48" + " " + "braille-cursor ".concat(merged ? 'merged' : 'expanded'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-78316c6db755cf48" + " " + "aura"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BrailleCursor.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    [
                        ...Array(dotCount)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-78316c6db755cf48" + " " + "dot dot-".concat(i)
                        }, i, false, {
                            fileName: "[project]/src/components/BrailleCursor.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BrailleCursor.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "78316c6db755cf48",
                children: ".braille-cursor.jsx-78316c6db755cf48{z-index:9999;pointer-events:none;width:36px;height:48px;position:fixed}.dot.jsx-78316c6db755cf48{background:#fff;border-radius:50%;transition:all .4s;position:absolute}.merged.jsx-78316c6db755cf48 .dot.jsx-78316c6db755cf48{width:14px;height:14px;top:50%;left:50%;box-shadow:0 0 4px rgba(255,255,255,.5),0 0 8px rgba(255,255,255,.3),inset 0 0 4px rgba(255,255,255,.6)}.expanded.jsx-78316c6db755cf48 .dot.jsx-78316c6db755cf48{width:6px;height:6px;animation:2s ease-in-out infinite pulse;box-shadow:0 0 4px rgba(255,255,255,.5)}.expanded.jsx-78316c6db755cf48 .dot-0.jsx-78316c6db755cf48{top:0;left:0}.expanded.jsx-78316c6db755cf48 .dot-1.jsx-78316c6db755cf48{top:0;left:15px}.expanded.jsx-78316c6db755cf48 .dot-2.jsx-78316c6db755cf48{top:0;left:30px}.expanded.jsx-78316c6db755cf48 .dot-3.jsx-78316c6db755cf48{top:15px;left:0}.expanded.jsx-78316c6db755cf48 .dot-4.jsx-78316c6db755cf48{top:15px;left:15px}.expanded.jsx-78316c6db755cf48 .dot-5.jsx-78316c6db755cf48{top:15px;left:30px}.expanded.jsx-78316c6db755cf48 .dot-6.jsx-78316c6db755cf48{top:30px;left:0}.expanded.jsx-78316c6db755cf48 .dot-7.jsx-78316c6db755cf48{top:30px;left:15px}.expanded.jsx-78316c6db755cf48 .dot-8.jsx-78316c6db755cf48{top:30px;left:30px}.aura.jsx-78316c6db755cf48{opacity:0;background:radial-gradient(circle,rgba(0,255,204,.3) 0%,transparent 70%);border-radius:50%;width:60px;height:60px;transition:opacity .5s;position:absolute;top:-10px;left:-12px}.expanded.jsx-78316c6db755cf48 .aura.jsx-78316c6db755cf48{opacity:1;animation:2s ease-in-out infinite auraPulse}.trail.jsx-78316c6db755cf48{z-index:9998;opacity:.3;transition:left .2s,top .2s;animation:.2s ease-out forwards fadeOut}@keyframes pulse{0%,to{transform:scale(1)}50%{transform:scale(1.3)}}@keyframes auraPulse{0%,to{opacity:.3;transform:scale(1)}50%{opacity:.5;transform:scale(1.3)}}@keyframes fadeOut{0%{opacity:.3;transform:scale(1)}to{opacity:0;transform:scale(.6)}}*{cursor:none!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(BrailleCursorGarage_3x3, "TWcwWvKosooUgdut/TZ12HRlUA0=");
_c = BrailleCursorGarage_3x3;
var _c;
__turbopack_context__.k.register(_c, "BrailleCursorGarage_3x3");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_BrailleCursor_jsx_dc325351._.js.map