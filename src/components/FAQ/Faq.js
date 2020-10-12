import React from 'react';
import styles from './Faq.scss';
import Container from '../Container/Container';
//import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';
import {faqContent} from '../../data/dataStore';

class Faq extends React.Component {

    static faqContent = {
      title: faqContent.node,
      image: faqContent.string,
    }

    render() {
      const { title, image, text } = this.faqContent;
      return (
        <section className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Hero titleText={title} imageHero={image}>
                <h1>{title}</h1>
                <img src={image}/>
                <h3>{text}</h3>
              </Hero>
              <p>Lorem ipsum</p>
            </div>
          </Container>
        </section>
      );
    }
}
export default Faq;