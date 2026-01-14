(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/likes/LikesContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LikesProvider",
    ()=>LikesProvider,
    "useLikes",
    ()=>useLikes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const Ctx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function LikesProvider({ children }) {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const setVariant = (key, title, variant, on, meta)=>{
        setItems((prev)=>{
            // Construct LikeRecord explicitly to satisfy exactOptionalPropertyTypes
            let existing;
            const maybe = prev[key];
            if (maybe) {
                existing = maybe;
            } else {
                existing = {
                    key,
                    title,
                    variants: new Set(),
                    tags: meta?.tags ?? []
                };
                if (meta?.codeUrl !== undefined) existing.codeUrl = meta.codeUrl;
            }
            const nextVariants = new Set(existing.variants);
            if (on) nextVariants.add(variant);
            else nextVariants.delete(variant);
            const next = {
                ...existing,
                variants: nextVariants
            };
            if (meta?.tags) next.tags = meta.tags;
            if (meta?.codeUrl !== undefined) next.codeUrl = meta.codeUrl;
            return {
                ...prev,
                [key]: next
            };
        });
    };
    const clear = ()=>setItems({});
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LikesProvider.useMemo[value]": ()=>({
                items,
                setVariant,
                clear
            })
    }["LikesProvider.useMemo[value]"], [
        items
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ctx.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/likes/LikesContext.tsx",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
_s(LikesProvider, "ZOFrN8djeRacljrw03wVCxv0fvY=");
_c = LikesProvider;
function useLikes() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Ctx);
    if (!ctx) throw new Error("useLikes must be used within LikesProvider");
    return ctx;
}
_s1(useLikes, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "LikesProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/likes/SummaryForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SummaryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$LikesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/likes/LikesContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SummaryForm() {
    _s();
    const { items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$LikesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLikes"])();
    const liked = Object.entries(items).filter(([_, rec])=>rec.variants.size > 0);
    if (!liked.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-center text-gray-500 text-sm",
            children: "You haven’t selected any components yet."
        }, void 0, false, {
            fileName: "[project]/src/components/likes/SummaryForm.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    const subject = `Interface selection (${liked.length} picks)`;
    // Build plain-text email body
    const bodyText = [
        "Hi Tate,",
        "",
        "Here are the components I liked:",
        "",
        ...liked.map(([key, rec])=>{
            const variants = Array.from(rec.variants).join(", ");
            const tags = rec.tags?.join(", ");
            return [
                `• ${rec.title || key} [${variants}]`,
                rec.codeUrl ? `  code: ${rec.codeUrl}` : null,
                tags ? `  tags: ${tags}` : null,
                ""
            ].filter(Boolean).join("\n");
        }),
        "--",
        "Sent from tatedonohoe.au / The Interface Collection"
    ].join("\n");
    // URL-encode for mailto
    const encodedBody = encodeURIComponent(bodyText);
    const encodedSubject = encodeURIComponent(subject);
    const mailto = `mailto:tate@ecodia.au?subject=${encodedSubject}&body=${encodedBody}`;
    // Optional webmail fallbacks
    const gmail = new URL("https://mail.google.com/mail/");
    gmail.searchParams.set("view", "cm");
    gmail.searchParams.set("fs", "1");
    gmail.searchParams.set("to", "tate@ecodia.au");
    gmail.searchParams.set("su", subject);
    gmail.searchParams.set("body", bodyText);
    const outlook = new URL("https://outlook.office.com/mail/deeplink/compose");
    outlook.searchParams.set("to", "tate@ecodia.au");
    outlook.searchParams.set("subject", subject);
    outlook.searchParams.set("body", bodyText);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 border-t bg-white/70 backdrop-blur-md rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold mb-3",
                children: "Send your selections"
            }, void 0, false, {
                fileName: "[project]/src/components/likes/SummaryForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-5",
                children: "This will open your email client with your chosen components and notes pre-filled."
            }, void 0, false, {
                fileName: "[project]/src/components/likes/SummaryForm.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: mailto,
                        className: "px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition",
                        children: "Send via Mail App"
                    }, void 0, false, {
                        fileName: "[project]/src/components/likes/SummaryForm.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: gmail.toString(),
                        target: "_blank",
                        rel: "noreferrer",
                        className: "px-4 py-2 rounded-md border text-sm font-medium hover:bg-gray-50 transition",
                        children: "Open in Gmail"
                    }, void 0, false, {
                        fileName: "[project]/src/components/likes/SummaryForm.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: outlook.toString(),
                        target: "_blank",
                        rel: "noreferrer",
                        className: "px-4 py-2 rounded-md border text-sm font-medium hover:bg-gray-50 transition",
                        children: "Open in Outlook"
                    }, void 0, false, {
                        fileName: "[project]/src/components/likes/SummaryForm.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>navigator.clipboard.writeText(bodyText),
                        className: "px-4 py-2 rounded-md border text-sm font-medium hover:bg-gray-50 transition",
                        children: "Copy message"
                    }, void 0, false, {
                        fileName: "[project]/src/components/likes/SummaryForm.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/likes/SummaryForm.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/likes/SummaryForm.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(SummaryForm, "RWgW82yRaRAY9z1jjj48vfS3MxU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$LikesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLikes"]
    ];
});
_c = SummaryForm;
var _c;
__turbopack_context__.k.register(_c, "SummaryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/spec/SpecCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpecCard",
    ()=>SpecCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$LikesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/likes/LikesContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const VARIANTS = [
    {
        key: "like",
        label: "I like it"
    },
    {
        key: "love",
        label: "Love this"
    },
    {
        key: "use_it",
        label: "Put this in my build"
    },
    {
        key: "almost",
        label: "Almost (needs tweak)"
    },
    {
        key: "not_for_me",
        label: "Not for me"
    }
];
function SpecCard({ open, onClose, anchor, featureKey, title, codeUrl, tags }) {
    _s();
    const { items, setVariant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$LikesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLikes"])();
    const rec = items[featureKey];
    const checked = (k)=>rec?.variants.has(k) ?? false;
    if (!open) return null;
    const ax = anchor?.x ?? 100;
    const ay = anchor?.y ?? 100;
    const w = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable";
    const h = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed z-50 w-[320px] rounded-xl border bg-white/80 backdrop-blur-md shadow-xl",
        style: {
            top: Math.min(ay + 12, h - 360),
            left: Math.min(ax - 160, w - 340)
        },
        role: "dialog",
        "aria-label": `${title} spec card`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-medium",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/spec/SpecCard.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                tags?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 flex flex-wrap gap-1",
                                    children: tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] px-2 py-0.5 rounded-full bg-black/5",
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/src/components/spec/SpecCard.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/spec/SpecCard.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/spec/SpecCard.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "shrink-0 rounded-md px-2 py-1 text-sm hover:bg-black/5",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/spec/SpecCard.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/spec/SpecCard.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                codeUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: codeUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "mt-3 inline-block text-sm underline",
                    children: "View code"
                }, void 0, false, {
                    fileName: "[project]/src/components/spec/SpecCard.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 space-y-2",
                    children: VARIANTS.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: checked(v.key),
                                    onChange: (e)=>{
                                        const meta = {};
                                        if (codeUrl) meta.codeUrl = codeUrl;
                                        if (tags) meta.tags = tags;
                                        setVariant(featureKey, title, v.key, e.target.checked, meta);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/spec/SpecCard.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: v.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/spec/SpecCard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, v.key, true, {
                            fileName: "[project]/src/components/spec/SpecCard.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/spec/SpecCard.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/spec/SpecCard.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/spec/SpecCard.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(SpecCard, "t2zIkDV4lHQ1RHqihipRrO5EgmU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$LikesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLikes"]
    ];
});
_c = SpecCard;
var _c;
__turbopack_context__.k.register(_c, "SpecCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpecCardPortal",
    ()=>SpecCardPortal,
    "openSpecCard",
    ()=>openSpecCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
let openSpecCardInternal = ()=>{};
function openSpecCard(p) {
    openSpecCardInternal(p);
}
function SpecCardPortal() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [payload, setPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SpecCardPortal.useCallback[handleOpen]": (p)=>{
            setPayload(p);
            setOpen(true);
        }
    }["SpecCardPortal.useCallback[handleOpen]"], []);
    openSpecCardInternal = handleOpen;
    const specProps = {
        open,
        onClose: ()=>setOpen(false),
        featureKey: payload?.featureKey ?? "",
        title: payload?.title ?? "",
        ...payload?.codeUrl ? {
            codeUrl: payload.codeUrl
        } : {},
        ...payload?.tags ? {
            tags: payload.tags
        } : {},
        ...payload?.anchor ? {
            anchor: payload.anchor
        } : {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpecCard"], {
        ...specProps
    }, void 0, false, {
        fileName: "[project]/src/components/spec/SpecCardPortal.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
_s(SpecCardPortal, "onMl70xka8Uoivm3AZo+g58F8Lo=");
_c = SpecCardPortal;
var _c;
__turbopack_context__.k.register(_c, "SpecCardPortal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoHoverTopBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoHoverTopBar",
    ()=>DemoHoverTopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
"use client";
;
;
function DemoHoverTopBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                        featureKey: "hover-top-bar",
                        title: "HoverTopBar",
                        codeUrl: "https://github.com/your/repo/path/HoverTopBar.tsx",
                        tags: [
                            "interaction",
                            "layout",
                            "hover-reveal"
                        ],
                        anchor: {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }),
                className: "sticky top-0 z-10 border rounded-xl bg-white/70 backdrop-blur p-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: "HoverTopBar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoHoverTopBar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:underline",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoHoverTopBar.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:underline",
                                children: "Work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoHoverTopBar.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:underline",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoHoverTopBar.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/DemoHoverTopBar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/DemoHoverTopBar.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-black/70",
                children: "Move your cursor over the bar to summon the Spec Card. This shows how the interaction is documented."
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoHoverTopBar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[60vh]"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoHoverTopBar.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoHoverTopBar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = DemoHoverTopBar;
var _c;
__turbopack_context__.k.register(_c, "DemoHoverTopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoScrollingCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoScrollingCards",
    ()=>DemoScrollingCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
"use client";
;
;
function DemoScrollingCards() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-4",
                children: "ScrollingCards"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoScrollingCards.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: Array.from({
                    length: 9
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                                featureKey: "scrolling-cards",
                                title: "ScrollingCards",
                                codeUrl: "https://github.com/your/repo/path/ScrollingCards.tsx",
                                tags: [
                                    "layout",
                                    "scroll",
                                    "parallax-lite"
                                ],
                                anchor: {
                                    x: e.clientX,
                                    y: e.clientY
                                }
                            }),
                        className: "aspect-[4/3] rounded-xl border bg-white/70 backdrop-blur p-4 cursor-pointer hover:shadow-md transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-black/70",
                            children: [
                                "Card #",
                                i + 1
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/demos/DemoScrollingCards.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/components/demos/DemoScrollingCards.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoScrollingCards.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoScrollingCards.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = DemoScrollingCards;
var _c;
__turbopack_context__.k.register(_c, "DemoScrollingCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoOverloadedEcomm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoOverloadedEcomm",
    ()=>DemoOverloadedEcomm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DemoOverloadedEcomm() {
    _s();
    const [pulse, setPulse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoOverloadedEcomm.useEffect": ()=>{
            const id = setInterval({
                "DemoOverloadedEcomm.useEffect.id": ()=>setPulse({
                        "DemoOverloadedEcomm.useEffect.id": (p)=>!p
                    }["DemoOverloadedEcomm.useEffect.id"])
            }["DemoOverloadedEcomm.useEffect.id"], 650);
            return ({
                "DemoOverloadedEcomm.useEffect": ()=>clearInterval(id)
            })["DemoOverloadedEcomm.useEffect"];
        }
    }["DemoOverloadedEcomm.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border p-4 bg-white/70 backdrop-blur cursor-pointer",
            onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                    featureKey: "overloaded-ecomm",
                    title: "OverloadedEcomm (Ironic)",
                    codeUrl: "https://github.com/your/repo/path/OverloadedEcomm.tsx",
                    tags: [
                        "satire",
                        "commerce",
                        "banner-storm"
                    ],
                    anchor: {
                        x: e.clientX,
                        y: e.clientY
                    }
                }),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-xs uppercase tracking-wide",
                    children: pulse ? "🔥  FINAL HOURS  🔥" : "💥  90% OFF EVERYTHING  💥"
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 grid grid-cols-2 md:grid-cols-4 gap-3",
                    children: Array.from({
                        length: 8
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-lg border p-3 ${pulse ? "bg-yellow-100" : "bg-pink-100"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-24 rounded-md bg-white/70 border"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm font-medium",
                                    children: [
                                        "Deal #",
                                        i + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs line-through opacity-60",
                                    children: "$199"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-semibold",
                                    children: "$9.99"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-2 text-xs underline",
                                    children: "Add to cart"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/demos/DemoOverloadedEcomm.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(DemoOverloadedEcomm, "wo1NH3tNn5J1Ap+tPb0MnQnWl2A=");
_c = DemoOverloadedEcomm;
var _c;
__turbopack_context__.k.register(_c, "DemoOverloadedEcomm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoExpandCollapseSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoExpandCollapseSidebar",
    ()=>DemoExpandCollapseSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DemoExpandCollapseSidebar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-3",
                children: "Expand/Collapse Sidebar"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `transition-[width] duration-300 bg-white/70 backdrop-blur border-r ${open ? "w-64" : "w-12"}`,
                        onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                                featureKey: "expand-sidebar",
                                title: "ExpandCollapseSidebar",
                                tags: [
                                    "sidebar",
                                    "layout",
                                    "resize"
                                ],
                                codeUrl: "https://github.com/your/repo/path/ExpandCollapseSidebar.tsx",
                                anchor: {
                                    x: e.clientX,
                                    y: e.clientY
                                }
                            }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen((v)=>!v),
                                className: "w-full text-left px-3 py-2 text-sm hover:bg-black/5",
                                children: open ? "⟨⟨ Collapse" : "⟩⟩"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "px-3 pb-3 text-sm space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:underline cursor-pointer",
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:underline cursor-pointer",
                                        children: "Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:underline cursor-pointer",
                                        children: "Analytics"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-black/70",
                                children: "Click the sidebar to open its Spec Card."
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-40 rounded-lg border bg-white/60 mt-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoExpandCollapseSidebar.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(DemoExpandCollapseSidebar, "dVkDIfRb5RN4FjtonjBYYwpg89o=");
_c = DemoExpandCollapseSidebar;
var _c;
__turbopack_context__.k.register(_c, "DemoExpandCollapseSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoParallaxHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoParallaxHero",
    ()=>DemoParallaxHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DemoParallaxHero() {
    _s();
    const [y, setY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoParallaxHero.useEffect": ()=>{
            const onScroll = {
                "DemoParallaxHero.useEffect.onScroll": ()=>setY(window.scrollY)
            }["DemoParallaxHero.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "DemoParallaxHero.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["DemoParallaxHero.useEffect"];
        }
    }["DemoParallaxHero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-[50vh] overflow-hidden rounded-xl border mx-auto max-w-5xl px-0",
        onMouseEnter: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                featureKey: "parallax-hero",
                title: "ParallaxHero",
                tags: [
                    "parallax",
                    "motion",
                    "hero"
                ],
                codeUrl: "https://github.com/your/repo/path/ParallaxHero.tsx",
                anchor: {
                    x: e.clientX,
                    y: e.clientY
                }
            }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('/vercel.svg')] bg-no-repeat bg-center bg-contain opacity-10",
                style: {
                    transform: `translateY(${y * 0.1}px)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoParallaxHero.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('/globe.svg')] bg-no-repeat bg-center opacity-25",
                style: {
                    transform: `translateY(${y * 0.2}px)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoParallaxHero.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full grid place-items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-5xl font-semibold",
                            children: "Parallax Hero"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoParallaxHero.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black/70 mt-2",
                            children: "Scroll to feel depth. Hover for Spec Card."
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoParallaxHero.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/demos/DemoParallaxHero.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoParallaxHero.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoParallaxHero.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(DemoParallaxHero, "/slePoHeZAYn9Z8z3nv1hA+Qbbw=");
_c = DemoParallaxHero;
var _c;
__turbopack_context__.k.register(_c, "DemoParallaxHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoDragDropBoard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoDragDropBoard",
    ()=>DemoDragDropBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const initial = {
    todo: [
        {
            id: "a",
            text: "Collect brief"
        },
        {
            id: "b",
            text: "Wire components"
        }
    ],
    doing: [
        {
            id: "c",
            text: "Prototype UI"
        }
    ],
    done: [
        {
            id: "d",
            text: "Decide palette"
        }
    ]
};
function DemoDragDropBoard() {
    _s();
    const [cols, setCols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const onDragStart = (e, id, from)=>{
        e.dataTransfer.setData("text/plain", JSON.stringify({
            id,
            from
        }));
    };
    const onDrop = (e, to)=>{
        const data = JSON.parse(e.dataTransfer.getData("text/plain"));
        if (!data) return;
        setCols((prev)=>{
            const fromArr = prev[data.from].filter((c)=>c.id !== data.id);
            const moved = Object.values(prev).flat().find((c)=>c.id === data.id);
            if (!moved) return prev;
            return {
                ...prev,
                [data.from]: fromArr,
                [to]: [
                    ...prev[to],
                    moved
                ]
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-medium",
                        children: "Drag & Drop Board"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoDragDropBoard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-sm underline",
                        onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                                featureKey: "drag-drop-board",
                                title: "DragDropBoard",
                                tags: [
                                    "drag",
                                    "drop",
                                    "kanban"
                                ],
                                codeUrl: "https://github.com/your/repo/path/DragDropBoard.tsx",
                                anchor: {
                                    x: e.clientX ?? 200,
                                    y: e.clientY ?? 120
                                }
                            }),
                        children: "Show Spec"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoDragDropBoard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/DemoDragDropBoard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-3",
                children: Object.entries(cols).map(([k, arr])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border bg-white/70 backdrop-blur p-3 min-h-[180px]",
                        onDragOver: (e)=>e.preventDefault(),
                        onDrop: (e)=>onDrop(e, k),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium capitalize mb-2",
                                children: k
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoDragDropBoard.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: arr.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        draggable: true,
                                        onDragStart: (e)=>onDragStart(e, c.id, k),
                                        className: "rounded-md border bg-white p-2 text-sm cursor-grab active:cursor-grabbing",
                                        children: c.text
                                    }, c.id, false, {
                                        fileName: "[project]/src/components/demos/DemoDragDropBoard.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoDragDropBoard.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, k, true, {
                        fileName: "[project]/src/components/demos/DemoDragDropBoard.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoDragDropBoard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoDragDropBoard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(DemoDragDropBoard, "yczOdlxskpftKZffhrBTfhg/NuY=");
_c = DemoDragDropBoard;
var _c;
__turbopack_context__.k.register(_c, "DemoDragDropBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoMinimalistLanding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoMinimalistLanding",
    ()=>DemoMinimalistLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
"use client";
;
;
function DemoMinimalistLanding() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-4xl text-center px-6 py-14 rounded-2xl border bg-white/60",
        onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                featureKey: "minimalist-landing",
                title: "MinimalistLanding",
                tags: [
                    "landing",
                    "minimal",
                    "cta"
                ],
                codeUrl: "https://github.com/your/repo/path/MinimalistLanding.tsx",
                anchor: {
                    x: e.clientX,
                    y: e.clientY
                }
            }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl md:text-5xl font-semibold tracking-tight",
                children: "Fast. Quiet. Precise."
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoMinimalistLanding.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-black/70",
                children: "A clean landing header with restraint and a single intent."
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoMinimalistLanding.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-4 py-2 rounded-md bg-black text-white text-sm",
                        children: "Get Started"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoMinimalistLanding.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-4 py-2 rounded-md border text-sm",
                        children: "See Work"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoMinimalistLanding.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/DemoMinimalistLanding.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoMinimalistLanding.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = DemoMinimalistLanding;
var _c;
__turbopack_context__.k.register(_c, "DemoMinimalistLanding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoOSTechFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoOSTechFrame",
    ()=>DemoOSTechFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
"use client";
;
;
function DemoOSTechFrame() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border bg-white/70 overflow-hidden",
            onMouseEnter: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                    featureKey: "os-tech-frame",
                    title: "OSTechFrame",
                    tags: [
                        "os",
                        "frame",
                        "window"
                    ],
                    codeUrl: "https://github.com/your/repo/path/OSTechFrame.tsx",
                    anchor: {
                        x: e.clientX,
                        y: e.clientY
                    }
                }),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-3 py-2 border-b bg-black/5 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-3 w-3 rounded-full bg-red-400 inline-block"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoOSTechFrame.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-3 w-3 rounded-full bg-yellow-400 inline-block"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoOSTechFrame.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-3 w-3 rounded-full bg-green-400 inline-block"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoOSTechFrame.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-2 font-medium",
                            children: "window.tsx"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoOSTechFrame.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/demos/DemoOSTechFrame.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 text-sm text-black/70",
                    children: "An OS-style window with traffic-light controls. Mouse over to surface its spec."
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/DemoOSTechFrame.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/demos/DemoOSTechFrame.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/demos/DemoOSTechFrame.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = DemoOSTechFrame;
var _c;
__turbopack_context__.k.register(_c, "DemoOSTechFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoPhotographyGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoPhotographyGallery",
    ()=>DemoPhotographyGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
"use client";
;
;
function DemoPhotographyGallery() {
    const imgs = [
        "/next.svg",
        "/vercel.svg",
        "/window.svg",
        "/globe.svg",
        "/file.svg",
        "/next.svg"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-3",
                children: "Photography Grid"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoPhotographyGallery.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                children: imgs.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "aspect-[4/3] rounded-xl border bg-white/70 grid place-items-center cursor-pointer",
                        onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                                featureKey: "photo-grid",
                                title: "PhotographyGallery",
                                tags: [
                                    "gallery",
                                    "grid",
                                    "photos"
                                ],
                                codeUrl: "https://github.com/your/repo/path/PhotographyGallery.tsx",
                                anchor: {
                                    x: e.clientX,
                                    y: e.clientY
                                }
                            }),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: src,
                            alt: "",
                            className: "h-12 opacity-70"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoPhotographyGallery.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/components/demos/DemoPhotographyGallery.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoPhotographyGallery.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoPhotographyGallery.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = DemoPhotographyGallery;
var _c;
__turbopack_context__.k.register(_c, "DemoPhotographyGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoAccordionFAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoAccordionFAQ",
    ()=>DemoAccordionFAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const QA = [
    {
        q: "What’s included?",
        a: "Design, build, performance tuning, and handover."
    },
    {
        q: "Do I own it?",
        a: "Yes. 100% ownership, no templates, no lock-in."
    },
    {
        q: "How fast?",
        a: "Depends on scope, but fast by default."
    }
];
function DemoAccordionFAQ() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-3xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-3",
                children: "Accordion FAQ"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoAccordionFAQ.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "rounded-xl border bg-white/60 divide-y",
                children: QA.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full flex items-center justify-between px-4 py-3 text-left",
                                onClick: (e)=>{
                                    setOpen((v)=>v === i ? null : i);
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                                        featureKey: "accordion-faq",
                                        title: "AccordionFAQ",
                                        tags: [
                                            "accordion",
                                            "faq",
                                            "disclosure"
                                        ],
                                        codeUrl: "https://github.com/your/repo/path/AccordionFAQ.tsx",
                                        anchor: {
                                            x: e.clientX ?? 200,
                                            y: e.clientY ?? 120
                                        }
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: row.q
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/demos/DemoAccordionFAQ.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: open === i ? "–" : "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/demos/DemoAccordionFAQ.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/demos/DemoAccordionFAQ.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            open === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-3 text-sm text-black/70",
                                children: row.a
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoAccordionFAQ.tsx",
                                lineNumber: 35,
                                columnNumber: 28
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/demos/DemoAccordionFAQ.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoAccordionFAQ.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoAccordionFAQ.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(DemoAccordionFAQ, "kwOYwiAlGcf16u2JaFl+OYF7OQ8=");
_c = DemoAccordionFAQ;
var _c;
__turbopack_context__.k.register(_c, "DemoAccordionFAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoPricingMatrix.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoPricingMatrix",
    ()=>DemoPricingMatrix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
"use client";
;
;
function DemoPricingMatrix() {
    const tiers = [
        {
            name: "Starter",
            price: "$",
            points: [
                "1 page",
                "Email capture",
                "Basic styling"
            ]
        },
        {
            name: "Pro",
            price: "$$",
            points: [
                "Up to 5 pages",
                "CMS",
                "Animations"
            ]
        },
        {
            name: "Custom",
            price: "$$$",
            points: [
                "Unlimited",
                "Integrations",
                "Ownership"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-3",
                children: "Pricing Matrix (Illustrative)"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoPricingMatrix.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                children: tiers.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border bg-white/70 backdrop-blur p-4 cursor-pointer",
                        onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                                featureKey: "pricing-matrix",
                                title: "PricingMatrix",
                                tags: [
                                    "pricing",
                                    "cards",
                                    "grid"
                                ],
                                codeUrl: "https://github.com/your/repo/path/PricingMatrix.tsx",
                                anchor: {
                                    x: e.clientX,
                                    y: e.clientY
                                }
                            }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm uppercase tracking-wide",
                                children: t.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoPricingMatrix.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-semibold my-2",
                                children: t.price
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoPricingMatrix.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm text-black/70 space-y-1",
                                children: t.points.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            p
                                        ]
                                    }, p, true, {
                                        fileName: "[project]/src/components/demos/DemoPricingMatrix.tsx",
                                        lineNumber: 32,
                                        columnNumber: 36
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoPricingMatrix.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, t.name, true, {
                        fileName: "[project]/src/components/demos/DemoPricingMatrix.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoPricingMatrix.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoPricingMatrix.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = DemoPricingMatrix;
var _c;
__turbopack_context__.k.register(_c, "DemoPricingMatrix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoStickyCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoStickyCTA",
    ()=>DemoStickyCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DemoStickyCTA() {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoStickyCTA.useEffect": ()=>{
            const onScroll = {
                "DemoStickyCTA.useEffect.onScroll": ()=>setShow(window.scrollY > 300)
            }["DemoStickyCTA.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "DemoStickyCTA.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["DemoStickyCTA.useEffect"];
        }
    }["DemoStickyCTA.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-3xl px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-medium mb-3",
                        children: "Sticky CTA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoStickyCTA.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-black/70",
                        children: "Scroll down to reveal the sticky call-to-action."
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoStickyCTA.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-48"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoStickyCTA.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/DemoStickyCTA.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full border bg-white/90 backdrop-blur px-5 py-2 shadow-md cursor-pointer",
                onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                        featureKey: "sticky-cta",
                        title: "StickyCTA",
                        tags: [
                            "cta",
                            "sticky",
                            "scroll"
                        ],
                        codeUrl: "https://github.com/your/repo/path/StickyCTA.tsx",
                        anchor: {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }),
                children: "Let’s build it →"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoStickyCTA.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(DemoStickyCTA, "bXBd/WbmO9A8Q7bxaOKZvuJyGc0=");
_c = DemoStickyCTA;
var _c;
__turbopack_context__.k.register(_c, "DemoStickyCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoMarqueeBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoMarqueeBanner",
    ()=>DemoMarqueeBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
"use client";
;
;
function DemoMarqueeBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-3",
                children: "Marquee Banner"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoMarqueeBanner.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-xl border bg-white/70 cursor-pointer",
                onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                        featureKey: "marquee-banner",
                        title: "MarqueeBanner",
                        tags: [
                            "marquee",
                            "banner",
                            "announcements"
                        ],
                        codeUrl: "https://github.com/your/repo/path/MarqueeBanner.tsx",
                        anchor: {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-nowrap animate-[marquee_12s_linear_infinite] text-sm p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-6",
                            children: "New build slots opening next week"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoMarqueeBanner.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-6",
                            children: "Ownership-first web apps"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoMarqueeBanner.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-6",
                            children: "Zero template lock-in"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoMarqueeBanner.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/demos/DemoMarqueeBanner.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoMarqueeBanner.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoMarqueeBanner.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoMarqueeBanner.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = DemoMarqueeBanner;
var _c;
__turbopack_context__.k.register(_c, "DemoMarqueeBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoSplitScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoSplitScreen",
    ()=>DemoSplitScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
"use client";
;
;
function DemoSplitScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 rounded-xl border overflow-hidden",
            onMouseEnter: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                    featureKey: "split-screen",
                    title: "SplitScreen",
                    tags: [
                        "layout",
                        "split",
                        "hero"
                    ],
                    codeUrl: "https://github.com/your/repo/path/SplitScreen.tsx",
                    anchor: {
                        x: e.clientX,
                        y: e.clientY
                    }
                }),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-white/70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold",
                            children: "Left: Message"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoSplitScreen.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black/70 mt-2",
                            children: "Copy/content lives here with a clean CTA."
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoSplitScreen.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/demos/DemoSplitScreen.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[url('/window.svg')] bg-center bg-no-repeat bg-white/40 min-h-[180px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/DemoSplitScreen.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/demos/DemoSplitScreen.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/demos/DemoSplitScreen.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = DemoSplitScreen;
var _c;
__turbopack_context__.k.register(_c, "DemoSplitScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoTabs",
    ()=>DemoTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DemoTabs() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("a");
    const T = (id, label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: (e)=>{
                setTab(id);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                    featureKey: "tabs",
                    title: "Tabs",
                    tags: [
                        "tabs",
                        "navigation"
                    ],
                    codeUrl: "https://github.com/your/repo/path/Tabs.tsx",
                    anchor: {
                        x: e.clientX ?? 200,
                        y: e.clientY ?? 120
                    }
                });
            },
            className: `px-3 py-1 rounded-md border text-sm ${tab === id ? "bg-black text-white" : ""}`,
            children: label
        }, id, false, {
            fileName: "[project]/src/components/demos/DemoTabs.tsx",
            lineNumber: 8,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-3",
                children: "Tabs"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoTabs.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-3",
                children: [
                    "a",
                    "b",
                    "c"
                ].map((k, i)=>T(k, `Tab ${i + 1}`))
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoTabs.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border bg-white/70 p-4 text-sm",
                children: [
                    "Current: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: tab.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoTabs.tsx",
                        lineNumber: 29,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/DemoTabs.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoTabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(DemoTabs, "lKur+ZLwdKhO3/Zw1cBTChjT3SE=");
_c = DemoTabs;
var _c;
__turbopack_context__.k.register(_c, "DemoTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoToast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoToast",
    ()=>DemoToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DemoToast() {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-3",
                children: "Toast"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoToast.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "px-3 py-2 rounded-md border text-sm",
                onClick: (e)=>{
                    setShow(true);
                    setTimeout(()=>setShow(false), 1500);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                        featureKey: "toast",
                        title: "Toast",
                        tags: [
                            "feedback",
                            "toast",
                            "notification"
                        ],
                        codeUrl: "https://github.com/your/repo/path/Toast.tsx",
                        anchor: {
                            x: e.clientX ?? 200,
                            y: e.clientY ?? 120
                        }
                    });
                },
                children: "Trigger Toast"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoToast.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 rounded-md bg-black text-white text-sm px-3 py-2 shadow",
                children: "Saved!"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoToast.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoToast.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(DemoToast, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");
_c = DemoToast;
var _c;
__turbopack_context__.k.register(_c, "DemoToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoModal",
    ()=>DemoModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DemoModal() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-3",
                children: "Modal"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoModal.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "px-3 py-2 rounded-md border text-sm",
                onClick: (e)=>{
                    setOpen(true);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                        featureKey: "modal",
                        title: "Modal",
                        tags: [
                            "dialog",
                            "overlay"
                        ],
                        codeUrl: "https://github.com/your/repo/path/Modal.tsx",
                        anchor: {
                            x: e.clientX ?? 200,
                            y: e.clientY ?? 120
                        }
                    });
                },
                children: "Open Modal"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoModal.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 grid place-items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border bg-white p-4 w-[360px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-medium mb-2",
                            children: "Modal Title"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoModal.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black/70",
                            children: "A simple modal with backdrop."
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoModal.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-2 rounded-md border text-sm",
                                onClick: ()=>setOpen(false),
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/DemoModal.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/DemoModal.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/demos/DemoModal.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoModal.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoModal.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(DemoModal, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = DemoModal;
var _c;
__turbopack_context__.k.register(_c, "DemoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/DemoTooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoTooltip",
    ()=>DemoTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DemoTooltip() {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-5xl px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-medium mb-3",
                children: "Tooltip"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/DemoTooltip.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-block relative",
                onMouseEnter: (e)=>{
                    setShow(true);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openSpecCard"])({
                        featureKey: "tooltip",
                        title: "Tooltip",
                        tags: [
                            "hover",
                            "help"
                        ],
                        codeUrl: "https://github.com/your/repo/path/Tooltip.tsx",
                        anchor: {
                            x: e.clientX,
                            y: e.clientY
                        }
                    });
                },
                onMouseLeave: ()=>setShow(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-3 py-2 rounded-md border text-sm",
                        children: "Hover me"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoTooltip.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2 mt-2 text-xs bg-black text-white px-2 py-1 rounded",
                        children: "Helpful tip"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/DemoTooltip.tsx",
                        lineNumber: 25,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/DemoTooltip.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/DemoTooltip.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(DemoTooltip, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");
_c = DemoTooltip;
var _c;
__turbopack_context__.k.register(_c, "DemoTooltip");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$LikesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/likes/LikesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$SummaryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/likes/SummaryForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spec/SpecCardPortal.tsx [app-client] (ecmascript)");
// existing demos you already had
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoHoverTopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoHoverTopBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoScrollingCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoScrollingCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoOverloadedEcomm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoOverloadedEcomm.tsx [app-client] (ecmascript)");
// NEW demos
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoExpandCollapseSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoExpandCollapseSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoParallaxHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoParallaxHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoDragDropBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoDragDropBoard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoMinimalistLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoMinimalistLanding.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoOSTechFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoOSTechFrame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoPhotographyGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoPhotographyGallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoAccordionFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoAccordionFAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoPricingMatrix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoPricingMatrix.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoStickyCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoStickyCTA.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoMarqueeBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoMarqueeBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoSplitScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoSplitScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoToast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/DemoTooltip.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$LikesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikesProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-[var(--page-bg,#f9f8f5)] text-[var(--ink,#0b0c0d)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "max-w-3xl mx-auto px-6 py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-5xl tracking-tight",
                            children: "The Interface Collection"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-base md:text-lg text-black/70",
                            children: "Click, hover, drag — a spec card will appear. Tick “I like it.” At the end, email your selection."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-24 pb-48",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoHoverTopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoHoverTopBar"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoScrollingCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoScrollingCards"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoOverloadedEcomm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoOverloadedEcomm"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoExpandCollapseSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoExpandCollapseSidebar"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoParallaxHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoParallaxHero"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoDragDropBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoDragDropBoard"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoMinimalistLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoMinimalistLanding"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoOSTechFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoOSTechFrame"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoPhotographyGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoPhotographyGallery"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoAccordionFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoAccordionFAQ"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoPricingMatrix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoPricingMatrix"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoStickyCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoStickyCTA"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoMarqueeBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoMarqueeBanner"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoSplitScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoSplitScreen"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoTabs"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoToast"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoModal"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$DemoTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoTooltip"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spec$2f$SpecCardPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpecCardPortal"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likes$2f$SummaryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f28660ab._.js.map