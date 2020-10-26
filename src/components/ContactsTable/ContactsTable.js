import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableHead: {
    backgroundColor: '#D8E6FF',
  },
  mainTableRow: {
    '& > th': {
      color: '#4F91FF',
      borderBottom: '#4F91FF 1px solid',
    },
  },
  tableBody: {
    backgroundColor: '#EBF2FF',
  },
  contactRow: {
    cursor: 'pointer',
  },
});

const tableTheme = createMuiTheme({
  overrides: {
    MuiTableRow: {
      hover: {
        '&:hover': {
          backgroundColor: '#D8E6FF !important',
        },
      },
    },
  },
});

/**
 * Component for show contacts table
 * @param contacts - all contacts data, for view table;
 * @param handleChangeRoute - function for change route on sigle contact
 */
export const ContactsTable = ({ contacts, handleChangeRoute }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={tableTheme}>
      <TableContainer>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow className={classes.mainTableRow}>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {contacts.map(({ name, email, address, phone, id }) => (
              <TableRow
                key={id}
                data-id={id}
                hover
                className={classes.contactRow}
                onClick={handleChangeRoute}
              >
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{address.city}</TableCell>
                <TableCell>{phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

ContactsTable.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({
        streetA: PropTypes.string,
        streetB: PropTypes.string,
        streetC: PropTypes.string,
        streetD: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        country: PropTypes.string,
        zipcode: PropTypes.string,
      }),
      id: PropTypes.number,
      phone: PropTypes.string,
    }),
  ),
  handleChangeRoute: PropTypes.func,
};
