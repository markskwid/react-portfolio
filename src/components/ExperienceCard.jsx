import { GoArrowUpRight, GoLink } from "react-icons/go";
import TechStack from "./TechStack";

function ProjectLink({ item }) {
  return (
    <li className="py-1">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${item.name} website`}
        className="transition-colors hover:text-jade-900 text-white text-[.85rem] inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jade-900"
      >
        <GoLink className="mr-1" />
        {item.name}
      </a>
    </li>
  );
}

function ProjectGroup({ label, items }) {
  if (!items.length) return null;

  return (
    <li className={label ? "mt-2" : undefined}>
      {label && (
        <h4 className="text-muted font-semibold uppercase text-xs flex justify-start items-center before:content-[''] before:w-10 before:mr-2 before:h-[1.5px] before:bg-gray-500">
          {label}
        </h4>
      )}
      <ul className="flex flex-wrap justify-start items-start gap-x-2">
        {items.map((item) => (
          <ProjectLink key={item.name} item={item} />
        ))}
      </ul>
    </li>
  );
}

export default function ExperienceCard({ experience }) {
  const {
    company,
    company_website: companyWebsite,
    job_position: jobPosition,
    job_description: description,
    start_date: startDate,
    end_date: endDate,
    tech_stack: techStack,
    projects = [],
  } = experience;

  const hasTypedProjects = projects.some((project) => project.type);
  const deliveredProjects = hasTypedProjects
    ? projects.filter((project) => project.type !== "maintenance")
    : projects;
  const maintenanceProjects = projects.filter(
    (project) => project.type === "maintenance"
  );

  return (
    <li className="group isolate transition-all w-full px-0 py-4 relative z-10 mt-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-5 inset-y-1 -z-10 rounded-md bg-slate-400/50 opacity-0 shadow-[inset_0px_2px_0_rgba(255,255,255,0.5)] transition-opacity duration-300 group-hover:opacity-10"
      />
      <article>
        <div className="flex flex-col lg:flex-row flex-wrap justify-start items-stretch">
          <div className="flex-grow flex-shrink basis-[25%] mb-2 lg:mb-0">
            <p className="text-muted uppercase font-semibold text-xs lg:text-[12px]">
              {startDate} &mdash; {endDate}
            </p>
          </div>

          <div className="flex-grow flex-shrink lg:basis-[75%] text-start">
            <a
              className="inline-block group-hover:text-jade-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jade-900"
              href={companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${company} website`}
            >
              <h3 className="font-sm group-hover:!text-jade-900 transition-colors mb-2 lg:mb-0">
                <span>{jobPosition}</span>
                <span className="text-xs mx-1">•</span>
                <span className="inline-block">
                  {company}
                  <GoArrowUpRight className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1 w-auto inline ml-1" />
                </span>
              </h3>
            </a>

            <p className="text-muted text-[.9rem]">
              {description}
            </p>

            {projects.length > 0 && (
              <ul
                aria-label="Projects"
                className="relative z-20 mt-3"
              >
                <ProjectGroup items={deliveredProjects} />
                <ProjectGroup
                  label="Managed Client Websites"
                  items={maintenanceProjects}
                />
              </ul>
            )}

            <TechStack items={techStack} />
          </div>
        </div>
      </article>
    </li>
  );
}
