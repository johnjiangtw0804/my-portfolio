import { sitemap } from "./Constants/contents";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Social media links with icons
const socials = [
  {
    label: "GitHub",
    icon: <FaLinkedin />,
    href: "https://github.com/johnjiangtw0804",
  },
  {
    label: "LinkedIn",
    icon: <FaGithub />,
    href: "https://www.linkedin.com/in/jonathan-jiang-0a4ab9b9/",
  },
];

function Footer() {
  return (
    <section className="section">
      <div className="container container-supplement">
        <div className="lg:grid lg:grid-cols-2 gap-8">
          {/* SiteMap Section */}
          <div className="mb-4">
            <p className="mb-2 font-semibold">SiteMap</p>
            <ul className="space-y-2">
              {sitemap.map(({ label, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="hover:underline text-sm text-zinc-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <p className="mb-2 font-semibold">Socials</p>
            <ul className="space-y-2">
              {socials.map(({ icon, label, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 items-center w-fit p-2 h-10 rounded-xl ring-1 ring-zinc-50/[0.02]
                               bg-zinc-50/10 backdrop-blur-2xl hover:bg-zinc-50/15 text-sm text-zinc-200"
                  >
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
