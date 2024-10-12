"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/signup/route";
exports.ids = ["app/api/signup/route"];
exports.modules = {

/***/ "@node-rs/argon2":
/*!**********************************!*\
  !*** external "@node-rs/argon2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@node-rs/argon2");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.tsx&appDir=%2Frun%2Fmedia%2Fnkatha%2Fdossiers%2FCodes%2Fjob-finder-app-frontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Frun%2Fmedia%2Fnkatha%2Fdossiers%2FCodes%2Fjob-finder-app-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.tsx&appDir=%2Frun%2Fmedia%2Fnkatha%2Fdossiers%2FCodes%2Fjob-finder-app-frontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Frun%2Fmedia%2Fnkatha%2Fdossiers%2FCodes%2Fjob-finder-app-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _run_media_nkatha_dossiers_Codes_job_finder_app_frontend_src_app_api_signup_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/signup/route.tsx */ \"(rsc)/./src/app/api/signup/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/signup/route\",\n        pathname: \"/api/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/signup/route\"\n    },\n    resolvedPagePath: \"/run/media/nkatha/dossiers/Codes/job-finder-app-frontend/src/app/api/signup/route.tsx\",\n    nextConfigOutput,\n    userland: _run_media_nkatha_dossiers_Codes_job_finder_app_frontend_src_app_api_signup_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/signup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzaWdudXAlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNpZ251cCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNpZ251cCUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGcnVuJTJGbWVkaWElMkZua2F0aGElMkZkb3NzaWVycyUyRkNvZGVzJTJGam9iLWZpbmRlci1hcHAtZnJvbnRlbmQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRnJ1biUyRm1lZGlhJTJGbmthdGhhJTJGZG9zc2llcnMlMkZDb2RlcyUyRmpvYi1maW5kZXItYXBwLWZyb250ZW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxQztBQUNsSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3BhY2thZ2UuanNvbi8/OWMxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvcnVuL21lZGlhL25rYXRoYS9kb3NzaWVycy9Db2Rlcy9qb2ItZmluZGVyLWFwcC1mcm9udGVuZC9zcmMvYXBwL2FwaS9zaWdudXAvcm91dGUudHN4XCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zaWdudXAvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zaWdudXBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NpZ251cC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ydW4vbWVkaWEvbmthdGhhL2Rvc3NpZXJzL0NvZGVzL2pvYi1maW5kZXItYXBwLWZyb250ZW5kL3NyYy9hcHAvYXBpL3NpZ251cC9yb3V0ZS50c3hcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NpZ251cC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.tsx&appDir=%2Frun%2Fmedia%2Fnkatha%2Fdossiers%2FCodes%2Fjob-finder-app-frontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Frun%2Fmedia%2Fnkatha%2Fdossiers%2FCodes%2Fjob-finder-app-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/signup/route.tsx":
/*!**************************************!*\
  !*** ./src/app/api/signup/route.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_lucia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/lucia */ \"(rsc)/./src/lib/lucia.tsx\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.tsx\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _node_rs_argon2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @node-rs/argon2 */ \"@node-rs/argon2\");\n/* harmony import */ var _node_rs_argon2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_rs_argon2__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lucia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucia */ \"(rsc)/./node_modules/lucia/dist/index.js\");\n/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/functions */ \"(rsc)/./src/lib/functions.tsx\");\n/* harmony import */ var _lib_email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/email */ \"(rsc)/./src/lib/email.tsx\");\n\n\n\n\n\n\n\nasync function POST(req) {\n    console.log(\"first signup request\");\n    try {\n        console.log(\"Signup request received\");\n        const user = await req.json();\n        const password = user.password;\n        const hashedPassword = await (0,_node_rs_argon2__WEBPACK_IMPORTED_MODULE_3__.hash)(password, {\n            memoryCost: 2 ** 16,\n            timeCost: 3,\n            outputLen: 32,\n            parallelism: 1\n        });\n        const userId = (0,lucia__WEBPACK_IMPORTED_MODULE_4__.generateIdFromEntropySize)(16);\n        const userExists = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].users.findFirst({\n            where: {\n                email: user.email\n            }\n        });\n        console.log(userExists);\n        if (userExists) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"User already exists either as a Company or a User Account\"\n            }, {\n                status: 500\n            });\n        } else {\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].users.create({\n                data: {\n                    id: userId,\n                    email: user.email,\n                    username: user.username,\n                    password: hashedPassword\n                }\n            });\n            const verificationCode = await (0,_lib_functions__WEBPACK_IMPORTED_MODULE_5__.generateEmailVerificationCode)(userId, user.email);\n            console.log(verificationCode);\n            const subject = \"Verify your email\";\n            const html = `<p>Your verification code is : <strong>${verificationCode}</strong></p>`;\n            await (0,_lib_email__WEBPACK_IMPORTED_MODULE_6__.sendEmail)({\n                to: user.email,\n                subject: subject,\n                html: html\n            });\n            const session = await _lib_lucia__WEBPACK_IMPORTED_MODULE_0__.lucia.createSession(userId, {});\n            const sessionCookie = _lib_lucia__WEBPACK_IMPORTED_MODULE_0__.lucia.createSessionCookie(session.id);\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"Signup successful, verification email sent.\"\n            }, {\n                status: 200,\n                headers: {\n                    \"Set-Cookie\": sessionCookie.serialize()\n                }\n            });\n        }\n    } catch (e) {\n        // db error, email taken, etc\n        console.error(e);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(e, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zaWdudXAvcm91dGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNBO0FBQ29CO0FBQ2Y7QUFDUztBQUNjO0FBQ3hCO0FBRTlCLGVBQWdCTyxLQUFLQyxHQUFnQjtJQUN6Q0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1osSUFBSTtRQUNBRCxRQUFRQyxHQUFHLENBQUM7UUFFaEIsTUFBTUMsT0FBTyxNQUFNSCxJQUFJSSxJQUFJO1FBQzNCLE1BQU1DLFdBQVdGLEtBQUtFLFFBQVE7UUFDOUIsTUFBTUMsaUJBQWlCLE1BQU1YLHFEQUFJQSxDQUFDVSxVQUFVO1lBQ3hDRSxZQUFZLEtBQUs7WUFDakJDLFVBQVU7WUFDVkMsV0FBVztZQUNYQyxhQUFhO1FBQ2pCO1FBRUEsTUFBTUMsU0FBU2YsZ0VBQXlCQSxDQUFDO1FBRXpDLE1BQU1nQixhQUFhLE1BQU1uQixtREFBTUEsQ0FBQ29CLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO1lBQzVDQyxPQUFPO2dCQUNIQyxPQUFPYixLQUFLYSxLQUFLO1lBQ3JCO1FBQ0o7UUFFQWYsUUFBUUMsR0FBRyxDQUFDVTtRQUVaLElBQUdBLFlBQVk7WUFDWCxPQUFPbEIscURBQVlBLENBQUNVLElBQUksQ0FDcEI7Z0JBQ0lhLFNBQVM7WUFDYixHQUNBO2dCQUFFQyxRQUFRO1lBQUk7UUFFdEIsT0FDSztZQUNELE1BQU16QixtREFBTUEsQ0FBQ29CLEtBQUssQ0FBQ00sTUFBTSxDQUFDO2dCQUN0QkMsTUFBTTtvQkFDRkMsSUFBSVY7b0JBQ0pLLE9BQU9iLEtBQUthLEtBQUs7b0JBQ2pCTSxVQUFVbkIsS0FBS21CLFFBQVE7b0JBQ3ZCakIsVUFBVUM7Z0JBQ2Q7WUFDSjtZQUVBLE1BQU1pQixtQkFBbUIsTUFBTzFCLDZFQUE2QkEsQ0FBQ2MsUUFBUVIsS0FBS2EsS0FBSztZQUNoRmYsUUFBUUMsR0FBRyxDQUFDcUI7WUFFWixNQUFNQyxVQUFVO1lBQ2hCLE1BQU1DLE9BQU8sQ0FBQyx1Q0FBdUMsRUFBRUYsaUJBQWlCLGFBQWEsQ0FBQztZQUN0RixNQUFNekIscURBQVNBLENBQUM7Z0JBQUM0QixJQUFJdkIsS0FBS2EsS0FBSztnQkFBRVEsU0FBU0E7Z0JBQVVDLE1BQU1BO1lBQUk7WUFHOUQsTUFBTUUsVUFBVSxNQUFNbkMsNkNBQUtBLENBQUNvQyxhQUFhLENBQUNqQixRQUFPLENBQUM7WUFDbEQsTUFBTWtCLGdCQUFnQnJDLDZDQUFLQSxDQUFDc0MsbUJBQW1CLENBQUNILFFBQVFOLEVBQUU7WUFDMUQsT0FBTzNCLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3BCO2dCQUFFYSxTQUFTO1lBQThDLEdBQ3pEO2dCQUNJQyxRQUFRO2dCQUNSYSxTQUFTO29CQUNMLGNBQWNGLGNBQWNHLFNBQVM7Z0JBQ3pDO1lBQ0o7UUFFUjtJQUNBLEVBQUUsT0FBT0MsR0FBRTtRQUNQLDZCQUE2QjtRQUM3QmhDLFFBQVFpQyxLQUFLLENBQUNEO1FBQ2QsT0FBT3ZDLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM2QixHQUFHO1lBQUVmLFFBQVE7UUFBSTtJQUM5QztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL2FwcC9hcGkvc2lnbnVwL3JvdXRlLnRzeD8xOWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bHVjaWF9IGZyb20gXCJAL2xpYi9sdWNpYVwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5pbXBvcnQge05leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2V9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgaGFzaCB9IGZyb20gXCJAbm9kZS1ycy9hcmdvbjJcIjtcbmltcG9ydCB7Z2VuZXJhdGVJZEZyb21FbnRyb3B5U2l6ZX0gZnJvbSBcImx1Y2lhXCI7XG5pbXBvcnQge2dlbmVyYXRlRW1haWxWZXJpZmljYXRpb25Db2RlfSBmcm9tIFwiQC9saWIvZnVuY3Rpb25zXCI7XG5pbXBvcnQge3NlbmRFbWFpbH0gZnJvbSBcIkAvbGliL2VtYWlsXCI7XG5cbmV4cG9ydCAgYXN5bmMgIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCApIHtcbiAgICBjb25zb2xlLmxvZyhcImZpcnN0IHNpZ251cCByZXF1ZXN0XCIpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbnVwIHJlcXVlc3QgcmVjZWl2ZWRcIik7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZXIucGFzc3dvcmQ7XG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCB7XG4gICAgICAgIG1lbW9yeUNvc3Q6IDIgKiogMTYsXG4gICAgICAgIHRpbWVDb3N0OiAzLFxuICAgICAgICBvdXRwdXRMZW46IDMyLFxuICAgICAgICBwYXJhbGxlbGlzbTogMVxuICAgIH0pO1xuXG4gICAgY29uc3QgdXNlcklkID0gZ2VuZXJhdGVJZEZyb21FbnRyb3B5U2l6ZSgxNik7XG5cbiAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgcHJpc21hLnVzZXJzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyh1c2VyRXhpc3RzKTtcblxuICAgIGlmKHVzZXJFeGlzdHMpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXNlciBhbHJlYWR5IGV4aXN0cyBlaXRoZXIgYXMgYSBDb21wYW55IG9yIGEgVXNlciBBY2NvdW50XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhd2FpdCBwcmlzbWEudXNlcnMuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uQ29kZSA9IGF3YWl0ICBnZW5lcmF0ZUVtYWlsVmVyaWZpY2F0aW9uQ29kZSh1c2VySWQsIHVzZXIuZW1haWwpO1xuICAgICAgICBjb25zb2xlLmxvZyh2ZXJpZmljYXRpb25Db2RlKTtcblxuICAgICAgICBjb25zdCBzdWJqZWN0ID0gXCJWZXJpZnkgeW91ciBlbWFpbFwiO1xuICAgICAgICBjb25zdCBodG1sID0gYDxwPllvdXIgdmVyaWZpY2F0aW9uIGNvZGUgaXMgOiA8c3Ryb25nPiR7dmVyaWZpY2F0aW9uQ29kZX08L3N0cm9uZz48L3A+YDtcbiAgICAgICAgYXdhaXQgc2VuZEVtYWlsKHt0bzogdXNlci5lbWFpbCwgc3ViamVjdDogc3ViamVjdCAsIGh0bWw6IGh0bWx9KTtcblxuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBsdWNpYS5jcmVhdGVTZXNzaW9uKHVzZXJJZCx7fSk7XG4gICAgICAgIGNvbnN0IHNlc3Npb25Db29raWUgPSBsdWNpYS5jcmVhdGVTZXNzaW9uQ29va2llKHNlc3Npb24uaWQpO1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgICB7IG1lc3NhZ2U6IFwiU2lnbnVwIHN1Y2Nlc3NmdWwsIHZlcmlmaWNhdGlvbiBlbWFpbCBzZW50LlwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIlNldC1Db29raWVcIjogc2Vzc2lvbkNvb2tpZS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgLy8gZGIgZXJyb3IsIGVtYWlsIHRha2VuLCBldGNcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGUsIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJsdWNpYSIsInByaXNtYSIsIk5leHRSZXNwb25zZSIsImhhc2giLCJnZW5lcmF0ZUlkRnJvbUVudHJvcHlTaXplIiwiZ2VuZXJhdGVFbWFpbFZlcmlmaWNhdGlvbkNvZGUiLCJzZW5kRW1haWwiLCJQT1NUIiwicmVxIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJqc29uIiwicGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsIm1lbW9yeUNvc3QiLCJ0aW1lQ29zdCIsIm91dHB1dExlbiIsInBhcmFsbGVsaXNtIiwidXNlcklkIiwidXNlckV4aXN0cyIsInVzZXJzIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJjcmVhdGUiLCJkYXRhIiwiaWQiLCJ1c2VybmFtZSIsInZlcmlmaWNhdGlvbkNvZGUiLCJzdWJqZWN0IiwiaHRtbCIsInRvIiwic2Vzc2lvbiIsImNyZWF0ZVNlc3Npb24iLCJzZXNzaW9uQ29va2llIiwiY3JlYXRlU2Vzc2lvbkNvb2tpZSIsImhlYWRlcnMiLCJzZXJpYWxpemUiLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/signup/route.tsx\n");

