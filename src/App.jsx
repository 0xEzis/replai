import { useRef } from 'react';
import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import Repl from "./Repl";
import HowItWorks from "./HowItWorks";
import SendDoc from "./SendDoc";
import Footer from "./Footer";

export default function App() {
  const AppRef = useRef(null);
  const TutoRef = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-league sm:px-24 md:py-4">
      <NavBar />
      <HeroBanner handleClick={handleClick} AppRef={AppRef} TutoRef={TutoRef}/>
      <Repl AppRef={AppRef}/>
      <HowItWorks TutoRef={TutoRef}/>
      <SendDoc />
      <Footer />
    </div>
  );
}
