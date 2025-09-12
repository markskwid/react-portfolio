import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header({ activeSection }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:h-screen lg:py-24 mb-10 lg:mb-0">
      <div>
        <h1 className="text-5xl font-bold">Mark Ponce</h1>
        <h2 className="text-xl capitalize font-normal mt-4">
          Front end developer
        </h2>
        <p className="mt-5 text-sm text-muted max-w-sm">
          I build E-commerce website like BigCommerce, Shopify, and WooCommerce
        </p>

        <nav
          role="navigation"
          aria-label="Main navigation"
          className="nav-header mt-12"
        >
          <ul className="[&_li>a]:text-muted-900 [&_li.is-active>a]:text-white [&_li]:flex [&_li]:items-center [&_li::before]:mr-3 [&_li::before]:content-[''] [&_li::before]:h-[0.5px] [&_li.is-active::before]:bg-white [&_li::before]:bg-muted-900 [&_li.is-active::before]:w-15 [&_li.is-active::before]:transition-all [&_li.is-active::before]:duration-300 [&_li::before]:w-10">
            <li className={`mt-5 ${activeSection === "about" && "is-active"}`}>
              <a
                href="#"
                className="tracking-wide uppercase text-xs font-bold"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li
              className={`mt-5 ${
                activeSection === "experience" && "is-active"
              }`}
            >
              <a
                href=""
                className="tracking-wide uppercase text-xs font-bold"
                aria-current="page"
              >
                Experience
              </a>
            </li>
            <li
              className={`mt-5 ${activeSection === "projects" && "is-active"}`}
            >
              <a
                href=""
                className="tracking-wide uppercase text-xs font-bold"
                aria-current="page"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="overflow-hidden mt-10 lg:mt-0">
        <ul className="m-0 p-0 w-full text-muted space-x-5">
          <li className="inline-block group">
            <a
              href="https://github.com/markskwid?tab=repositories"
              className="text-3xl"
              aria-label="Github Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="inline-block group-hover:text-white transition-colors" />
            </a>
          </li>

          <li className="inline-block group">
            <a
              href="www.linkedin.com/in/mark-ponce-bascal-24018a245"
              className="text-3xl"
              aria-label="LinkedIn Profile"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="inline-block group-hover:text-white transition-colors" />
            </a>
          </li>

          <li className="inline-block group">
            <a
              href="mailto:bascal.markponce.f.1015@gmail.com"
              className="text-3xl"
              aria-label="Send Email to Mark"
            >
              <BiLogoGmail className="inline-block group-hover:text-white transition-colors" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
