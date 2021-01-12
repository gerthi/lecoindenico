export default function Text({ children, style }) {
  return (
    <p
      className={style + " py-8"}
      dangerouslySetInnerHTML={{ __html: children }}
    ></p>
  );
}
