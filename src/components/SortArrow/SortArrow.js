import React from 'react';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

/**
 * Component for render arrow
 * @param direction - direction sort from change arrow direction
 * @param sortTableByName - function for sorting table by name
 * @returns Arrow componet, whos change direction and sorting table
 */
export const SortArrow = React.memo(({ direction, sortTableByName }) => {
  return direction === 'desc' ? (
    <ArrowUpwardIcon fontSize='small' onClick={sortTableByName} />
  ) : (
    <ArrowDownwardIcon fontSize='small' onClick={sortTableByName} />
  );
});

SortArrow.displayName = 'SortArrow';

SortArrow.propTypes = {
  direction: PropTypes.string,
  sortTableByName: PropTypes.func,
};
