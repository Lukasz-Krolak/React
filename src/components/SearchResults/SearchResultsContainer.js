import {connect} from 'react-redux';
//import Search from './Search';
import {
  createAction_changeSearchString, //- wg tresci tu powinien być creator createActionName
} from '../../redux/searchStringRedux';
// eslint-disable-next-line no-unused-vars
import {getCardsFromAllList} from '../../redux/cardsRedux.js';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => ({
  cardsResults: getCardsFromAllList(state, props.match),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
