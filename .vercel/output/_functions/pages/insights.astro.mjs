/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DTu46K8G.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BRROtrsP.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard__FsFSMRL.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_Dr2XzCwx.mjs';
import { g as getCollection } from '../chunks/_astro_content_DTJq5Xj7.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Insights | TheLearnBetter.co - LearnTech Growth Perspectives" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8"> <h1 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">LearnTech Insights</h1> <p class="font-light sm:text-xl">Perspectives on growth, market positioning, and reaching educational institutions. Coming soon.</p> </div> <br> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <div class="grid gap-8 lg:grid-cols-2"> ${allBlogArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> </main> ` })}`;
}, "/tmp/cc-agent/60266810/project/src/pages/insights/index.astro", void 0);

const $$file = "/tmp/cc-agent/60266810/project/src/pages/insights/index.astro";
const $$url = "/insights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
