import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
//import {pageContents} from '../data/dataStore.js';
import PropTypes from 'prop-types';


class Info extends React.Component {
    static pageContents = {
      title: PropTypes.string.isRequired,
      image: PropTypes.string,

    }
    render() {
      const {title, image} = this.pageContents;
      return (
        <Container>
          <h2>Info</h2>
          <Hero titleText={title} imageHero={image}/>
        </Container>
      );
    }
}

    
export default Info;