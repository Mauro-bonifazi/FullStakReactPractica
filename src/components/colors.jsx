export function Colors({ color, show }) {
  return (
    <div style={{ backgroundColor: color, height: 50, width: "100%" }}>
      <p>Colors por props desde un componente</p>
      <button onClick={show}>Click</button>
    </div>
  );
}
