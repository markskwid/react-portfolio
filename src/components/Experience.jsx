import { GoArrowUpRight } from "react-icons/go";
import ListItem from "./ListItem";
import experienceData from "../data/Experiences.json";

export default function Experience() {
  return (
    <section className="mb-10">
      {experienceData && experienceData.length > 0 ? (
        <>
          <ol>
            {experienceData.map((experience) => (
              <ListItem
                company={experience.company}
                companyLink={experience.company_website}
                date={
                  <>
                    {experience.start_date} &mdash; {experience.end_date}
                  </>
                }
                jobPosition={experience.job_position}
                description={experience.job_description}
                techStack={experience.tech_stack}
                projects={experience.projects}
              />
            ))}
          </ol>
        </>
      ) : (
        <>
          <p>No experience listed.</p>
        </>
      )}
      <a
        href="#"
        className="group w-full block text-muted mt-10 font-bold"
        aria-label="View Resume"
      >
        <span className="transition-all group-hover:!text-jade-900 inline-block">
          View Full Resume{" "}
          <GoArrowUpRight className="w-auto inline transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </span>
      </a>
    </section>
  );
}
