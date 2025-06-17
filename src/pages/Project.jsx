import PropTypes from "prop-types";

const Project = ({ links, image, title, details }) => {
  return (
    <a href={links} className="project-linkbox" target="_blank" rel="noopener noreferrer">
      <div>
        <div className="project-info"> </div>
        <div>
          <h3 className="project-title">{title}</h3>
          <p className="project-details">{details}</p>
        </div>
      </div>
      <div>
        <img src={image} alt={title} className="project-image" loading="lazy" />
      </div>
    </a>
  );
};

// ✅ Add PropTypes validation
Project.propTypes = {
  links: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Project;
