import { useEffect, useState } from "react";
import { legalCommon } from "../constants/legal";
import { contact } from "../constants/pages";
import { seal, common } from "../constants/content";

/**
 * Standalone Contact page (お問い合わせ). Shares the legal-page shell for visual
 * consistency, and adds contact details plus a front-end-only enquiry form
 * (no backend — submitting shows an in-page confirmation).
 */
const ContactPage = () => {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goHome = () => {
    window.location.hash = "/";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="legal-page">
      <div className="rising-sun size-[42vw] -top-[14vw] left-1/2 -translate-x-1/2" />

      <header className="legal-page__bar">
        <button
          type="button"
          className="legal-page__brand"
          onClick={goHome}
          aria-label={common.logoAria}
        >
          <span className="seal-mark" aria-hidden="true">
            {seal}
          </span>
          <span className="legal-page__brand-name">SPYLT</span>
        </button>

        <button type="button" className="legal-page__back" onClick={goHome}>
          {legalCommon.back}
          <span className="legal-page__back-en">{legalCommon.backEn}</span>
        </button>
      </header>

      <article className="legal-page__doc">
        <p className="legal-page__eyebrow">{contact.eyebrow}</p>
        <h1 className="legal-page__title">{contact.title}</h1>
        <p className="legal-page__intro">{contact.intro}</p>

        <div className="contact-grid">
          <ul className="contact-methods">
            {contact.methods.map((m) => (
              <li key={m.label} className="contact-method">
                <span className="contact-method__label">{m.label}</span>
                <span className="contact-method__value">{m.value}</span>
              </li>
            ))}
          </ul>

          {sent ? (
            <p className="contact-success" role="status">
              {contact.form.success}
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-field">
                <span>{contact.form.name}</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={contact.form.namePlaceholder}
                />
              </label>
              <label className="contact-field">
                <span>{contact.form.email}</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={contact.form.emailPlaceholder}
                />
              </label>
              <label className="contact-field">
                <span>{contact.form.message}</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder={contact.form.messagePlaceholder}
                />
              </label>
              <button type="submit" className="legal-page__cta contact-submit">
                {contact.form.submit}
              </button>
            </form>
          )}
        </div>
      </article>
    </main>
  );
};

export default ContactPage;
