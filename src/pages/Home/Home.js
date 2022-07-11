import "./Home.css";
import img from "../../assets/perfil2.png";
import reactGram from "../../assets/reactgram.png";
import miniBlog from "../../assets/miniblog.png";
import { TbDeviceLaptop } from "react-icons/tb";

const Home = () => {
  return (
    <div id="home">
      <h1>Software Developer</h1>
      <img src={img} alt="123" className="profile-pic" />
      <div className="home_container">
        <div className="description">
          <h2>Olá, me chamo Luiz!</h2>
          <p>
            Meu primeiro contato com programação foi quando eu tinha 17 anos,
            fui morar em outro estado pra fazer pre-vestibular, e meu colega de
            apartamento era medalhista da olimpiada brasileira de informatica, e
            vendo ele "codar" todo dia me chamou atenção e comecei a aprender
            com ele". Voltei pra minha cidade, parei de estudar depois de alguns
            anos tive contato novamente com um amigo que estuda e a paixão por
            programação renasceu em mim.
          </p>
          <p>
            Hoje tenho 22 anos, estou me formando em administração e passo a
            maior parte do meu dia estudando sobre programação e desenvolvendo
            alguns projetos
          </p>
        </div>
      </div>
      <div className="skils">
        <div className="skils-centered">
          <div className="skil">
            <TbDeviceLaptop className="icon" />
            <h2>Developer Skils</h2>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>React(react-router,redux,contentAPI)</li>
              <li>Banco de dados SQl / NoSQL</li>
              <li>C# (estudando atualmente)</li>
              <li>Go (estudando atualmente)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="recent-work">
        <h2 id="recent-work_title">Projetos recentes</h2>
        <div className="projetos">
          <div className="project">
            <a href="http://reactgram.devluizalbuquerque.com/">
              <img
                className="project-pic"
                src={reactGram}
                alt="Projeto react gram"
              />
            </a>
            <div className="project-description">
              <h2>ReactGram</h2>
              <p>
                Uma replica do instagram, com as funcionalidades de like e
                comentario em foto, edição de fotos já publicadas, edição de
                perfil,busca por titulo
              </p>
              <p>
                Tecnologias utilizadas front-end: css para estilização,
                JavaScripte sua biblioteca react(utilizando react-router para
                gerenciamento de estado e redux para gerenciamento de estado)
              </p>
              <p className="p">
                Tecnologias utilizadas back-end: Node.js e seu framework e banco
                de dados NoSql(MongoDb)
              </p>
              <a
                href="http://reactgram.devluizalbuquerque.com"
                className="project-btn"
              >
                Ver projeto
              </a>
            </div>
          </div>
          <div className="project">
            <a href="http://miniblog.devluizalbuquerque.com/">
              <img
                className="project-pic"
                src={miniBlog}
                alt="Projeto react gram"
              />
            </a>
            <div className="project-description">
              <h2>Mini Blog</h2>
              <p>
                Blog onde usuários podem fazer posts com um foto ilustrativa, um
                texto e hastags
              </p>
              <p className="p">
                Tecnologias utilizadas: css para estilização, JavaScripte sua
                biblioteca react(utilizando react-router para gerenciamento de
                estado e contextAPI para gerenciamento de estado) e firebase
                como banco de dados
              </p>
              <a
                href="http://miniblog.devluizalbuquerque.com"
                className="project-btn"
              >
                Ver projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
