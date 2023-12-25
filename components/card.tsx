import Image, { StaticImageData } from "next/image";
import { Cart } from "./icons.tsx";
import Button from "./button.tsx";

type CardInnerData = {
  src: StaticImageData;
  name: string;
  price: number;
  key?: number;
  data?: any;
};

export default function Card({
  src,
  name,
  price,
  data,
}: CardInnerData): React.JSX.Element {
  return (
    <div className="m-4 w-[19rem] border-2 border-gray-200 rounded-lg overflow-hidden">
      <div className="h-[15rem]">
        <Image
          src={src}
          width={100}
          height={100}
          alt="ITEM"
          quality={100}
          priority
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="p-6 bg-green-50">
        <div className="text-2xl mb-4 font-semibold text-gray-500">{name}</div>
        <div className="flex justify-between items-center">
          <Button icon={true} title="Add To Cart" onClick={""} />
          <span className="text-xl font-medium">&#8377;{price}</span>
        </div>
      </div>
    </div>
  );
}
