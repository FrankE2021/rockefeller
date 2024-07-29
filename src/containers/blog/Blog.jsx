import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Há muita coisa acontecendo, <br /> e estamos blogando sobre isso:</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jun 12, 2024" text="Aprender um idioma é como abrir uma janela para o mundo, permitindo que novas culturas e oportunidades entrem em sua vida." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jun 12, 2024" text="Aprender um idioma é como abrir uma janela para o mundo, permitindo que novas culturas e oportunidades entrem em sua vida." />
        <Article imgUrl={blog03} date="Jun 12, 2024" text="Aprender um idioma é como abrir uma janela para o mundo, permitindo que novas culturas e oportunidades entrem em sua vida." />
        <Article imgUrl={blog04} date="Jun 12, 2024" text="Aprender um idioma é como abrir uma janela para o mundo, permitindo que novas culturas e oportunidades entrem em sua vida." />
        <Article imgUrl={blog05} date="Jun 12, 2024" text="Aprender um idioma é como abrir uma janela para o mundo, permitindo que novas culturas e oportunidades entrem em sua vida." />
      </div>
    </div>
  </div>
);

export default Blog;
