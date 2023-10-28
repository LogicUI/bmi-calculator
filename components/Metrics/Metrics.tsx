import React, { useState, ChangeEvent, useEffect } from "react";
import styles from "./metrics.module.css";
import MetricInputGroup from "./MetricInputGroup/MetricInputGroup";
import BMIResults from "../BMIResults/BMIResults";
import { calculateBMIcmKg, calculateBMIFtInStLbs } from "@/common/common";

const Metrics = (): JSX.Element => {
  const [selection, setSelection] = useState<"Metric" | "Imperial">("Imperial");
  const [units, setUnits] = useState<Record<string, number | undefined>>({
    ft: undefined,
    in: undefined,
    st: undefined,
    lbs: undefined,
    cm: undefined,
    kg: undefined,
  });
  const [bmiValue, setBmiValue] = useState<number | undefined>();

  useEffect(() => {
    if (
      selection === "Imperial" &&
      units.ft !== undefined &&
      units.in !== undefined &&
      units.st !== undefined &&
      units.lbs !== undefined
    ) {
      const calculatedBMI = calculateBMIFtInStLbs(
        units.ft,
        units.in,
        units.st,
        units.lbs
      );
      setBmiValue(calculatedBMI);
    } else if (
      selection === "Metric" &&
      units.cm !== undefined &&
      units.kg !== undefined
    ) {
      const calculatedBMI = calculateBMIcmKg(units.cm, units.kg);

      setBmiValue(calculatedBMI);
    } else {
      setBmiValue(undefined);
    }
  }, [selection, units]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "Metric" || value === "Imperial") {
      setSelection(value);
      setUnits({
        ft: undefined,
        in: undefined,
        st: undefined,
        lbs: undefined,
        cm: undefined,
        kg: undefined,
      });
      setBmiValue(undefined);
    }
  };

  const renderInputMetricGroupBySelection = () => {
    if (selection === "Imperial") {
      return (
        <>
          <MetricInputGroup
            title="Height"
            metricUnits={{
              ft: "ft",
              in: "in",
            }}
            units={{
              ...units,
            }}
            metricType="Imperial"
            setUnits={setUnits}
          />
          <MetricInputGroup
            title="Weight"
            metricUnits={{
              st: "st",
              lbs: "lbs",
            }}
            units={{
              ...units,
            }}
            setUnits={setUnits}
            metricType="Imperial"
          />
        </>
      );
    }
    return (
      <article className="md:flex md:justify-between">
        <MetricInputGroup
          metricUnits={{
            cm: "cm",
          }}
          units={{
            ...units,
          }}
          setUnits={setUnits}
          title="Height"
          metricType="Metric"
        />
        <MetricInputGroup
          metricUnits={{
            kg: "kg",
          }}
          units={{
            ...units,
          }}
          setUnits={setUnits}
          title="Weight"
          metricType="Metric"
        />
      </article>
    );
  };

  return (
    <section
      className="
       flex 
       justify-center
       lg:relative
      "
    >
      <section
        className={`
      ${selection === "Imperial" ? "" : "lg:top-1/3 "}
        lg:absolute
        lg:left-1/2
        lg:height-full
        lg:w-1/2
        lg:-translate-x-5
        lg:translate-y-1/3
        lg:max-w-[567px]
        md:max-w-[686px]
        min-w-[328px]
        w-4/5
        mt-16
        lg:mt-0
        drop-shadow-md	
        bg-white
        rounded-lg 
        p-6

      `}
      >
        <section className="text-[24px]">Enter your details below</section>
        <section
          className={`flex mt-5 justify-between ${styles.customRadio} 
         `}
        >
          <section className={`flex items-center justify center w-3/6`}>
            <input
              type="radio"
              name="option"
              onChange={handleRadioChange}
              checked={selection === "Metric"}
              value="Metric"
              id="option1"
              className="w-8 h-8"
            />
            <label htmlFor="option1" className="font-medium">
              Metric
            </label>
          </section>
          <section className="flex items-center justify center w-3/6 ml-8">
            <input
              type="radio"
              checked={selection === "Imperial"}
              name="option"
              onChange={handleRadioChange}
              value="Imperial"
              id="option2"
              className="w-8 h-8"
            />
            <label htmlFor="option2" className="font-medium">
              Imperial
            </label>
          </section>
        </section>
        {renderInputMetricGroupBySelection()}
        <BMIResults
          selection={selection}
          units={{ ...units }}
          bmiValue={bmiValue}
        />
      </section>
    </section>
  );
};

export default Metrics;
