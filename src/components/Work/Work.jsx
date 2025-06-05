import { workItems } from "../Constants/contents";
import WorkCard from "./WorkCard";
function Work() {
  return (
    <section id="work" className="section">
      <div className="container container-supplement">
        <h2 className="headline-2 mb-8">Project</h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
          {workItems.map(({ imgSrc, title, tags, projectLink }, idx) => {
            return (
              <WorkCard
                key={idx}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
