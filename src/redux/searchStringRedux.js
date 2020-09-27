import shortid from 'shortid';
// selectors
export const getSearchString = ({searchString}) => searchString;
// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;
// search cards
export const countAllCards = ({cards}) => cards.length;

export const countVisibleCards = ({cards}, searchString) => 
  cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// actions types
export const ADD_SEARCH = createActionName('ADD_SEARCH  ');

// action creators
export const createActionAddSearchString = payload => 
  ({ payload: { ...payload, id: shortid.generate() }, type: ADD_SEARCH });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

