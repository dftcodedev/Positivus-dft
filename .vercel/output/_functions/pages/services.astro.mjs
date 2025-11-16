/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DTu46K8G.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BRROtrsP.mjs';
import { $ as $$Card } from '../chunks/Card_BZjpJXUq.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_C8siyQkM.mjs';
import { c as c1 } from '../chunks/card-pic1_CXB1Dsxd.mjs';
import { c as c2 } from '../chunks/card-pic2_3zay-rxq.mjs';
import { c as c3 } from '../chunks/card-pic3_DuEPcER-.mjs';
import { c as c4 } from '../chunks/card-pic4_DjCytMHz.mjs';
import { c as c5 } from '../chunks/card-pic5_VraYEYGp.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      index: 1,
      titleTop: "Market",
      titleBottom: "Positioning",
      img: c1,
      alt: "Market Positioning",
      description: "Position your education technology solution effectively in the market. We help learntech companies define their unique value proposition and stand out to schools, universities, and educational organizations.",
      benefits: ["Clear market differentiation", "Compelling value proposition", "Targeted messaging", "Competitive advantage"],
      cta: "Learn More",
      link: "/services/market-positioning"
    },
    {
      index: 2,
      titleTop: "Customer",
      titleBottom: "Acquisition",
      img: c2,
      alt: "Customer Acquisition",
      description: "Reach schools, universities, and organizations effectively. We help education technology companies build customer acquisition strategies that connect with educational decision-makers and drive growth.",
      benefits: ["Qualified lead generation", "Educational buyer targeting", "Multi-channel reach", "Sustainable growth pipelines"],
      cta: "Learn More",
      link: "/services/customer-acquisition"
    },
    {
      index: 3,
      titleTop: "Growth",
      titleBottom: "Strategy",
      img: c3,
      alt: "Growth Strategy",
      description: "Comprehensive growth planning for learntech companies. We help education technology businesses develop strategies to scale and reach more educational institutions and organizations.",
      benefits: ["Strategic roadmaps", "Market expansion plans", "Scalable frameworks", "Data-driven insights"],
      cta: "Learn More",
      link: "/services/growth-strategy"
    },
    {
      index: 1,
      titleTop: "Content",
      titleBottom: "Marketing",
      img: c4,
      alt: "Content Marketing",
      description: "Build thought leadership and reach educational decision-makers through strategic content. We help learntech companies create compelling content that resonates with schools, universities, and organizations.",
      benefits: ["Thought leadership", "Educational audience engagement", "Trust building", "SEO visibility"],
      cta: "Learn More",
      link: "/services/content-marketing"
    },
    {
      index: 2,
      titleTop: "Strategic",
      titleBottom: "Partnerships",
      img: c5,
      alt: "Partnerships",
      description: "Build strategic partnerships to expand reach in education. We help learntech companies develop partnership strategies and relationships with educational organizations and distribution channels.",
      benefits: ["Market reach expansion", "Channel partnerships", "Strategic alliances", "Co-marketing opportunities"],
      cta: "Learn More",
      link: "/services/partnerships"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "LearnTech Growth Services | TheLearnBetter.co", "description": "Specialized growth services for education technology companies. Market positioning, customer acquisition, growth strategy, content marketing, and strategic partnerships for reaching educational institutions.", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6" data-astro-cid-ucd2ps2b> <div class="text-center mb-16" data-astro-cid-ucd2ps2b> <h1 class="mb-4 text-5xl font-medium leading-none tracking-tight md:text-6xl" data-astro-cid-ucd2ps2b>Growth Services for LearnTech</h1> <p class="text-xl font-normal leading-7 mx-auto max-w-3xl" data-astro-cid-ucd2ps2b>
We help education technology companies reach schools, universities, and organizations through specialized growth services designed for the learntech sector.
</p> </div> <div class="space-y-24" data-astro-cid-ucd2ps2b> ${services.map((service, index) => renderTemplate`<div class="service-item" data-astro-cid-ucd2ps2b> <div class="mb-12" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": service.index, "titleTop": service.titleTop, "titleBottom": service.titleBottom, "img": service.img, "alt": service.alt, "link": service.link, "data-astro-cid-ucd2ps2b": true })} </div> <div class="grid md:grid-cols-2 gap-10 px-4" data-astro-cid-ucd2ps2b> <div data-astro-cid-ucd2ps2b> <h3 class="text-2xl font-medium mb-4" data-astro-cid-ucd2ps2b>What we offer</h3> <p class="mb-6" data-astro-cid-ucd2ps2b>${service.description}</p> <a${addAttribute(service.link, "href")} class="inline-flex items-center px-8 py-4 bg-green text-dark rounded-2xl hover:bg-dark hover:text-white transition-all font-medium" data-astro-cid-ucd2ps2b> ${service.cta} <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-ucd2ps2b></path> </svg> </a> </div> <div class="bg-gray rounded-2xl p-8" data-astro-cid-ucd2ps2b> <h3 class="text-2xl font-medium mb-4" data-astro-cid-ucd2ps2b>Benefits</h3> <ul class="space-y-4" data-astro-cid-ucd2ps2b> ${service.benefits.map((benefit) => renderTemplate`<li class="flex items-start" data-astro-cid-ucd2ps2b> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ucd2ps2b> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-ucd2ps2b></path> </svg> <span data-astro-cid-ucd2ps2b>${benefit}</span> </li>`)} </ul> </div> </div> </div>`)} </div> <div class="mt-24 text-center" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate` <div class="p-10 md:p-16" data-astro-cid-ucd2ps2b> <h2 class="text-3xl md:text-4xl font-medium mb-6" data-astro-cid-ucd2ps2b>Ready to Grow Your LearnTech Company?</h2> <p class="mb-10 text-xl max-w-2xl mx-auto" data-astro-cid-ucd2ps2b>
Let's discuss how our specialized growth services can help your education technology company reach more schools, universities, and organizations.
</p> <a href="/#contact" class="inline-flex items-center px-10 py-5 bg-dark text-white rounded-2xl hover:bg-green hover:text-dark transition-all font-medium text-xl" data-astro-cid-ucd2ps2b>
Start a Conversation
</a> </div> ` })} </div> </div> ` })} `;
}, "/tmp/cc-agent/60266810/project/src/pages/services.astro", void 0);

const $$file = "/tmp/cc-agent/60266810/project/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
