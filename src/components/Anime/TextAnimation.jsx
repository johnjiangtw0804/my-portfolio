import { TypeAnimation } from "react-type-animation";
function TypingAnime() {
  return (
    <TypeAnimation
      sequence={[
        "Hi,",
        1000,
        "Welcome to my portfolio...",
        2000,
        "I have created this website to attract people :)",
        2000,
        "Here is where the story begins...",
        () => {},
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="p-4 text-emerald-400 drop-shadow-[0_0_6px_#34d399] font-mono font-bold md:max-w-[60ch]"
    />
  );
}

export default TypingAnime;
