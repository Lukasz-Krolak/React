import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { faqContent } from '../../data/dataStore.js';

class Faq extends React.Component {

  render() {
    const { title, image } = faqContent;
    return (
      <section>
        <Container>
          <div>
            <Hero titleText={title} imageHero={image}/>
            <p>PIES DINGO Pies nie pies
                    Pies, mówią, że pies
                    Nerwowy jak pies - dingo
                    Prawie że lis
                    A rudy jak lew - dingo
                    Dziwny to pies
                    A może to jest
                    Lord Mayor George Eleven - yes!</p>
          </div>
        </Container>
      </section>
    );
  }
}
export default Faq;