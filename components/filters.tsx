import { useEffect, useState } from "react";

interface dataArrayProps {
  label: string;
  checked: boolean;
  filter: string;
}
[];
export default function Filters({
  list,
  setFilter,
}: {
  setFilter: Function;
  list: Array<dataArrayProps>;
}): React.JSX.Element {
  const [dataArray, setDataArray] = useState<Array<dataArrayProps>>(list);
  const TempDataArray: dataArrayProps[] = [...list];

  function IsRadioClicked(
    data: any,
    index: number,
    { checked }: { checked: boolean }
  ) {
    setFilter(() => {
      return (TempDataArray[index] = { ...data, checked: checked });
    });

    setDataArray(() => {
      TempDataArray[index] = { ...data, checked: checked };
      return TempDataArray;
    });
  }

  return (
    <>
      {dataArray.map((data, index) => {
        return (
          <div key={index}>
            <label htmlFor={data.label}>
              <div className="flex items-center">
                <input
                  className="m-4"
                  type="checkbox"
                  name={data.label}
                  checked={data.checked}
                  onChange={(event) =>
                    IsRadioClicked(data, index, {
                      ...data,
                      checked: event.target.checked,
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
