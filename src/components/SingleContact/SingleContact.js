import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { InfoAboutContact } from '../InfoAboutContact/InfoAboutContact';
import { ContactActions } from '../ContactActions/ContactActions';

const useStyles = makeStyles({
  root: {
    margin: '3em auto 1em',
    maxWidth: 650,
    display: 'flex',
  },
  cardActionArea: {
    width: 220,
  },
  cardContent: {
    padding: '16px 16px 0 16px',
    '&.MuiCardContent-root:last-child': {
      paddingBottom: 0,
    },
  },
});

/**
 * Component for view single contact, you can delete or edit with contact actions buttons
 * @param contact - contact object information, for contact card:)
 * @param deleteContactHandler - function for delete contact
 * @param handleOpenEditor - function to inverse state and showing editor
 * @returns Contact card with info and actions
 */
export const SingleContact = ({
  contact,
  deleteContactHandler,
  handleOpenEditor,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component='img'
        height='auto'
        image={contact.avatar}
        className={classes.cardActionArea}
      />
      <CardContent className={classes.cardContent}>
        <InfoAboutContact contact={contact} />
        <ContactActions
          id={contact.id}
          deleteContactHandler={deleteContactHandler}
          handleOpenEditor={handleOpenEditor}
        />
      </CardContent>
    </Card>
  );
};

SingleContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      country: PropTypes.string,
      state: PropTypes.string,
      city: PropTypes.string,
      streetA: PropTypes.string,
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string,
    }),
    id: PropTypes.number,
  }),
  deleteContactHandler: PropTypes.func,
  handleOpenEditor: PropTypes.func,
};
