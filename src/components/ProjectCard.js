import React from "react";

function ProjectCard({ title, description, image, onView }) {
  return (
    <div className="card h-100" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={image}
        alt={title}
        style={{ height: "160px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <button onClick={onView} className="btn btn-primary mt-auto">
          View Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
