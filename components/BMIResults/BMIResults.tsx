import React from "react";
import {
  lowerHealthyWeightRangeCM,
  upperEndHealthyWeightRangeCM,
  lowerHealthyWeightRangeKg,
  convertKgToPounds,
  getBMIWeightRange,
  upperEndHealthyWeightRangeKg,
  convertKgToStones,
} from "@/common/common";

interface BMIResultsProps {
  bmiValue: number | undefined;
  selection: string;
  units: {
    [key: string]: number | undefined;
  };
}

const BMIResults = ({ bmiValue, selection, units }: BMIResultsProps) => {
  const getIdealWeightRange = (
    selection: string,
    units: {
      [key: string]: number | undefined;
    }
  ) => {
    if (selection === "Metric" && units.cm) {
      return (
        <article>
          Your ideal weight is between{" "}
          <span className="font-bold">
            {lowerHealthyWeightRangeCM(units.cm)}kgs
          </span>
          <span className="font-bold">
            {" "}
            - {upperEndHealthyWeightRangeCM(units.cm)}kgs
          </span>
        </article>
      );
    } else if (selection === "Imperial" && units.ft && units.in) {
      const lowerWeightRange = lowerHealthyWeightRangeKg(units.ft, units.in);
      const upperWeightRange = upperEndHealthyWeightRangeKg(units.ft, units.in);
      const lowerWeightStones = convertKgToStones(lowerWeightRange);
      const lowerWeightPounds = convertKgToPounds(lowerWeightRange);
      const higherWeightStones = convertKgToStones(upperWeightRange);
      const higherWeightPounds = convertKgToPounds(upperWeightRange);

      return (
        <>
          Your ideal weight is between{" "}
          <span className="font-bold">
            {lowerWeightStones}st {lowerWeightPounds}lbs
          </span>
          <span className="font-bold">
            -{higherWeightStones}st {higherWeightPounds}lbs`
          </span>
        </>
      );
    }
  };

  const shouldRenderBMIResults = () => {
    return (
      <article className="w-100 bg-customBlue h-auto rounded-lg mt-8 text-left text-white md:rounded-br-full md:rounded-tr-full">
        {bmiValue ? (
          <section className="p-8 md:flex">
            <section>
              <section>Your BMI is...</section>
              <section className="text-5xl pt-2">{bmiValue} </section>
            </section>
            <section
              className="pt-6 md:pt-3  md:ml-auto 	 md:w-[267px] md:text-sm
                  "
            >
              Your BMI suggests you’re a {getBMIWeightRange(bmiValue)}{" "}
              {getIdealWeightRange(selection, units)}
            </section>
          </section>
        ) : (
          <section className="p-8 flex flex-col justify-center h-full">
            <h1 className="text-2xl">Welcome!</h1>
            <section className="text-sm mt-3">
              Enter your height and weight and you&apos;ll see your BMI result
              here
            </section>
          </section>
        )}
      </article>
    );
  };

  return shouldRenderBMIResults();
};

export default BMIResults;
