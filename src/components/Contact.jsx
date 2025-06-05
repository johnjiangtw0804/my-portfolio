import { FaGithub, FaLinkedin } from "react-icons/fa"; // import the icons

// Since we have JSX included here, socialLinks can't be put in the content.js
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jonathan-jiang-0a4ab9b9/",
    icon: <FaLinkedin />,
    alt: "linkedin",
  },
  {
    href: "",
    icon: <FaGithub />,
    alt: "GitHub",
  },
];

function Contact() {
  return (
    <section id="socials" className="section">
      <div className="container container-supplement lg:grid lg:grid-cols-2 lg:items-stretch">
        {/*  Social icons and some warm words */}
        <div className="mb-12 lg:mb-5 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[30ch]">
            Contact me for collaboration or job opportunities!
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
            Let's connect and build something amazing together.
          </p>
          <div className="flex gap-5 items-center mt-auto">
            {socialLinks.map(({ href, icon, alt }, index) => (
              <a
                href={href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:bg-zinc-500 hover:text-zinc-950 transition-colors duration-300 grid place-items-center ring-2 w-12 h-12 ring-zinc-50/5 rounded-lg transition-color"
                aria-label={alt}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Text messages */}
        {/* <div className="border border-red-500">Name</div> */}
        {/* <div className="border border-blue-500">Email</div> */}
        <form action="" method="POST" className="xl:pl-10 2xl:pl-20">
          <div className="md:items-center md:grid md:grid-cols-2 gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label mb-4">
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Jonathan Jiang"
                className="text-field"
                required
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label mb-4">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="johnjiangtw0804@gmail.com"
                className="text-field"
                required
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="label mb-4">
                message
              </label>
              <textarea
                className="text-field mb-4 resize-y min-h-32 max-h-80"
                placeholder="Hi!"
                required
                name="message"
                id="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary [&]:max-w-full w-full items-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
