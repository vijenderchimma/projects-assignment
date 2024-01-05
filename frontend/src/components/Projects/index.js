import { useContext } from "react";
import { projectContext } from "../../Context/projectContext";
import Header from '../Header'

import './index.css'

const Projects = () => {
  const { finalData } = useContext(projectContext);

  return (
    <>
    <Header />
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      {finalData.length === 0 ? (
        <p className="no-project">No projects yet.</p>
      ) : (
        <ul className="list-container">
          {finalData.map((project) => (
            <li key={project.name} className="list-item">
              <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link}><button className="view-button">View Project</button></a>
              </div>
              <img src={project.image} className="image" alt={project.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default Projects;
