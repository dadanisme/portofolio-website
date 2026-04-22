export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  // TODO: re-enable Projects tab once project content is ready
  // { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
