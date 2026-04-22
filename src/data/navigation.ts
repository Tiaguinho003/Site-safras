export interface NavLink {
  href: string;
  label: string;
}

export const mainNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/noticias", label: "Notícias" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];
