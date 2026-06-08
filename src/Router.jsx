import { useEffect, useState } from "react";
import App from "./App.jsx";
import LegalPage from "./pages/LegalPage.jsx";

/**
 * Minimal hash-based router. The marketing site lives at "#/" (or no hash);
 * the legal documents live at "#/terms" and "#/privacy". A hash router is used
 * (rather than the History API) so the pages work on any static host without
 * server rewrites, and so the home page's in-page anchor scrolling is
 * unaffected (those clicks call preventDefault and never change the hash).
 */
const routeFromHash = () => {
  const path = window.location.hash.replace(/^#/, "");
  if (path === "/terms") return "terms";
  if (path === "/privacy") return "privacy";
  return "home";
};

const Router = () => {
  const [route, setRoute] = useState(routeFromHash);

  useEffect(() => {
    const onHashChange = () => setRoute(routeFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route === "terms") return <LegalPage doc="terms" />;
  if (route === "privacy") return <LegalPage doc="privacy" />;
  return <App />;
};

export default Router;
