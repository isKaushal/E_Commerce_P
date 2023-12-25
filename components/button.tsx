import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Cart } from "./icons.tsx";

type Buttonprops = {
  icon: boolean;
  onClick?: any;
  children?: React.ReactNode;
  title?: string;
  className?: string;
  type?: any;
};

export default function Button({
  icon,
  title,
  className,
  onClick,
  children,
  type,
}: Buttonprops) {
  const [isTitle, setIsTitle] = useState(false);

  return (
    <>
      {icon ? (
        <AnimatePresence>
          <div
            className={`relative overflow-hidden ${className}`}
            onClick={onClick}
          >
            <motion.div
              initial={{ width: "10rem" }}
              animate={isTitle && { width: "3.5rem" }}
              transition={{ type: "spring" }}
              onClick={() => setIsTitle(true)}
              className="bg-clr-green text-white font-semibold rounded-lg flex justify-center items-center py-2 px-3 transition duration-700 ease-in-out pr-1 cursor-pointer "
            >
              <motion.div
                initial={{ y: 0 }}
                animate={isTitle && { y: -80 }}
                transition={{ type: "spring" }}
                className="flex justify-center items-center absolute"
              >
                <div className="mx-2 ml-0 text-2xl">
                  <Cart />
                </div>
                <div>{title}</div>
              </motion.div>
              <motion.div
                initial={{ y: 80 }}
                animate={isTitle && { y: 0 }}
                transition={{ type: "spring" }}
                className="flex justify-center items-center absoloute"
              >
                <div className="mx-2 ml-0 text-2xl">
                  <Cart />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`bg-clr-green text-white font-semibold rounded-lg flex justify-center items-center py-2 px-3 ${className} text-xs sm:text-lg`}
        >
          {title ? title : children}
        </button>
      )}
    </>
  );
}
