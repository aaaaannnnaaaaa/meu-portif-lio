import './about.css';
import Imagem from '../assets/perfil.png';

const About = () => {
  return (
    <section id="about" className="about">
      <h1>Ana Caroline Mêna</h1>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* Imagem de perfil */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={Imagem} alt="Ana Caroline Mêna" />
          </div>
        </div>

        {/* Conteúdo "Sobre Mim" */}
        <div className="about__content">
          <div className="paleta">
            <h5>paleta de cores</h5>
          </div>

          <div className="about__cards">
            <article className="about__card1">
              <h5>Verde</h5>
              <small>Me lembra a paz da natureza</small>
            </article>

            <article className="about__card2">
              <h5>Preto</h5>
              <small>Elegante e misterioso</small>
            </article>

            <article className="about__card3">
              <h5>Roxo Escuro</h5>
              <small>Elegante e misterioso</small>
            </article>
          </div>

          <p>
            Descobri um mundo novo com a programação e, mesmo com as dificuldades, sempre tentei entender e seguir em frente.
            Descobri que consigo aprender, mesmo quando seja complicado.
            Mas, apesar de tudo isso, percebi que não é nessa área que quero seguir.
            Meu interesse mesmo é na área de ciências, onde me sinto mais curiosa e à vontade.
            Ainda assim, tudo o que aprendi com código vai comigo, porque me ajudou a ver as coisas de outro jeito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;