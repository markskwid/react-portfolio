import { GoArrowUpRight, GoLink } from "react-icons/go";

export default function JobCard({
  date,
  title,
  company,
  companyUrl,
  description,
  projects = [],
  stack = [],
  children, // Optional: allows images or custom elements
}) {
  return (
    <li className="group transition-all w-full px-0 py-4 relative z-10 cursor-pointer">
      <div className="flex flex-wrap justify-start items-stretch">
        <div className="flex-grow flex-shrink basis-[25%]">
          <p className="text-muted uppercase font-semibold lg:text-[12px]">
            {date}
          </p>
        </div>

        <div className="flex-grow flex-shrink basis-[75%] text-start">
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer">
              <h3 className="font-sm">
                <span>
                  {title}
                  <span className="text-xs mx-1">•</span>
                  <span className="inline-block">
                    {company}
                    <GoArrowUpRight className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1 w-auto inline ml-1" />
                  </span>
                </span>
              </h3>
            </a>
          ) : (
            <h3 className="font-sm">
              {title} <span className="text-xs mx-1">•</span> {company}
            </h3>
          )}

          <p className="text-muted text-[.85rem]">{description}</p>

          {projects.length > 0 && (
            <ul aria-label="Projects" className="flex flex-wrap space-x-2 mt-3">
              {projects.map((project) => (
                <li key={project.name} className="py-1">
                  <a
                    href={project.url}
                    aria-label={project.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-white text-[.85rem] inline-block">
                      <GoLink className="inline-block mr-1" />
                      {project.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {stack.length > 0 && (
            <ul
              className="flex flex-wrap space-x-2 mt-3"
              aria-label="Technology Stack"
            >
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="py-1 px-3 text-center rounded-full text-[.85rem] bg-jade-900/20 text-jade-900 shadow-2xl mt-2"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>

      <span className="inline-block opacity-0 transition-all group-hover:opacity-10 bg-slate-400/50 absolute w-[calc(100%+4rem)] rounded-md h-full -inset-x-5 inset-y-1 -z-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"></span>
    </li>
  );
}

// <JobCard
//   date="2024 — Present"
//   title="Junior Web Developer"
//   company="Always Open Commerce"
//   companyUrl="https://alwaysopencommerce.com"
//   description="Build and maintain client e-commerce websites in BigCommerce, Shopify, and WooCommerce."
//   projects={[
//     { name: "Clash Graphics", url: "#" },
//     { name: "CSM Performance", url: "#" },
//     { name: "Decor Direct", url: "#" },
//     { name: "Ingeneius", url: "#" },
//   ]}
//   stack={[
//     "BigCommerce",
//     "Shopify",
//     "GraphQL",
//     "HTML5/CSS",
//     "SCSS",
//     "Javascript",
//   ]}
// >
//   {/* You can insert an image or extra content here */}
//   <img
//     src="/images/job-thumb.jpg"
//     alt="Job preview"
//     className="rounded-md mt-4 w-48"
//   />
// </JobCard>;