export type Lang = "es" | "en";

export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  nav: { label: string; href: string }[];
  availability: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    meta: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  diagram: {
    hint: string;
    nodes: { id: string; label: string; desc: string }[];
  };
  services: {
    label: string;
    title: string;
    intro: string;
    items: { title: string; description: string; bullets: string[] }[];
  };
  proof: {
    label: string;
    title: string;
    intro: string;
    role: string;
    company: string;
    period: string;
    items: string[];
    stack: string[];
  };
  cases: {
    label: string;
    title: string;
    intro: string;
    badge: string;
    problem: string;
    built: string;
    code: string;
    items: { title: string; problem: string; built: string; tags: string[] }[];
  };
  process: {
    label: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  about: {
    label: string;
    title: string;
    summary: string;
    quote: string;
    stackLabel: string;
    stack: string[];
    focusLabel: string;
    focus: string[];
    billing: string;
  };
  posts: { label: string; title: string; readMore: string; note: string };
  contact: {
    label: string;
    title: string;
    lead: string;
    form: {
      name: string;
      need: string;
      needOptions: string[];
      situation: string;
      situationPlaceholder: string;
      when: string;
      whenOptions: string[];
      submit: string;
      fallback: string;
      subject: string;
      bodyIntro: string;
    };
    linkedin: string;
  };
  footer: { rights: string };
  ui: { skip: string; langName: string; langSwitch: string };
}