/***/ }),

/***/ "(rsc)/./src/lib/email.tsx":
/*!***************************!*\
  !*** ./src/lib/email.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n    host: \"smtp.gmail.com\",\n    port: 465,\n    secure: true,\n    auth: {\n        user: process.env.GMAIL_USER,\n        pass: process.env.GMAIL_PASSWORD\n    }\n});\nasync function sendEmail({ to, subject, html }) {\n    console.log(\"Sending email to\", to);\n    await transporter.sendMail({\n        from: '\"GigHaven \\uD83D\\uDC7B\" <gighaven@gmail.com>',\n        to,\n        subject,\n        html\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2VtYWlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUVwQyxNQUFNQyxjQUFjRCx1REFBMEIsQ0FBQztJQUMzQ0csTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFFBQVE7SUFDUkMsTUFBTTtRQUNGQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csY0FBYztJQUNwQztBQUNKO0FBRU8sZUFBZUMsVUFBVSxFQUNJQyxFQUFFLEVBQ0ZDLE9BQU8sRUFDUEMsSUFBSSxFQU12QztJQUNHQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CSjtJQUVoQyxNQUFNYixZQUFZa0IsUUFBUSxDQUFDO1FBQ3ZCQyxNQUFNO1FBQ05OO1FBQ0FDO1FBQ0FDO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9saWIvZW1haWwudHN4P2EyODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcblxuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgaG9zdDogXCJzbXRwLmdtYWlsLmNvbVwiLFxuICAgIHBvcnQ6IDQ2NSxcbiAgICBzZWN1cmU6IHRydWUsIC8vIFVzZSBgdHJ1ZWAgZm9yIHBvcnQgNDY1LCBgZmFsc2VgIGZvciBhbGwgb3RoZXIgcG9ydHNcbiAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkdNQUlMX1VTRVIsXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkdNQUlMX1BBU1NXT1JELFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH06IHtcbiAgICB0bzogc3RyaW5nO1xuICAgIHN1YmplY3Q6IHN0cmluZztcbiAgICBodG1sOiBzdHJpbmc7XG59KSB7XG4gICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGVtYWlsIHRvXCIsIHRvKTtcblxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgICAgZnJvbTogJ1wiR2lnSGF2ZW4g8J+Ru1wiIDxnaWdoYXZlbkBnbWFpbC5jb20+JywgLy8gc2VuZGVyIGFkZHJlc3NcbiAgICAgICAgdG8sXG4gICAgICAgIHN1YmplY3QsIC8vIGxpc3Qgb2YgcmVjZWl2ZXJzXG4gICAgICAgIGh0bWwsIC8vIGh0bWwgYm9keVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiR01BSUxfVVNFUiIsInBhc3MiLCJHTUFJTF9QQVNTV09SRCIsInNlbmRFbWFpbCIsInRvIiwic3ViamVjdCIsImh0bWwiLCJjb25zb2xlIiwibG9nIiwic2VuZE1haWwiLCJmcm9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/email.tsx\n");

/***/ }),

