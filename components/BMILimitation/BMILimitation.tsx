import React from "react";
import {
  GenderSVG,
  AgeSvg,
  MuscleSVG,
  PregnancySVG,
  RaceIconSVG,
} from "../../assets/assets";
import BMICard from "../BMICard/BMICard";

const cards = [
  {
    icon: GenderSVG,
    title: "Gender",
    text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    margin: "mb-8",
  },
  {
    icon: AgeSvg,
    title: "Age",
    text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    margin: "mb-8",
  },
  {
    icon: MuscleSVG,
    title: "Muscle",
    text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    margin: "mb-8",
  },
  {
    icon: PregnancySVG,
    title: "Pregnancy",
    text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    margin: "mb-8",
  },
  {
    icon: RaceIconSVG,
    title: "Race",
    text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    margin: "mb-0",
  },
];

const BMILimitation = () => {
  const renderBMICards = (filters: Array<string>) => {
    return cards
      .filter(({ title }) => filters.includes(title))
      .map(({ icon, title, text, margin }, index) => (
        <BMICard
          key={index}
          icon={icon}
          title={title}
          text={text}
          margin={margin}
        />
      ));
  };

  return (
    <section
      className="lg:relative text-center lg:text-left lg:flex lg:justify-center
        lg:mt-40 max-w-[90rem]
    "
    >
      <article
        className="p-8 lg:max-w-[35.25rem] lg:min-w-[35.25rem] lg:w-1/4
        lg:justify-center flex flex-col lg:absolute left-0
        lg:p-0
        "
      >
        <h1
          className="font-semibold text-2xl 
            lg:text-5xl 
            "
        >
          Limitations of BMI
        </h1>
        <section
          className="md:flex md:justify-center lg:justify-start
            "
        >
          <section
            className="text-base text-customGray pt-4 md:w-5/6 text-center
                md:mt-5 lg:text-left lg:min-w-[33.125rem]
                "
          >
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </section>
        </section>
      </article>
      <section>
        <section
          className="lg:hidden px-8 md:flex flex-wrap 
        items-center justify-center"
        >
          {cards.map(({ icon, title, text, margin }, index) => {
            return (
              <BMICard
                key={index}
                icon={icon}
                title={title}
                text={text}
                margin={`${margin} `}
              />
            );
          })}
        </section>
        <section className="hidden lg:block ml-72">
          {
            <article>
              <section className="flex ml-96">
                {renderBMICards(["Gender"])}
              </section>
              <section className="flex ml-40">
                {renderBMICards(["Age", "Muscle"])}
              </section>
              <section className="flex">
                {renderBMICards(["Pregnancy", "Race"])}
              </section>
            </article>
          }
        </section>
      </section>
    </section>
  );
};

export default BMILimitation;
