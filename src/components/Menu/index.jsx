import React from 'react';
import PropTypes from 'prop-types';
import InfoItem from './components/MenuItem';

const EmptyState = () => <div>No data found!</div>;

const Menu = ({ data, colName, ...rest }) => {
  if (!data.length) {
    return <EmptyState />;
  }

  return (
    <div {...rest}>
      {data.map((item, index) => (
        <InfoItem key={index} item={item} colName={colName} />
      ))}
    </div>
  );
};

Menu.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  colName: PropTypes.arrayOf.isRequired
};

export default Menu;
