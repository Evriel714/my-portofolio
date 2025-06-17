import React from "react";
import { Modal, Button } from "react-bootstrap";

function ProjectModal({ show, onClose, project }) {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{project.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={project.image}
          alt={project.name}
          className="img-fluid mb-3"
          style={{ height: "100%", width: "100%" }}
        />
        <p>
          <strong>Description:</strong> {project.description}
        </p>
        <p>
          <strong>Additional Info:</strong> {project.add}
        </p>
        <p>
          <strong>Role:</strong> {project.role}
        </p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Project
          </a>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
