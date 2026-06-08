import { ScrollSmoother } from "gsap/all";
import { nav, common, seal } from "../constants/content";

const NavBar = () => {
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

  const handleLogoClick = () => scrollTo(0);

  const handleLinkClick = (e, href) => {
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

      <ul className="jp-nav__links">
        {nav.map((item) => (
          <li key={item.href} className="hidden md:block">
            <a
              href={item.href}
              className="jp-nav__link"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
              <span className="jp-nav__en">{item.en}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
