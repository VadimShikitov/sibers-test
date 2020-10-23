import { DELETE_CONTACT, EDIT_CONTACT, GET_ALL_CONTACTS } from '../types';

export const getAllContacts = data => ({
  type: GET_ALL_CONTACTS,
  data,
});

export const editContact = data => ({
  type: EDIT_CONTACT,
  data,
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  id,
});
