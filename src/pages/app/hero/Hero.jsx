import React from 'react';
import style from './Hero.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

library.add(faLaptopCode);


function Hero() {
  return (
    <header>
      <section className={style.logo_wrapper}>
      <FontAwesomeIcon icon="laptop-code" className={` ${style.logo} fa-10x`} beat />
      </section>
      <section className={style.content}>
        <h4>Are you ready to learn?</h4>
        <h1>E-Learning</h1>
        <p>
          An Interactive platform to Learn all the Industry Level Concepts. All in one place!!
        </p>
      </section>
    </header>
  );
}

export default Hero;
