

// selectors
export const getCardsForColumns = ({cards, searchString}, columnId) => cards.filter(card  => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));

// action name creator
//const reducerName = 'CHANGE_SEARCH';

// action types

export const CHANGE_SEARCH = createAction_changeSearchString('CHANGE_SEARCH');
// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE_SEARCH });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CHANGE_SEARCH:
      return [action.payload];
    default:
      return state;
  }
}