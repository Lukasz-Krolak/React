import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    columns: PropTypes.array,
    image: PropTypes.string,
    addColumn: PropTypes.func,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Container/>
        <Hero titleText={title} imageHero={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div>
      </section>
    );
  }
}
export default List;