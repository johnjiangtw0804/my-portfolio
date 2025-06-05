function WorkCard({ imgSrc, title, tags, projectLink, className }) {
  return (
    <div
      className={
        " relative hover:bg-zinc-500 active:bg-zinc-700 p-4 rounded-2xl ring-1 ring-inset ring-zinc-500 transition-colors bg-zinc-300" +
        className
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover"
        ></img>
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="flex h-10 text-sm text-zinc-50 bg-zinc-700 items-center px-2 py-2"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        {/* <div className="w-11 h-11 rounded-lg text-zinc-950 bg-cyan-200 shrink-0 absolute bottom-0 right-0">
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_outward
          </span>
        </div> */}
      </div>
      <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  );
}

export default WorkCard;
