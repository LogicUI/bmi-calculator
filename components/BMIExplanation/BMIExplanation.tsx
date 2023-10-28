import React from "react";
import { ManEatingSVG, PatternCurveLineLeftSVG } from "@/assets/assets";
import Image from "next/image";

const BMIExplanation = () => {
  return (
    <article
      className="md:relative
                flex justify-center  flex-col md:p-4 md:flex-row md:p-0 md:flex-row
                mt-20 max-w-[72.5rem] lg:w-full
                lg:justify-end
                items-end
                mb-8
                lg:p-0"
    >
      <Image
        src={ManEatingSVG}
        alt="logo"
        className="
                    w-full
                    md:w-3/6      
                    md:ml-[-3.5rem]   
                    lg:mr-auto
                    lg:ml-[0.5rem]
                    max-w-[35.2rem]            
                    "
      />

      <article
        className="
            flex flex-col 
            text-left 
            p-8
            md:p-0
            md:w-2/6
            lg:w-3/6
            md:ml-16 
            md:items-center 
            md:block 
            md:min-w-[336px]
            md:mb-5
            lg:max-w-[1160px]
            lg:relative
        "
      >
        <Image
          src={PatternCurveLineLeftSVG}
          alt="logo"
          className="hidden lg:block absolute bottom-full left-2/3"
        />
        <section
          className="
                text-[2rem]
                lg:text-[3rem]
                font-semibold
                inter-semiBold
                mt-4
                leading-9
                "
        >
          What your BMI result <br /> means
        </section>
        <section
          className="text-16px
                    mt-8
                    font-light
                    "
        >
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight.&apos; Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </section>
      </article>
    </article>
  );
};

export default BMIExplanation;
