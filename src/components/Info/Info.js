import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {infoContent} from '../../data/dataStore';
//import PropTypes from 'prop-types';


class Info extends React.Component {
    static infoContent = {
      title: infoContent.string.isRequired,
      image: infoContent.string,
      text: infoContent.string,

    }
    render() {
      const {title, image, text} = infoContent;
      return (
        <Container>
          <h2>Info</h2>
          <Hero titleText={title} imageHero={image} text={text}/>

        </Container>
      );
    }
}

    
export default Info;