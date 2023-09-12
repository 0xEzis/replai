import React, { useState } from "react";
import loader from "/loader.gif";
import sendMessage from "/send_message.png";
import appAsset from "/app_asset.svg";
import OpenAI from "openai";

const Repl = ({ AppRef }) => {
  const [apiKey, setApiKey] = useState("");
  const [description, setDescription] = useState("");
  const [answer, setAnswer] = useState("");
  const [formStep, setFormStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchCompletion() {
    try {
      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0613",
        messages: [
          {
            role: "system",
            content:
              "Vous êtes un assistant spécialisé dans la réponse aux offres de missions freelance. Votre rôle est de comprendre la demande de l'annonceur et d'apporter la réponse la plus pertinante possible. Tu finiras le message par '[Votre nom]'.",
          },
          { role: "user", content: `${description}` },
        ],
      });
      return response;
    } catch (error) {
      console.log(error);
      setErrorMessage("Problème dans la génération de la réponse.");
      setFormStep(0);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (apiKey === "" && description === "") {
      setErrorMessage(
        "Veuillez renseigner votre clé API et votre offre de mission."
      );
      return;
    }
    if (apiKey === "") {
      setErrorMessage("Veuillez renseigner votre clé API.");
      return;
    }
    if (description === "") {
      setErrorMessage("Veuillez renseigner votre offre de mission.");
      return;
    }
    setFormStep(1);
    fetchCompletion().then((response) => {
      if (response.choices && response.choices[0]) {
        setLoading(false);
        setAnswer(response.choices[0].message["content"]);
      } else {
        setErrorMessage("Problème dans la génération de la réponse.");
        setFormStep(0);
      }
    });
  };

  const reset = () => {
    setAnswer("");
    setErrorMessage("");
    setFormStep(0);
    setLoading(true);
  };

  const fullReset = () => {
    setApiKey("");
    setDescription("");
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section ref={AppRef} className="flex lg:flex-col">
      <div className="hidden lg:block lg:relative lg:mt-20">
        <div className="lg:flex absolute justify-center gap-64 w-full">
        <img src={sendMessage} alt="send message" className="relative md:right-0 lg:right-0 xl:right-24" />
        <img src={appAsset} alt="" className="" />
        </div>
      </div>
      {formStep === 0 && (
        <form
          action=""
          className="flex flex-col gap-8 py-8 px-8 mx-3 my-12 border border-black w-full rounded-2xl bg-white z-20 lg:text-xl lg:mt-40"
        >
          <label htmlFor="apiKey" className="flex flex-col gap-2">
            Clé API OpenAI :
            <input
              name="apiKey"
              id="apiKey"
              type="password"
              className="rounded-2xl border border-black py-2 px-2 "
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </label>
          <label htmlFor="description" className="flex flex-col gap-2">
            Offre de mission :
            <textarea
              name="description"
              id="description"
              type="text"
              value={description}
              rows={12}
              col={10}
              className="rounded-2xl border border-black py-2 px-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          {errorMessage && (
            <p className="text-center text-malt-color">{errorMessage}</p>
          )}
          <div className="flex text-center gap-10 justify-center lg:gap-16">
          <button
            type="submit"
            className="flex bg-black text-white py-2 pt-[9px] px-4 rounded-2xl"
            onClick={(e) => handleSubmit(e)}
          >
            Générer une réponse
          </button>
          <p
            type=""
            className="flex bg-black text-white py-2 pt-[9px] px-4 rounded-2xl cursor-pointer"
            onClick={() => fullReset()}
          >
            Effacer les champs
          </p>
          </div>
        </form>
      )}
      {formStep === 1 && (
        <div className="py-8 px-8 mx-3 my-12 w-full rounded-2xl bg-white z-20 border border-black min-h-[300px]">
          {loading ? (
            <div className="flex flex-col h-full justify-around items-center">
              <img src={loader} alt="" />
              <p className="text-center">
                Réponse en cours de génération,<br /> veuillez patientier !
              </p>
              <button
                className="flex mx-auto bg-black text-white py-2 pt-[9px] px-4 rounded-2xl"
                onClick={() => reset()}
              >
                Réinitialiser
              </button>
            </div>
          ) : (
            <div className="min-h-full flex flex-col justify-between lg:text-xl">
              <div className="flex flex-col gap-4">
                <p>Réponse générée :</p>
                <textarea
                  className="rounded-2xl border border-black py-2 px-2 h-full whitespace-pre-line text-black lg:px-4 lg:py-4"
                  rows={12}
                  col={10}
                  disabled
                >
                  {answer
                    ? answer
                    : "Problème de génération, veuillez réessayer..."}
                </textarea>
              </div>
              <div className="pt-6 px-6 flex justify-between min-w-full">
                <button
                  onClick={() => copyToClipboard(answer)}
                  className="flex mx-auto bg-black text-white py-2 pt-[9px] px-4 rounded-2xl"
                >
                  Copier
                </button>
                <button
                  className="flex mx-auto bg-black text-white py-2 pt-[9px] px-4 rounded-2xl"
                  onClick={() => reset()}
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Repl;
