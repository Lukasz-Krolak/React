import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';

class Container extends React.Component {

    static propTypes = {
      children: PropTypes.node,
    }

    render() {
      const { Children } = require('react');
      return(
        <main>
          <div className={styles.component}>
            <Children></Children>

          </div>
        </main>
      );
    }
}
export default Container;