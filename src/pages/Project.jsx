
const Project = ({links, image, title, details }) => {
  return (
    <a href={links} className="project-linkbox" target="blank">
      
      <div>
      <div className="project-info"> </div>
        <div><h3 className="project-title">{title}</h3>
        <p className="project-details">{details}</p>
      </div>
      </div>
      <div>
      <img src={image} alt={title} className="project-image" loading="lazy" />
      </div>
      
    </a>
    
  );
};

export default Project;
