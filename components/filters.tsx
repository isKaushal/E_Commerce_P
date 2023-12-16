import { useEffect, useState } from "react";

interface dataArrayProps {
  label: string;
  checked: boolean;
}
[];

const DataList: dataArrayProps[] = [
  {
    label: "Under ₹500",
    checked: false,
  },
  {
    label: "₹500-₹1000",
    checked: false,
  },
  {
    label: "₹1000-₹1500",
    checked: false,
  },
  {
    label: "₹1500-₹2000",
    checked: false,
  },
  {
    label: "₹2000-₹5000",
    checked: false,
  },
  {
    label: "₹10000-₹15000",
    checked: false,
  },
  {
    label: "₹15000-₹20000",
    checked: false,
  },
];

export default function Filters(): React.JSX.Element {
  function IsRadioClicked({
    data,
    index,
    checked,
  }: {
    index: number;
    data: any;
    checked: any;
  }) {
    const TempDataArray: dataArrayProps[] = [...DataList];
    // TempDataArray[index] = data;

    console.log(TempDataArray[index]);
    console.log((TempDataArray[index] = data));
    console.log(checked);
    console.log(TempDataArray);
    console.log(DataList);

    return TempDataArray;
  }

  return (
    <>
      {DataList.map((data, index) => {
        return (
          <div key={index}>
            <label htmlFor={data.label}>
              <div className="flex items-center">
                <input
                  className="m-4"
                  type="checkbox"
                  name={data.label}
                  defaultValue={"false"}
                  checked={data.checked}
                  onChange={(event) =>
                    IsRadioClicked({
                      data: data,
                      index: index,
                      checked: event.target.value,
                    })
                  }
                  id={data.label}
                />
                <h1 style={{ userSelect: "none" }}>{data.label}</h1>
              </div>
            </label>
          </div>
        );
      })}
    </>
  );
}
