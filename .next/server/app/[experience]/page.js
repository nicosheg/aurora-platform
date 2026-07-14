(() => {
var exports = {};
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 5105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./maryjane/config.json": [
		5172,
		172
	],
	"./nana/config.json": [
		3393,
		393
	],
	"./nanaeg/config.json": [
		2084,
		84
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5105;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 5705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        '[experience]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8183)), "/data/data/com.termux/files/home/aurora-platform/app/[experience]/page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1842)), "/data/data/com.termux/files/home/aurora-platform/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/data/data/com.termux/files/home/aurora-platform/app/[experience]/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/[experience]/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/[experience]/page",
        pathname: "/[experience]",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 1061:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5489))

/***/ }),

/***/ 1851:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9100))

/***/ }),

/***/ 6573:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23))

/***/ }),

/***/ 5489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ExperiencePage)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(569);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 194 modules
var motion = __webpack_require__(4571);
;// CONCATENATED MODULE: ./components/Particles.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Particles({ timeOfDay = "morning" }) {
    const canvasRef = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let particles = [];
        let id;
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);
        const color = timeOfDay === "evening" ? "212,139,160" : timeOfDay === "afternoon" ? "232,180,192" : "212,139,160";
        for(let i = 0; i < 60; i++){
            particles.push({
                x: Math.random() * canvas.width,
                y: canvas.height + 10,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: -Math.random() * 0.5 - 0.2,
                opacity: Math.random() * 0.5 + 0.1,
                life: 0,
                maxLife: Math.random() * 400 + 200
            });
        }
        const animate = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles = particles.filter((p)=>p.life < p.maxLife);
            while(particles.length < 60)particles.push({
                x: Math.random() * canvas.width,
                y: canvas.height + 10,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: -Math.random() * 0.5 - 0.2,
                opacity: Math.random() * 0.5 + 0.1,
                life: 0,
                maxLife: Math.random() * 400 + 200
            });
            particles.forEach((p)=>{
                p.x += p.speedX;
                p.y += p.speedY;
                p.life++;
                const a = p.opacity * (1 - p.life / p.maxLife);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color},${a})`;
                ctx.fill();
                if (p.size > 1.3) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${color},${a * 0.15})`;
                    ctx.fill();
                }
            });
            id = requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            cancelAnimationFrame(id);
            window.removeEventListener("resize", resize);
        };
    }, [
        timeOfDay
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
            opacity: timeOfDay === "evening" ? 0.9 : 0.7
        }
    });
}

;// CONCATENATED MODULE: ./components/PetalField.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function PetalField({ timeOfDay = "morning" }) {
    const canvasRef = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let petals = [];
        let id;
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);
        const count = timeOfDay === "evening" ? 45 : timeOfDay === "afternoon" ? 30 : 20;
        for(let i = 0; i < count; i++){
            petals.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 10 + 6,
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: Math.random() * 0.5 + 0.2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.8,
                opacity: Math.random() * 0.4 + 0.2
            });
        }
        const drawPetal = (x, y, size, rot, alpha)=>{
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rot * Math.PI / 180);
            ctx.globalAlpha = alpha;
            ctx.fillStyle = "#f0c0d0";
            ctx.beginPath();
            ctx.ellipse(0, 0, size * 0.5, size * 0.25, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#e8b4c0";
            ctx.beginPath();
            ctx.ellipse(size * 0.3, 0, size * 0.25, size * 0.15, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        };
        const animate = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            petals.forEach((p)=>{
                p.x += p.speedX;
                p.y += p.speedY;
                p.rotation += p.rotationSpeed;
                if (p.y > canvas.height + 20) {
                    p.y = -20;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x < -20) p.x = canvas.width + 20;
                if (p.x > canvas.width + 20) p.x = -20;
                drawPetal(p.x, p.y, p.size, p.rotation, p.opacity);
            });
            id = requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            cancelAnimationFrame(id);
            window.removeEventListener("resize", resize);
        };
    }, [
        timeOfDay
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-1"
    });
}

