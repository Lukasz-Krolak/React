import React from 'react';
import styles from './Faq.scss';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';

class Faq extends React.Component {

    static propTypes = {
      title: PropTypes.node,
      imageHero: PropTypes.string,
    }

    render() {
      //const { title} = this.props;
      return (
        <Faq className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Hero>
                <h1>ddjdfgjfdhhfd</h1>
                <img src='https://pixabay.com/images/id-931706/'/>
              </Hero>
              <p>Lorem ipsum</p>
            </div>
          </Container>
        </Faq>
      );
    }
}
export default Faq;