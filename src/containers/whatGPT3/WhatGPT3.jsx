import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const   WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="¿Que oferecemos?" text="No Centro Rockefeller, trabalhamos para proporcionar uma educação linguística de excelência, utilizando métodos inovadores e tecnológicos para garantir a fluência e a compreensão cultural dos nossos alunos." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Confiança, Conforto e Segurança são os nossos pilares.</h1>
      <p>Nossos cursos</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Para crianças" text="No Centro Rockefeller, focamos nossa atenção nas necessidades individuais das crianças, criando um ambiente acolhedor e estimulante que promove a aprendizagem ativa e a autoconfiança." />
      <Feature title="Para jovens" text="No Centro Rockefeller, direcionamos nossa atenção aos jovens, oferecendo um ambiente dinâmico e envolvente que incentiva o pensamento crítico, a autonomia e a preparação para desafios futuros." />
      <Feature title="Adultos" text="No Centro Rockefeller, focamos nos adultos, proporcionando um aprendizado personalizado e flexível que se adapta às suas necessidades e horários, promovendo o desenvolvimento contínuo e a confiança no uso do novo idioma." />
    </div>
  </div>
);

export default WhatGPT3;
