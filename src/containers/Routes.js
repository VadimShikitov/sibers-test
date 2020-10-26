import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { CONTACTS, MAIN, SINGLE_CONTACT } from '../constants/routes';
import { ContactsTableContainer } from '../containers/ContactsTableContainer';
import { SingleContactContainer } from '../containers/SingleContactContainer';

/**
 * Component for managing application routes
 * @returns Component display depending on route
 */
export const Routes = () => (
  <>
    <CssBaseline />
    <Switch>
      <Route path={CONTACTS} exact component={ContactsTableContainer} />
      <Route path={SINGLE_CONTACT} exact component={SingleContactContainer} />
      <Redirect from={MAIN} to={CONTACTS} />
    </Switch>
  </>
);
