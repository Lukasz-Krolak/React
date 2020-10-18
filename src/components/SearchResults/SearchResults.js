import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

class SearchResults extends React.Component {
    static propTypes = {
      cards: PropTypes.array.isRequired,
    }
    render () {
      const {cards} = this.props;
      return (
        <section className={styles.component}>
          <div className={styles.cards}>
            {cards.map(cardsResults => (
              <Card key={cardsResults.id} {...cardsResults} />
            ))}
          </div>
        </section>
      );
    }
}

export default SearchResults;