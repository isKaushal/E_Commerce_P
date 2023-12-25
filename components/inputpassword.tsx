import { useState } from "react";

// icons
import { Eyeopen, Eyeclose } from "@/components/icons.tsx";

type InputPasswordProps = {
  name: string;
  label?: string;
  value?: string;
  onChange?: any;
};

export default function Inputpassword({
  name,
  label,
  value,
  onChange,
}: InputPasswordProps): React.JSX.Element {
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
            value={value}
            onChange={onChange}
            className="h-[3rem] w-full rounded-md outline-none p-4 bg-gray-100 text-black"
            type={inputType}
            placeholder="Password"
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
