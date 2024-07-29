import React from 'react';
import footerLogo from '../../eurekae.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Você quer entrar no futuro antes dos outros</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicite acesso antecipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={footerLogo} alt="gpt3_logo" />
        <p>EUREKAE <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Mídia social</p>
        <p>Contadores</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Empresa</h4>
        <p>Termos e Condições</p>
        <p>Política de Privacidade</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Entrar em contato</h4>
        <p>EUREKAE</p>
        <p>85-987919687</p>
        <p>ernestinversion@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 EUREKAE®. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
