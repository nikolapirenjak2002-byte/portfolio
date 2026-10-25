import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O meni — Nikola",
  description: "Upoznajte freelance dizajnera koji povezuje strategiju, estetiku i ideje.",
};

const skills = [
  "Vizuelni identitet",
  "Art direkcija",
  "Web dizajn",
  "UI/UX",
  "Dizajn ambalaže",
  "Tipografija",
  "Figma",
  "Adobe Creative Suite",
];

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-intro section-wrap">
        <p className="eyebrow"><span className="status-dot" /> O MENI / KRATKO I LIČNO</p>
        <div className="page-intro-row">
          <h1>Dobro osmišljeno.<br /><span>Dobro napravljeno.</span></h1>
          <p>
            Verujem u dizajn koji nije samo lep na prvi pogled, već ima razlog
            da postoji i ostaje u sećanju.
          </p>
        </div>
      </section>
      <section className="about-layout section-wrap">
        <div className="about-photo">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
            alt="Primer portreta dizajnera — zameniti ličnom fotografijom"
            fill
            sizes="(max-width: 800px) 100vw, 42vw"
            className="cover-image"
          />
          <span className="photo-label">VAŠA FOTOGRAFIJA IDE OVDE</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">ZDRAVO, JA SAM</p>
          <h2>Nikola<span>.</span></h2>
          <p>
            Freelance dizajner sa ljubavlju prema jasnim idejama, dobrom rasporedu
            i detaljima koji prave razliku. Sarađujem sa malim biznisima i
            ambicioznim timovima na stvaranju prepoznatljivih brendova i digitalnih
            iskustava.
          </p>
          <p>
            Moj pristup spaja radoznalost i strategiju: prvo razumem šta je važno
            vašem projektu, a zatim tražim najjednostavniji i najlepši način da to
            pokažem.
          </p>
          <div className="about-facts">
            <div><span>BAZA</span><strong>Srbija · Rad na daljinu</strong></div>
            <div><span>OTVOREN ZA</span><strong>Nove saradnje</strong></div>
          </div>
          <Link href="/kontakt" className="text-link">
            Upoznajmo se <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="skills-section section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ALATI U MOJOJ KUTIJI</p>
            <h2>Od ideje do <span>izvedbe.</span></h2>
          </div>
          <span className="section-index">KOMPETENCIJE</span>
        </div>
        <ul className="skill-list">
          {skills.map((skill, index) => (
            <li key={skill}><span>0{index + 1}</span>{skill}<span aria-hidden="true">↗</span></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
