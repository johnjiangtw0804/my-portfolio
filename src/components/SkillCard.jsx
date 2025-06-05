function SkillCard({ imgSrc, label, desc, classes = "" }) {
  //   console.log(imageSrc);
  //   console.log(label);
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-500 transition-colors " +
        classes
      }
    >
      <figure className="bg-zinc-50 rounded-2xl overflow-hidden w-12 h-12 p-2 flex items-center justify-center">
        <img src={imgSrc} width={32} height={32} alt="skill-icon" />
      </figure>
      <div>
        <h3 className="text-cyan-200 font-semibold">{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}
export default SkillCard;
