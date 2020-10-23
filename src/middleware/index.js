import { INIT_APP } from '../ducks/app/types';
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
    // switch (action.type) {
    //   case ADD_BOOKMARK: {
    //     const { bookmarks, ids } = state.getState();
    //     const bookmarksCollection = Object.values(bookmarks);
    //     bookmarksCollection.push(action.data);
    //     window.localStorage.setItem(
    //       'bookmarks',
    //       JSON.stringify(bookmarksCollection),
    //     );
    //     window.localStorage.setItem(
    //       'ids',
    //       JSON.stringify([...ids, action.data.id]),
    //     );
    //     break;
    //   }
    //   case DELETE_BOOKMARK:
    //     {
    //       const { bookmarks, ids } = state.getState();
    //       const { [action.id]: deletedBookmark, ...newBookmarks } = bookmarks;
    //       const newIds = ids.filter((id: string) => id !== action.id);
    //       const bookmarksCollection = Object.values(newBookmarks);
    //       window.localStorage.setItem(
    //         'bookmarks',
    //         JSON.stringify(bookmarksCollection),
    //       );
    //       window.localStorage.setItem('ids', JSON.stringify(newIds));
    //     }
    //     break;
    //   case REMOVE_ALL_BOOKMARKS:
    //     window.localStorage.clear();
    //     break;
    //   default:
    //     break;
    // }
    switch (action.type) {
      case INIT_APP: {
        getContacts(state);
        break;
      }
      default:
        break;
    }
    next(action);
  }
};
