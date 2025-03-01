export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + ShadCN",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Статистика",
      href: "/",
    },
    {
      label: "Поиск",
      href: "/search",
    },
    {
      label: "Карта",
      href: "/map",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  
};
