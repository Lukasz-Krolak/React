import React from 'react';
import PropTypes from 'prop-types';
import {listData} from '../../data/dataStore';

  <Icon this></Icon>

const Icon = props => (
    <i className={`fas fa-${props.name}`}></i>

)
Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
