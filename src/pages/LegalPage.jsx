import { useEffect } from "react";
import { legalDocs, legalCommon } from "../constants/legal";
import { seal, common } from "../constants/content";

/**
 * Standalone legal document page (利用規約 / プライバシーポリシー).
 *
 * Rendered outside the GSAP ScrollSmoother experience by the hash router in
 * main.jsx, so it uses ordinary document scroll. `doc` selects which document
 * from legal.js to display ("terms" | "privacy").
 */
const LegalPage = ({ doc }) => {
  const data = legalDocs[doc] ?? legalDocs.terms;

  // Always open at the top of the document.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doc]);

  const goHome = () => {
    window.location.hash = "/";
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
        <p className="legal-page__eyebrow">{data.eyebrow}</p>
        <h1 className="legal-page__title">{data.title}</h1>
        <p className="legal-page__updated">{data.updated}</p>

        <p className="legal-page__intro">{data.intro}</p>

        <div className="legal-page__sections">
          {data.sections.map((section) => (
            <section key={section.heading} className="legal-page__section">
              <h2 className="legal-page__heading">{section.heading}</h2>
              <p className="legal-page__body">{section.body}</p>
            </section>
          ))}
        </div>

        <button type="button" className="legal-page__cta" onClick={goHome}>
          {legalCommon.back}
        </button>
      </article>
    </main>
  );
};

export default LegalPage;
