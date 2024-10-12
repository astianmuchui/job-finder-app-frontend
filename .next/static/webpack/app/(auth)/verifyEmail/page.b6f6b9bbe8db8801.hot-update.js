"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/verifyEmail/page",{

/***/ "(app-pages-browser)/./src/components/VerifyEmail.tsx":
/*!****************************************!*\
  !*** ./src/components/VerifyEmail.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/input-otp */ \"(app-pages-browser)/./src/components/ui/input-otp.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./src/components/ui/form.tsx\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst VerifyEmailSchema = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({\n    code: zod__WEBPACK_IMPORTED_MODULE_5__.z.string({\n        required_error: \"Code is required\"\n    }).min(6, {\n        message: \"Verification Code must be 6 digits\"\n    })\n});\nconst VerifyEmail = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(VerifyEmailSchema),\n        defaultValues: {\n            code: \"\"\n        }\n    });\n    function onSubmit(data) {\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3000/api/auth/verifyEmail\", data).then((response)=>{\n            if (response.status === 200) {\n                router.push(\"/login\");\n            }\n        }).catch((error)=>{\n            console.error(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col my-auto h-[100%] justify-center items-center space-y-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mx-auto  space-y-4 w-[80%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl lg:text-4xl font-bold text-center text-black\",\n                        children: \"Verify Email\"\n                    }, void 0, false, {\n                        fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-black font-normal\",\n                        children: \"Please check your email for the verification code\"\n                    }, void 0, false, {\n                        fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                ...form,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: form.handleSubmit(onSubmit),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_2__.FormField, {\n                            name: \"code\",\n                            control: form.control,\n                            render: (param)=>{\n                                let { field } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_2__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                            children: \"Verify Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 29\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTP, {\n                                                maxLength: 6,\n                                                ...field,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPGroup, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPGroup, {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPSlot, {\n                                                                    index: 0\n                                                                }, void 0, false, {\n                                                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                                    lineNumber: 72,\n                                                                    columnNumber: 45\n                                                                }, void 0),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPSlot, {\n                                                                    index: 1\n                                                                }, void 0, false, {\n                                                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                                    lineNumber: 73,\n                                                                    columnNumber: 45\n                                                                }, void 0),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPSlot, {\n                                                                    index: 2\n                                                                }, void 0, false, {\n                                                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                                    lineNumber: 74,\n                                                                    columnNumber: 45\n                                                                }, void 0)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 41\n                                                        }, void 0),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPSeparator, {}, void 0, false, {\n                                                            fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 41\n                                                        }, void 0),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPGroup, {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPSlot, {\n                                                                    index: 3\n                                                                }, void 0, false, {\n                                                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                                    lineNumber: 79,\n                                                                    columnNumber: 45\n                                                                }, void 0),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPSlot, {\n                                                                    index: 4\n                                                                }, void 0, false, {\n                                                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                                    lineNumber: 80,\n                                                                    columnNumber: 45\n                                                                }, void 0),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_otp__WEBPACK_IMPORTED_MODULE_1__.InputOTPSlot, {\n                                                                    index: 5\n                                                                }, void 0, false, {\n                                                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                                    lineNumber: 81,\n                                                                    columnNumber: 45\n                                                                }, void 0)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 41\n                                                        }, void 0)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 37\n                                                }, void 0)\n                                            }, void 0, false, {\n                                                fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 33\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_2__.FormDescription, {\n                                            children: \"Enter the 6-digit verification code sent to your email.\"\n                                        }, void 0, false, {\n                                            fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 29\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_2__.FormMessage, {}, void 0, false, {\n                                            fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 29\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-[80%] space-x-4 mt-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"w-[50%] p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br\",\n                                    children: \"Resend\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-[50%] p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br\",\n                                    children: \"Verify\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/components/VerifyEmail.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VerifyEmail, \"FHCdHRcnFDHMhggdh1GTGOAeKvc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = VerifyEmail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerifyEmail);\nvar _c;\n$RefreshReg$(_c, \"VerifyEmail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ZlcmlmeUVtYWlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU1rQztBQVNMO0FBRVA7QUFDOEI7QUFDWjtBQUNkO0FBQ2dCO0FBRTFDLE1BQU1nQixvQkFBb0JMLGtDQUFDQSxDQUFDTSxNQUFNLENBQUM7SUFDL0JDLE1BQU1QLGtDQUFDQSxDQUFDUSxNQUFNLENBQUM7UUFBQ0MsZ0JBQWdCO0lBQWtCLEdBQUdDLEdBQUcsQ0FBQyxHQUFHO1FBQUNDLFNBQVM7SUFBb0M7QUFDOUc7QUFHQSxNQUFNQyxjQUFjOztJQUNoQixNQUFNQyxTQUFTVCwwREFBU0E7SUFDeEIsTUFBTVUsT0FBT1osd0RBQU9BLENBQW9DO1FBQ3BEYSxVQUFVZCxvRUFBV0EsQ0FBQ0k7UUFDdEJXLGVBQWU7WUFDWFQsTUFBTTtRQUNWO0lBQ0o7SUFFQSxTQUFTVSxTQUFTQyxJQUF1QztRQUNyRGYsNkNBQUtBLENBQUNnQixJQUFJLENBQUMsOENBQThDRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0M7WUFDN0QsSUFBSUEsU0FBU0MsTUFBTSxLQUFLLEtBQUs7Z0JBQ3pCVCxPQUFPVSxJQUFJLENBQUM7WUFDaEI7UUFDSixHQUNGQyxLQUFLLENBQUMsQ0FBQ0M7WUFDTEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNsQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVc7OzBCQUNaLDhEQUFDRDtnQkFBSUMsV0FBVzs7a0NBQ1osOERBQUNDO3dCQUFHRCxXQUFXO2tDQUF5RDs7Ozs7O2tDQUN4RSw4REFBQ0U7d0JBQUVGLFdBQVc7a0NBQTBCOzs7Ozs7Ozs7Ozs7MEJBRTVDLDhEQUFDbkMscURBQUlBO2dCQUFFLEdBQUdxQixJQUFJOzBCQUdWLDRFQUFDQTtvQkFBS0csVUFBVUgsS0FBS2lCLFlBQVksQ0FBQ2Q7O3NDQUM5Qiw4REFBQ3JCLDBEQUFTQTs0QkFBQ29DLE1BQU07NEJBQVFDLFNBQVNuQixLQUFLbUIsT0FBTzs0QkFBRUMsUUFBUTtvQ0FBQyxFQUFDQyxLQUFLLEVBQUM7cURBQzVELDhEQUFDdEMseURBQVFBOztzREFDTCw4REFBQ0MsMERBQVNBO3NEQUFDOzs7Ozs7c0RBQ1gsOERBQUNKLDREQUFXQTtzREFDUiw0RUFBQ0wsOERBQVFBO2dEQUNMK0MsV0FBVztnREFDVixHQUFHRCxLQUFLOzBEQUVULDRFQUFDN0MsbUVBQWFBOztzRUFFViw4REFBQ0EsbUVBQWFBOzs4RUFHViw4REFBQ0Usa0VBQVlBO29FQUFDNkMsT0FBTzs7Ozs7OzhFQUNyQiw4REFBQzdDLGtFQUFZQTtvRUFBQzZDLE9BQU87Ozs7Ozs4RUFDckIsOERBQUM3QyxrRUFBWUE7b0VBQUM2QyxPQUFPOzs7Ozs7Ozs7Ozs7c0VBRXpCLDhEQUFDOUMsdUVBQWlCQTs7Ozs7c0VBQ2xCLDhEQUFDRCxtRUFBYUE7OzhFQUVWLDhEQUFDRSxrRUFBWUE7b0VBQUM2QyxPQUFPOzs7Ozs7OEVBQ3JCLDhEQUFDN0Msa0VBQVlBO29FQUFDNkMsT0FBTzs7Ozs7OzhFQUNyQiw4REFBQzdDLGtFQUFZQTtvRUFBQzZDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBT3JDLDhEQUFDMUMsZ0VBQWVBO3NEQUFDOzs7Ozs7c0RBR2pCLDhEQUFDSSw0REFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUtwQiw4REFBQzRCOzRCQUFJQyxXQUFXOzs4Q0FDWiw4REFBQ1U7b0NBQU9DLE1BQUs7b0NBQ0xYLFdBQVc7OENBQXNJOzs7Ozs7OENBR3pKLDhEQUFDVTtvQ0FBT0MsTUFBSztvQ0FDTFgsV0FBVzs4Q0FBc0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpMO0dBakZNaEI7O1FBQ2FSLHNEQUFTQTtRQUNYRixvREFBT0E7OztLQUZsQlU7QUFtRk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmVyaWZ5RW1haWwudHN4P2VhZTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQge1xuICAgIElucHV0T1RQLFxuICAgIElucHV0T1RQR3JvdXAsXG4gICAgSW5wdXRPVFBTZXBhcmF0b3IsXG4gICAgSW5wdXRPVFBTbG90LFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0LW90cFwiXG5pbXBvcnQge1xuICAgIEZvcm0sXG4gICAgRm9ybUNvbnRyb2wsXG4gICAgRm9ybURlc2NyaXB0aW9uLFxuICAgIEZvcm1GaWVsZCxcbiAgICBGb3JtSXRlbSxcbiAgICBGb3JtTGFiZWwsXG4gICAgRm9ybU1lc3NhZ2UsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZm9ybVwiXG5cbmltcG9ydCB7en0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHt6b2RSZXNvbHZlcn0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCI7XG5pbXBvcnQge3VzZUZvcm19IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IFZlcmlmeUVtYWlsU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGNvZGU6IHouc3RyaW5nKHtyZXF1aXJlZF9lcnJvcjogXCJDb2RlIGlzIHJlcXVpcmVkXCJ9KS5taW4oNiwge21lc3NhZ2U6IFwiVmVyaWZpY2F0aW9uIENvZGUgbXVzdCBiZSA2IGRpZ2l0c1wifSksXG59KTtcblxuXG5jb25zdCBWZXJpZnlFbWFpbCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IGZvcm0gPSB1c2VGb3JtPHouaW5mZXI8dHlwZW9mIFZlcmlmeUVtYWlsU2NoZW1hPj4oe1xuICAgICAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoVmVyaWZ5RW1haWxTY2hlbWEpLFxuICAgICAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICAgICAgICBjb2RlOiBcIlwiLFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9uU3VibWl0KGRhdGE6IHouaW5mZXI8dHlwZW9mIFZlcmlmeUVtYWlsU2NoZW1hPikge1xuICAgICAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL3ZlcmlmeUVtYWlsXCIsIGRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGZsZXgtY29sIG15LWF1dG8gaC1bMTAwJV0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXktNlwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG14LWF1dG8gIHNwYWNlLXktNCB3LVs4MCVdXCJ9PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e1widGV4dC0yeGwgbGc6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtYmxhY2tcIn0+VmVyaWZ5IEVtYWlsPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1widGV4dC1ibGFjayBmb250LW5vcm1hbFwifT5QbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgdGhlIHZlcmlmaWNhdGlvbiBjb2RlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9ybSB7Li4uZm9ybX0+XG5cblxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkIG5hbWU9e1wiY29kZVwifSBjb250cm9sPXtmb3JtLmNvbnRyb2x9IHJlbmRlcj17KHtmaWVsZH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlZlcmlmeSBFbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0T1RQXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE9UUEdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0T1RQR3JvdXA+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRPVFBTbG90IGluZGV4PXswfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE9UUFNsb3QgaW5kZXg9ezF9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0T1RQU2xvdCBpbmRleD17Mn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRPVFBHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRPVFBTZXBhcmF0b3IvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE9UUEdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE9UUFNsb3QgaW5kZXg9ezN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0T1RQU2xvdCBpbmRleD17NH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRPVFBTbG90IGluZGV4PXs1fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dE9UUEdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0T1RQR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dE9UUD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudGVyIHRoZSA2LWRpZ2l0IHZlcmlmaWNhdGlvbiBjb2RlIHNlbnQgdG8geW91ciBlbWFpbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IHctWzgwJV0gc3BhY2UteC00IG10LTEwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInctWzUwJV0gcC0yIGJnLWdyYWRpZW50LXRvLXRyIGZyb20tcHVycGxlLTgwMC83MCB2aWEtcHVycGxlLTkwMC83MCB0by1wdXJwbGUtOTUwLzcwIHRleHQtd2hpdGUgcm91bmRlZC0zeGwgaG92ZXI6YmctZ3JhZGllbnQtdG8tYnJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ3LVs1MCVdIHAtMiBiZy1ncmFkaWVudC10by10ciBmcm9tLXB1cnBsZS04MDAvNzAgdmlhLXB1cnBsZS05MDAvNzAgdG8tcHVycGxlLTk1MC83MCB0ZXh0LXdoaXRlIHJvdW5kZWQtM3hsIGhvdmVyOmJnLWdyYWRpZW50LXRvLWJyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcmlmeVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5RW1haWw7Il0sIm5hbWVzIjpbIklucHV0T1RQIiwiSW5wdXRPVFBHcm91cCIsIklucHV0T1RQU2VwYXJhdG9yIiwiSW5wdXRPVFBTbG90IiwiRm9ybSIsIkZvcm1Db250cm9sIiwiRm9ybURlc2NyaXB0aW9uIiwiRm9ybUZpZWxkIiwiRm9ybUl0ZW0iLCJGb3JtTGFiZWwiLCJGb3JtTWVzc2FnZSIsInoiLCJ6b2RSZXNvbHZlciIsInVzZUZvcm0iLCJheGlvcyIsInVzZVJvdXRlciIsIlZlcmlmeUVtYWlsU2NoZW1hIiwib2JqZWN0IiwiY29kZSIsInN0cmluZyIsInJlcXVpcmVkX2Vycm9yIiwibWluIiwibWVzc2FnZSIsIlZlcmlmeUVtYWlsIiwicm91dGVyIiwiZm9ybSIsInJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJoYW5kbGVTdWJtaXQiLCJuYW1lIiwiY29udHJvbCIsInJlbmRlciIsImZpZWxkIiwibWF4TGVuZ3RoIiwiaW5kZXgiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/VerifyEmail.tsx\n"));

/***/ })

});