// EXTERNAL MODULE: ./contexts/MusicContext.tsx
var MusicContext = __webpack_require__(9100);
;// CONCATENATED MODULE: ./components/LandingScreen.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function LandingScreen({ onBegin, herName }) {
    const [step, setStep] = (0,react_.useState)(0);
    const { startMusic } = (0,MusicContext.useMusic)();
    (0,react_.useEffect)(()=>{
        const t1 = setTimeout(()=>setStep(1), 1200);
        const t2 = setTimeout(()=>setStep(2), 4800);
        const t3 = setTimeout(()=>setStep(3), 8800);
        const t4 = setTimeout(()=>setStep(4), 12800);
        return ()=>{
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, []);
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const handleBegin = ()=>{
        startMusic();
        onBegin();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f]",
        exit: {
            opacity: 0,
            filter: "blur(8px)"
        },
        transition: {
            duration: 2,
            ease: [
                0.43,
                0.13,
                0.23,
                0.96
            ]
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-0 overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px]",
                    style: {
                        background: "rgba(212,139,160,0.06)"
                    },
                    animate: {
                        scale: [
                            1,
                            1.12,
                            1
                        ],
                        opacity: [
                            0.5,
                            0.7,
                            0.5
                        ]
                    },
                    transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative z-10 text-center px-6 max-w-2xl",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                        children: step >= 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.3,
                                duration: 1.2
                            },
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "inline-flex items-center gap-3 glass-card-light px-5 py-2.5 rounded-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "w-2 h-2 rounded-full bg-[#d48ba0] animate-pulse"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-white/50 text-xs tracking-[0.2em] uppercase",
                                            children: "Handcrafted for one person"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-white/20 text-xs mt-3 font-mono",
                                    children: [
                                        "Visitors: 1 \xa0|\xa0 Owner: ",
                                        herName
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AnimatePresence/* AnimatePresence */.M, {
                        mode: "wait",
                        children: [
                            step === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.p, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 2,
                                    ease: [
                                        0.43,
                                        0.13,
                                        0.23,
                                        0.96
                                    ]
                                },
                                className: "text-2xl md:text-4xl font-serif font-light text-white/70",
                                children: [
                                    "Today is ",
                                    today,
                                    "."
                                ]
                            }, "s1"),
                            step === 2 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 2
                                },
                                className: "text-xl md:text-3xl font-serif font-light text-white/60",
                                children: "Millions of people woke up today..."
                            }, "s2"),
                            step === 3 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 2
                                },
                                className: "text-2xl md:text-4xl font-serif font-light text-white/80",
                                children: "But today belongs to one person."
                            }, "s3"),
                            step >= 4 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 2.5,
                                    ease: [
                                        0.43,
                                        0.13,
                                        0.23,
                                        0.96
                                    ]
                                },
                                className: "space-y-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.h1, {
                                        className: "text-display font-serif font-light gradient-text leading-tight",
                                        initial: {
                                            letterSpacing: "0.2em"
                                        },
                                        animate: {
                                            letterSpacing: "0.02em"
                                        },
                                        transition: {
                                            duration: 2.5,
                                            delay: 0.5
                                        },
                                        children: [
                                            "Happy Birthday,",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            herName
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 2,
                                            duration: 1.5
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                                            onClick: handleBegin,
                                            className: "px-10 py-4 bg-gradient-to-br from-[#d48ba0] to-[#c08090] text-white font-serif text-lg rounded-full shadow-2xl shadow-[#d48ba0]/25 hover:shadow-[#d48ba0]/45 transition-all duration-500",
                                            whileHover: {
                                                scale: 1.04
                                            },
                                            whileTap: {
                                                scale: 0.96
                                            },
                                            children: "Begin Your Journey"
                                        })
                                    })
                                ]
                            }, "s4")
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/MemoryGallery.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function MemoryGallery({ photos }) {
    const [selected, setSelected] = (0,react_.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4",
                children: photos.map((photo, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: i * 0.12
                        },
                        className: "relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/5]",
                        onClick: ()=>setSelected(photo),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: photo.src,
                                alt: photo.alt,
                                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute bottom-0 left-0 right-0 p-3 z-20",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-white/90 text-sm font-light",
                                    children: photo.caption
                                })
                            }),
                            photo.hiddenStory && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute top-3 right-3 z-20",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white/60 text-xs bg-white/10 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: "Tap for story"
                                })
                            })
                        ]
                    }, photo.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                children: selected && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
                    onClick: ()=>setSelected(null),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            scale: 0.9
                        },
                        animate: {
                            scale: 1
                        },
                        exit: {
                            scale: 0.9
                        },
                        className: "glass-card max-w-lg w-full overflow-hidden",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: selected.src,
                                alt: selected.alt,
                                className: "w-full aspect-[4/5] object-cover"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-white/90 font-serif text-lg mb-2",
                                        children: selected.caption
                                    }),
                                    selected.hiddenStory && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                                        initial: {
                                            opacity: 0,
                                            height: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            height: "auto"
                                        },
                                        className: "text-white/60 text-sm",
                                        children: selected.hiddenStory
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ConfettiEffect.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const COLORS = [
    "#d48ba0",
    "#f0c0d0",
    "#e8b4c0",
    "#fce4ec",
    "#c08090",
    "#f5d0d8",
    "#fdf0f4",
    "#d48ba0"
];
function ConfettiEffect({ active }) {
    const canvasRef = (0,react_.useRef)(null);
    const [pieces, setPieces] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        if (!active) {
            setPieces([]);
            return;
        }
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const newPieces = Array.from({
            length: 80
        }, ()=>({
                x: Math.random() * canvas.width,
                y: -20 - Math.random() * 200,
                size: Math.random() * 8 + 4,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                speedY: Math.random() * 1.5 + 0.8,
                speedX: (Math.random() - 0.5) * 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 3,
                opacity: 1
            }));
        setPieces(newPieces);
        const ctx = canvas.getContext("2d");
        let frame = 0, id;
        const animate = ()=>{
            frame++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            setPieces((prev)=>prev.map((p)=>({
                        ...p,
                        y: p.y + p.speedY,
                        x: p.x + p.speedX + Math.sin(frame * 0.02 + p.x * 0.01) * 0.5,
                        rotation: p.rotation + p.rotationSpeed,
                        opacity: frame > 100 ? p.opacity - 0.008 : p.opacity
                    })).filter((p)=>p.opacity > 0 && p.y < canvas.height + 50));
            pieces.forEach((p)=>{
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
                ctx.restore();
            });
            id = requestAnimationFrame(animate);
        };
        animate();
        return ()=>cancelAnimationFrame(id);
    }, [
        active
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-50"
    });
}

;// CONCATENATED MODULE: ./components/ChapterOne.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function ChapterOne({ herName, greeting, message, photos, birthdayDate }) {
    const [confetti, setConfetti] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const t = setTimeout(()=>setConfetti(true), 1200);
        return ()=>clearTimeout(t);
    }, []);
    const date = new Date(birthdayDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "relative min-h-screen py-24 px-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ConfettiEffect, {
                active: confetti
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-4xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.3
                        },
                        className: "text-[#d48ba0] text-sm uppercase tracking-[0.3em] text-center mb-8",
                        children: "Chapter One — Today Begins"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1.2,
                            ease: [
                                0.43,
                                0.13,
                                0.23,
                                0.96
                            ]
                        },
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.h1, {
                                className: "text-display font-serif font-light gradient-text leading-tight",
                                initial: {
                                    letterSpacing: "0.3em"
                                },
                                animate: {
                                    letterSpacing: "0.02em"
                                },
                                transition: {
                                    duration: 2,
                                    delay: 0.5
                                },
                                children: greeting
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1.5
                                },
                                className: "mt-6 space-y-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-white/70 font-light text-lg font-serif italic",
                                        children: herName
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-white/50 text-sm",
                                        children: date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LiveClock, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 2,
                            duration: 1
                        },
                        className: "glass-card p-8 md:p-12 mb-16 text-center max-w-2xl mx-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-white/80 text-lg leading-relaxed font-light font-serif",
                            children: message
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 2.8
                        },
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-serif text-white/90 text-center mb-8",
                                children: "Moments to treasure"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MemoryGallery, {
                                photos: photos
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 3.5
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white/50 font-serif italic text-lg",
                                children: "This isn't everything."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white/40 text-sm mt-2",
                                children: "Come back later today for Chapter Two."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function LiveClock() {
    const [time, setTime] = (0,react_.useState)("");
    (0,react_.useEffect)(()=>{
        const u = ()=>setTime(new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }));
        u();
        const i = setInterval(u, 1000);
        return ()=>clearInterval(i);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            delay: 2
        },
        className: "text-white/40 text-sm font-mono mt-2",
        children: time
    });
}

