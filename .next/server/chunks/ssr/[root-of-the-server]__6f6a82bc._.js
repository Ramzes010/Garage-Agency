module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/BrailleCursor.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>BrailleCursorGarage_3x3
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function BrailleCursorGarage_3x3() {
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [merged, setMerged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trail, setTrail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const lastMoveTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMove = (e)=>{
            const x = e.clientX;
            const y = e.clientY;
            setPosition({
                x,
                y
            });
            lastMoveTime.current = Date.now();
            setMerged(true);
            const uniqueId = crypto.randomUUID();
            setTrail((prev)=>[
                    ...prev,
                    {
                        x,
                        y,
                        id: uniqueId
                    }
                ]);
            setTimeout(()=>{
                setTrail((prev)=>prev.slice(1));
            }, 400);
        };
        window.addEventListener('mousemove', handleMove);
        return ()=>window.removeEventListener('mousemove', handleMove);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            if (Date.now() - lastMoveTime.current > 1000) {
                setMerged(false);
            } else {
                setMerged(true);
            }
        }, 200);
        return ()=>clearInterval(interval);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClick = ()=>{
            if (navigator.vibrate) {
                navigator.vibrate(30);
            }
        };
        window.addEventListener('click', handleClick);
        return ()=>window.removeEventListener('click', handleClick);
    }, []);
    const dotCount = 9;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            trail.map(({ x, y, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: `translate(0, 0)`
                    },
                    className: "jsx-78316c6db755cf48" + " " + `braille-cursor trail ${merged ? 'merged' : 'expanded'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-78316c6db755cf48" + " " + "aura"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BrailleCursor.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        [
                            ...Array(dotCount)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-78316c6db755cf48" + " " + `dot dot-${i}`
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
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                style: {
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                },
                className: "jsx-78316c6db755cf48" + " " + `braille-cursor ${merged ? 'merged' : 'expanded'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-78316c6db755cf48" + " " + "aura"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BrailleCursor.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    [
                        ...Array(dotCount)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-78316c6db755cf48" + " " + `dot dot-${i}`
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "78316c6db755cf48",
                children: ".braille-cursor.jsx-78316c6db755cf48{z-index:9999;pointer-events:none;width:36px;height:48px;position:fixed}.dot.jsx-78316c6db755cf48{background:#fff;border-radius:50%;transition:all .4s;position:absolute}.merged.jsx-78316c6db755cf48 .dot.jsx-78316c6db755cf48{width:14px;height:14px;top:50%;left:50%;box-shadow:0 0 4px #ffffff80,0 0 8px #ffffff4d,inset 0 0 4px #fff9}.expanded.jsx-78316c6db755cf48 .dot.jsx-78316c6db755cf48{width:6px;height:6px;animation:2s ease-in-out infinite pulse;box-shadow:0 0 4px #ffffff80}.expanded.jsx-78316c6db755cf48 .dot-0.jsx-78316c6db755cf48{top:0;left:0}.expanded.jsx-78316c6db755cf48 .dot-1.jsx-78316c6db755cf48{top:0;left:15px}.expanded.jsx-78316c6db755cf48 .dot-2.jsx-78316c6db755cf48{top:0;left:30px}.expanded.jsx-78316c6db755cf48 .dot-3.jsx-78316c6db755cf48{top:15px;left:0}.expanded.jsx-78316c6db755cf48 .dot-4.jsx-78316c6db755cf48{top:15px;left:15px}.expanded.jsx-78316c6db755cf48 .dot-5.jsx-78316c6db755cf48{top:15px;left:30px}.expanded.jsx-78316c6db755cf48 .dot-6.jsx-78316c6db755cf48{top:30px;left:0}.expanded.jsx-78316c6db755cf48 .dot-7.jsx-78316c6db755cf48{top:30px;left:15px}.expanded.jsx-78316c6db755cf48 .dot-8.jsx-78316c6db755cf48{top:30px;left:30px}.aura.jsx-78316c6db755cf48{opacity:0;background:radial-gradient(circle,#00ffcc4d 0%,#0000 70%);border-radius:50%;width:60px;height:60px;transition:opacity .5s;position:absolute;top:-10px;left:-12px}.expanded.jsx-78316c6db755cf48 .aura.jsx-78316c6db755cf48{opacity:1;animation:2s ease-in-out infinite auraPulse}.trail.jsx-78316c6db755cf48{z-index:9998;opacity:.3;transition:left .2s,top .2s;animation:.2s ease-out forwards fadeOut}@keyframes pulse{0%,to{transform:scale(1)}50%{transform:scale(1.3)}}@keyframes auraPulse{0%,to{opacity:.3;transform:scale(1)}50%{opacity:.5;transform:scale(1.3)}}@keyframes fadeOut{0%{opacity:.3;transform:scale(1)}to{opacity:0;transform:scale(.6)}}*{cursor:none!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6f6a82bc._.js.map