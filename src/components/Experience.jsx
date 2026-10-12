import { forwardRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../data/Experiences.json";

const Experience = forwardRef((props, ref) => {
  return (
    <section
      id="experiences"
      className="mb-10"
      ref={ref}
      data-section="experience"
    >
      <h2 className="sr-only">
        Professional Experience as a Shopify and Front-End Developer
      </h2>

      {experienceData && experienceData.length > 0 ? (
        <>
          <ol>
            {experienceData.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.job_position}-${experience.start_date}`}
                experience={experience}
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
        href={`https://drive.google.com/file/d/1KhHszgBj0HswxLMJM0xBqNAYIpAgzm8j/view?usp=sharing`}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full block text-muted mt-10 font-bold"
        aria-label="View Mark Ponce Full Resume (PDF)"
      >
        <span className="transition-all group-hover:!text-jade-900 inline-block">
          View Full Resume{" "}
          <GoArrowUpRight className="w-auto inline transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </span>
      </a>
    </section>
  );
});

export default Experience;
