import Navbar from "./navbar.tsx";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="bg-slate-100 overflow-hidden">
      <Navbar />
      {children}
      {/* <Footer/> */}
    </div>
  );
}
