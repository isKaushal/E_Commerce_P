import Link from "next/link";
import { Cart, Cross, Menu } from "./icons.tsx";
import { useState } from "react";
import { useMedia } from "react-use";

export default function Navbar(): React.JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
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
        <>
          <div className="flex items-center">
            <Link href="/cart">
              <div>
                <Cart />
              </div>
            </Link>
            <Link href="/user/login">
              <div className="bg-clr-green rounded-lg px-2 py-0">LogIn</div>
            </Link>
          </div>

          <div
            className="h-screen z-[2] w-[20rem] absolute bg-white top-0"
            style={isNavOpen ? { left: "0rem" } : { left: "-100%" }}
          >
            <div
              className="text-black p-6 flex justify-end"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <Cross />
            </div>

            <div className="text-black ">
              <ul className="justify-start">
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
                  {/* <Link href="#">LogIn</Link> */}
                </li>
                <li>
                  <Link href="/user/login">
                    <div>LogIn</div>
                  </Link>
                  {/* <Link href="/cart">
                <div>
                  <Cart />
                </div>
              </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </>
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
              {/* <Link href="#">LogIn</Link> */}
            </li>
            <li>
              <Link href="/user/login">
                <div>LogIn</div>
              </Link>
              {/* <Link href="/cart">
                <div>
                  <Cart />
                </div>
              </Link> */}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
