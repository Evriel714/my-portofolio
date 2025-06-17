import React, { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal"; // Make sure you created this

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <section id="projects" className="pt-5 pb-5">
      <div className="container mt-5">
        <h2 className="mb-5">My Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <ProjectCard
                title={project.name}
                description={project.description}
                image={project.image}
                onView={() => handleOpenModal(project)} // 👈 Add this handler
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        show={showModal}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;
