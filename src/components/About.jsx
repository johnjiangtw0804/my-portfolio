import { aboutMeItems, aboutMe } from "./Constants/contents";

function About() {
  return (
    <section id="about" className="section">
      <div className="container container-supplement items-center">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl max-w-[60ch]">
            {aboutMe.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-zinc-300 mb-3 md:text-xl md:max-w-[60ch] text-center"
              >
                {line}
              </p>
            ))}
          </p>

          <div className="flex items-center justify-center gap-4 md:gap-8">
            {aboutMeItems.map(({ label, number }, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center md-mb-2">
                    <span className="text-2xl font-bold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 text-sm font-bold">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