/***/ "(rsc)/./src/lib/functions.tsx":
/*!*******************************!*\
  !*** ./src/lib/functions.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPasswordResetToken: () => (/* binding */ createPasswordResetToken),\n/* harmony export */   generateEmailVerificationCode: () => (/* binding */ generateEmailVerificationCode)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.tsx\");\n/* harmony import */ var oslo_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! oslo/crypto */ \"(rsc)/./node_modules/oslo/dist/crypto/index.js\");\n/* harmony import */ var oslo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! oslo */ \"(rsc)/./node_modules/oslo/dist/index.js\");\n/* harmony import */ var lucia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucia */ \"(rsc)/./node_modules/lucia/dist/index.js\");\n/* harmony import */ var oslo_encoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! oslo/encoding */ \"(rsc)/./node_modules/oslo/dist/encoding/index.js\");\n\n\n\n\n\nasync function generateEmailVerificationCode(userId, email) {\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].verificationCode.deleteMany({\n        where: {\n            userId: userId\n        }\n    });\n    const code = (0,oslo_crypto__WEBPACK_IMPORTED_MODULE_1__.generateRandomString)(6, (0,oslo_crypto__WEBPACK_IMPORTED_MODULE_1__.alphabet)(\"0-9\"));\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].verificationCode.create({\n        data: {\n            userId: userId,\n            email,\n            code,\n            expire_at: (0,oslo__WEBPACK_IMPORTED_MODULE_2__.createDate)(new oslo__WEBPACK_IMPORTED_MODULE_2__.TimeSpan(15, \"m\"))\n        }\n    });\n    return code;\n}\nasync function createPasswordResetToken(userId) {\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].passwordResetTokens.deleteMany({\n        where: {\n            userId: userId\n        }\n    });\n    const tokenId = (0,lucia__WEBPACK_IMPORTED_MODULE_3__.generateIdFromEntropySize)(16);\n    const token = (0,oslo_encoding__WEBPACK_IMPORTED_MODULE_4__.encodeHex)(await (0,oslo_crypto__WEBPACK_IMPORTED_MODULE_1__.sha256)(new TextEncoder().encode(tokenId)));\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].passwordResetTokens.create({\n        data: {\n            userId: userId,\n            token_hash: token,\n            expiresAt: (0,oslo__WEBPACK_IMPORTED_MODULE_2__.createDate)(new oslo__WEBPACK_IMPORTED_MODULE_2__.TimeSpan(2, \"h\"))\n        }\n    });\n    return token;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2Z1bmN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNrQztBQUNpQztBQUN6QjtBQUNNO0FBQ1I7QUFFakMsZUFBZVEsOEJBQ2xCQyxNQUFjLEVBQ2RDLEtBQWE7SUFFYixNQUFNVixtREFBTUEsQ0FBQ1csZ0JBQWdCLENBQUNDLFVBQVUsQ0FBQztRQUNyQ0MsT0FBTztZQUNISixRQUFRQTtRQUNaO0lBQ0o7SUFDQSxNQUFNSyxPQUFPYixpRUFBb0JBLENBQUMsR0FBR0MscURBQVFBLENBQUM7SUFDOUMsTUFBTUYsbURBQU1BLENBQUNXLGdCQUFnQixDQUFDSSxNQUFNLENBQUM7UUFDakNDLE1BQU07WUFDRlAsUUFBUUE7WUFDUkM7WUFDQUk7WUFDQUcsV0FBV2IsZ0RBQVVBLENBQUMsSUFBSUMsMENBQVFBLENBQUMsSUFBSTtRQUMzQztJQUNKO0lBQ0EsT0FBT1M7QUFDWDtBQUdPLGVBQWVJLHlCQUF5QlQsTUFBYztJQUN6RCxNQUFNVCxtREFBTUEsQ0FBQ21CLG1CQUFtQixDQUFDUCxVQUFVLENBQUM7UUFDeENDLE9BQU87WUFDSEosUUFBUUE7UUFDWjtJQUNKO0lBRUEsTUFBTVcsVUFBVWQsZ0VBQXlCQSxDQUFDO0lBQzFDLE1BQU1lLFFBQVFkLHdEQUFTQSxDQUFDLE1BQU1KLG1EQUFNQSxDQUFDLElBQUltQixjQUFjQyxNQUFNLENBQUNIO0lBRTlELE1BQU1wQixtREFBTUEsQ0FBQ21CLG1CQUFtQixDQUFDSixNQUFNLENBQUM7UUFDcENDLE1BQU07WUFDRlAsUUFBUUE7WUFDUmUsWUFBWUg7WUFDWkksV0FBV3JCLGdEQUFVQSxDQUFDLElBQUlDLDBDQUFRQSxDQUFDLEdBQUc7UUFDMUM7SUFDSjtJQUVBLE9BQU9nQjtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL2xpYi9mdW5jdGlvbnMudHN4PzMxMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsdWNpYX0gZnJvbSBcIkAvbGliL2x1Y2lhXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7Z2VuZXJhdGVSYW5kb21TdHJpbmcsIGFscGhhYmV0LCBzaGEyNTZ9IGZyb20gXCJvc2xvL2NyeXB0b1wiO1xuaW1wb3J0IHtjcmVhdGVEYXRlLCBUaW1lU3Bhbn0gZnJvbSBcIm9zbG9cIjtcbmltcG9ydCB7Z2VuZXJhdGVJZEZyb21FbnRyb3B5U2l6ZX0gZnJvbSBcImx1Y2lhXCI7XG5pbXBvcnQge2VuY29kZUhleH0gZnJvbSBcIm9zbG8vZW5jb2RpbmdcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlRW1haWxWZXJpZmljYXRpb25Db2RlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmdcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkNvZGUuZGVsZXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnN0IGNvZGUgPSBnZW5lcmF0ZVJhbmRvbVN0cmluZyg2LCBhbHBoYWJldChcIjAtOVwiKSk7XG4gICAgYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkNvZGUuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICBleHBpcmVfYXQ6IGNyZWF0ZURhdGUobmV3IFRpbWVTcGFuKDE1LCBcIm1cIikpLCAvLyAxNSBtaW51dGVzXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvZGU7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBhc3N3b3JkUmVzZXRUb2tlbih1c2VySWQ6IHN0cmluZykge1xuICAgIGF3YWl0IHByaXNtYS5wYXNzd29yZFJlc2V0VG9rZW5zLmRlbGV0ZU1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbklkID0gZ2VuZXJhdGVJZEZyb21FbnRyb3B5U2l6ZSgxNik7XG4gICAgY29uc3QgdG9rZW4gPSBlbmNvZGVIZXgoYXdhaXQgc2hhMjU2KG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSh0b2tlbklkKSkpO1xuXG4gICAgYXdhaXQgcHJpc21hLnBhc3N3b3JkUmVzZXRUb2tlbnMuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgICB0b2tlbl9oYXNoOiB0b2tlbixcbiAgICAgICAgICAgIGV4cGlyZXNBdDogY3JlYXRlRGF0ZShuZXcgVGltZVNwYW4oMiwgXCJoXCIpKSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB0b2tlbjtcbn0iXSwibmFtZXMiOlsicHJpc21hIiwiZ2VuZXJhdGVSYW5kb21TdHJpbmciLCJhbHBoYWJldCIsInNoYTI1NiIsImNyZWF0ZURhdGUiLCJUaW1lU3BhbiIsImdlbmVyYXRlSWRGcm9tRW50cm9weVNpemUiLCJlbmNvZGVIZXgiLCJnZW5lcmF0ZUVtYWlsVmVyaWZpY2F0aW9uQ29kZSIsInVzZXJJZCIsImVtYWlsIiwidmVyaWZpY2F0aW9uQ29kZSIsImRlbGV0ZU1hbnkiLCJ3aGVyZSIsImNvZGUiLCJjcmVhdGUiLCJkYXRhIiwiZXhwaXJlX2F0IiwiY3JlYXRlUGFzc3dvcmRSZXNldFRva2VuIiwicGFzc3dvcmRSZXNldFRva2VucyIsInRva2VuSWQiLCJ0b2tlbiIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwidG9rZW5faGFzaCIsImV4cGlyZXNBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/functions.tsx\n");

