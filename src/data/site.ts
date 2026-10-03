import CloudMoniDashboard from "@/assets/Cloud-Monitor-Dashboard.webp";
import argocdDashboard from "@/assets/argocd-prod-app-dashboard.webp";
import { getCollection } from "astro:content";

export const profile = {
  name: "Jesús Merlo",
  email: "jesus.lab.tech@gmail.com",
  github: "https://github.com/jesuslabtech",
  linkedin: "https://linkedin.com/in/jesusmerlo",
  site: "https://jesuslabtech.vercel.app",
};

/** Datos no traducibles de los proyectos; el texto vive en src/i18n. Mismo orden que cases.items. */
export const projectMeta = [
  { image: CloudMoniDashboard, github: "https://github.com/jesuslabtech/aws-observability-lab" },
  { image: argocdDashboard, github: "https://github.com/jesuslabtech/task-manager-gitops" },
];

export async function getLatestPosts(count = 2) {
  const posts = await getCollection("posts");
  return posts
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice(0, count);
}

export const formatDate = (date: string, lang: string) =>
  new Date(date).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB");
