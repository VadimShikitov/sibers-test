import React from 'react';
import { useSelector } from 'react-redux';
import { contactsSelector } from '../../ducks/contacts/selectors';
import { ContactsTable } from '../../components/ContactsTable';

/**
 * A container for separating logic from a dumb component
 * @returns Component for view table
 */
export const ContactsTableContainer = () => {
  const contacts = useSelector(contactsSelector);
  return <ContactsTable contacts={contacts} />;
};
