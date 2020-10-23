import { DELETE_CONTACT, EDIT_CONTACT, GET_ALL_CONTACTS } from '../types';

const initialState = {
  contacts: {},
  ids: [],
};

export const ContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTACTS: {
      const contacts = action.data.reduce((acc, contact) => {
        acc[contact.id] = contact;
        return acc;
      }, {});

      const ids = action.data.map(contact => contact.id);

      return {
        contacts,
        ids: ids,
      };
    }
    case EDIT_CONTACT:
      return {
        ...state,
        [action.data.id]: action.data,
      };
    case DELETE_CONTACT: {
      const { constacts, ids } = state;
      const newIds = ids.filter(id => id !== action.id);
      const { [action.id]: deletedContact, otherContacts } = constacts;
      return {
        contacts: otherContacts,
        ids: newIds,
      };
    }
    default:
      return state;
  }
};
