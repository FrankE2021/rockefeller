import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">" INGLÊS RÁPIDO E MODERNO com excelência em conversação "</h1>
      <p>Na escola de idiomas do Centro Rockefeller, aplicamos princípios fundamentais para garantir uma educação de qualidade e moderna. Nosso ensino é baseado na imersão total, proporcionando aos alunos um ambiente onde eles podem praticar e utilizar o idioma de forma natural e contínua. Além disso, valorizamos o uso da tecnologia como ferramenta de apoio, utilizando recursos multimídia interativos que facilitam o aprendizado e o tornam mais dinâmico. A educação moderna, para nós, está alicerçada em três pilares: a personalização do ensino, atendendo às necessidades individuais de cada aluno; a interculturalidade, promovendo o conhecimento e o respeito por diferentes culturas; e o desenvolvimento de competências globais, preparando nossos estudantes para os desafios de um mundo cada vez mais conectado.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="E-mail" />
        <button type="button">Comece</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Mais de 12k pessoas já fazem parte desta comunidade</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
