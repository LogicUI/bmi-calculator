import React from "react";
import { EatingSVG, ExerciseSVG, SleepIconSVG } from "@/assets/assets";
import GuidelinesCard from "./GuidelinesCard/GuidelinesCard";

const GuideLines = [
  {
    icon: EatingSVG,
    title: "Healthy eating",
    text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    icon: ExerciseSVG,
    title: "Regular exercise",
    text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    icon: SleepIconSVG,
    title: "Adequate sleep",
    text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

const HealthyGuidelines = () => {
  return (
    <article className="lg:flex lg:justify-center">
      <section
        className="p-8 md:mt-[50px] lg:flex lg:max-w-[1160px] lg:p-0
        "
      >
        {GuideLines.map(({ icon, title, text }, index) => {
          return (
            <GuidelinesCard key={index} icon={icon} title={title} text={text} />
          );
        })}
      </section>
    </article>
  );
};

export default HealthyGuidelines;
