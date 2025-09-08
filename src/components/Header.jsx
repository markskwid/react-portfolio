import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header() {
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
          <ul className="[&_li>a]:text-muted-900 [&_li.is-active>a]:text-white [&_li]:flex [&_li]:items-center [&_li::before]:mr-3 [&_li::before]:content-[''] [&_li::before]:h-[0.5px] [&_li.is-active::before]:bg-white [&_li::before]:bg-muted-900 [&_li.is-active::before]:w-15 [&_li::before]:w-10">
            <li className="mt-5 is-active">
              <a
                href="#"
                className="tracking-wide uppercase text-xs font-bold"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li className="mt-5">
              <a
                href=""
                className="tracking-wide uppercase text-xs font-bold"
                aria-current="page"
              >
                Experience
              </a>
            </li>
            <li className="mt-5">
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
          <li className="inline-block">
            <a href="#" className="text-3xl" aria-label="Github Profile">
              <BsGithub className="inline-block" />
            </a>
          </li>

          <li className="inline-block">
            <a href="#" className="text-3xl" aria-label="LinkedIn Profile">
              <BsLinkedin className="inline-block" />
            </a>
          </li>

          <li className="inline-block">
            <a
              href="mailto:bascal.markponce.f.1015@gmail.com"
              className="text-3xl"
              aria-label="Send Email to Mark"
            >
              <BiLogoGmail className="inline-block" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
