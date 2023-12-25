import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

// components
import Input from "./input.tsx";
import Button from "./button.tsx";
import Inputpassword from "./inputpassword.tsx";
import { useState } from "react";

export default function LogIn(): React.JSX.Element {
  const router = useRouter();
  const session = useSession();
  const [isformdata, setIsFormdata] = useState<any>({
    email: "",
    password: "",
  });

  function UserFind(event: any) {
    setIsFormdata((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function onSubmit(event: any) {
    event.preventDefault();

    try {
      await signIn("credentials", {
        email: isformdata.email,
        password: isformdata.password,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h2 className="mb-4 text-center text-4xl font-medium">Log In</h2>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            name="email"
            type="email"
            plc="Email"
            className=""
            onChange={UserFind}
            value={isformdata.email}
          />
        </div>
        <div>
          <Inputpassword
            name="password"
            value={isformdata.password}
            onChange={UserFind}
          />
        </div>
        <div className="w-full flex justify-center mt-14">
          <Button icon={false} title="SUBMIT" type="submit" />
        </div>
      </form>
      <h3 className="text-center mt-8 text-gray-400">
        Don&apos;t Have Account{" "}
        <button
          className="text-clr-green cursor-pointer"
          onClick={() => router.push("/user/signin")}
        >
          Sign In
        </button>
      </h3>
    </>
  );
}
