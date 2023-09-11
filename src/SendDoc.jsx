import React from "react";
import { IoMdMail } from "react-icons/io";

const SendDoc = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 mt-12 mx-4 bg-malt-color/10 py-8 px-4 rounded-2xl lg:w-2/3 lg:mx-auto lg:px-12 lg:py-16 lg:gap-16">
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-8">
        <p className="text-malt-color lg:text-2xl tracking-widest">NOTRE CADEAU DE BIENVENUE</p>
        <p className="text-2xl font-semibold text-center lg:text-4xl lg:w-3/4 lg:leading-snug">
          Reçois ta checklist pour booster ton référencement Malt gratuitement.
        </p>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center lg:flex-row lg:text-xl lg:w-[90%]">
        <div className="flex gap-2 justify-center items-center bg-white rounded-2xl px-6 py-3 lg:gap-6 lg:w-[70%] lg:justify-start">
          <IoMdMail className="text-black/80" />
          <input type="email" disabled placeholder="Le doc arrive bientôt..." className="text-black/80 pt-1 bg-white" />
        </div>
        <button className="flex justify-center items-center text-white bg-black py-3 px-6 rounded-2xl lg:w-[30%]">Envoie-là moi !</button>
      </div>
    </section>
  );
};

export default SendDoc;
