export interface NavLink {
  href: string;
  label: string;
}

export const mainNav: NavLink[] = [
  { href: "/#hero", label: "Home" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#quem-somos", label: "Sobre nós" },
  { href: "/#contato", label: "Contato" },
];
