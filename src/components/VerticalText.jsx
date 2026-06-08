/**
 * Vertical Japanese text accent (tate-gaki).
 * Decorative by default (aria-hidden) so it never pollutes the a11y tree.
 *
 * @param {{ text: string, className?: string, ariaHidden?: boolean }} props
 */
const VerticalText = ({ text, className = "", ariaHidden = true }) => (
  <span
    aria-hidden={ariaHidden}
    className={`vertical-jp ${className}`}
  >
    {text}
  </span>
);

export default VerticalText;
