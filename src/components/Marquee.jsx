/**
 * Katakana/text marquee strip. Content is duplicated once so the -50%
 * CSS keyframe loops seamlessly. Decorative (aria-hidden).
 *
 * @param {{ items: string[] }} props
 */
const Marquee = ({ items }) => {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
