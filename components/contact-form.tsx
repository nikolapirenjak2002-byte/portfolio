"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Upit za saradnju — ${name}`);
    const body = encodeURIComponent(
      `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
    );

    window.location.href = `mailto:besavenow.official@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Vaše ime</label>
      <input id="name" name="name" type="text" placeholder="Kako se zovete?" required />

      <label htmlFor="email">Email adresa</label>
      <input id="email" name="email" type="email" placeholder="ime@primer.com" required />

      <label htmlFor="message">O čemu želite da razgovaramo?</label>
      <textarea
        id="message"
        name="message"
        placeholder="Recite mi nešto o svom projektu..."
        rows={5}
        required
      />

      <button className="button button-dark form-submit" type="submit">
        Pošalji poruku <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note" aria-live="polite">
        {submitted
          ? "Otvara se vaša email aplikacija za slanje poruke."
          : "Slanjem se otvara vaša email aplikacija za slanje poruke."}
      </p>
    </form>
  );
}
