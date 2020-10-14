
import shortid from 'shortid';

// selectors
//export const getCardsForColumns = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));
export const getCardsFromAllList = ({card, searchString}, columnId) => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title);

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARDS = createActionName('ADD_CARDS');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARDS });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARDS:
      return [...state, action.payload];
    default:
      return state;
  }
}