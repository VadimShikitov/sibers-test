import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  buttonsDiv: {
    marginTop: 15,
    marginBottom: 15,
  },
  editButton: {
    marginRight: 10,
  },
});

/**
 * Component for view action buttons. You can delete or edit contact
 * @param handleOpenEditor - function for show editor
 * @param deleteContactHandler - function for delete contact
 * @param id - contact id for set data-id on buttons
 * @returns two buttons for managing our redux state with dispatching actions
 */
export const ContactActions = React.memo(
  ({ handleOpenEditor, deleteContactHandler, id }) => {
    const classes = useStyles();

    return (
      <>
        <div className={classes.buttonsDiv}>
          <Button
            data-id={id}
            variant='outlined'
            color='primary'
            className={classes.editButton}
            onClick={handleOpenEditor}
          >
            Edit
          </Button>
          <Button
            data-id={id}
            variant='outlined'
            color='secondary'
            onClick={deleteContactHandler}
          >
            Delete
          </Button>
        </div>
      </>
    );
  },
);

ContactActions.displayName = 'ContactActions';

ContactActions.propTypes = {
  handleOpenEditor: PropTypes.func,
  deleteContactHandler: PropTypes.func,
  id: PropTypes.number,
};
