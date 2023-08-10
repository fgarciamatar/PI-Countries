import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.about}>
        <h1>ABOUT</h1>
      </div>
      <p>
        Esta página web es un Proyecto Individual para el bootcamp de SoyHenry.
        En este sitio puede encontrar información sobre todos los países del
        mundo, y las actividades turísticas que pueden realizarse alli.
      </p>
      <span> Las funcionalidades de esta pagina web son: </span>
      <div className={style.funcionalidades}>
      <ul>
        <li> Mostrar información sobre países en la página de inicio.</li>
        <li>Filtrar los paises por nombre, alfabéticamente, etc.</li>
        <li> Buscar un pais por ID o Nombre.</li>
        <li>Mostrar detalles sobre cada país.</li>
        <li>
          Crear actividades turísticas que puedes realizar en uno o más países a
          través de un formulario y almacena la información en una base de datos
        </li>
      </ul>
      </div>
     
      <span>Tecnologías Utlizadas:</span>
      <div className={style.tec}>
        <img
          src={"./../../../imagenes/tecnologias/html-5.png"}
          alt="HTML LOGO"
        />
        <img src={"./../../../imagenes/tecnologias/css-3.png"} alt="CSS Logo" />
        <img
          src={"./../../../imagenes/tecnologias/atom.png"}
          alt="React Logo"
        />
        <img
          src={"./../../../imagenes/tecnologias/redux.png"}
          alt="Redux Logo"
        />
        <img
          src={"./../../../imagenes/tecnologias/node.png"}
          alt="NodeJs Logo"
        />
        <img
          src={"./../../../imagenes/tecnologias/express.png"}
          alt="ExpressJs Logo"
        />
        <img
          src={"./../../../imagenes/tecnologias/sequelize.png"}
          alt="Sequelize Logo"
        />
        <img
          src={"./../../../imagenes/tecnologias/postgreSQL.png"}
          alt="PostgreSql Logo"
        />
      </div>
      <h1>Sobre Mi:</h1>
      <span>
        Hola! Soy Francisco Garcia Matar ,estudiante de Ing. en Sistemas y de Henry , soy un aspanasionado
        por el codigo , tengo como objetivo convertirme en desarrollador
        FullStack. Espero que te haya gustado mi proyecto.
      </span>
      <div className={style.imgContainer}>
        <a href="https://github.com/fgarciamatar">
          <img
            src={"./../../../imagenes/tecnologias/github.png"}
            alt="Github Logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/francisco-garc%C3%ADa-matar-085467264/">
          <img
            src={"./../../../imagenes/tecnologias/linkedin.png"}
            alt="linkedin Logo"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
