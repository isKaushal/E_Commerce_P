export default function Section({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: Object;
}) {
  return (
    <div style={style} className="container my-20 p-4">
      {children}
    </div>
  );
}
