import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import {infoContent} from '../../data/dataStore.js';



class Info extends React.Component {
    static infoContent = {
      title: infoContent.string,
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