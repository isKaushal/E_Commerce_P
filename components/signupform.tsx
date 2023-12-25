import { useRouter } from "next/router";

// components
import Input from "./input.tsx";
import Button from "./button.tsx";
import Inputpassword from "./inputpassword.tsx";
import { useEffect, useState } from "react";

export default function SignUp(): React.JSX.Element {
  const InputObject = {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  };

  const router = useRouter();
  const [isValue, setIsValue] = useState<any>(InputObject);

  function GetInputData(event: any) {
    setIsValue((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function onSubmit(event: any) {
    event.preventDefault();

    try {
      const DataStructrure = {
        firstname: isValue.firstname,
        lastname: isValue.lastname,
        email: isValue.email,
        contact: isValue.contact,
        address: isValue.address,
        password: isValue.password,
        // cart: [],
        // id: Date.now(),
      };

      await fetch("/api/register_new_user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(DataStructrure),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className="mb-4 text-center text-4xl font-medium">Sign In</h2>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            value={isValue.firstname}
            plc="Firstname"
            className=""
            type="text"
            name="firstname"
            onChange={GetInputData}
          />
        </div>
        <div>
          <Input
            value={isValue.lastname}
            plc="Lastname"
            className=""
            type="text"
            name="lastname"
            onChange={GetInputData}
          />
        </div>
        <div>
          <Input
            value={isValue.email}
            plc="Email"
            className=""
            type="email"
            name="email"
            onChange={GetInputData}
          />
        </div>
        <div>
          <Input
            value={isValue.contact}
            plc="Phone"
            className=""
            type="number"
            name="contact"
            onChange={GetInputData}
          />
        </div>
        <div>
          <Input
            value={isValue.address}
            plc="Address"
            className=""
            type="text"
            name="address"
            onChange={GetInputData}
          />
        </div>
        <div>
          <Inputpassword
            value={isValue.password}
            name="password"
            onChange={GetInputData}
          />
        </div>
        <div className="w-full flex justify-center mt-14">
          <Button icon={false} title="SUBMIT" type="submit" />
        </div>
      </form>
      <h3 className="text-center mt-8 text-gray-400">
        I Have Account{" "}
        <button
          className="text-clr-green cursor-pointer"
          onClick={() => router.push("/user/login")}
        >
          LogIn
        </button>
      </h3>
    </>
  );
}
