import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';


class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"/>
        <h2 className={styles.title}>Things to do</h2>
      </header>
    )
  }
}

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageHero: PropTypes.node.isRequired,
};
export default Hero;