import { skillItem } from "./Constants/contents";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="section">
      <div className="container container-supplement">
        <h2 className="headline-2">Tech Stack</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[60ch] md:max-w-[100ch]">
          These are the technologies I've worked with—either through
          professional experience or personal projects. I'm also always open to
          exploring and learning new technologies. If you have something in mind
          or would like to collaborate, please don't hesitate to reach out. I'm
          eager to learn and build together.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, index) => (
            <SkillCard
              key={index}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
            ></SkillCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