/***/ }),

/***/ "(rsc)/./src/lib/lucia.tsx":
/*!***************************!*\
  !*** ./src/lib/lucia.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lucia: () => (/* binding */ lucia),\n/* harmony export */   validateRequest: () => (/* binding */ validateRequest)\n/* harmony export */ });\n/* harmony import */ var lucia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucia */ \"(rsc)/./node_modules/lucia/dist/index.js\");\n/* harmony import */ var _prismaAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prismaAdapter */ \"(rsc)/./src/lib/prismaAdapter.tsx\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst lucia = new lucia__WEBPACK_IMPORTED_MODULE_0__.Lucia(_prismaAdapter__WEBPACK_IMPORTED_MODULE_1__.adapter, {\n    sessionCookie: {\n        attributes: {\n            // set to `true` when using HTTPS\n            secure: \"development\" === \"production\"\n        }\n    },\n    getUserAttributes: (attributes)=>{\n        return {\n            id: attributes.id,\n            email: attributes.email,\n            name: attributes.name,\n            hashedpassword: attributes.password,\n            emailVerified: attributes.emailVerified\n        };\n    }\n});\nconst validateRequest = (0,react__WEBPACK_IMPORTED_MODULE_3__.cache)(async ()=>{\n    const sessionId = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().get(lucia.sessionCookieName)?.value ?? null;\n    if (!sessionId) return null;\n    const { user, session } = await lucia.validateSession(sessionId);\n    try {\n        if (session && session.fresh) {\n            const sessionCookie = lucia.createSessionCookie(session.id);\n            (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);\n        }\n        if (!session) {\n            const sessionCookie = lucia.createBlankSessionCookie();\n            (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);\n        }\n    } catch  {\n    // Next.js throws error when attempting to set cookies when rendering page\n    }\n    return {\n        user,\n        session\n    }; // Return both user and session\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2x1Y2lhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDRjtBQUNUO0FBSXJCLE1BQU1JLFFBQVEsSUFBSUosd0NBQUtBLENBQUNDLG1EQUFPQSxFQUFFO0lBQ3BDSSxlQUFlO1FBQ1hDLFlBQVk7WUFDUixpQ0FBaUM7WUFDakNDLFFBQVFDLGtCQUF5QjtRQUNyQztJQUNKO0lBQ0FDLG1CQUFvQixDQUFDSDtRQUNqQixPQUFPO1lBQ0hJLElBQUlKLFdBQVdJLEVBQUU7WUFDakJDLE9BQU9MLFdBQVdLLEtBQUs7WUFDdkJDLE1BQU1OLFdBQVdNLElBQUk7WUFDckJDLGdCQUFnQlAsV0FBV1EsUUFBUTtZQUNuQ0MsZUFBZVQsV0FBV1MsYUFBYTtRQUMzQztJQUNKO0FBQ0osR0FBRztBQWtCSSxNQUFNQyxrQkFBa0JiLDRDQUFLQSxDQUFDO0lBQ2pDLE1BQU1jLFlBQVlmLHFEQUFPQSxHQUFHZ0IsR0FBRyxDQUFDZCxNQUFNZSxpQkFBaUIsR0FBR0MsU0FBUztJQUNuRSxJQUFJLENBQUNILFdBQVcsT0FBTztJQUV2QixNQUFNLEVBQUVJLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUcsTUFBTWxCLE1BQU1tQixlQUFlLENBQUNOO0lBQ3RELElBQUk7UUFDQSxJQUFJSyxXQUFXQSxRQUFRRSxLQUFLLEVBQUU7WUFDMUIsTUFBTW5CLGdCQUFnQkQsTUFBTXFCLG1CQUFtQixDQUFDSCxRQUFRWixFQUFFO1lBQzFEUixxREFBT0EsR0FBR3dCLEdBQUcsQ0FDVHJCLGNBQWNPLElBQUksRUFDbEJQLGNBQWNlLEtBQUssRUFDbkJmLGNBQWNDLFVBQVU7UUFFaEM7UUFDQSxJQUFJLENBQUNnQixTQUFTO1lBQ1YsTUFBTWpCLGdCQUFnQkQsTUFBTXVCLHdCQUF3QjtZQUNwRHpCLHFEQUFPQSxHQUFHd0IsR0FBRyxDQUNUckIsY0FBY08sSUFBSSxFQUNsQlAsY0FBY2UsS0FBSyxFQUNuQmYsY0FBY0MsVUFBVTtRQUVoQztJQUNKLEVBQUUsT0FBTTtJQUNKLDBFQUEwRTtJQUM5RTtJQUVBLE9BQU87UUFBRWU7UUFBTUM7SUFBUSxHQUFHLCtCQUErQjtBQUM3RCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL2xpYi9sdWNpYS50c3g/Zjk2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMdWNpYSB9IGZyb20gXCJsdWNpYVwiO1xuaW1wb3J0IHthZGFwdGVyfSBmcm9tIFwiLi9wcmlzbWFBZGFwdGVyXCJcbmltcG9ydCB7Y29va2llc30gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHtjYWNoZX0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5leHBvcnQgY29uc3QgbHVjaWEgPSBuZXcgTHVjaWEoYWRhcHRlciwge1xuICAgIHNlc3Npb25Db29raWU6IHtcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgLy8gc2V0IHRvIGB0cnVlYCB3aGVuIHVzaW5nIEhUVFBTXG4gICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRVc2VyQXR0cmlidXRlcyA6IChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogYXR0cmlidXRlcy5pZCxcbiAgICAgICAgICAgIGVtYWlsOiBhdHRyaWJ1dGVzLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogYXR0cmlidXRlcy5uYW1lLFxuICAgICAgICAgICAgaGFzaGVkcGFzc3dvcmQ6IGF0dHJpYnV0ZXMucGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBhdHRyaWJ1dGVzLmVtYWlsVmVyaWZpZWRcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vLyBJTVBPUlRBTlQhXG5kZWNsYXJlIG1vZHVsZSBcImx1Y2lhXCIge1xuICAgIGludGVyZmFjZSBSZWdpc3RlciB7XG4gICAgICAgIEx1Y2lhOiB0eXBlb2YgbHVjaWE7XG4gICAgICAgIERhdGFiYXNlVXNlckF0dHJpYnV0ZXM6IERhdGFiYXNlVXNlckF0dHJpYnV0ZXM7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgRGF0YWJhc2VVc2VyQXR0cmlidXRlcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGVtYWlsVmVyaWZpZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVJlcXVlc3QgPSBjYWNoZShhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gY29va2llcygpLmdldChsdWNpYS5zZXNzaW9uQ29va2llTmFtZSk/LnZhbHVlID8/IG51bGw7XG4gICAgaWYgKCFzZXNzaW9uSWQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgeyB1c2VyLCBzZXNzaW9uIH0gPSBhd2FpdCBsdWNpYS52YWxpZGF0ZVNlc3Npb24oc2Vzc2lvbklkKTtcbiAgICB0cnkge1xuICAgICAgICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLmZyZXNoKSB7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uQ29va2llID0gbHVjaWEuY3JlYXRlU2Vzc2lvbkNvb2tpZShzZXNzaW9uLmlkKTtcbiAgICAgICAgICAgIGNvb2tpZXMoKS5zZXQoXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkNvb2tpZS5uYW1lLFxuICAgICAgICAgICAgICAgIHNlc3Npb25Db29raWUudmFsdWUsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkNvb2tpZS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkNvb2tpZSA9IGx1Y2lhLmNyZWF0ZUJsYW5rU2Vzc2lvbkNvb2tpZSgpO1xuICAgICAgICAgICAgY29va2llcygpLnNldChcbiAgICAgICAgICAgICAgICBzZXNzaW9uQ29va2llLm5hbWUsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkNvb2tpZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBzZXNzaW9uQ29va2llLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gTmV4dC5qcyB0aHJvd3MgZXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIHNldCBjb29raWVzIHdoZW4gcmVuZGVyaW5nIHBhZ2VcbiAgICB9XG5cbiAgICByZXR1cm4geyB1c2VyLCBzZXNzaW9uIH07IC8vIFJldHVybiBib3RoIHVzZXIgYW5kIHNlc3Npb25cbn0pO1xuXG5cbiJdLCJuYW1lcyI6WyJMdWNpYSIsImFkYXB0ZXIiLCJjb29raWVzIiwiY2FjaGUiLCJsdWNpYSIsInNlc3Npb25Db29raWUiLCJhdHRyaWJ1dGVzIiwic2VjdXJlIiwicHJvY2VzcyIsImdldFVzZXJBdHRyaWJ1dGVzIiwiaWQiLCJlbWFpbCIsIm5hbWUiLCJoYXNoZWRwYXNzd29yZCIsInBhc3N3b3JkIiwiZW1haWxWZXJpZmllZCIsInZhbGlkYXRlUmVxdWVzdCIsInNlc3Npb25JZCIsImdldCIsInNlc3Npb25Db29raWVOYW1lIiwidmFsdWUiLCJ1c2VyIiwic2Vzc2lvbiIsInZhbGlkYXRlU2Vzc2lvbiIsImZyZXNoIiwiY3JlYXRlU2Vzc2lvbkNvb2tpZSIsInNldCIsImNyZWF0ZUJsYW5rU2Vzc2lvbkNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/lucia.tsx\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.tsx":
