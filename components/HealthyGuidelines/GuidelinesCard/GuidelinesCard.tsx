import React from "react";
import Image from "next/image";

interface GuidelineCardsProps {
  icon: string;
  title: string;
  text: string;
}

const GuideLineCard = ({ icon, title, text }: GuidelineCardsProps) => {
  return (
    <section className="text-left md:flex flex-align-center lg:flex-col">
      <Image src={icon} alt="icon" />
      <section className="md:ml-10 lg:ml-0 lg:mr-10">
        <h1 className="my-5 font-bold text-2xl">{title}</h1>
        <section className="font-light mb-4">{text}</section>
      </section>
    </section>
  );
};

export default GuideLineCard;
