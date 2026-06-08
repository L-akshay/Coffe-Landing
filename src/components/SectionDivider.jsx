/**
 * Japanese-style section divider: a thin neon rule flanking a vertical kanji.
 * Purely decorative.
 *
 * @param {{ mark?: string, className?: string }} props
 */
const SectionDivider = ({ mark = "間", className = "" }) => (
  <div className={`jp-divider ${className}`} aria-hidden="true">
    <span className="jp-divider__mark">{mark}</span>
  </div>
);

export default SectionDivider;
