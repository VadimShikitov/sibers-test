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
    case EDIT_CONTACT: {
      const { contacts } = state;
      const { [action.id]: editedContact } = contacts;
      return {
        ...state,
        contacts: {
          ...state.contacts,
          [action.id]: {
            ...editedContact,
            username: action.data.username,
            email: action.data.email,
            phone: action.data.phone,
            website: action.data.website,
            company: {
              ...editedContact.company,
              name: action.data.company,
            },
          },
        },
      };
    }

    case DELETE_CONTACT: {
      const { contacts, ids } = state;
      const newIds = ids.filter(id => id !== action.id);
      const { [action.id]: deletedContact, ...otherContacts } = contacts;
      return {
        contacts: otherContacts,
        ids: newIds,
      };
    }
    default:
      return state;
  }
};
