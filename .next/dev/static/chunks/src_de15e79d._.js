(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/gravity/GravityStage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GravityStage",
    ()=>GravityStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
// src/components/gravity/GravityStage.tsx
"use client";
;
;
;
function usePointer() {
    _s();
    const [p, setP] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        x: 0.5,
        y: 0.2
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePointer.useEffect": ()=>{
            const onMove = {
                "usePointer.useEffect.onMove": (e)=>{
                    const w = window.innerWidth || 1;
                    const h = window.innerHeight || 1;
                    setP({
                        x: e.clientX / w,
                        y: e.clientY / h
                    });
                }
            }["usePointer.useEffect.onMove"];
            window.addEventListener("pointermove", onMove, {
                passive: true
            });
            return ({
                "usePointer.useEffect": ()=>window.removeEventListener("pointermove", onMove)
            })["usePointer.useEffect"];
        }
    }["usePointer.useEffect"], []);
    return p;
}
_s(usePointer, "vFgk7JIl2fW1wr9gZX5B4kdZhNM=");
function GravityStage({ reduced }) {
    _s1();
    const p = usePointer();
    const glowX = reduced ? 50 : Math.round(p.x * 100);
    const glowY = reduced ? 18 : Math.round(p.y * 40);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[52svh] w-full",
                        style: {
                            background: "radial-gradient(1200px 520px at 20% 10%, rgba(255,255,255,0.06), transparent 60%)," + "radial-gradient(900px 420px at 75% 30%, rgba(255,255,255,0.05), transparent 62%)," + "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.25))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.55]",
                        style: {
                            background: `radial-gradient(900px 420px at ${glowX}% ${glowY}%, rgba(124, 58, 237, 0.14), transparent 60%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 grav-noise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/GravityStage.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-6xl px-6 pt-16 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-1.5 w-1.5 rounded-full bg-[var(--grav-accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono tracking-[0.22em] uppercase text-[var(--grav-dim)]",
                                        children: "tatedonohoe.au"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: cn("text-[10px] font-mono tracking-[0.22em] uppercase", "text-[var(--grav-dim)] hover:text-[var(--grav-ink)] transition-colors"),
                                children: "CONTACT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-14 max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 10,
                                    filter: "blur(6px)"
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)"
                                },
                                transition: {
                                    duration: 0.55,
                                    ease: [
                                        0.2,
                                        0.8,
                                        0.2,
                                        1
                                    ]
                                },
                                className: "text-[28px] sm:text-[40px] font-semibold tracking-tight leading-[1.05]",
                                children: [
                                    "I don’t build websites.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    "I build",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--grav-ink)]/90",
                                        children: "the way people decide."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.55,
                                    delay: 0.08,
                                    ease: [
                                        0.2,
                                        0.8,
                                        0.2,
                                        1
                                    ]
                                },
                                className: "mt-5 text-sm sm:text-base text-[var(--grav-dim)] leading-relaxed",
                                children: "Most portfolios explain. This one behaves."
                            }, void 0, false, {
                                fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                        children: "Systems over screens"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                        children: "Friction on purpose"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                        children: "Evidence, not claims"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gravity/GravityStage.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gravity/GravityStage.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/GravityStage.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gravity/GravityStage.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s1(GravityStage, "ziiwf1SW3hzmoFaGTPDq0Kpon48=", false, function() {
    return [
        usePointer
    ];
});
_c = GravityStage;
function Pill({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/10 bg-white/5 px-4 py-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)]",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/gravity/GravityStage.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/gravity/GravityStage.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c1 = Pill;
var _c, _c1;
__turbopack_context__.k.register(_c, "GravityStage");
__turbopack_context__.k.register(_c1, "Pill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/gravity/CognitiveTrap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CognitiveTrap",
    ()=>CognitiveTrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/gravity/CognitiveTrap.tsx
"use client";
;
;
function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
}
function CognitiveTrap() {
    _s();
    const [mode, setMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("calm");
    const [score, setScore] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CognitiveTrap.useEffect": ()=>{
            let clicks = 0;
            let wheel = 0;
            let jitter = 0;
            let lastMove = {
                x: 0,
                y: 0,
                t: Date.now()
            };
            const onMove = {
                "CognitiveTrap.useEffect.onMove": (e)=>{
                    const now = Date.now();
                    const dt = now - lastMove.t || 1;
                    const dx = e.clientX - lastMove.x;
                    const dy = e.clientY - lastMove.y;
                    const v = Math.sqrt(dx * dx + dy * dy) / dt; // px/ms
                    // high-frequency tiny motion is "searching"
                    if (v > 0.6 && dt < 40) jitter += 1;
                    lastMove = {
                        x: e.clientX,
                        y: e.clientY,
                        t: now
                    };
                }
            }["CognitiveTrap.useEffect.onMove"];
            const onClick = {
                "CognitiveTrap.useEffect.onClick": ()=>{
                    clicks += 1;
                }
            }["CognitiveTrap.useEffect.onClick"];
            const onWheel = {
                "CognitiveTrap.useEffect.onWheel": ()=>{
                    wheel += 1;
                }
            }["CognitiveTrap.useEffect.onWheel"];
            const tick = window.setInterval({
                "CognitiveTrap.useEffect.tick": ()=>{
                    const s = clicks * 2 + wheel * 1 + jitter * 1;
                    setScore({
                        "CognitiveTrap.useEffect.tick": (prev)=>clamp(Math.round(prev * 0.65 + s * 0.35), 0, 100)
                    }["CognitiveTrap.useEffect.tick"]);
                    // decay
                    clicks = Math.max(0, clicks - 1);
                    wheel = Math.max(0, wheel - 2);
                    jitter = Math.max(0, jitter - 4);
                }
            }["CognitiveTrap.useEffect.tick"], 600);
            window.addEventListener("pointermove", onMove, {
                passive: true
            });
            window.addEventListener("click", onClick, {
                passive: true
            });
            window.addEventListener("wheel", onWheel, {
                passive: true
            });
            return ({
                "CognitiveTrap.useEffect": ()=>{
                    window.clearInterval(tick);
                    window.removeEventListener("pointermove", onMove);
                    window.removeEventListener("click", onClick);
                    window.removeEventListener("wheel", onWheel);
                }
            })["CognitiveTrap.useEffect"];
        }
    }["CognitiveTrap.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CognitiveTrap.useEffect": ()=>{
            if (score >= 32) setMode("impatient");
            else if (score >= 14) setMode("hunting");
            else setMode("calm");
        }
    }["CognitiveTrap.useEffect"], [
        score
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-[0.7]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--grav-accent)]/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)]",
                                children: "Interaction readout"
                            }, void 0, false, {
                                fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)]",
                                children: [
                                    "signal ",
                                    String(score).padStart(2, "0")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold tracking-tight",
                                children: "You’re looking for proof."
                            }, void 0, false, {
                                fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "popLayout",
                                children: [
                                    mode === "calm" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 6
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -6
                                        },
                                        transition: {
                                            duration: 0.22
                                        },
                                        className: "mt-2 text-sm text-[var(--grav-dim)] leading-relaxed",
                                        children: "Cool. I’ll give you evidence. But not in the way portfolios do."
                                    }, "calm", false, {
                                        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    mode === "hunting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 6
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -6
                                        },
                                        transition: {
                                            duration: 0.22
                                        },
                                        className: "mt-2 text-sm text-[var(--grav-dim)] leading-relaxed",
                                        children: "You’re scanning like it’s a menu. That’s normal. This won’t reward it."
                                    }, "hunt", false, {
                                        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    mode === "impatient" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 6
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -6
                                        },
                                        transition: {
                                            duration: 0.22
                                        },
                                        className: "mt-2 text-sm text-[var(--grav-dim)] leading-relaxed",
                                        children: "You’re trying to “find the point”. The point is: your product is probably explaining too much."
                                    }, "impatient", false, {
                                        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        title: mode === "impatient" ? "Less copy. More consequence." : "Small changes. Real outcomes.",
                                        body: mode === "impatient" ? "If you need to convince, the system is already leaking." : "I work on flows that make decisions easier without begging."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        title: mode === "hunting" ? "Stop browsing. Start feeling." : "Friction is a tool.",
                                        body: mode === "hunting" ? "If this annoyed you, good. That’s the same signal your customers get." : "You can remove friction, or you can move it to the right place."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(CognitiveTrap, "QM6HycexGKj0DtV9n2Th6iHSqws=");
_c = CognitiveTrap;
function Card({ title, body }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/10 bg-black/10 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold tracking-tight",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 text-xs leading-relaxed text-[var(--grav-dim)]",
                children: body
            }, void 0, false, {
                fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gravity/CognitiveTrap.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c1 = Card;
var _c, _c1;
__turbopack_context__.k.register(_c, "CognitiveTrap");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/gravity/ArtifactStrip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArtifactStrip",
    ()=>ArtifactStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/gravity/ArtifactStrip.tsx
"use client";
;
const ARTIFACTS = [
    {
        title: "The CTA wasn’t the problem",
        note: "People didn’t trust the next step. We changed the step, not the button.",
        tag: "decision design"
    },
    {
        title: "We removed 40% of the UI",
        note: "Less choice. More commitment. Drop-off fell without adding features.",
        tag: "reduction"
    },
    {
        title: "A modal that refuses to sell",
        note: "No pitch. Just a mirror. It filtered the wrong users instantly.",
        tag: "self-selection"
    },
    {
        title: "Micro-friction for honesty",
        note: "A tiny pause prevents fake intent. You get cleaner signals.",
        tag: "signal"
    }
];
function ArtifactStrip() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)]",
                        children: "artifacts"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)]",
                        children: "no gallery"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-3",
                children: ARTIFACTS.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-white/10 bg-black/10 p-4 hover:bg-black/15 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold tracking-tight",
                                        children: a.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)]",
                                        children: a.tag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xs leading-relaxed text-[var(--grav-dim)]",
                                children: a.note
                            }, void 0, false, {
                                fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, a.title, true, {
                        fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gravity/ArtifactStrip.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = ArtifactStrip;
var _c;
__turbopack_context__.k.register(_c, "ArtifactStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/gravity/PathSplit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PathSplit",
    ()=>PathSplit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/gravity/PathSplit.tsx
"use client";
;
function PathSplit() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)]",
                children: "choose your path"
            }, void 0, false, {
                fileName: "[project]/src/components/gravity/PathSplit.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 text-lg font-semibold tracking-tight",
                children: "If you want a normal website, don’t hire me."
            }, void 0, false, {
                fileName: "[project]/src/components/gravity/PathSplit.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-sm text-[var(--grav-dim)] leading-relaxed max-w-3xl",
                children: "I’m useful when the product is real, the story is unclear, and the interface is accidentally teaching people to leave."
            }, void 0, false, {
                fileName: "[project]/src/components/gravity/PathSplit.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-7 grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PathCard, {
                        title: "Conventional",
                        body: "You want something clean, modern, and familiar. You’ll find plenty of great studios for that.",
                        action: "Exit politely",
                        href: "https://www.google.com/search?q=web+design+studio+sunshine+coast"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/PathSplit.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PathCard, {
                        title: "Curious",
                        body: "You want customers to feel something specific. You care about the psychology of the flow.",
                        action: "Start a real conversation",
                        href: "#contact",
                        accent: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/PathSplit.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/PathSplit.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gravity/PathSplit.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = PathSplit;
function PathCard(props) {
    const { title, body, action, href, accent } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: [
            "block rounded-3xl border p-6 transition-all",
            accent ? "border-[var(--grav-accent)]/30 bg-[var(--grav-accent)]/10 hover:bg-[var(--grav-accent)]/14" : "border-white/10 bg-black/10 hover:bg-black/15"
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold tracking-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/PathSplit.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)]",
                        children: accent ? "signal" : "standard"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/PathSplit.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/PathSplit.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-sm leading-relaxed text-[var(--grav-dim)]",
                children: body
            }, void 0, false, {
                fileName: "[project]/src/components/gravity/PathSplit.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-ink)]/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1 w-1 rounded-full bg-[var(--grav-accent)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/PathSplit.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    action
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/PathSplit.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gravity/PathSplit.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c1 = PathCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "PathSplit");
__turbopack_context__.k.register(_c1, "PathCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/gravity/QuietFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuietFooter",
    ()=>QuietFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/gravity/QuietFooter.tsx
"use client";
;
function QuietFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "contact",
        className: "rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)]",
                children: "contact"
            }, void 0, false, {
                fileName: "[project]/src/components/gravity/QuietFooter.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 text-lg font-semibold tracking-tight",
                children: "Two messages work best."
            }, void 0, false, {
                fileName: "[project]/src/components/gravity/QuietFooter.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-sm text-[var(--grav-dim)] leading-relaxed max-w-3xl",
                children: [
                    "1) What are you building. 2) Where do people hesitate or bounce.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/gravity/QuietFooter.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    "If you don’t know, say that. That’s usually the real starting point."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/QuietFooter.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-7 flex flex-col sm:flex-row gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "mailto:hello@tatedonohoe.au?subject=Project%20Signal&body=1)%20What%20are%20you%20building%3F%0A2)%20Where%20do%20people%20hesitate%20or%20bounce%3F%0A%0AContext%3A",
                        className: "inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-[10px] font-mono uppercase tracking-[0.22em] hover:bg-black/28 transition-colors",
                        children: "email"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/QuietFooter.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.instagram.com/",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/10 px-5 py-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)] hover:text-[var(--grav-ink)] hover:bg-black/14 transition-colors",
                        children: "instagram"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/QuietFooter.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm:ml-auto text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--grav-dim)] self-center",
                        children: "built for signal, not clicks"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gravity/QuietFooter.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gravity/QuietFooter.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gravity/QuietFooter.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = QuietFooter;
var _c;
__turbopack_context__.k.register(_c, "QuietFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$GravityStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gravity/GravityStage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$CognitiveTrap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gravity/CognitiveTrap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$ArtifactStrip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gravity/ArtifactStrip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$PathSplit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gravity/PathSplit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$QuietFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gravity/QuietFooter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/app/page.tsx
"use client";
;
;
;
;
;
;
function Page() {
    _s();
    const prefersReduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-[100svh] bg-[var(--grav-bg)] text-[var(--grav-ink)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$GravityStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GravityStage"], {
                reduced: !!prefersReduced
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-6xl px-6 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$CognitiveTrap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CognitiveTrap"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$ArtifactStrip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArtifactStrip"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-14",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$PathSplit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathSplit"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gravity$2f$QuietFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuietFooter"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Page, "+unYVajia9EPCCnuCfd4PsBxgcE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_de15e79d._.js.map