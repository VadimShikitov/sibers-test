import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { deleteContact } from '../../ducks/contacts/actions';
import { contactSelector } from '../../ducks/contacts/selectors';
import { SingleContact } from '../../components/SingleContact';
import { EditContactComponent } from '../../components/EditContact/EditContactComponent';

export const SingleContactContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector(state => contactSelector(state, id));

  const [isOpenEditor, setIsOpenEditor] = useState(false);

  const handleOpenEditor = useCallback(() => setIsOpenEditor(true), []);
  const handleCloseEditor = useCallback(() => setIsOpenEditor(false), []);

  const deleteContactHandler = useCallback(
    event => {
      const id = event.currentTarget.dataset.id;
      dispatch(deleteContact(id));
      history.push('/contacts');
    },
    [dispatch, history],
  );

  return (
    <>
      {contact && (
        <>
          <SingleContact
            contact={contact}
            deleteContactHandler={deleteContactHandler}
            handleOpenEditor={handleOpenEditor}
          />
          <EditContactComponent
            contact={contact}
            isOpenEditor={isOpenEditor}
            handleCloseEditor={handleCloseEditor}
          />
        </>
      )}
    </>
  );
};
