import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ContactsReducer } from '../ducks/contacts/reducer';
import { localstorage } from '../middleware';

export const store = createStore(
  ContactsReducer,
  composeWithDevTools(applyMiddleware(localstorage)),
);
