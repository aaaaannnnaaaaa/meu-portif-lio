import { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      icon: "🌞",
      title: "Amo dias de sol",
      description: "Tem algo nos dias de sol que me abraça por dentro. Gosto da forma como tudo brilha um pouco mais, como o vento parece dançar entre as árvores e o tempo desacelera só um pouquinho. É em dias assim que me sinto mais eu — com vontade de andar sem rumo, de sorrir sem motivo, de viver devagarinho. O sol me dá coragem, me acalma e me lembra que a vida, apesar de tudo, é bonita demais."
    },
    {
      icon: "📖",
      title: "Ler até esquecer do tempo",
      description: "Gosto de me perder nas páginas de um livro como quem encontra abrigo. Tem algo mágico em sentar num cantinho quieto, com uma história nas mãos e o mundo lá fora esquecendo da pressa. Às vezes, tudo o que eu preciso."

    },
    {
      icon: "🍳",
      title: "Cozinhar com o coração",
      description: "Tem dias em que cozinhar vira quase um ritual. Escolher os ingredientes com carinho, ouvir o som da panela, sentir os aromas tomando conta da casa... tudo isso me acalma. Gosto de transformar o simples em especial, de colocar um pouco de mim em cada detalhe. Cozinhar é uma forma de cuidar — dos outros, mas principalmente de mim. É presença, é afeto, é aconchego servido em pratos quentes."

    },
    {
      icon: "✈️",
      title: "Viajar e me perder pelo caminho",
      description: "Viajar, pra mim, é mais do que trocar de lugar — é trocar de olhar. É caminhar sem pressa por ruas desconhecidas, colecionar cheiros, sons e sorrisos de gente que nunca vi antes. Gosto de me perder em paisagens novas, de observar o mundo com olhos curiosos e coração aberto. Cada viagem me muda um pouquinho, me ensina silêncios e histórias que nenhum mapa mostra. É quando estou longe que, muitas vezes, mais me encontro."

    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  return (
    <section id='experience'>
      <h5>Alguns momentos especiais</h5>
      <h2>Minhas Pequenas Grandes Histórias</h2>

      <div className="carousel__wrapper">
        <button onClick={prevSlide} className="carousel__button carousel__button--prev">❮</button>

        <div className="personal__timeline">
          <div className="personal__event">
            <div className="event__dot"></div>
            <div className="event__content">
              <h4>{events[currentIndex].icon} {events[currentIndex].title}</h4>
              <p>{events[currentIndex].description}</p>
            </div>
          </div>
        </div>

        <button onClick={nextSlide} className="carousel__button carousel__button--next">❯</button>
      </div>
    </section>
  );
};

export default Experience;
