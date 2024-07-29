import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'INSIGHT',
    text: 'Com o nosso primeiro livro você consegue se comunicar de maneira simples, usando frases em inglês básica e expressões familiares, podendo se apresentar e apresentar outras pessoas, responder e elaborar perguntas.',
  },
  {
    title: 'CONNECTION',
    text: 'É capaz de comunicar-se em tarefas simples e de rotina que requerem uma troca simples e direta de informações sobre assuntos familiares e de rotina.',
  },
  {
    title: 'OVERCOME',
    text: 'Consegue interagir com um grau de fluência e espontaneidade que possibilita a interação normal com falantes nativos sem que haja tensão para nenhuma das partes.',
  },
  {
    title: 'IMPULSE',
    text: 'Pode compreender os pontos principais de comunicação clara e padrão. Consegue lidar com a maioria das situações que podem surgir durante uma viagem a um local no qual a língua é falada.',
  },
  {
    title: 'MASTER',
    text: 'Consegue interagir com um grau de fluência e espontaneidade que possibilita a interação normal com falantes nativos sem que haja tensão para nenhuma das partes.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Nosso ensino inclui cinco bibliografias fundamentais</h1>
      <p>e nossa equipe de professores é maravilhosa</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
