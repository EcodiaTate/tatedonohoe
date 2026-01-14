module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/vanishing.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "blink": "vanishing-module__NqjGpW__blink",
  "center": "vanishing-module__NqjGpW__center",
  "centerPrompt": "vanishing-module__NqjGpW__centerPrompt",
  "cursorPrompt": "vanishing-module__NqjGpW__cursorPrompt",
  "emailInput": "vanishing-module__NqjGpW__emailInput",
  "fadeIn": "vanishing-module__NqjGpW__fadeIn",
  "fadeOut": "vanishing-module__NqjGpW__fadeOut",
  "fadeText": "vanishing-module__NqjGpW__fadeText",
  "hiddenInput": "vanishing-module__NqjGpW__hiddenInput",
  "pop": "vanishing-module__NqjGpW__pop",
  "progress": "vanishing-module__NqjGpW__progress",
  "shimmer": "vanishing-module__NqjGpW__shimmer",
  "shimmerMove": "vanishing-module__NqjGpW__shimmerMove",
  "smiley": "vanishing-module__NqjGpW__smiley",
  "smileyOn": "vanishing-module__NqjGpW__smileyOn",
  "submitButton": "vanishing-module__NqjGpW__submitButton",
  "surface": "vanishing-module__NqjGpW__surface",
  "textArea": "vanishing-module__NqjGpW__textArea",
});
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/vanishing.module.css [app-ssr] (css module)");
"use client";
;
;
;
const INBOX = ("TURBOPACK compile-time value", "tate@ecodia.au") || "you@example.com";
function Page() {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("email");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [idea, setIdea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [elapsed, setElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fading, setFading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [smileyPulse, setSmileyPulse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const duration = 45_000; // 45s
    const startRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashSmiley = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSmileyPulse((n)=>n + 1);
    }, []);
    /* ------------------------------------------------------------
     Backspace disabled in idea mode
  ------------------------------------------------------------ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "idea") return;
        const handler = (e)=>{
            if (e.key === "Backspace") {
                e.preventDefault();
                flashSmiley();
            }
        };
        window.addEventListener("keydown", handler);
        return ()=>window.removeEventListener("keydown", handler);
    }, [
        step,
        flashSmiley
    ]);
    /* ------------------------------------------------------------
     Timer
  ------------------------------------------------------------ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "idea") return;
        startRef.current = Date.now();
        const tick = setInterval(()=>{
            setElapsed(Date.now() - (startRef.current || 0));
        }, 100);
        const end = setTimeout(()=>{
            submit();
        }, duration);
        return ()=>{
            clearInterval(tick);
            clearTimeout(end);
        };
    }, [
        step
    ]);
    /* ------------------------------------------------------------
     Enter submits (Shift+Enter allowed)
  ------------------------------------------------------------ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "idea") return;
        const handler = (e)=>{
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
            }
        };
        window.addEventListener("keydown", handler);
        return ()=>window.removeEventListener("keydown", handler);
    }, [
        step,
        email,
        idea
    ]);
    /* ------------------------------------------------------------
     Submit → FormSubmit (client only)
  ------------------------------------------------------------ */ const submit = async ()=>{
        if (fading || step !== "idea") return;
        setFading(true);
        const form = new FormData();
        form.append("email", email);
        form.append("idea", idea);
        form.append("_subject", `New idea from ${email}`);
        form.append("_template", "box");
        form.append("_captcha", "false");
        try {
            await fetch(`https://formsubmit.co/${INBOX}`, {
                method: "POST",
                body: form
            });
        } catch  {
        // ignore — experience continues regardless
        }
        setTimeout(()=>setStep("done"), 2200);
    };
    /* ------------------------------------------------------------
     Shimmer highlighting
  ------------------------------------------------------------ */ const shimmerHTML = ()=>{
        const highlight = /\b(build|make|create|design|invent|launch|ship|start|grow|change|break|learn|play|explore|future|world|tool|product|system|app|site|platform|ai|agent|community|marketplace|wallet|token|quest|local|beautiful|weird|simple|radical|alive)\b/gi;
        const escaped = idea.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return escaped.replace(highlight, (m)=>`<span class="${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shimmer}">${m}</span>`);
    };
    /* ------------------------------------------------------------
     Renders
  ------------------------------------------------------------ */ if (step === "done") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].center,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeText,
                children: "Well done. I’ll have a think."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this);
    }
    if (step === "email") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].center,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    if (/\S+@\S+\.\S+/.test(email)) setStep("idea");
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    autoFocus: true,
                    required: true,
                    type: "email",
                    value: email,
                    onChange: (e)=>setEmail(e.target.value),
                    placeholder: "where should i reply ?",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emailInput
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 144,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this);
    }
    const progress = Math.min(elapsed / duration, 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].surface} ${fading ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeOut : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].smiley} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].smileyOn}`,
                children: ":)"
            }, smileyPulse, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progress,
                style: {
                    transform: `scaleX(${progress})`
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            idea.length === 0 && !fading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerPrompt,
                children: "what are you trying to build"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textArea,
                dangerouslySetInnerHTML: {
                    __html: shimmerHTML()
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                autoFocus: true,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hiddenInput,
                value: idea,
                onChange: (e)=>setIdea(e.target.value),
                "aria-label": "What are you trying to build?"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$vanishing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                onClick: submit,
                children: "Done →"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7ea46c29._.js.map