import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="pt-5 pb-5 bg-light">
      <div className="container mt-5">
        <h2 className="mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <ProjectCard
                title={project.name}
                description={project.description}
                image={project.image}
                link="#" // or you can add project.link to your data
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
