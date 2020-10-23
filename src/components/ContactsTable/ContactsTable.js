import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

/**
 * Component for show contacts table
 */
export const ContactsTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>VadimShikitov</TableCell>
            <TableCell>@mail.ru</TableCell>
            <TableCell>Berdsk</TableCell>
            <TableCell>12312321313213</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
