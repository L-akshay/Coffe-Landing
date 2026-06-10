import { useState } from "react";
import { ScrollSmoother } from "gsap/all";
import { nav, common, seal } from "../constants/content";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (target) => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top top");
    } else if (typeof target === "string") {
      document
        .querySelector(target)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    scrollTo(0);
  };

  const handleLinkClick = (e, href) => {
    setMenuOpen(false);
    // Route links (e.g. "#/about") navigate via the hash router — let the
    // browser change the hash. In-page anchors (e.g. "#hero") smooth-scroll.
    if (href.startsWith("#/")) return;
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <nav className="jp-nav" aria-label="メインナビゲーション">
      <div
        className="jp-nav__brand"
        onClick={handleLogoClick}
        role="button"
        tabIndex={0}
        aria-label={common.logoAria}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleLogoClick()}
      >
        <span className="seal-mark" aria-hidden="true">
          {seal}
        </span>
        <img
          src="/images/nav-logo.svg"
          alt={common.logoAria}
          className="md:w-20 w-14"
        />
      </div>

      <button
        type="button"
        className="jp-nav__toggle"
        aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={menuOpen}
        aria-controls="jp-nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul
        id="jp-nav-links"
        className={`jp-nav__links${menuOpen ? " is-open" : ""}`}
      >
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="jp-nav__link"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
