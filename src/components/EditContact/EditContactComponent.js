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

export const EditContactComponent = ({
  contact,
  isOpenEditor,
  handleCloseEditor,
}) => {
  const { username, email, website, phone, company } = contact;
  const classes = useStyles();

  return (
    <>
      <Fade in={isOpenEditor} timeout={1000}>
        <div className={classes.root}>
          <TextField
            id='outlined-helperText'
            label='Username'
            fullWidth
            defaultValue={username}
            variant='outlined'
            className={classes.input}
          />
          <TextField
            id='outlined-helperText'
            label='Email'
            fullWidth
            defaultValue={email}
            variant='outlined'
            className={classes.input}
          />
          <TextField
            id='outlined-helperText'
            label='Phone'
            fullWidth
            defaultValue={phone}
            variant='outlined'
            className={classes.input}
          />
          <TextField
            id='outlined-helperText'
            label='Website'
            fullWidth
            defaultValue={website}
            variant='outlined'
            className={classes.input}
          />
          <TextField
            id='outlined-helperText'
            label='Company'
            fullWidth
            defaultValue={company.name}
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
            <Button variant='outlined' color='primary'>
              Save
            </Button>
          </div>
        </div>
      </Fade>
    </>
  );
};

EditContactComponent.propTypes = {
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
  isOpenEditor: PropTypes.bool,
  handleCloseEditor: PropTypes.func,
};
