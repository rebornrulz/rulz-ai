"use strict";
(() => {
var exports = {};
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 1365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fgoogle_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fgoogle_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/google.ts
var api_google_namespaceObject = {};
__webpack_require__.r(api_google_namespaceObject);
__webpack_require__.d(api_google_namespaceObject, {
  "default": () => (google)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./utils/app/const.ts
var app_const = __webpack_require__(8219);
;// CONCATENATED MODULE: ./utils/server/google.ts
const cleanSourceText = (text)=>{
    return text.trim().replace(/(\n){4,}/g, "\n\n\n").replace(/\n\n/g, " ").replace(/ {3,}/g, "  ").replace(/\t/g, "").replace(/\n+(\s*\n)*/g, "\n");
};

;// CONCATENATED MODULE: external "@mozilla/readability"
const readability_namespaceObject = require("@mozilla/readability");
;// CONCATENATED MODULE: external "endent"
const external_endent_namespaceObject = require("endent");
var external_endent_default = /*#__PURE__*/__webpack_require__.n(external_endent_namespaceObject);
;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
var external_jsdom_default = /*#__PURE__*/__webpack_require__.n(external_jsdom_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/google.ts





const handler = async (req, res)=>{
    try {
        const { messages, key, model, googleAPIKey, googleCSEId } = req.body;
        const userMessage = messages[messages.length - 1];
        const query = encodeURIComponent(userMessage.content.trim());
        const googleRes = await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${googleAPIKey ? googleAPIKey : process.env.GOOGLE_API_KEY}&cx=${googleCSEId ? googleCSEId : process.env.GOOGLE_CSE_ID}&q=${query}&num=5`);
        const googleData = await googleRes.json();
        const sources = googleData.items.map((item)=>({
                title: item.title,
                link: item.link,
                displayLink: item.displayLink,
                snippet: item.snippet,
                image: item.pagemap?.cse_image?.[0]?.src,
                text: ""
            }));
        const sourcesWithText = await Promise.all(sources.map(async (source)=>{
            try {
                const timeoutPromise = new Promise((_, reject)=>setTimeout(()=>reject(new Error("Request timed out")), 5000));
                const res = await Promise.race([
                    fetch(source.link),
                    timeoutPromise
                ]);
                // if (res) {
                const html = await res.text();
                const virtualConsole = new (external_jsdom_default()).VirtualConsole();
                virtualConsole.on("error", (error)=>{
                    if (!error.message.includes("Could not parse CSS stylesheet")) {
                        console.error(error);
                    }
                });
                const dom = new external_jsdom_namespaceObject.JSDOM(html, {
                    virtualConsole
                });
                const doc = dom.window.document;
                const parsed = new readability_namespaceObject.Readability(doc).parse();
                if (parsed) {
                    let sourceText = cleanSourceText(parsed.textContent);
                    return {
                        ...source,
                        // TODO: switch to tokens
                        text: sourceText.slice(0, 2000)
                    };
                }
                // }
                return null;
            } catch (error) {
                console.error(error);
                return null;
            }
        }));
        const filteredSources = sourcesWithText.filter(Boolean);
        const answerPrompt = (external_endent_default())`
    Provide me with the information I requested. Use the sources to provide an accurate response. Respond in markdown format. Cite the sources you used as a markdown link as you use them at the end of each sentence by number of the source (ex: [[1]](link.com)). Provide an accurate response and then stop. Today's date is ${new Date().toLocaleDateString()}.

    Example Input:
    What's the weather in Malaysia today?

    Example Sources:
    [Weather in Malaysia](https://www.google.com/search?q=weather+malaysia)

    Example Response:
    It's 30 degrees and partly cloudy in Malaysia today. [[1]](https://www.google.com/search?q=weather+malaysia)

    Input:
    ${userMessage.content.trim()}

    Sources:
    ${filteredSources.map((source)=>{
            return (external_endent_default())`
      ${source.title} (${source.link}):
      ${source.text}
      `;
        })}

    Response:
    `;
        const answerMessage = {
            role: "user",
            content: answerPrompt
        };
        const answerRes = await fetch(`${app_const/* OPENAI_API_HOST */.bg}/v1/chat/completions`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${key ? key : process.env.OPENAI_API_KEY}`,
                ...process.env.OPENAI_ORGANIZATION && {
                    "OpenAI-Organization": process.env.OPENAI_ORGANIZATION
                }
            },
            method: "POST",
            body: JSON.stringify({
                model: model.id,
                messages: [
                    {
                        role: "system",
                        content: `Use the sources to provide an accurate response. Respond in markdown format. Cite the sources you used as [1](link), etc, as you use them. Maximum 4 sentences.`
                    },
                    answerMessage
                ],
                max_tokens: 1000,
                temperature: 1,
                stream: false
            })
        });
        const { choices: choices2 } = await answerRes.json();
        const answer = choices2[0].message.content;
        res.status(200).json({
            answer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error"
        });
    }
};
/* harmony default export */ const google = (handler);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgoogle&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fgoogle.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fgoogle_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fgoogle_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(api_google_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(api_google_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/google",
        pathname: "/api/google",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: api_google_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 8219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ar: () => (/* binding */ DEFAULT_TEMPERATURE),
/* harmony export */   bg: () => (/* binding */ OPENAI_API_HOST),
/* harmony export */   cl: () => (/* binding */ DEFAULT_SYSTEM_PROMPT)
/* harmony export */ });
/* unused harmony exports OPENAI_API_TYPE, OPENAI_API_VERSION, OPENAI_ORGANIZATION, AZURE_DEPLOYMENT_ID */
const DEFAULT_SYSTEM_PROMPT = "Rulz-AI is a Powerful Language Model trained on massive data. Respond using markdown and emoji." || 0;
const OPENAI_API_HOST = process.env.OPENAI_API_HOST || "https://api.openai.com";
const DEFAULT_TEMPERATURE = parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "0.5");
const OPENAI_API_TYPE = process.env.OPENAI_API_TYPE || "openai";
const OPENAI_API_VERSION = process.env.OPENAI_API_VERSION || "2023-06-01-preview";
const OPENAI_ORGANIZATION = process.env.OPENAI_ORGANIZATION || "";
const AZURE_DEPLOYMENT_ID = process.env.AZURE_DEPLOYMENT_ID || "";


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(1365)));
module.exports = __webpack_exports__;

})();