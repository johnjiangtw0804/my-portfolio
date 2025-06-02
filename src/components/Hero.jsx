import Avatar from "../assets/Avatar.svg";

function AboutMe() {
  return (
    <div className="text-body">
      <p>
        Hello! I'm Jonathan, a passionate software engineer with experience in
        backend, DevOps, and system design. I enjoy solving complex problems and
        building scalable applications. In my free time, I explore new
        technologies and work on personal projects.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div className="section-container py-16">
      <h1 className="title-xl mb-6">About Me</h1>
      <AboutMe />
      <img
        src={Avatar}
        alt="Jonathan's Avatar"
        className="mt-10 w-48 h-48 object-contain mx-auto"
      />
    </div>
  );
}

export default Hero;
