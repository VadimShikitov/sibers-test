import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { contactsSelector } from '../../ducks/contacts/selectors';
import { ContactsTable } from '../../components/ContactsTable';

/**
 * A container for separating logic from a dumb component
 * @returns Component for view table
 */
export const ContactsTableContainer = () => {
  const history = useHistory();
  const contacts = useSelector(contactsSelector);

  const handleChangeRoute = useCallback(
    event => {
      const id = event.currentTarget.dataset.id;
      history.push(`/contacts/${id}`);
    },
    [history],
  );

  return (
    <ContactsTable contacts={contacts} handleChangeRoute={handleChangeRoute} />
  );
};