;// CONCATENATED MODULE: ./components/Timeline.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Timeline({ memories }) {
    const [expanded, setExpanded] = (0,react_.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d48ba0]/40 via-[#d48ba0]/20 to-transparent"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "space-y-12 md:space-y-16",
                children: memories.map((m, i)=>{
                    const isLeft = i % 2 === 0, isOpen = expanded === m.id;
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: i * 0.15
                        },
                        className: `relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-[#d48ba0] shadow-[0_0_12px_rgba(212,139,160,0.5)] z-10 mt-2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "glass-card-light p-5 md:p-6 cursor-pointer hover:border-white/20 transition-all",
                                    onClick: ()=>setExpanded(isOpen ? null : m.id),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-xs text-[#d48ba0] uppercase tracking-widest font-light",
                                            children: m.time
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-lg md:text-xl font-serif text-white/90 mt-2",
                                            children: m.title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                                            animate: {
                                                height: isOpen ? "auto" : 0,
                                                opacity: isOpen ? 1 : 0
                                            },
                                            className: "overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-white/60 text-sm leading-relaxed mt-3",
                                                    children: m.description
                                                }),
                                                m.image && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: m.image,
                                                    alt: m.title,
                                                    className: "mt-4 rounded-xl w-full object-cover max-h-48"
                                                })
                                            ]
                                        }),
                                        !isOpen && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-white/40 text-xs mt-2",
                                            children: "Tap to expand"
                                        })
                                    ]
                                })
                            })
                        ]
                    }, m.id);
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ChapterTwo.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ChapterTwo({ title, subtitle, timeline }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "relative min-h-screen py-20 px-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-4xl mx-auto relative z-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                            className: "text-[#d48ba0] text-sm uppercase tracking-[0.3em] mb-4",
                            children: "Chapter Two"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-heading font-serif font-light gradient-text",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-white/40 font-serif italic mt-4 text-lg",
                            children: subtitle
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Timeline, {
                    memories: timeline
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    className: "text-center mt-16",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white/20 text-sm",
                        children: "One more chapter awaits..."
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/AudioPlayer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function AudioPlayer({ src, label = "Voice Message" }) {
    const [playing, setPlaying] = (0,react_.useState)(false);
    const [progress, setProgress] = (0,react_.useState)(0);
    const [duration, setDuration] = (0,react_.useState)(0);
    const audioRef = (0,react_.useRef)(null);
    const { lowerVolume, restoreVolume } = (0,MusicContext.useMusic)();
    const toggle = ()=>{
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
            restoreVolume();
        } else {
            lowerVolume();
            audioRef.current.play();
        }
        setPlaying(!playing);
    };
    const handleEnded = ()=>{
        setPlaying(false);
        restoreVolume();
    };
    const fmt = (s)=>{
        const m = Math.floor(s / 60), sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2, "0")}`;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "glass-card p-6 max-w-md mx-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-white/60 text-sm uppercase tracking-widest mb-4 text-center",
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                        onClick: toggle,
                        className: "w-14 h-14 rounded-full bg-gradient-to-br from-[#d48ba0] to-[#c08090] flex items-center justify-center shadow-lg shadow-[#d48ba0]/20",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: playing ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "white",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    x: "6",
                                    y: "4",
                                    width: "4",
                                    height: "16",
                                    rx: "1"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    x: "14",
                                    y: "4",
                                    width: "4",
                                    height: "16",
                                    rx: "1"
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "white",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M8 5v14l11-7z"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-1.5 bg-white/10 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                    className: "h-full bg-gradient-to-r from-[#d48ba0] to-[#f0c0d0] rounded-full",
                                    style: {
                                        width: `${progress}%`
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between mt-2 text-xs text-white/40",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: audioRef.current ? fmt(audioRef.current.currentTime) : "0:00"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: duration ? fmt(duration) : "0:00"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                ref: audioRef,
                src: src,
                onTimeUpdate: ()=>audioRef.current && setProgress(audioRef.current.currentTime / audioRef.current.duration * 100 || 0),
                onLoadedMetadata: ()=>audioRef.current && setDuration(audioRef.current.duration),
                onEnded: handleEnded,
                preload: "metadata"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ChapterThree.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function ChapterThree({ letter, voiceMessageUrl, videoUrl, finalSurprise, herName }) {
    const [reveal, setReveal] = (0,react_.useState)(false);
    const videoRef = (0,react_.useRef)(null);
    const { lowerVolume, restoreVolume } = (0,MusicContext.useMusic)();
    const handleVideoPlay = ()=>{
        lowerVolume();
    };
    const handleVideoPause = ()=>{
        restoreVolume();
    };
    const handleVideoEnded = ()=>{
        restoreVolume();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "relative min-h-screen py-20 px-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-3xl mx-auto relative z-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                            className: "text-[#d48ba0] text-sm uppercase tracking-[0.3em] mb-4",
                            children: "Final Chapter"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-heading font-serif font-light gradient-text",
                            children: "A Letter for You"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                    className: "glass-card p-8 md:p-12 mb-12",
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: true
                    },
                    children: [
                        letter.map((p, i)=>/*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: i * 0.6
                                },
                                className: "text-white/70 font-serif text-lg leading-relaxed mb-5 last:mb-0",
                                children: p
                            }, i)),
                        /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                delay: letter.length * 0.6 + 0.5
                            },
                            className: "text-white/40 text-sm mt-6 text-right font-serif italic",
                            children: "— MrNicosh"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.5
                    },
                    className: "mb-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(AudioPlayer, {
                        src: voiceMessageUrl,
                        label: "A Voice Message for You"
                    })
                }),
                videoUrl && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.7
                    },
                    className: "mb-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "glass-card overflow-hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                            ref: videoRef,
                            src: videoUrl,
                            controls: true,
                            className: "w-full rounded-xl",
                            poster: "/photos/video-poster.jpg",
                            preload: "metadata",
                            onPlay: handleVideoPlay,
                            onPause: handleVideoPause,
                            onEnded: handleVideoEnded
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 1
                    },
                    className: "text-center",
                    children: !reveal ? /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                        onClick: ()=>setReveal(true),
                        className: "px-10 py-5 glass-card-light text-white/80 font-serif text-lg hover:border-[#d48ba0]/40",
                        whileHover: {
                            scale: 1.03
                        },
                        whileTap: {
                            scale: 0.97
                        },
                        children: "I have one last gift..."
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        className: "glass-card p-8 md:p-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-4xl mb-4 block",
                                children: "\uD83C\uDF81"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white/80 font-serif text-xl leading-relaxed",
                                children: finalSurprise
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/CountdownTimer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function CountdownTimer({ targetTime, targetDate, onComplete }) {
    const [left, setLeft] = (0,react_.useState)(null);
    const [done, setDone] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const [h, m] = targetTime.split(":").map(Number);
        const tgt = new Date(targetDate);
        tgt.setHours(h, m, 0, 0);
        const upd = ()=>{
            const d = tgt.getTime() - Date.now();
            if (d <= 0) {
                setDone(true);
                onComplete();
                return;
            }
            setLeft({
                h: Math.floor(d / 3600000),
                m: Math.floor(d % 3600000 / 60000),
                s: Math.floor(d % 60000 / 1000)
            });
        };
        upd();
        const i = setInterval(upd, 1000);
        return ()=>clearInterval(i);
    }, [
        targetTime,
        targetDate,
        onComplete
    ]);
    if (done) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "text-center py-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-lg text-white/60 font-light mb-6 font-serif italic",
                children: "The next chapter opens in..."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center gap-4 md:gap-6",
                children: left && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "glass-card-light w-20 h-20 md:w-24 md:h-24 flex items-center justify-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-3xl md:text-4xl font-light font-serif gradient-text",
                                        children: String(left.h).padStart(2, "0")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xs text-white/40 mt-2 uppercase tracking-widest",
                                    children: "Hours"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-2xl text-white/20 font-light mb-6",
                            children: ":"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "glass-card-light w-20 h-20 md:w-24 md:h-24 flex items-center justify-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-3xl md:text-4xl font-light font-serif gradient-text",
                                        children: String(left.m).padStart(2, "0")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xs text-white/40 mt-2 uppercase tracking-widest",
                                    children: "Minutes"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-2xl text-white/20 font-light mb-6",
                            children: ":"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "glass-card-light w-20 h-20 md:w-24 md:h-24 flex items-center justify-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-3xl md:text-4xl font-light font-serif gradient-text",
                                        children: String(left.s).padStart(2, "0")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xs text-white/40 mt-2 uppercase tracking-widest",
                                    children: "Seconds"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/StarField.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function StarField({ active }) {
    const canvasRef = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        if (!active) return;
        const c = canvasRef.current;
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        const ctx = c.getContext("2d");
        const stars = Array.from({
            length: 200
        }, ()=>({
                x: Math.random() * c.width,
                y: Math.random() * c.height,
                size: Math.random() * 2.5 + 0.5,
                opacity: Math.random(),
                speed: Math.random() * 0.02 + 0.005,
                phase: Math.random() * Math.PI * 2
            }));
        let frame = 0, id;
        const animate = ()=>{
            frame++;
            ctx.clearRect(0, 0, c.width, c.height);
            stars.forEach((s)=>{
                const twinkle = Math.sin(frame * s.speed + s.phase) * 0.5 + 0.5, alpha = s.opacity * (0.4 + twinkle * 0.6);
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                ctx.fill();
                if (s.size > 1.5) {
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.size * 4, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(212,139,160,${alpha * 0.12})`;
                    ctx.fill();
                }
            });
            id = requestAnimationFrame(animate);
        };
        animate();
        return ()=>cancelAnimationFrame(id);
    }, [
        active
    ]);
    return active ? /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0"
    }) : null;
}

;// CONCATENATED MODULE: ./components/FinalScreen.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function FinalScreen({ herName, senderName }) {
    const [step, setStep] = (0,react_.useState)(0);
    const { setAudioRef } = (0,MusicContext.useMusic)();
    const [audioEl, setAudioEl] = (0,react_.useState)(null);
    (0,react_.useEffect)(()=>{
        const el = document.querySelector("audio[loop]");
        if (el) setAudioEl(el);
        const t1 = setTimeout(()=>setStep(1), 1200);
        const t2 = setTimeout(()=>setStep(2), 4000);
        const t3 = setTimeout(()=>setStep(3), 7000);
        const t4 = setTimeout(()=>setStep(4), 10000);
        const t5 = setTimeout(()=>setStep(5), 14000);
        const t6 = setTimeout(()=>{
            if (audioEl) {
                let vol = audioEl.volume;
                const fade = setInterval(()=>{
                    vol = Math.max(0, vol - 0.02);
                    audioEl.volume = vol;
                    if (vol <= 0) {
                        clearInterval(fade);
                        audioEl.pause();
                    }
                }, 150);
            }
        }, 15000);
        return ()=>{
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            clearTimeout(t5);
            clearTimeout(t6);
        };
    }, [
        audioEl
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StarField, {
                active: step >= 2
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative z-10 text-center px-6 max-w-2xl",
                children: [
                    step >= 0 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1.5
                        },
                        className: "text-2xl md:text-4xl font-serif font-light text-white/80",
                        children: "Close your eyes."
                    }),
                    step >= 1 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1.5
                        },
                        className: "mt-8 text-5xl md:text-7xl font-serif font-light text-white/40",
                        children: "3"
                    }),
                    step >= 2 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1.5
                        },
                        className: "mt-8 text-5xl md:text-7xl font-serif font-light text-white/60",
                        children: "2"
                    }),
                    step >= 3 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1.5
                        },
                        className: "mt-8 text-5xl md:text-7xl font-serif font-light text-white/80",
                        children: "1"
                    }),
                    step >= 4 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1.5
                        },
                        className: "mt-12 space-y-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "text-display font-serif font-light gradient-text",
                                children: [
                                    "Happy Birthday, ",
                                    herName
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.5
                                },
                                className: "text-white/60 font-serif text-lg",
                                children: "Now check your phone."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                className: "text-6xl",
                                animate: {
                                    scale: [
                                        1,
                                        1.3,
                                        1
                                    ],
                                    opacity: [
                                        0.7,
                                        1,
                                        0.7
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity
                                },
                                children: "♥"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1.5
                                },
                                className: "text-white/40 text-sm mt-8 font-light tracking-wider",
                                children: [
                                    "— ",
                                    senderName
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 2.5
                                },
                                className: "mt-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "https://fiduciaweb.netlify.app",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "fiducia-signature text-white/30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "dot"
                                        }),
                                        "Intelligence by FIDUCIA"
                                    ]
                                })
                            })
                        ]
                    }),
                    step >= 5 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 2
                        },
                        className: "mt-16 space-y-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-xl md:text-2xl font-serif font-light text-white/70 leading-relaxed",
                                children: [
                                    "Some experiences are built with code.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "This one was built with thought, time, and care",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "— just for you."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-center gap-1",
                                children: [
                                    ...Array(5)
                                ].map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.span, {
                                        className: "text-xl",
                                        animate: {
                                            opacity: [
                                                0.3,
                                                1,
                                                0.3
                                            ],
                                            scale: [
                                                1,
                                                1.2,
                                                1
                                            ]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        },
                                        children: "✦"
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 2
                                },
                                className: "mt-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "https://fiduciaweb.netlify.app",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "fiducia-signature text-white/30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "dot"
                                        }),
                                        "Intelligence by FIDUCIA"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/EasterEggs.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const icons = {
    star: "✦",
    heart: "♥",
    flower: "✿",
    moon: "☾",
    butterfly: "\uD83E\uDD8B"
};
function EasterEggs({ eggs, timeOfDay = "morning" }) {
    const [active, setActive] = (0,react_.useState)(null);
    const handleTap = (egg)=>{
        if (navigator.vibrate) navigator.vibrate(20);
        setActive(egg);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            eggs.map((e)=>{
                // Show only some eggs based on time
                if (e.type === "butterfly" && timeOfDay !== "afternoon" && timeOfDay !== "evening") return null;
                if (e.type === "moon" && timeOfDay === "morning") return null;
                return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                    className: "fixed z-30 text-2xl cursor-pointer select-none hover:scale-150 transition-transform duration-500",
                    style: {
                        left: `${e.position.x}%`,
                        top: `${e.position.y}%`
                    },
                    animate: e.type === "heart" ? {
                        scale: [
                            1,
                            1.25,
                            1
                        ],
                        opacity: [
                            0.7,
                            1,
                            0.7
                        ]
                    } : e.animation === "pulse" ? {
                        scale: [
                            1,
                            1.2,
                            1
                        ],
                        opacity: [
                            0.5,
                            1,
                            0.5
                        ]
                    } : e.animation === "sparkle" ? {
                        rotate: [
                            0,
                            10,
                            -10,
                            0
                        ],
                        opacity: [
                            0.6,
                            1,
                            0.6
                        ]
                    } : e.animation === "glow" ? {
                        opacity: [
                            0.5,
                            0.9,
                            0.5
                        ]
                    } : e.animation === "flutter" ? {
                        y: [
                            0,
                            -8,
                            0
                        ],
                        rotate: [
                            0,
                            5,
                            -5,
                            0
                        ]
                    } : {},
                    transition: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    onClick: ()=>handleTap(e),
                    whileTap: {
                        scale: 0.7
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "opacity-50 hover:opacity-100 transition-opacity",
                        children: icons[e.type] || "✦"
                    })
                }, e.id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                children: active && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm",
                    onClick: ()=>setActive(null),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            scale: 0.8,
                            y: 20
                        },
                        animate: {
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            scale: 0.8,
                            y: 20
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        },
                        className: "glass-card p-8 max-w-sm mx-4 text-center",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.span, {
                                className: "text-5xl mb-4 block",
                                animate: {
                                    scale: [
                                        1,
                                        1.3,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity
                                },
                                children: icons[active.type]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white/80 font-serif text-lg leading-relaxed",
                                children: active.message
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "mt-6 text-white/40 text-sm hover:text-white/70 transition-colors",
                                onClick: ()=>setActive(null),
                                children: "Close"
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/MusicToggle.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function MusicToggle({ musicUrl }) {
    const [playing, setPlaying] = (0,react_.useState)(false);
    const [hasInteracted, setHasInteracted] = (0,react_.useState)(false);
    const audioRef = (0,react_.useRef)(null);
    const { setAudioRef, startMusic: contextStart, isPlaying } = (0,MusicContext.useMusic)();
    (0,react_.useEffect)(()=>{
        if (audioRef.current) setAudioRef(audioRef.current);
    }, [
        setAudioRef
    ]);
    (0,react_.useEffect)(()=>{
        if (isPlaying) setPlaying(true);
        else setPlaying(false);
    }, [
        isPlaying
    ]);
    const toggle = ()=>{
        if (!hasInteracted) {
            setHasInteracted(true);
            contextStart();
            return;
        }
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play();
            setPlaying(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                onClick: toggle,
                className: "fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card-light flex items-center justify-center hover:border-white/30 transition-all duration-500",
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: 0.9
                },
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 2
                },
                children: playing ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "1.5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M9 18V5l12-2v13"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: "6",
                            cy: "18",
                            r: "3",
                            fill: "white",
                            stroke: "none"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: "18",
                            cy: "16",
                            r: "3",
                            fill: "white",
                            stroke: "none"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "1.5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M9 18V5l12-2v13"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: "6",
                            cy: "18",
                            r: "3"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: "18",
                            cy: "16",
                            r: "3"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                ref: audioRef,
                src: musicUrl,
                loop: true,
                preload: "auto"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/HiddenLetter.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function HiddenLetter() {
    const [visible, setVisible] = (0,react_.useState)(false);
    const [open, setOpen] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const check = ()=>{
            const now = new Date();
            const h = now.getHours();
            const m = now.getMinutes();
            // Show between 10:00 and 12:00
            const isTime = h === 10 && m >= 0 || h === 11;
            setVisible(isTime);
        };
        check();
        const i = setInterval(check, 60000);
        return ()=>clearInterval(i);
    }, []);
    if (!visible) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                className: "fixed bottom-24 left-6 z-40 w-14 h-14 rounded-full glass-card-light flex items-center justify-center cursor-pointer shadow-lg",
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: 0.9
                },
                onClick: ()=>setOpen(true),
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-2xl",
                    children: "✉️"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                children: open && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[160] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
                    onClick: ()=>setOpen(false),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            scale: 0.9,
                            y: 20
                        },
                        animate: {
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            scale: 0.9
                        },
                        className: "glass-card p-8 max-w-md text-center",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-4xl mb-4 block",
                                children: "\uD83D\uDC8C"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-white/80 font-serif text-lg leading-relaxed",
                                children: [
                                    "Just a little note to say…",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "you've made my world brighter simply by being in it.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "This day is for you — every moment, every smile, every surprise."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "mt-6 text-white/40 text-sm hover:text-white/70",
                                onClick: ()=>setOpen(false),
                                children: "Close"
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/DefaultExperience.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













function isTimePassed(timeStr, dateStr) {
    const [h, m] = timeStr.split(":").map(Number);
    const target = new Date(dateStr);
    target.setHours(h, m, 0, 0);
    return new Date() >= target;
}
function DefaultExperience({ config }) {
    const [current, setCurrent] = (0,react_.useState)("landing");
    const [unlocked, setUnlocked] = (0,react_.useState)([
        "landing"
    ]);
    const { name, birthdayDate, unlockSchedule, chapters, colors, easterEggs, musicUrl, senderName } = config;
    const check = (0,react_.useCallback)(()=>{
        const u = [
            "landing"
        ];
        if (isTimePassed(unlockSchedule.morning, birthdayDate)) u.push("one");
        if (isTimePassed(unlockSchedule.afternoon, birthdayDate)) u.push("two");
        if (isTimePassed(unlockSchedule.evening, birthdayDate)) u.push("three");
        setUnlocked(u);
    }, [
        unlockSchedule,
        birthdayDate
    ]);
    (0,react_.useEffect)(()=>{
        check();
        const i = setInterval(check, 30000);
        return ()=>clearInterval(i);
    }, [
        check
    ]);
    const handleBegin = ()=>setCurrent("one");
    const handleTwo = ()=>setUnlocked((prev)=>prev.includes("two") ? prev : [
                ...prev,
                "two"
            ]);
    const handleThree = ()=>setUnlocked((prev)=>prev.includes("three") ? prev : [
                ...prev,
                "three"
            ]);
    const handleComplete = ()=>setCurrent("final");
    const isOpen = (c)=>unlocked.includes(c);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "relative min-h-screen",
        style: {
            background: `radial-gradient(ellipse at 50% 0%, ${colors.primary}20 0%, transparent 50%),
                     radial-gradient(ellipse at 80% 100%, ${colors.accent}15 0%, transparent 50%),
                     ${colors.background}`,
            "--primary": colors.primary,
            "--accent": colors.accent
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Particles, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(PetalField, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MusicToggle, {
                musicUrl: musicUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EasterEggs, {
                eggs: easterEggs
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HiddenLetter, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                mode: "wait",
                children: current === "landing" && /*#__PURE__*/ jsx_runtime_.jsx(LandingScreen, {
                    onBegin: handleBegin,
                    herName: name
                })
            }),
            current !== "landing" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative z-10",
                children: [
                    isOpen("one") && /*#__PURE__*/ jsx_runtime_.jsx(ChapterOne, {
                        herName: name,
                        greeting: chapters.one.greeting,
                        message: chapters.one.message,
                        photos: chapters.one.photos,
                        birthdayDate: birthdayDate
                    }),
                    isOpen("two") ? /*#__PURE__*/ jsx_runtime_.jsx(ChapterTwo, {
                        title: chapters.two.title,
                        subtitle: chapters.two.subtitle,
                        timeline: chapters.two.timeline
                    }) : isOpen("one") ? /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "py-20 px-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CountdownTimer, {
                            targetTime: unlockSchedule.afternoon,
                            targetDate: birthdayDate,
                            onComplete: handleTwo
                        })
                    }) : null,
                    isOpen("three") ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ChapterThree, {
                                letter: chapters.three.letter,
                                voiceMessageUrl: chapters.three.voiceMessageUrl,
                                videoUrl: chapters.three.videoUrl,
                                finalSurprise: chapters.three.finalSurprise,
                                herName: name
                            }),
                            current !== "final" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center pb-20",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                                    onClick: handleComplete,
                                    className: "px-8 py-3 text-white/40 text-sm hover:text-white/70 transition-colors font-serif",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    children: "Complete the journey"
                                })
                            })
                        ]
                    }) : isOpen("two") ? /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "py-20 px-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CountdownTimer, {
                            targetTime: unlockSchedule.evening,
                            targetDate: birthdayDate,
                            onComplete: handleThree
                        })
                    }) : null,
                    current === "final" && /*#__PURE__*/ jsx_runtime_.jsx(FinalScreen, {
                        herName: name,
                        senderName: senderName
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/StoryOpening.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function StoryOpening({ name, onComplete, morningUnlocked }) {
    const [step, setStep] = (0,react_.useState)(0);
    const { startMusic } = (0,MusicContext.useMusic)();
    (0,react_.useEffect)(()=>{
        const t1 = setTimeout(()=>setStep(1), 1000);
        const t2 = setTimeout(()=>setStep(2), 3500);
        const t3 = setTimeout(()=>setStep(3), 6000);
        const t4 = setTimeout(()=>setStep(4), 8500);
        return ()=>{
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
        className: "fixed inset-0 z-[100] flex items-center justify-center",
        style: {
            background: "radial-gradient(ellipse at center, #1a1208 0%, #0d0a05 100%)"
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 2
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    ...Array(40)
                ].map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        className: "absolute w-1 h-1 rounded-full bg-[#f0d080]",
                        style: {
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        },
                        animate: {
                            opacity: [
                                0,
                                0.8,
                                0
                            ],
                            scale: [
                                0,
                                1.5,
                                0
                            ],
                            y: [
                                0,
                                -100
                            ]
                        },
                        transition: {
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative z-10 text-center px-6 max-w-2xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AnimatePresence/* AnimatePresence */.M, {
                    mode: "wait",
                    children: [
                        step === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                            initial: {
                                opacity: 0,
                                scale: 1.2
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                                    className: "text-6xl mb-4",
                                    animate: {
                                        rotate: [
                                            0,
                                            5,
                                            -5,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity
                                    },
                                    children: "\uD83D\uDCD6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl md:text-3xl font-serif font-light text-[#f0d080] italic",
                                    children: "Every hero has a beginning…"
                                })
                            ]
                        }, "s1"),
                        step === 2 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "text-xl md:text-3xl font-serif font-light text-[#f0d080]",
                            children: "And yours started on a very special day."
                        }, "s2"),
                        step === 3 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "text-2xl md:text-4xl font-serif font-light text-[#f0d080]",
                            children: "Today we celebrate the hero you are."
                        }, "s3"),
                        step >= 4 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            className: "space-y-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                    animate: {
                                        rotate: [
                                            0,
                                            10,
                                            -10,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity
                                    },
                                    className: "text-7xl",
                                    children: "\uD83D\uDC51"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: "text-4xl md:text-6xl font-serif font-light",
                                    style: {
                                        background: "linear-gradient(135deg, #f0d080 0%, #d4a574 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    },
                                    children: [
                                        "Happy Birthday,",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        name
                                    ]
                                }),
                                morningUnlocked ? /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                                    onClick: ()=>{
                                        startMusic();
                                        onComplete();
                                    },
                                    className: "px-10 py-4 bg-gradient-to-br from-[#d4a574] to-[#b8956e] text-white font-serif text-lg rounded-full shadow-2xl",
                                    whileHover: {
                                        scale: 1.04
                                    },
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    children: "Enter Your Story"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-[#f0d080]/60",
                                    children: "Your story begins soon… ⏳"
                                })
                            ]
                        }, "s4")
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/TinyPrincess.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function TinyPrincess({ photos, onNext }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.section, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                className: "text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4",
                children: "World One"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8",
                children: "Tiny Princess"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-12",
                children: photos.map((photo, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        className: "rounded-2xl overflow-hidden glass-card-light",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: photo.src,
                                alt: photo.alt,
                                className: "w-full h-48 object-cover"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "p-3 text-sm text-white/70",
                                children: photo.caption
                            })
                        ]
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                onClick: onNext,
                className: "px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]",
                whileHover: {
                    scale: 1.05
                },
                children: "Continue to Family Kingdom"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/FamilyKingdom.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function FamilyKingdom({ timeline, onNext, afternoonUnlocked, birthdayDate, unlockTime }) {
    const [selected, setSelected] = (0,react_.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.section, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                className: "text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4",
                children: "World Two"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8",
                children: "Family Kingdom"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-white/60 mb-8",
                children: "Tap each family member to see their special message."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-2 gap-6 max-w-md mx-auto mb-12",
                children: timeline.slice(0, 4).map((member, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        className: "glass-card-light p-6 cursor-pointer",
                        whileHover: {
                            scale: 1.05
                        },
                        onClick: ()=>setSelected(i),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-4xl mb-2",
                                children: member.time === "Mom" ? "\uD83D\uDC69‍\uD83D\uDC67" : member.time === "Dad" ? "\uD83D\uDC68‍\uD83D\uDC67" : member.time === "Brother" ? "\uD83D\uDC66" : "\uD83D\uDC75"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[#f0d080] font-serif",
                                children: member.time
                            })
                        ]
                    }, i))
            }),
            selected !== null && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "glass-card p-6 max-w-md mx-auto mb-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-white/80",
                    children: timeline[selected].description
                })
            }),
            afternoonUnlocked ? /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                onClick: onNext,
                className: "px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]",
                whileHover: {
                    scale: 1.05
                },
                children: "Continue to Treasure Hunt"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(CountdownTimer, {
                targetTime: unlockTime,
                targetDate: birthdayDate,
                onComplete: ()=>{}
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/TreasureHunt.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const treasures = [
    {
        id: 1,
        type: "\uD83E\uDD8B",
        message: "You make people smile without even trying. That's a superpower."
    },
    {
        id: 2,
        type: "⭐",
        message: "You are braver than you think, stronger than you seem, and loved more than you know."
    },
    {
        id: 3,
        type: "\uD83C\uDF38",
        message: "Your laugh is the sweetest sound in the world."
    },
    {
        id: 4,
        type: "\uD83C\uDF81",
        message: "The greatest gift is being your big brother."
    }
];
function TreasureHunt({ onNext }) {
    const [found, setFound] = (0,react_.useState)([]);
    const [active, setActive] = (0,react_.useState)(null);
    const discover = (id)=>{
        if (!found.includes(id)) setFound([
            ...found,
            id
        ]);
        setActive(id);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.section, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                className: "text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4",
                children: "World Three"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8",
                children: "Treasure Hunt"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-white/60 mb-8",
                children: "Find the hidden treasures – tap each one."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-wrap justify-center gap-6 mb-12",
                children: treasures.map((t)=>/*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                        className: "text-5xl p-4 glass-card-light rounded-full",
                        whileHover: {
                            scale: 1.2
                        },
                        whileTap: {
                            scale: 0.8
                        },
                        onClick: ()=>discover(t.id),
                        children: t.type
                    }, t.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                children: active && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "glass-card p-6 max-w-md mb-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white/80",
                        children: treasures.find((t)=>t.id === active)?.message
                    })
                })
            }),
            found.length === 4 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                onClick: onNext,
                className: "px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]",
                whileHover: {
                    scale: 1.05
                },
                children: "Continue to Dream World"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/DreamWorld.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function DreamWorld({ onNext }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.section, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                className: "text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4",
                children: "World Four"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8",
                children: "Dream World"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-6 max-w-md mx-auto mb-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white/70 text-lg",
                        children: "What do you want to become?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white/70 text-lg",
                        children: "What places do you want to visit?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white/70 text-lg",
                        children: "What talents will you discover?"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-[#f0d080]/60 italic mb-8",
                children: "Keep dreaming, little one. The future is yours."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                onClick: onNext,
                className: "px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]",
                whileHover: {
                    scale: 1.05
                },
                children: "Continue to Future Letters"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/FutureLetters.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const letters = [
    {
        from: "Future Brother",
        message: "Dear Nana, I hope by now you've discovered just how unstoppable you are. I've always known it."
    },
    {
        from: "Future Mum",
        message: "My sweet girl, you have grown into someone so incredible. I am so proud."
    },
    {
        from: "Future Dad",
        message: "Nana, you carry our strength and love wherever you go. Keep shining."
    },
    {
        from: "Your Future Self",
        message: "Dear me, thank you for never giving up on your dreams. You're doing amazing."
    }
];
function FutureLetters({ onNext }) {
    const [opened, setOpened] = (0,react_.useState)([]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.section, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                className: "text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4",
                children: "World Five"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8",
                children: "Future Letters"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "space-y-4 max-w-md mx-auto mb-12",
                children: letters.map((letter, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        className: "glass-card-light p-4 cursor-pointer",
                        whileHover: {
                            scale: 1.03
                        },
                        onClick: ()=>setOpened([
                                ...opened,
                                i
                            ]),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-[#f0d080] font-serif",
                                children: [
                                    "\uD83D\uDC8C ",
                                    letter.from
                                ]
                            }),
                            opened.includes(i) && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "text-white/70 mt-2",
                                children: letter.message
                            })
                        ]
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                onClick: onNext,
                className: "px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]",
                whileHover: {
                    scale: 1.05
                },
                children: "See the Ending"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/StoryEnding.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function StoryEnding({ name, senderName, onNext }) {
    const [step, setStep] = (0,react_.useState)(0);
    const { setAudioRef } = (0,MusicContext.useMusic)();
    const [audioEl, setAudioEl] = (0,react_.useState)(null);
    (0,react_.useEffect)(()=>{
        const el = document.querySelector("audio[loop]");
        if (el) setAudioEl(el);
        const t1 = setTimeout(()=>setStep(1), 1000);
        const t2 = setTimeout(()=>setStep(2), 4000);
        const t3 = setTimeout(()=>setStep(3), 7000);
        return ()=>{
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);
    (0,react_.useEffect)(()=>{
        if (step === 2 && audioEl) {
            let vol = audioEl.volume;
            const fade = setInterval(()=>{
                vol = Math.max(0, vol - 0.02);
                audioEl.volume = vol;
                if (vol <= 0) {
                    clearInterval(fade);
                    audioEl.pause();
                }
            }, 150);
        }
    }, [
        step,
        audioEl
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.section, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0a05]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StarField, {
                active: step >= 0
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative z-10 text-center px-6 max-w-2xl",
                children: [
                    step >= 0 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "text-2xl md:text-4xl font-serif font-light text-[#f0d080]",
                        children: "Never stop dreaming."
                    }),
                    step >= 1 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "mt-6 text-2xl md:text-4xl font-serif font-light text-[#f0d080]",
                        children: "Never stop smiling."
                    }),
                    step >= 2 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        className: "mt-12 space-y-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-4xl md:text-6xl font-serif font-light",
                                style: {
                                    background: "linear-gradient(135deg, #f0d080, #d4a574)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                },
                                children: "You'll always be our little sister."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                className: "text-6xl",
                                animate: {
                                    scale: [
                                        1,
                                        1.3,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity
                                },
                                children: "❤️"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-white/40 text-sm",
                                children: [
                                    "— ",
                                    senderName
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                                onClick: onNext,
                                className: "px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]",
                                whileHover: {
                                    scale: 1.05
                                },
                                children: "Time Capsule"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/TimeCapsule.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function TimeCapsule({ name }) {
    const [message, setMessage] = (0,react_.useState)("");
    const [sealed, setSealed] = (0,react_.useState)(false);
    const seal = ()=>{
        if (!message.trim()) return;
        const capsule = {
            date: new Date().toISOString(),
            message,
            from: name
        };
        localStorage.setItem(`timecapsule_${name}_${new Date().getFullYear()}`, JSON.stringify(capsule));
        setSealed(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.section, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.p, {
                className: "text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4",
                children: "Time Capsule"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8",
                children: "A Message to Your Future Self"
            }),
            !sealed ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full max-w-md",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white/60 mb-4",
                        children: "What would you like to remember from today?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        className: "w-full h-32 p-4 rounded-xl bg-white/5 border border-[#d4a574]/30 text-white/80 font-serif",
                        placeholder: "Dear future me...",
                        value: message,
                        onChange: (e)=>setMessage(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.button, {
                        onClick: seal,
                        className: "mt-4 px-8 py-3 bg-gradient-to-br from-[#d4a574] to-[#b8956e] text-white font-serif rounded-full",
                        whileHover: {
                            scale: 1.05
                        },
                        children: "Seal Time Capsule \uD83D\uDC8C"
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                className: "text-6xl mb-4",
                children: "\uD83D\uDD10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-8 text-white/40 text-sm",
                children: "Come back next year to read what you wrote."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1
                },
                className: "mt-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://fiduciaweb.netlify.app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "fiducia-signature text-white/30",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "dot"
                        }),
                        "Intelligence by FIDUCIA"
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/StorybookExperience.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











function StorybookExperience_isTimePassed(timeStr, dateStr) {
    const [h, m] = timeStr.split(":").map(Number);
    const target = new Date(dateStr);
    target.setHours(h, m, 0, 0);
    return new Date() >= target;
}
function StorybookExperience({ config }) {
    const { name, birthdayDate, unlockSchedule, chapters, musicUrl, senderName } = config;
    const [currentWorld, setCurrentWorld] = (0,react_.useState)("opening");
    const [morningUnlocked, setMorningUnlocked] = (0,react_.useState)(false);
    const [afternoonUnlocked, setAfternoonUnlocked] = (0,react_.useState)(false);
    const [eveningUnlocked, setEveningUnlocked] = (0,react_.useState)(false);
    const check = (0,react_.useCallback)(()=>{
        setMorningUnlocked(StorybookExperience_isTimePassed(unlockSchedule.morning, birthdayDate));
        setAfternoonUnlocked(StorybookExperience_isTimePassed(unlockSchedule.afternoon, birthdayDate));
        setEveningUnlocked(StorybookExperience_isTimePassed(unlockSchedule.evening, birthdayDate));
    }, [
        unlockSchedule,
        birthdayDate
    ]);
    (0,react_.useEffect)(()=>{
        check();
        const i = setInterval(check, 30000);
        return ()=>clearInterval(i);
    }, [
        check
    ]);
    (0,react_.useEffect)(()=>{
        if (currentWorld === "opening" && morningUnlocked) setCurrentWorld("one");
    }, [
        morningUnlocked,
        currentWorld
    ]);
    const goTo = (world)=>setCurrentWorld(world);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "relative min-h-screen bg-[#0d0a05] text-[#fff8ee]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MusicToggle, {
                musicUrl: musicUrl
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AnimatePresence/* AnimatePresence */.M, {
                mode: "wait",
                children: [
                    currentWorld === "opening" && /*#__PURE__*/ jsx_runtime_.jsx(StoryOpening, {
                        name: name,
                        onComplete: ()=>goTo("one"),
                        morningUnlocked: morningUnlocked
                    }),
                    currentWorld === "one" && morningUnlocked && /*#__PURE__*/ jsx_runtime_.jsx(TinyPrincess, {
                        photos: chapters.one.photos,
                        onNext: ()=>goTo("two")
                    }),
                    currentWorld === "two" && morningUnlocked && /*#__PURE__*/ jsx_runtime_.jsx(FamilyKingdom, {
                        timeline: chapters.two.timeline,
                        onNext: ()=>{
                            if (afternoonUnlocked) goTo("three");
                        },
                        afternoonUnlocked: afternoonUnlocked,
                        birthdayDate: birthdayDate,
                        unlockTime: unlockSchedule.afternoon
                    }),
                    currentWorld === "three" && afternoonUnlocked && /*#__PURE__*/ jsx_runtime_.jsx(TreasureHunt, {
                        onNext: ()=>goTo("four")
                    }),
                    currentWorld === "four" && afternoonUnlocked && /*#__PURE__*/ jsx_runtime_.jsx(DreamWorld, {
                        onNext: ()=>goTo("five")
                    }),
                    currentWorld === "five" && eveningUnlocked && /*#__PURE__*/ jsx_runtime_.jsx(FutureLetters, {
                        onNext: ()=>goTo("ending")
                    }),
                    currentWorld === "ending" && eveningUnlocked && /*#__PURE__*/ jsx_runtime_.jsx(StoryEnding, {
                        name: name,
                        senderName: senderName,
                        onNext: ()=>goTo("capsule")
                    }),
                    currentWorld === "capsule" && eveningUnlocked && /*#__PURE__*/ jsx_runtime_.jsx(TimeCapsule, {
                        name: name
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/[experience]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ExperiencePage({ params }) {
    const [config, setConfig] = (0,react_.useState)(null);
    (0,react_.useEffect)(()=>{
        __webpack_require__(5105)(`./${params.experience}/config.json`).then((m)=>setConfig(m.default || m)).catch(()=>setConfig(null));
    }, [
        params.experience
    ]);
    if (!config) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "min-h-screen flex items-center justify-center bg-[#0a0a0f]",
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-white/40 font-serif text-xl",
                children: "This experience doesn't exist yet."
            })
        });
    }
    if (config.theme === "storybook") {
        return /*#__PURE__*/ jsx_runtime_.jsx(StorybookExperience, {
            config: config
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(DefaultExperience, {
        config: config
    });
}


/***/ }),

/***/ 9100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MusicProvider: () => (/* binding */ MusicProvider),
/* harmony export */   useMusic: () => (/* binding */ useMusic)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ MusicProvider,useMusic auto */ 

const MusicContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function MusicProvider({ children }) {
    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const normalVolume = 0.25;
    const loweredVolume = 0.06;
    const setAudioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((ref)=>{
        audioRef.current = ref;
    }, []);
    const startMusic = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!audioRef.current) return;
        const audio = audioRef.current;
        audio.volume = 0;
        audio.play().then(()=>{
            let vol = 0;
            const fadeIn = setInterval(()=>{
                vol += 0.015;
                audio.volume = Math.min(vol, normalVolume);
                if (vol >= normalVolume) clearInterval(fadeIn);
            }, 100);
            setIsPlaying(true);
        }).catch(()=>{});
    }, []);
    const lowerVolume = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!audioRef.current) return;
        audioRef.current.volume = loweredVolume;
    }, []);
    const restoreVolume = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!audioRef.current) return;
        audioRef.current.volume = normalVolume;
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MusicContext.Provider, {
        value: {
            startMusic,
            lowerVolume,
            restoreVolume,
            setAudioRef,
            isPlaying
        },
        children: children
    });
}
function useMusic() {
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MusicContext);
    if (!ctx) throw new Error("useMusic must be used within MusicProvider");
    return ctx;
}


/***/ }),

/***/ 8183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/data/data/com.termux/files/home/aurora-platform/app/[experience]/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 1842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./contexts/MusicContext.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/data/data/com.termux/files/home/aurora-platform/contexts/MusicContext.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["MusicProvider"];

const e1 = proxy["useMusic"];

;// CONCATENATED MODULE: ./app/layout.tsx



const metadata = {
    title: "A Special Birthday",
    description: "Today was designed entirely for you."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "min-h-screen",
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [810], () => (__webpack_exec__(5705)));
module.exports = __webpack_exports__;

})();