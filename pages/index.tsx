import React from "react";
import Hero from "../components/Hero/Hero";
import BMIExplanation from "@/components/BMIExplanation/BMIExplanation";
import HealthyGuidelines from "@/components/HealthyGuidelines/HealthyGuidelines";
import BMILimitation from "@/components/BMILimitation/BMILimitation";

const HomePage = () => {
  return (
    <>
      <Hero />
      <article className="flex justify-center w-full relative">
        <div className="max-w-[90rem]">
          <BMIExplanation />
          <HealthyGuidelines />
          <BMILimitation />
        </div>
      </article>
    </>
  );
};

export default HomePage;
