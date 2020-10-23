import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

/**
 * Component for show contacts table
 * @param contacts - all contacts data, for view table;
 */
export const ContactsTable = ({ contacts }) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableHead style={{ backgroundColor: '#D8E6FF' }}>
          <TableRow>
            <TableCell
              style={{ color: '#4F91FF', borderBottom: '#4F91FF 1px solid' }}
            >
              Full Name
            </TableCell>
            <TableCell
              style={{ color: '#4F91FF', borderBottom: '#4F91FF 1px solid' }}
            >
              Email
            </TableCell>
            <TableCell
              style={{ color: '#4F91FF', borderBottom: '#4F91FF 1px solid' }}
            >
              City
            </TableCell>
            <TableCell
              style={{ color: '#4F91FF', borderBottom: '#4F91FF 1px solid' }}
            >
              Phone
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: '#EBF2FF' }}>
          {contacts.map(({ name, email, address, phone, id }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{address.city}</TableCell>
              <TableCell>{phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
};
