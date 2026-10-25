import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="eyebrow">SLEDEĆI DOBAR POTEZ</p>
          <h2>Imate projekat<br />na umu?</h2>
        </div>
        <Link className="footer-email" href="/kontakt">
          Javite mi se <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© Nikola</span>
        <span>Dizajnirano sa pažnjom u Srbiji</span>
        <Link href="/kontakt">Kontakt</Link>
      </div>
    </footer>
  );
}
