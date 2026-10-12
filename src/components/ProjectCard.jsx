import { BsGithub } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import StatusBadge from "./StatusBadge";
import TechStack from "./TechStack";

export default function ProjectCard({ project }) {
  const {
    title,
    status,
    description,
    project_url: projectUrl,
    source_code: sourceCode,
    thumbnail_link: thumbnail,
    tech_stack: techStack,
  } = project;

  return (
    <li className="group isolate transition-all w-full px-0 py-4 relative z-10 mt-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-5 inset-y-1 -z-10 rounded-md bg-slate-400/50 opacity-0 shadow-[inset_0px_2px_0_rgba(255,255,255,0.5)] transition-opacity duration-300 group-hover:opacity-10"
      />
      <article itemScope itemType="https://schema.org/SoftwareSourceCode">
        <div className="flex flex-col lg:flex-row flex-wrap justify-start items-stretch">
          <div className="flex-grow flex-shrink basis-[25%] mb-2 lg:mb-0">
            {thumbnail ? (
              <img
                src={thumbnail}
                loading="lazy"
                width="128"
                height="72"
                alt={`${title} project screenshot by Mark Ponce`}
                className="w-32 aspect-video object-cover rounded-sm transition-all border-slate-700 group-hover:border-slate-500 border-3 mt-2"
              />
            ) : (
              <div
                className="w-32 aspect-video rounded-sm border-3 border-slate-700 bg-slate-800 mt-2 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-muted text-xs">Preview unavailable</span>
              </div>
            )}
          </div>

          <div className="flex-grow flex-shrink lg:basis-[75%] text-start">
            <a
              className="inline-block group-hover:text-jade-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jade-900"
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} project`}
              itemProp="url"
            >
              <h3
                className="font-sm group-hover:!text-jade-900 transition-colors mb-2 lg:mb-0"
                itemProp="name"
              >
                {title}
                {status && <StatusBadge status={status} />}
                <GoArrowUpRight className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1 w-auto inline ml-1" />
              </h3>
            </a>

            <p className="text-muted text-[.9rem]" itemProp="description">
              {description}
            </p>

            {sourceCode && sourceCode !== projectUrl && (
              <a
                href={sourceCode}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`View ${title} source code on GitHub`}
                className="inline-flex items-center mt-3 text-white text-[.85rem] transition-colors hover:text-jade-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jade-900"
              >
                <BsGithub className="text-lg mr-1" />
                GitHub
              </a>
            )}

            <TechStack items={techStack} />
          </div>
        </div>
      </article>
    </li>
  );
}
