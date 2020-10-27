import React from 'react';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 650,
    margin: '3em auto 2em',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 50,
  },
  cancelButton: {
    marginRight: 50,
  },
});

/**
 * Component for edit contact
 * @param contact - contact object for change default values to inputs
 * @param id - contatc id for set data-id
 * @param isOpenEditor - boolean for check need view this component or not
 * @param handleCloseEditor - function for close editor (change isOpenEditor state)
 * @param handleChangeContactInfo - function for managin state by inputs
 * @param handleEditContact - function for dispatch action and edit contact
 * @returns editor card, for change state values and dispath action
 */
export const EditContactComponent = React.memo(
  ({
    contact,
    id,
    isOpenEditor,
    handleCloseEditor,
    handleChangeContactInfo,
    handleEditContact,
  }) => {
    const { username, email, website, phone, company } = contact;
    const classes = useStyles();

    return (
      <>
        <Fade in={isOpenEditor} timeout={1000}>
          <div className={classes.root}>
            <TextField
              label='Username'
              onChange={handleChangeContactInfo}
              fullWidth
              name='username'
              defaultValue={username}
              variant='outlined'
              className={classes.input}
            />
            <TextField
              label='Email'
              onChange={handleChangeContactInfo}
              fullWidth
              name='email'
              defaultValue={email}
              variant='outlined'
              className={classes.input}
            />
            <TextField
              label='Phone'
              onChange={handleChangeContactInfo}
              fullWidth
              name='phone'
              defaultValue={phone}
              variant='outlined'
              className={classes.input}
            />
            <TextField
              label='Website'
              onChange={handleChangeContactInfo}
              fullWidth
              name='website'
              defaultValue={website}
              variant='outlined'
              className={classes.input}
            />
            <TextField
              label='Company'
              onChange={handleChangeContactInfo}
              fullWidth
              name='company'
              defaultValue={company}
              variant='outlined'
              className={classes.input}
            />
            <div>
              <Button
                variant='outlined'
                color='secondary'
                className={classes.cancelButton}
                onClick={handleCloseEditor}
              >
                Cancel
              </Button>
              <Button
                data-id={id}
                onClick={handleEditContact}
                variant='outlined'
                color='primary'
              >
                Save
              </Button>
            </div>
          </div>
        </Fade>
      </>
    );
  },
);

EditContactComponent.displayName = 'EditContactComponent';

EditContactComponent.propTypes = {
  contact: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.string,
  }),
  id: PropTypes.number,
  isOpenEditor: PropTypes.bool,
  handleCloseEditor: PropTypes.func,
  handleChangeContactInfo: PropTypes.func,
  handleEditContact: PropTypes.func,
};
