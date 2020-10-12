import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';

class Header extends React.Component {
    static propTypes = {
      icon: PropTypes.func.isRequired,
    }
    static defaultProps = {
      icon: settings.header,
    }
      
    render() {
      const { icon } = this.props;
      return (
        <header className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Link className={styles.logo} to='/'>
                <Icon name={icon}/>
              </Link>
              <nav>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
                <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>            
              </nav>
            </div>
          </Container>
        </header>
      );
    }
}
export default Header;