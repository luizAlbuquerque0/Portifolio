import "./Project.css";

const Project = ({ title, img, p1, p2, link }) => {
  return (
    <div id="project">
      <img src={img} alt={title} />
      <div id="project-descripiton">
        <h2>{title}</h2>
        <p>{p1}</p>
        <p className="tecs">Tecnologias utilizadas: {p2}</p>
        <a href={link} className="project-btn">
          Visitar projeto
        </a>
      </div>
    </div>
  );
};

export default Project;
