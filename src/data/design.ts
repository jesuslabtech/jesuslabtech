/** Estructura de la página: qué secciones y en qué orden. Cada una es una ruta distinta en /preview. */
export const LAYOUTS = ["servicios", "casos", "diagrama", "perfil"] as const;
export type LayoutName = (typeof LAYOUTS)[number];

/** Estilo visual: solo CSS (src/styles/skins.css), se cambia al instante sin recargar. */
export const SKINS = ["classic", "terminal", "editorial", "dashboard"] as const;
export type SkinName = (typeof SKINS)[number];

const pick = <T extends string>(list: readonly T[], raw: string | undefined, fallback: T): T =>
  (list as readonly string[]).includes(raw ?? "") ? (raw as T) : fallback;

/** Valores del build de producción: LAYOUT=casos SKIN=terminal pnpm build */
export const activeLayout = () => pick(LAYOUTS, process.env.LAYOUT, "servicios");
export const activeSkin = () => pick(SKINS, process.env.SKIN, "classic");

/** Rutas /preview y selector solo fuera de producción (Vercel production). */
export const switcherEnabled = () => process.env.VERCEL_ENV !== "production";
