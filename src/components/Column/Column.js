import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }
  state = {
    cards: this.props.cards,
  };
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon}>
            </Icon>
          </span>
        </h3>
      </section>
    )
  }
}

export default Column;