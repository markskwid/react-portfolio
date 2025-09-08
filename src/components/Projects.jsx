import { GoArrowRight } from "react-icons/go";
import ListItem from "./ListItem";
import projectData from "../data/Projects.json";

export default function Projects() {
  return (
    <section className="mb-10 mt-50">
      {projectData && projectData.length > 0 ? (
        <ol>
          {projectData.map((project) => (
            <ListItem
              title={project.title}
              description={project.description}
              project_url={project.project_url}
              source_code={project.source_code}
              project_thumbnail={project.thumbnail_link}
              techStack={project.tech_stack}
            />
          ))}
        </ol>
      ) : (
        <p>No project posted.</p>
      )}
      <a
        href="#"
        aria-label="View all my projects"
        className="group w-full block text-muted mt-10 font-bold"
      >
        <span className="transition-all group-hover:!text-jade-900 inline-block">
          View Project Archive{" "}
          <GoArrowRight className="transition-transform w-auto inline group-hover:translate-x-2" />
        </span>
      </a>
    </section>
  );
}
