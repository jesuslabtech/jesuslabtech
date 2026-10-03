export const THEMES = ["classic", "terminal", "editorial", "dashboard", "showcase"] as const;
export type ThemeName = (typeof THEMES)[number];

export const DEFAULT_THEME: ThemeName = "classic";

/** Tema del build: THEME=terminal pnpm build (o PUBLIC_THEME). */
export function activeTheme(): ThemeName {
  const raw = (import.meta.env.THEME ?? import.meta.env.PUBLIC_THEME ?? process.env.THEME ?? DEFAULT_THEME) as string;
  return (THEMES as readonly string[]).includes(raw) ? (raw as ThemeName) : DEFAULT_THEME;
}

/** Las rutas /preview/<tema> y el selector solo existen fuera de producción. */
export const switcherEnabled = () => process.env.VERCEL_ENV !== "production";
