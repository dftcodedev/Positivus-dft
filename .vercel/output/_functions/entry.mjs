import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BMgVfMmJ.mjs';
import { manifest } from './manifest_CTV3Dy8R.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/api/newsletter.astro.mjs');
const _page5 = () => import('./pages/insights/api/search.json.astro.mjs');
const _page6 = () => import('./pages/insights/search.astro.mjs');
const _page7 = () => import('./pages/insights/tag/_---tag_.astro.mjs');
const _page8 = () => import('./pages/insights.astro.mjs');
const _page9 = () => import('./pages/insights/_---slug_.astro.mjs');
const _page10 = () => import('./pages/services/content-marketing.astro.mjs');
const _page11 = () => import('./pages/services/customer-acquisition.astro.mjs');
const _page12 = () => import('./pages/services/growth-strategy.astro.mjs');
const _page13 = () => import('./pages/services/market-positioning.astro.mjs');
const _page14 = () => import('./pages/services/partnerships.astro.mjs');
const _page15 = () => import('./pages/services.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/api/newsletter.ts", _page4],
    ["src/pages/insights/api/search.json.ts", _page5],
    ["src/pages/insights/search.astro", _page6],
    ["src/pages/insights/tag/[...tag].astro", _page7],
    ["src/pages/insights/index.astro", _page8],
    ["src/pages/insights/[...slug].astro", _page9],
    ["src/pages/services/content-marketing.astro", _page10],
    ["src/pages/services/customer-acquisition.astro", _page11],
    ["src/pages/services/growth-strategy.astro", _page12],
    ["src/pages/services/market-positioning.astro", _page13],
    ["src/pages/services/partnerships.astro", _page14],
    ["src/pages/services.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3c177cca-cc9a-4e6b-a1e6-ad50cf000bc8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
