import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicite nossos serviços</h4>
      <h1 className="gradient__text">Entre em contato <br /> com nossa excelente equipe</h1>
      <p>Temos ainda a possibilidade de escolher as nossas aulas online em alguns níveis</p>
      <h4>As possibilidades estão além da sua imaginação.</h4>
    </div>
  </div>
);

export default Possibility;
