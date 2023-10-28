import React from "react";
import Input from "../Input/Input";

interface metricInputGroupType {
  title: string;
  units: {
    [key: string]: number | undefined;
  };
  metricType: "Metric" | "Imperial";
  setUnits: (
    updater: (
      currentUnits: Record<string, number | undefined>
    ) => Record<string, number | undefined>
  ) => void;
  metricUnits: {
    [key: string]: string;
  };
}

const MetricInputGroup = ({
  title,
  units,
  metricType,
  setUnits,
  metricUnits,
}: metricInputGroupType): JSX.Element => {
  return (
    <article className="mt-5">
      <section className="block text-sm text-gray-500 font-normal">
        {title}
      </section>
      <section className="flex items-center justify-between">
        {Object.entries(metricUnits).map(([key, value]) => {
          return (
            <Input
              setUnits={setUnits}
              unit={value}
              metricType={metricType}
              key={key}
              name={key}
              value={units[key]}
            />
          );
        })}
      </section>
    </article>
  );
};
export default MetricInputGroup;
