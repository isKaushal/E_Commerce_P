import Image from "next/image";
import { useMedia } from "react-use";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

// images
import HomeBanner_Mobile from "@/public/items/home_banner_2_mobile.jpg";
import HomeBanner from "@/public/items/home_banner_2.jpg";

// components
import Layout from "@/components/layout.tsx";
import LoginForm from "@/components/loginform.tsx";
import SignInForm from "@/components/signupform";

export default function Login() {
  const router = useRouter();
  const isWide = useMedia("(min-width:1024px)", true);

  function FormSwitcher() {
    if (router.query.index === "login") {
      return <LoginForm />;
    } else if (router.query.index === "signin") {
      return <SignInForm />;
    }
  }

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

        <div className="h-max flex justify-center relative">
          <AnimatePresence>
            <motion.div
              key={router.asPath}
              initial={{ x: "22rem", y: "-8rem", opacity: 0 }}
              animate={{ x: 0, y: "-8rem", opacity: 1 }}
              exit={{ x: "-22rem", y: "-8rem", opacity: 0 }}
              className="bg-white p-10 rounded-lg w-[22rem] sm:w-[25rem] m-4 absolute"
            >
              <FormSwitcher />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}
