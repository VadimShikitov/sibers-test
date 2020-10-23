import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { CONTACTS } from '../constants/routes';
import { ContactsTable } from '../components/ContactsTable';

/**
 * Component for managing application routes
 * @returns Component display depending on route
 */
export const Routes = () => (
  <>
    <CssBaseline />
    <Switch>
      <Route path={CONTACTS} exact component={ContactsTable} />
    </Switch>
  </>
);
