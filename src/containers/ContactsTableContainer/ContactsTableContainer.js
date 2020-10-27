import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { contactsSelector } from '../../ducks/contacts/selectors';
import { ContactsTable } from '../../components/ContactsTable';
import { Paper, TextField } from '@material-ui/core';

//Function for filtering contacts
const getVisibleContacts = (searchString, contacts) => {
  if (!searchString) {
    return contacts;
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchString.toLowerCase()),
  );
};

/**
 * A container for separating logic from a dumb component
 * @returns Component for view table
 */
export const ContactsTableContainer = () => {
  const history = useHistory();
  const contacts = useSelector(contactsSelector);
  const [allContacts, setAllContacts] = useState([]);
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchString, setSearchString] = useState('');

  const handleChangeRoute = useCallback(
    event => {
      const id = event.currentTarget.dataset.id;
      history.push(`/contacts/${id}`);
    },
    [history],
  );

  const onChangeSearchStringHandler = useCallback(({ target: { value } }) => {
    setSearchString(value);
  }, []);

  const visibleContacts = useMemo(
    () => getVisibleContacts(searchString, allContacts),
    [allContacts, searchString],
  );

  const sortTableByName = useCallback(() => {
    const sortedTable = allContacts.sort((a, b) =>
      sortDirection === 'asc'
        ? a['name'].localeCompare(b['name'])
        : b['name'].localeCompare(a['name']),
    );
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';

    setAllContacts(sortedTable);
    setSortDirection(direction);
  }, [allContacts, sortDirection]);

  useEffect(() => {
    if (contacts) {
      setAllContacts(contacts);
    }
  }, [contacts]);

  return (
    <Paper style={{ padding: 15, backgroundColor: '#D8E6FF' }}>
      <TextField
        variant='outlined'
        size='small'
        label='search by name'
        name='searchString'
        defaultValue={searchString}
        onChange={onChangeSearchStringHandler}
      />
      <ContactsTable
        contacts={visibleContacts}
        sortDirection={sortDirection}
        sortTableByName={sortTableByName}
        handleChangeRoute={handleChangeRoute}
      />
    </Paper>
  );
};
