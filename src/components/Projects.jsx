import { forwardRef } from "react";
import { GoArrowRight } from "react-icons/go";
import ProjectCard from "./ProjectCard";
import projectData from "../data/Projects.json";

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" className="mb-10 lg:mt-50" ref={ref} data-section="projects">
      <h2 className="sr-only">Personal Coding Projects</h2>

      {projectData && projectData.length > 0 ? (
        <ol>
          {projectData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ol>
      ) : (
        <p>No project posted.</p>
      )}
      <a
        href="https://github.com/markskwid?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
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
});

export default Projects;
