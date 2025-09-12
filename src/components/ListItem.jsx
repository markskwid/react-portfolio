import { GoArrowUpRight, GoLink } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
export default function ListItem({
  date,
  company,
  companyLink,
  jobPosition,
  description,
  projects,
  techStack,
  title,
  project_url,
  source_code,
  project_thumbnail,
  children,
}) {
  return (
    <li className="group transition-all w-full px-0 py-4 relative z-10 cursor-pointer mt-10">
      <div className="flex flex-col lg:flex-row flex-wrap justify-start items-stretch">
        <div className="flex-grow flex-shrink basis-[25%] mb-2 lg:mb-0">
          {date ? (
            <p className="text-muted uppercase font-semibold text-xs lg:text-[12px]">
              {date}
            </p>
          ) : (
            <img
              src={project_thumbnail || "Project Thumbnail"}
              alt={title}
              className="w-32 lg:w-32 rounded-sm transition-all border-slate-700 group-hover:border-slate-500 border-3 mt-2"
            />
          )}
        </div>

        <div className="flex-grow flex-shrink lg:basis-[75%] text-start">
          {project_url || companyLink ? (
            <a
              className="group-hover:text-jade-900"
              href={companyLink || project_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-sm group-hover:!text-jade-900 transition-colors mb-2 lg:mb-0">
                <span>
                  {jobPosition || title}
                  {company && <span className="text-xs mx-1">•</span>}
                  <span className="inline-block">
                    {company}
                    <GoArrowUpRight className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1 w-auto inline ml-1" />
                  </span>
                </span>
              </h3>
            </a>
          ) : (
            <h3 className="font-sm text-white group-hover:!text-jade-900 transition-colors">
              <span>
                {jobPosition || title}
                {company && <span className="text-xs mx-1">•</span>}
                {company && <span className="inline-block">{company}</span>}
              </span>
            </h3>
          )}

          {description && (
            <p className="text-muted text-[.9rem]">{description}</p>
          )}

          {(source_code || (projects && projects.length > 0)) && (
            <ul
              aria-label="Projects"
              className="flex relative z-50 justify-start items-start flex-wrap space-x-2 mt-3"
            >
              {source_code && (
                <li className="py-1">
                  <a
                    href={source_code}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={title}
                  >
                    <span className="transition-colors hover:text-jade-900 text-white text-[.85rem] flex items-center">
                      <BsGithub className="text-lg inline-block mr-1" />
                      Github
                    </span>
                  </a>
                </li>
              )}
              {projects &&
                projects.map((project) => (
                  <li className="py-1" key={project.name}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.name}
                    >
                      <span className="transition-colors hover:text-jade-900 text-white text-[.85rem] inline-block">
                        <GoLink className="inline-block mr-1" />
                        {project.name}
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          )}

          {techStack && techStack.length > 0 && (
            <ul
              className="flex justify-start items-start flex-wrap space-x-2 mt-3"
              aria-label="Technology Stack"
            >
              {techStack.map((tech) => (
                <li className="py-1 px-3 text-center rounded-full bg-jade-900/20 text-jade-900 shadow-2xl mt-2 flex items-center">
                  <span className="text-[.85rem]">{tech}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <a
        href={companyLink || project_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block opacity-0 transition-all group-hover:opacity-10 bg-slate-400/50 absolute w-[calc(100%+4rem)] rounded-md h-full -inset-x-5 inset-y-1 z-10 shadow-[inset_0px_2px_0_rgba(255,255,255,0.5)]"
      ></a>
    </li>
  );
}
