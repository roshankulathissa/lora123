export interface RouteConfig {
  path: string;
  label: string;
  nav: boolean;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  sitemap: boolean;
}

export const ROUTES = [
  { path: "/",          label: "Home",         nav: true,  changefreq: "monthly", priority: 1.0, sitemap: true  },
  { path: "/jobs",      label: "Overseas Jobs", nav: true,  changefreq: "weekly",  priority: 0.9, sitemap: true  },
  { path: "/about",     label: "About Us",      nav: true,  changefreq: "monthly", priority: 0.7, sitemap: true  },
  { path: "/resources", label: "Resources",     nav: true,  changefreq: "monthly", priority: 0.6, sitemap: true  },
  { path: "/contact",   label: "Contact",       nav: true,  changefreq: "monthly", priority: 0.7, sitemap: true  },
  { path: "/apply",     label: "Apply Now",     nav: true,  changefreq: "monthly", priority: 0.8, sitemap: true  },
  { path: "/login",     label: "Login",         nav: false, changefreq: "monthly", priority: 0.5, sitemap: false },
] as const satisfies RouteConfig[];

export const NAV_ROUTES = ROUTES.filter((r) => r.nav);
