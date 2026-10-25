import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio — Nikola",
  description: "Odabrani konceptualni projekti iz oblasti identiteta, digitalnog dizajna i art direkcije.",
};

const projects = [
  {
    title: "Forma Studio",
    category: "Identitet · Ambalaža",
    image: "photo-1544816155-12df9643f363",
    alt: "Papirni proizvodi u toplom, minimalističkom enterijeru",
    color: "sand",
    year: "2025",
  },
  {
    title: "Sunday Objects",
    category: "Art direkcija · Kampanja",
    image: "photo-1490312278390-ab64016e0aa9",
    alt: "Svetao enterijer sa pažljivo odabranim predmetima",
    color: "blue",
    year: "2025",
  },
  {
    title: "Terra Botanica",
    category: "Identitet · Ambalaža",
    image: "photo-1490750967868-88aa4486c946",
    alt: "Cveće i biljke u nežnim prirodnim tonovima",
    color: "green",
    year: "2024",
  },
  {
    title: "Atelier Soba",
    category: "Digitalni dizajn · UI/UX",
    image: "photo-1494438639946-1ebd1d20bf85",
    alt: "Radni sto i dizajnerski detalji u prirodnom svetlu",
    color: "rose",
    year: "2024",
  },
  {
    title: "Mali Ritual",
    category: "Identitet · Strategija",
    image: "photo-1608571423902-eed4a5ad8108",
    alt: "Proizvodi za negu kože minimalističkog dizajna",
    color: "lavender",
    year: "2024",
  },
 {
    title: "Kadar Magazine",
    category: "Uređivački dizajn · Štampa",
    image: "photo-1504274066651-8d31a536b11a",
    alt: "Fotografski kadar prirode u mekom svetlu",
    color: "peach",
    year: "2023",
  },
];

export default function PortfolioPage() {
  return (
    <main className="page-main">
      <section className="page-intro section-wrap">
        <p className="eyebrow"><span className="status-dot" /> PORTFOLIO / ODABRANI RADOVI</p>
        <div className="page-intro-row">
          <h1>Male ideje.<br /><span>Veliki utisak.</span></h1>
          <p>
            Svaki projekat počinje pitanjem, slušanjem i dobrom dozom radoznalosti.
            Ovo su odabrani konceptualni primeri mog pristupa dizajnu.
          </p>
        </div>
      </section>
      <section className="portfolio-grid section-wrap" aria-label="Odabrani projekti">
        {projects.map((project, index) => (
          <article className={`project-card project-${project.color}`} key={project.title}>
            <div className="project-image">
              <Image
                src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1100&q=85`}
                alt={project.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                className="cover-image"
              />
              <span className="project-count">0{index + 1}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <div className="project-caption">
              <div>
                <h2>{project.title}</h2>
                <p>{project.category}</p>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
          </article>
        ))}
      </section>
      <section className="portfolio-note section-wrap">
        <span className="note-star" aria-hidden="true">✳</span>
        <p>Ovi projekti su konceptualni primeri. Vaše sledeće poglavlje može biti stvarno.</p>
      </section>
    </main>
  );
}
