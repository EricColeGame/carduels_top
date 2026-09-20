export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Carduels Wiki",
  shortName: "Carduels",
  logoText: "C",
  tagline: "Cards, Builds & Strategy Guides",
  description: "Carduels Wiki provides guides, gameplay information, card strategies, builds, updates, and community resources for players looking to master the game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://carduels.top",
  supportEmail: "support@carduels.top",
  gameUrl: "https://www.roblox.com/games/17164680550/Card-Duels",
  heroVideoId: "I_D2k-Kc_qk", // Roblox Card Duels gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "de", "es", "fr"],
  defaultLocale: "en",
};
