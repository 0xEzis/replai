import React from "react";
import sendMalt from "/send_malt.png";
import noMessage from "/no_message.png";
import usingApp from "/using_app.png";

const HowItWorks = ({TutoRef}) => {
  return (
    <section ref={TutoRef} className="flex flex-col justify-center items-center gap-8 lg:mt-12 lg:mb-24">
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-6">
        <p className="text-malt-color tracking-widest lg:text-2xl ">NOTRE SERVICE</p>
        <h2 className="font-semibold text-2xl lg:text-4xl">Comment ça marche ?</h2>
        <div className="mt-8 flex flex-col gap-12 lg:flex-row">
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-12">
            <img src={noMessage} alt="" className="w-28" />
            <div className="flex flex-col justify-center items-center gap-6 text-center h-[80%]">
              <p className="font-semibold text-lg lg:text-2xl">
                Vous recevez une <br /> offre de mission
              </p>
              <p className="w-[80%] text-center lg:text-lg">
                Vous devez de répondre rapidement, tout en apportant les
                informations nécessaires à votre client.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-12">
            <img src={usingApp} alt="" className="w-28" />
            <div className="flex flex-col justify-center items-center gap-6 text-center h-[80%]">
              <p className="font-semibold text-lg lg:text-2xl">
                Replai vous aide à écrire <br /> une réponse complète
              </p>
              <p className="w-[80%] text-center lg:text-lg">
                Une réponse personnalisée est générée en 15 secondes. Celle-ci
                est optimisée pour la mission en question, prête à l’emploi.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-12">
            <img src={sendMalt} alt="" className="w-28" />
            <div className="flex flex-col justify-center items-center gap-6 text-center h-[80%]">
              <p className="font-semibold text-lg lg:text-2xl">
              Réponse générée, <br /> mission assurée !
              </p>
              <p className="w-[80%] text-center lg:text-lg">
                Il ne vous reste plus qu’à personnifier le message, avant de
                l’envoyer. Tout cela, en moins de 1 minute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
