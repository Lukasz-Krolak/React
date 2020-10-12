import React from 'react';
import styles from './Faq.scss';
import Container from '../Container/Container';
//import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';
import {pageContents} from '../data/dataStore.js';

class Faq extends React.Component {

    static pageContents = {
      title: pageContents.node,
      image: pageContents.string,
    }

    render() {
      const { title, image } = this.pageContents;
      return (
        <section className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Hero titleText={title} imageHero={image}>
                <h1>{title}</h1>
                <img src={image}/>
              </Hero>
              <p>Lorem ipsum</p>
            </div>
          </Container>
        </section>
      );
    }
}
export default Faq;