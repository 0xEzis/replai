import React from "react";
import heroAsset from "/hero_asset.png";
import playIcon from "/play_logo.svg";
import { LiaToolsSolid } from "react-icons/lia";

const HeroBanner = ({ handleClick, AppRef, TutoRef }) => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center px-4 gap-6 mt-6 lg:flex-row lg:mt-8 lg:gap-0">
        <div className="flex justify-center items-center gap-2 py-1 px-4 border border-malt-color bg-malt-color/20 text-black rounded-[100px] lg:hidden">
          <p className="pt-1">Outils 100% gratuit</p>
          <LiaToolsSolid className="" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-center lg:gap-8 lg:w-[85%]">
            {/* vue desktop */}
            <div className="hidden lg:flex justify-start items-center w-fit gap-2 py-1 px-4 border border-malt-color bg-malt-color/20 text-black rounded-[100px]">
              <p className="pt-1">Outils 100% gratuit !</p>
            </div>
            <h1 className="font-bold text-4xl text-center lg:text-start lg:leading-[50px] lg:text-5xl tracking-wide">
              Convertissez vos <span className="text-malt-color">offres</span>{" "}
              de missions en <span className="text-malt-color">clients</span>{" "}
              rapidement !
            </h1>
            <h2 className="text-black/70 lg:text-start lg:leading-8">
              Nous vous aidons à répondre rapidement à vos offres de missions
              pour maximiser vos chances de convertir vos prospects en clients.
            </h2>
          </div>
          <div className="flex flex-col gap-5 justify-between items-center lg:items-start xl:flex-row lg:justify-start lg:gap-6">
            <button
              onClick={() => handleClick(AppRef)}
              className="py-2 pt-3 px-4 shadow-buttonhigh rounded-[100px] bg-malt-color text-white lg:text-xl"
            >
              J'ai une mission !
            </button>
            <button
              onClick={() => handleClick(TutoRef)}
              className="py-2 pt-3 px-4 shadow-buttonhigh rounded-[100px] flex justify-center gap-2 items-center lg:text-xl"
            >
              <img src={playIcon} alt="Comment ça marche ?" />
              Comment ça marche ?
            </button>
          </div>
        </div>
        <img src={heroAsset} alt="" className="hidden lg:block lg:w-1/2 lg:h-full xl:w-full" />
        <div className="relative w-full h-48 lg:hidden">
          <img src={heroAsset} alt="" className="absolute b-4" />
        </div>
      </div>
    </main>
  );
};

export default HeroBanner;
