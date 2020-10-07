import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';

class Container extends React.Component {

    static propTypes = {
      children: PropTypes.node,
    }

    render() {
      const { children } = this.props;
      return(
        <main>
          <div className={styles.component}>
            {children}

          </div>
        </main>
      );
    }
}
export default Container;