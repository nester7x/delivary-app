import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

// eslint-disable-next-line react/prop-types
const MenuItem = ({ item, colName, ...rest }) => (
  <S.InfoItem {...rest}>
    {colName.map(({ label, key, Row }) => {
      if (Row) {
        return <S.Par>{Row(label, key, item)}</S.Par>;
      }

      return <S.Par>{item[key]}</S.Par>;
    })}
  </S.InfoItem>
);

MenuItem.propTypes = {
  item: PropTypes.arrayOf.isRequired,
  colName: PropTypes.arrayOf.isRequired
};

export default MenuItem;
