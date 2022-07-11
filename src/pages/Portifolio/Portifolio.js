import Project from "../../Components/Project";
import "./Portifolio.css";
import reactGram from "../../assets/reactgram.png";
import miniBlog from "../../assets/miniblog.png";
const reactGramLink = "http://reactgram.devluizalbuquerque.com/";
const miniBlogLink = "http://miniblog.devluizalbuquerque.com/";
const p2ReactGram =
  "JavaScript, React, Redux, React-router, Node.js, Express, mongoDb ";
const p1ReactGram =
  "Clone do instagram com a maioria de sua fincionalidades, como: Postagem de foto com descrição, edição de foto postada, like em fotos, comentarios em fotos, busca por titulo";
const p1MiniBlog =
  "Blog onde usuários podem fazer posts com fotos ilustrativas, textos e hashtags.";
const p2MiniBlog = "JavaScript, React, ContextAPI, React-router, Firebase ";

const Portifolio = () => {
  return (
    <div id="portifolio">
      <h2 className="title">Portifólio</h2>
      <Project
        img={reactGram}
        title="ReactGram"
        link={reactGramLink}
        p1={p1ReactGram}
        p2={p2ReactGram}
      />
      <Project
        img={miniBlog}
        title="MiniBlog"
        link={miniBlogLink}
        p1={p1MiniBlog}
        p2={p2MiniBlog}
      />
    </div>
  );
};

export default Portifolio;
