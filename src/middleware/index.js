import { INIT_APP } from '../ducks/app/types';
import { DELETE_CONTACT, EDIT_CONTACT } from '../ducks/contacts/types';
import { getAllContacts } from '../ducks/contacts/actions';

/*async function for requesting data from the backend. 
 Initially checks if there is data in the locastorage, if not, makes a reques
*/
const getContacts = async state => {
  const contacts = JSON.parse(window.localStorage.getItem('contacts'));

  if (!contacts) {
    const response = await fetch('http://demo.sibers.com/users');
    const contacts = await response.json();
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    state.dispatch(getAllContacts(contacts));
    return;
  }

  state.dispatch(getAllContacts(contacts));
  return;
};

/*Custom middleware for initializing the application, requesting and working with localstrage
  I could connect redux-saga, but for the sake of one I didn't want to :)
*/
export const localstorage = state => next => action => {
  if (action) {
    switch (action.type) {
      case INIT_APP: {
        getContacts(state);
        break;
      }
      case EDIT_CONTACT: {
        const { contacts } = state.getState();
        const { [action.id]: editedContact } = contacts;
        const newContacts = {
          ...contacts,
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
        };

        const contactsCollection = Object.values(newContacts);
        window.localStorage.setItem(
          'contacts',
          JSON.stringify(contactsCollection),
        );
        break;
      }
      case DELETE_CONTACT:
        {
          const { contacts, ids } = state.getState();
          const { [action.id]: deletedContacts, ...newContacts } = contacts;
          const newIds = ids.filter(id => id !== action.id);
          const contactsCollection = Object.values(newContacts);
          window.localStorage.setItem(
            'contacts',
            JSON.stringify(contactsCollection),
          );
          window.localStorage.setItem('ids', JSON.stringify(newIds));
        }
        break;
      default:
        break;
    }
    next(action);
  }
};
