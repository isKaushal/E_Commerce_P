import { useState } from "react";
import Image from "next/image";
import { useMedia } from "react-use";
import Button from "@/components/button.tsx";
import { AnimatePresence, motion } from "framer-motion";

// images
import HomeBanner_Mobile from "@/public/items/home_banner_2_mobile.jpg";
import HomeBanner from "@/public/items/home_banner_2.jpg";

// icons
import { Eyeopen, Eyeclose } from "@/components/icons.tsx";
import Layout from "@/components/layout.tsx";

type inputprops = {
  name: string;
  type: string;
  plc: string;
  className: string;
};

function Input({ name, type, className, plc }: inputprops): React.JSX.Element {
  const [isValue, setIsValue] = useState<any>("");

  return (
    <input
      value={isValue}
      name={name}
      type={type}
      className={`my-[0.5rem] h-[3rem] w-full rounded-md outline-none p-4 bg-gray-100${className}`}
      placeholder={plc}
      onChange={(event) => {
        setIsValue({ [event.target.name]: event.target.value });
      }}
    />
  );
}

function Inputpassword({ placeholder = "Enter Here", label = "", name = "" }) {
  const [inputType, setInputType] = useState("password");

  const revelpassword = () => {
    setInputType((preState) => {
      if (preState === "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };
  return (
    <div className="w-full">
      <label className="my-[0.5rem] grid">
        {label}
        <div className="flex w-full justify-between">
          <input
            className="h-[3rem] w-full rounded-md outline-none p-4 bg-gray-100 text-black"
            type={inputType}
            placeholder={placeholder}
            name={name}
          />
          <button
            type="button"
            className="bg-clr-green text-white py-3 px-5 cursor-pointer rounded-md ml-1"
            onClick={revelpassword}
          >
            {inputType === "password" ? (
              <Eyeclose className="scale-[1.2]" />
            ) : (
              <Eyeopen className="scale-[1.2]" />
            )}
          </button>
        </div>
      </label>
    </div>
  );
}

export default function Login() {
  const isWide = useMedia("(min-width:1024px)", true);
  return (
    <Layout>
      <div className="bg-green-50 w-screen h-screen">
        <div>
          <Image
            priority
            src={isWide ? HomeBanner : HomeBanner_Mobile}
            alt="Home Banner"
            aria-required={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <AnimatePresence>
          <motion.div className="bg-white absolute p-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-lg w-[22rem] sm:w-[25rem]">
            <form action="">
              <div>
                <Input name="username" type="text" plc="Name" className="" />
              </div>
              <div>
                <Input name="username" type="email" plc="Email" className="" />
              </div>
              <div>
                <Input name="username" type="number" plc="Phone" className="" />
              </div>
              <div>
                <Inputpassword name="username" placeholder="Password" />
              </div>
              <div className="w-full flex justify-center mt-14">
                <Button icon={false} title="SUBMIT" onClick={""} />
              </div>
            </form>
            <h3 className="text-center mt-8">
              I Have Account{" "}
              <span className="text-clr-green cursor-pointer">Login</span>
            </h3>
          </motion.div>
          {/* login from */}
          <motion.div className="bg-white absolute p-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-lg w-[22rem] sm:w-[25rem]">
            <form action="">
              <div>
                <Input name="username" type="email" plc="Email" className="" />
              </div>
              <div>
                <Inputpassword name="username" placeholder="Password" />
              </div>
              <div className="w-full flex justify-center mt-14">
                <Button icon={false} title="SUBMIT" onClick={""} />
              </div>
            </form>
            <h3 className="text-center mt-8">
              Create Account{" "}
              <span className="text-clr-green cursor-pointer">Sign In</span>
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}
