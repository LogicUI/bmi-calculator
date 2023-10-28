import React from "react";

interface InputProps {
  metricType: "Metric" | "Imperial";
  unit: string;
  value: number | undefined;
  name: string;
  setUnits: (
    updater: (
      currentUnits: Record<string, number | undefined>
    ) => Record<string, number | undefined>
  ) => void;
}

const Input = ({
  metricType,
  unit,
  value,
  name,
  setUnits,
}: InputProps): JSX.Element => {
  return (
    <article
      className={`
    relative ${
      metricType === "Imperial"
        ? "w-2/6 md:w-3/6 min-w-[133px] md:max-w-[290px] lg:max-w-[240px]"
        : "w-full md:w-[290px] lg:w-[240px]"
    } h-16 mt-2 text-2xl font-bold`}
    >
      <input
        id="myInput"
        type="number"
        name={name}
        value={value || ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const inputName = event.target.name;
          const inputValue = event.target.value
            ? Number(event.target.value)
            : undefined;

          setUnits((currentUnits) => ({
            ...currentUnits,
            [inputName]: inputValue,
          }));
        }}
        className="border
            outline-none rounded-md w-full 
            h-full 
            pr-10
            p-2 
            text-center 
            focus:ring-1 
            focus:ring-gray-300"
      />
      <span
        className="absolute inset-y-0
        right-2 flex items-center px-2
        inter-semiBold
        text-customBlue"
      >
        {unit}
      </span>
    </article>
  );
};

export default Input;
