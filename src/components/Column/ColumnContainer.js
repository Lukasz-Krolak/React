import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForList = ({cards}, cardId) => cards.filter(card => card.cardId == cardId);
const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});


export default connect(mapStateToProps)(Column);