/*!****************************!*\
  !*** ./src/lib/prisma.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRzlDLE1BQU1DLHdCQUF3QjtJQUMxQixPQUFPLElBQUlELHdEQUFZQTtBQUMzQjtBQU1BLE1BQU1FLFNBQVNDLFdBQVdDLFlBQVksSUFBSUg7QUFFMUMsaUVBQWVDLE1BQU1BLEVBQUM7QUFFdEIsSUFBSUcsSUFBcUMsRUFBRUYsV0FBV0MsWUFBWSxHQUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9saWIvcHJpc21hLnRzeD84M2RiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5cbmNvbnN0IHByaXNtYUNsaWVudFNpbmdsZXRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpO1xufTtcblxuZGVjbGFyZSBjb25zdCBnbG9iYWxUaGlzOiB7XG4gICAgcHJpc21hR2xvYmFsOiBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+O1xufSAmIHR5cGVvZiBnbG9iYWw7XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID0gcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hR2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.tsx\n");

/***/ }),

/***/ "(rsc)/./src/lib/prismaAdapter.tsx":
/*!***********************************!*\
  !*** ./src/lib/prismaAdapter.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   adapter: () => (/* binding */ adapter)\n/* harmony export */ });\n/* harmony import */ var _lucia_auth_adapter_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lucia-auth/adapter-prisma */ \"(rsc)/./node_modules/@lucia-auth/adapter-prisma/dist/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./src/lib/prisma.tsx\");\n\n\nconst adapter = new _lucia_auth_adapter_prisma__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter(_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].session, _prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYUFkYXB0ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUM1QjtBQUV4QixNQUFNRSxVQUFVLElBQUlGLHFFQUFhQSxDQUFDQywrQ0FBTUEsQ0FBQ0UsT0FBTyxFQUFFRiwrQ0FBTUEsQ0FBQ0csS0FBSyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL2xpYi9wcmlzbWFBZGFwdGVyLnRzeD9jMWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGx1Y2lhLWF1dGgvYWRhcHRlci1wcmlzbWFcIjtcbmltcG9ydCAgcHJpc21hIGZyb20gXCIuL3ByaXNtYVwiO1xuXG5leHBvcnQgY29uc3QgYWRhcHRlciA9IG5ldyBQcmlzbWFBZGFwdGVyKHByaXNtYS5zZXNzaW9uLCBwcmlzbWEudXNlcnMpOyJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiYWRhcHRlciIsInNlc3Npb24iLCJ1c2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prismaAdapter.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/oslo","vendor-chunks/@oslojs","vendor-chunks/lucia","vendor-chunks/@lucia-auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.tsx&appDir=%2Frun%2Fmedia%2Fnkatha%2Fdossiers%2FCodes%2Fjob-finder-app-frontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Frun%2Fmedia%2Fnkatha%2Fdossiers%2FCodes%2Fjob-finder-app-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();