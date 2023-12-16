"use client";

import Image from "next/image.js";
import { useMedia } from "react-use";

// components
import { Search } from "@/components/icons.tsx";
import Card from "@/components/card.tsx";
import DataList from "@/components/itemsArray.tsx";
import Layout from "@/components/layout.tsx";
import Filters from "@/components/filters.tsx";

// imges
import HomeBanner from "../public/items/home_banner_2.jpg";
import HomeBanner_Mobile from "../public/items/home_banner_2_mobile.jpg";
import { useState } from "react";

function SerchBar({
  setSearchValue,
}: {
  setSearchValue: Function;
}): React.JSX.Element {
  // const [isSearchValue, setIsSearchValue] = useState<String>();

  // function SetvalueToFilter() {
  //   setSearchValue(isSearchValue);
  // }

  return (
    <div className=" md:w-[50%] lg:w-[30%]">
      <div className="flex justify-center items-center overflow-hidden rounded-full relative">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search..."
          className="w-full py-2 px-6 outline-none"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        {/* <button
          onClick={SetvalueToFilter}
          className="px-8 py-3 text-white bg-clr-green outline-none border-none"
        >
          <Search />
        </button> */}
      </div>
    </div>
  );
}

export default function HomePage(): React.JSX.Element {
  const [searchValue, setSearchValue] = useState<String>("");

  const isWide = useMedia("(min-width:1024px)", true);

  return (
    <Layout>
      <div className="relative">
        <div className="absolute flex justify-center items-center w-full h-full">
          <SerchBar setSearchValue={setSearchValue} />
        </div>
        <div>
          <Image
            priority
            src={isWide ? HomeBanner : HomeBanner_Mobile}
            alt="Home Banner"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className="flex py-10  ">
        <div className="m-4 my-8 ml-14 hidden lg:block ">
          <div className="w-[20rem] bg-white sticky top-14 rounded-lg shadow-lg p-4">
            <h1 className="mb-4 mt-2 text-2xl font-semibold">Price Filters</h1>
            <div className="ml-4">
              <Filters />
            </div>
            <h1 className="mb-4 mt-2 text-2xl font-semibold">
              Catagory Filters
            </h1>
            <div className="ml-4">
              <Filters />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex">
            <div className="w-full rounded-lg p-4 flex flex-wrap justify-center">
              {DataList.filter((data) => {
                const inputValue = searchValue?.toString();
                const dataName = data.item_name.toString();

                return dataName.toLowerCase().includes(inputValue);
              }).map((data, index) => {
                return (
                  <Card
                    name={data.item_name}
                    src={data.item_image}
                    price={data.item_price}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
