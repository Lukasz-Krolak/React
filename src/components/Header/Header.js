import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';
//import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class Header extends React.Component {

      
  render() {
    const { icon } = settings.header;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={icon}/>
            </Link>
            <Search/>
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
