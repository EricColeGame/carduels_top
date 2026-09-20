export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: any;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "codes", path: "/codes", isContentType: true },
  { key: "guide", path: "/guide", isContentType: true },
  { key: "vehicles", path: "/vehicles", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "updates", path: "/updates", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
