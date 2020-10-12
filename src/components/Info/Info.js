import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { infoContent } from '../../data/dataStore.js';



class Info extends React.Component {
    static infoContent = {
      title: infoContent.node,
      image: infoContent.string,
      text: infoContent.string,

    }
    render() {
      const {title, image } = infoContent;
      return (
        <Container>
          <Hero titleText={title} imageHero={image}>
            <h1>{title}</h1>
            <img src={image}/>
          </Hero>
          <p>Pies, może i pies
                Ponury jak deszcz - dingo
                Rudy ma łeb
                Nie głaszcze więc też nikt go
                Może, kto wie
                Przebywa w tym psie
                Lord Mayor George Eleven - he?
                Chart, wyżeł, szpic i bernardyn
                Ach, mają smycz i kokardy
                A on nic, a on nic, a on nic, a on nie</p>
        </Container>
      );
    }
}

    
export default Info;