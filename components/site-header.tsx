import Link from "next/link";

const links = [
  { href: "/", label: "Početna" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/o-meni", label: "O meni" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Nikola — početna">
          <span className="wordmark-icon" aria-hidden="true">i.</span>
          <span>NIKOLA<span className="wordmark-sub">FREELANCE DESIGNER</span></span>
        </Link>
        <nav className="main-nav" aria-label="Glavna navigacija">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>
        <Link className="header-cta" href="/kontakt">
          Hajde da pričamo <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
