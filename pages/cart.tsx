import Image from "next/image";
import { useState } from "react";

// components
import Button from "@/components/button.tsx";
import Items from "@/components/itemsArray.tsx";
import Layout from "@/components/layout.tsx";
import Section from "@/components/section.tsx";

// icons
import { Delete } from "@/components/icons.tsx";

export default function Cart(): React.JSX.Element {
  const [isPriceCount, setIsPriceCount] = useState<number>(1);

  return (
    <Layout>
      <Section>
        <h1 className="text-5xl mt-40 font-bold text-center">YOUR CART</h1>
      </Section>

      <Section>
        {Items.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between m-4 rounded-xl overflow-hidden border-2 border-gray-200 h-max lg:h-[15rem] lg:flex-row"
            >
              <div className="lg:w-[35%] xl:w-[30%]">
                <Image
                  className="w-full h-60 lg:h-full"
                  //   style={{ width: "100%", height: "100%" }}
                  src={data.item_image}
                  quality={100}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h1 className="text-4xl font-bold mb-6">{data.item_name}</h1>
                <p className="text-gray-400 text-sm">{data.item_disc}</p>
                <div className="lg:flex mt-8">
                  <div className="flex">
                    <Button
                      onClick={() => setIsPriceCount(isPriceCount - 1)}
                      className="my-4 mx-2 w-10 h-10 text-xl"
                      title="-"
                      icon={false}
                    />
                    <div className="bg-gray-100 w-20 h-10 rounded-lg my-4 border-2 border-gray-300 flex justify-center items-center">
                      {isPriceCount}
                    </div>
                    <Button
                      onClick={() => setIsPriceCount(isPriceCount + 1)}
                      className="my-4 mx-2 w-10 h-10 text-xl"
                      title="+"
                      icon={false}
                    />
                  </div>
                  <div className="flex">
                    <Button
                      title="Buy Item"
                      className="my-4 mx-2"
                      icon={false}
                    />
                    <Button
                      className="my-4 mx-2 w-10 h-10 text-xl"
                      icon={false}
                    >
                      <div className="text-2xl">
                        <Delete />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Section>
    </Layout>
  );
}
