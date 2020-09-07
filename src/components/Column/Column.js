import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    Icon: PropTypes.string,
  }
  state = {
    cards: this.props.cards,
  };
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}<span icon={styles.icon}>{this.props.Icon}</span></h3>
      </section>
    )
  }
}

export default Column;