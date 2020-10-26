import { createSelector } from 'reselect';

const contacts = state => state.contacts;
const contact = (state, id) => state.contacts[id];

/*Reselect for memoized selectors. */
export const contactsSelector = createSelector(contacts, contacts =>
  Object.values(contacts),
);

export const contactSelector = createSelector(contact, contact => contact);
