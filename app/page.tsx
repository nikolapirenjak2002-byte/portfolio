import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Vizuelni identitet",
    description:
      "Jasan i prepoznatljiv vizuelni jezik koji vašem brendu daje karakter.",
    label: "Strategija · Logo · Sistem",
  },
  {
    number: "02",
    title: "Digitalni dizajn",
    description:
      "Promišljena digitalna iskustva koja izgledaju sjajno i rade intuitivno.",
    label: "Web · UI/UX · Prototip",
  },
  {
    number: "03",
    title: "Art direkcija",
    description:
      "Dosledan kreativni pravac za kampanje, sadržaj i sve između.",
    label: "Kampanje · Sadržaj · Štampa",
  },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <section className="hero home-hero">
        <Image
          src={`${basePath}/hero-bg.jpg`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="home-hero-background"
        />
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> FREELANCE DIZAJNER · BEOGRAD</p>
          <h1>
            Dizajn koji pravi
            <br />
            <span>razliku.</span>
          </h1>
          <p className="hero-description">
            Zdravo, ja sam <strong>Nikola</strong>. Pomažem dobrim idejama da
            pronađu svoj prepoznatljiv izgled.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/portfolio">
              Pogledaj radove <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link hero-contact-link" href="/kontakt">
              Započnimo razgovor <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero-note">
            <span>VIZUELNI IDENTITET</span>
            <span>DIGITALNI DIZAJN</span>
            <span>ART DIREKCIJA</span>
          </div>
        </div>
      </section>

      <section className="services-section section-wrap" aria-labelledby="services-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">KAKO MOGU DA POMOGNEM</p>
            <h2 id="services-heading">Od prve ideje do <span>dobrog utiska.</span></h2>
          </div>
          <span className="section-index">01 — USLUGE</span>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span className="service-label">{service.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-work section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ODABRANI RADOVI</p>
            <h2>Ideje, pretvorene <span>u stvarnost.</span></h2>
          </div>
          <Link className="text-link" href="/portfolio">
            Svi projekti <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Link href="/portfolio" className="featured-work">
          <div className="featured-image">
            <Image
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85"
              alt="Papirni proizvodi i pažljivo osmišljena ambalaža"
              fill
              sizes="(max-width: 800px) 100vw, 90vw"
              className="cover-image"
            />
            <span className="featured-badge">KONCEPTUALNI PROJEKAT</span>
          </div>
          <div className="featured-caption">
            <div>
              <span>IDENTITET · AMBALAŽA</span>
              <h3>Forma Studio</h3>
            </div>
            <span className="round-arrow" aria-hidden="true">↗</span>
          </div>
        </Link>
      </section>

      <section className="home-cta section-wrap">
        <p className="eyebrow">IMATE DOBRU IDEJU?</p>
        <h2>Hajde da napravimo<br /><span>nešto posebno.</span></h2>
        <Link className="button button-light" href="/kontakt">
          Javite mi se <span aria-hidden="true">↗</span>
        </Link>
        <span className="cta-mark" aria-hidden="true">✳</span>
      </section>
    </main>
  );
}
