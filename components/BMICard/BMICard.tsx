import React from "react";
import Image from "next/image";

interface cardProps {
  icon: string;
  title: string;
  text: string;
  margin: string;
}

const BMICard = ({ icon, title, text, margin }: cardProps): JSX.Element => {
  return (
    <article
      className={`md:w-[335px] md:mx-[15px] px-6 pb-8 text-left
     ${margin} drop-shadow-md bg-white rounded-xl`}
    >
      <section className="py-6 flex items-center">
        <Image src={icon} alt="logo" />
        <h1 className="pl-4 font-bold">{title}</h1>
      </section>
      <section className="text-customGray">{text}</section>
    </article>
  );
};

export default BMICard;
