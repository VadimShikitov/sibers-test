import { createSelector } from 'reselect';

const contacts = state => state.contacts;
export const contactSelector = (state, id) => state.contacts[id];

/*Reselect for memoized selectors. */
export const contactsSelector = createSelector(contacts, contacts =>
  Object.values(contacts).sort((a, b) => a.name.localeCompare(b.name)),
);
