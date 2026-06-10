import { useEffect, useState } from "react";
import App from "./App.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { legalDocs } from "./constants/legal.js";
import { aboutDoc } from "./constants/pages.js";

/**
 * Minimal hash-based router. The marketing site lives at "#/" (or no hash);
 * the standalone pages live at "#/about", "#/contact", "#/terms" and
 * "#/privacy". A hash router is used (rather than the History API) so the pages
 * work on any static host without server rewrites, and so the home page's
 * in-page anchor scrolling is unaffected (those clicks call preventDefault and
 * never change the hash).
 */
const routeFromHash = () => {
  const path = window.location.hash.replace(/^#/, "");
  if (path === "/terms") return "terms";
  if (path === "/privacy") return "privacy";
  if (path === "/about") return "about";
  if (path === "/contact") return "contact";
  return "home";
};

const Router = () => {
  const [route, setRoute] = useState(routeFromHash);

  useEffect(() => {
    const onHashChange = () => setRoute(routeFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route === "terms") return <LegalPage data={legalDocs.terms} />;
  if (route === "privacy") return <LegalPage data={legalDocs.privacy} />;
  if (route === "about") return <LegalPage data={aboutDoc} />;
  if (route === "contact") return <ContactPage />;
  return <App />;
};

export default Router;
