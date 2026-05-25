export interface RouteConfig {
  path: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  sitemap: boolean;
}

export const ROUTES = [
  { path: "/",         changefreq: "monthly", priority: 1.0, sitemap: true  },
  { path: "/jobs",     changefreq: "weekly",  priority: 0.9, sitemap: true  },
  { path: "/about",    changefreq: "monthly", priority: 0.7, sitemap: true  },
  { path: "/contact",  changefreq: "monthly", priority: 0.7, sitemap: true  },
  { path: "/apply",    changefreq: "monthly", priority: 0.8, sitemap: true  },
  { path: "/resources",changefreq: "monthly", priority: 0.6, sitemap: true  },
  { path: "/login",    changefreq: "monthly", priority: 0.5, sitemap: false },
] as const satisfies RouteConfig[];
