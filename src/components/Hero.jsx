import Avatar from "/images/Avatar.svg";
import Anime from "./Anime/Anime";
import { useEffect, useState } from "react";
import { quotes } from "./Constants/contents";
import ButtonPrimary from "./Buttons/ButtonPrimary";
import ButtonOutline from "./Buttons/ButtonOutline";
import TypingAnime from "./Anime/TextAnimation";

function QuoteBox({ quote }) {
  return (
    <div className="bg-zinc-800/50 border border-cyan-400/20 ring-1 ring-cyan-400/30 rounded-2xl p-6 md:p-8 text-center shadow-xl backdrop-blur-sm max-w-2xl mx-auto animate-fade-in">
      <p className="text-cyan-300 text-lg md:text-xl font-mono font-semibold leading-relaxed italic drop-shadow-[0_0_4px_#22d3ee]">
        “{quote.text}”
      </p>
      <p className="mt-4 text-cyan-100 text-sm md:text-base font-mono tracking-wide">
        — {quote.author}
      </p>
    </div>
  );
}

function RandomQuoteBox() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  }, []);

  return <QuoteBox quote={quote} />;
}

function Hero() {
  return (
    <section id="home" className="section">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center container-supplement gap-6">
        {/* Animation */}
        <div>
          <Anime />
        </div>
        <div className="flex items-center h-[200px]">
          <TypingAnime />
        </div>
        <div>
          {/* 上線狀態跟 Quote */}
          <div className="flex items-center">
            <figure className="w-10 h-10 rounded-lg mb-5">
              <img src={Avatar} alt="Jonathan's Avatar" className="img-cover" />
            </figure>
            <div className="flex items-center gap-1.5 text-medium tracking-wide ml-3.5">
              <span className="relative w-2 h-2 rounded-full bg-emerald-200">
                <span className="absolute inset-0 rounded-full animate-ping bg-emerald-200"></span>
              </span>
              Available for work
            </div>
          </div>
          <RandomQuoteBox />
        </div>
        <a href="/Jonathan-Jiang-resume-init.pdf" download>
          <div className="flex gap-3">
            <ButtonPrimary label="Download CV" icon="download"></ButtonPrimary>
            <ButtonOutline
              href="#about"
              label="scroll down"
              icon="arrow_downward"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
