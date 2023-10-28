import React from "react";
import { LogoSVG } from "../../assets/assets";
import Image from "next/image";
import styles from "./hero.module.css";
import Metrics from "../Metrics/Metrics";

const Hero = (): JSX.Element => {
  return (
    <section className={`${styles.heroBackground}`}>
      <section
        className="flex flex-col
            lg:translate-y-8
            items-center pt-8 lg:absolute lg:left lg:hidden"
      >
        <Image src={LogoSVG} width={40} height={40} className="" alt="logo" />
        <section className="flex  flex-col items-center ">
          <section
            className={`
                    lg:text-left
                    text-center 
                    leading-tight inter-semiBold text-[48px] translate-x-2 mt-4 break-words hero-text
                    font-semibold`}
          >
            Body Mass
            <br className="md:hidden" />
            <br className="hidden md:block" />
            Index <br className="md:hidden" />
            Calculator
          </section>
          <section
            className="text-center mt-9 max-w-[300px] 
                  md:max-w-[686px]
                  lg:text-left
                  text-customGray"
          >
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </section>
        </section>
      </section>
      <section
        className="pt-8
            translate-y-1/4
            translate-x-24
              lg:absolute lg:left hidden lg:block  lg:w-3/6 lg-w-[564px]
              "
      >
        <Image
          src={LogoSVG}
          width={40}
          height={40}
          className="place-content-center"
          alt="logo"
        />
        <section
          className={`
                    lg:text-left
                    lg:mt-20
                    text-center 
                    md:max-w-[350px]
                    max-w-[250px] leading-tight inter-semiBold text-[48px] mt-4 break-words hero-text
                    font-semibold`}
        >
          Body Mass Index Calculator
        </section>
        <section
          className="text-center mt-8 
                      lg:text-left
                      lg:w-4/6
                      text-customGray"
        >
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </section>
      </section>
      <Metrics />
    </section>
  );
};

export default Hero;
