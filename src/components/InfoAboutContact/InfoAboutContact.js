import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Component for view info about single contact
 * @param name - contact full name
 * @param username - contact username
 * @param email - contact email
 * @param address - contact address (street, state, country)
 * @param phone - contact phone
 * @param website - contact website
 * @param company - contact company
 * @returns All text information about the contact
 */
export const InfoAboutContact = React.memo(({ contact }) => {
  const { name, username, email, address, phone, website, company } = contact;

  return (
    <>
      <Typography gutterBottom variant='h5' component='h2'>
        {name}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        Username: {username}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        Email: {email}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        Address: {address.country}, {address.state}, {address.city},{' '}
        {address.streetA}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        Phone: {phone}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        Website: {website}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        Company: {company.name}
      </Typography>
    </>
  );
});

InfoAboutContact.displayName = 'InfoAboutContact';

InfoAboutContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
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
  }),
};
