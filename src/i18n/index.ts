import { es } from "./es";
import { en } from "./en";
import type { Content, Lang } from "./types";

export const LANGS: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "es";

const content: Record<Lang, Content> = { es, en };
export const getContent = (lang: Lang) => content[lang];
export type { Content, Lang };
