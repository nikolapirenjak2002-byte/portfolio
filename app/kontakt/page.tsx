import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt — Nikola",
  description: "Javite se za saradnju na projektu, vizuelnom identitetu ili digitalnom dizajnu.",
};

export default function ContactPage() {
  return (
    <main className="page-main">
      <section className="page-intro section-wrap">
        <p className="eyebrow"><span className="status-dot" /> KONTAKT / PRVI KORAK</p>
        <div className="page-intro-row">
          <h1>Recite mi<br /><span>šta zamišljate.</span></h1>
          <p>
            Imate ideju, pitanje ili samo želite da proverite da li smo dobar spoj?
            Pišite mi — odgovaram u najkraćem roku.
          </p>
        </div>
      </section>
      <section className="contact-layout section-wrap">
        <div className="contact-aside">
          <p className="eyebrow">OTVOREN ZA NOVE PROJEKTE</p>
          <h2>Dobra saradnja<br />počinje <span>razgovorom.</span></h2>
          <p className="contact-aside-copy">
            Podelite ukratko čime se bavite i kakvu promenu želite da napravimo.
            Javiću vam se da dogovorimo sledeći korak.
          </p>
          <div className="contact-detail">
            <span>EMAIL</span>
            <a href="mailto:besavenow.official@gmail.com">besavenow.official@gmail.com</a>
          </div>
          <div className="contact-detail">
            <span>LOKACIJA</span>
            <strong>Srbija · Dostupan globalno</strong>
          </div>
        </div>
        <div className="contact-form-wrap">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
