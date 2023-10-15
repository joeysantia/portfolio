import Links from "./Links";

const Project = ({ project }) => {
  console.log(project.img)
  return (
    <section className="project" aria-label="project">
      <img src={project.img.src} alt={project.img.alt} />
      <div className="project-description">
        <div className="top-row">
            <h3>{project.title}</h3>
            <Links links={project.links} />
        </div>
        <p>{project.description}</p>

      </div>
    </section>
  );
};

export default Project;
