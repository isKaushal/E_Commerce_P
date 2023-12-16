import Link from "next/link";
import { Cart, Menu } from "./icons.tsx";
import { useState } from "react";
import { useMedia } from "react-use";

export default function Navbar(): React.JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
  const isWide = useMedia("(max-width:1024px)", true);

  return (
    <nav>
      <div>
        {isWide && (
          <div onClick={() => setIsNavOpen(!isNavOpen)}>
            <Menu />
          </div>
        )}
        <Link href="/">
          <h1>LOGO</h1>
        </Link>
      </div>
      {isWide ? (
        <Link href="/cart">
          <div>
            <Cart />
          </div>
        </Link>
      ) : (
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="/cart">
                <div>
                  <Cart />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
