export interface NavLink {
  href: string;
  label: string;
}

export const mainNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/noticias", label: "Notícias" },
  { href: "/blog", label: "Blog" },
];
