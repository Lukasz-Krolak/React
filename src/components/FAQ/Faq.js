import React from 'react';
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
      const { title, image, text } = faqContent;
      return (
        <section>
          <Container>
            <div>
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