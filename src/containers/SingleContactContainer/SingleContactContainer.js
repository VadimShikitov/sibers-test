import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { deleteContact, editContact } from '../../ducks/contacts/actions';
import { contactSelector } from '../../ducks/contacts/selectors';
import { SingleContact } from '../../components/SingleContact';
import { EditContactComponent } from '../../components/EditContact/EditContactComponent';

/**
 * Container for view single contact and storing business logic
 * @returns compoennts for view single contact
 */
export const SingleContactContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector(state => contactSelector(state, id));
  const [contactEditInfo, setContactEditInfo] = useState(null);
  const [isOpenEditor, setIsOpenEditor] = useState(false);

  const handleOpenEditor = useCallback(() => setIsOpenEditor(true), []);
  const handleCloseEditor = useCallback(() => setIsOpenEditor(false), []);

  const handleChangeContactInfo = useCallback(({ target: { name, value } }) => {
    setContactEditInfo(state => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleEditContact = useCallback(
    event => {
      const id = event.currentTarget.dataset.id;
      dispatch(editContact(contactEditInfo, id));
      setIsOpenEditor(false);
    },
    [contactEditInfo, dispatch],
  );

  const deleteContactHandler = useCallback(
    event => {
      const id = event.currentTarget.dataset.id;
      dispatch(deleteContact(id));
      history.push('/contacts');
    },
    [dispatch, history],
  );

  useEffect(() => {
    if (contact) {
      setContactEditInfo({
        username: contact.username,
        email: contact.email,
        phone: contact.phone,
        website: contact.website,
        company: contact.company.name,
      });
    }
  }, [contact]);

  return (
    <>
      {contact && (
        <>
          <SingleContact
            contact={contact}
            deleteContactHandler={deleteContactHandler}
            handleOpenEditor={handleOpenEditor}
          />
          {contactEditInfo && (
            <EditContactComponent
              handleEditContact={handleEditContact}
              id={contact.id}
              handleChangeContactInfo={handleChangeContactInfo}
              contact={contactEditInfo}
              isOpenEditor={isOpenEditor}
              handleCloseEditor={handleCloseEditor}
            />
          )}
        </>
      )}
    </>
  );
};
