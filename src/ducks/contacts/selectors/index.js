import { createSelector } from 'reselect';

const contacts = state => state.contacts;

/*Reselect for memoized selectors. */
export const contactsSelector = createSelector(contacts, contacts =>
  Object.values(contacts),
);
