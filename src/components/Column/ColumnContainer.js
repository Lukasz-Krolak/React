import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumns} from '../../redux/cardsRedux.js';
import createActionAddCard from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  columns: getCardsForColumns(state, props.id),
});
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard ({
    listId: props.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(Column);