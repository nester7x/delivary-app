import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Layout({ children }) {
  return (
    <div>
      <S.Header>
        <S.MenuList>
          <li>
            <S.Link to="">Shop</S.Link>
          </li>
          <li>
            <S.Link to="shopping-cart">Shopping Cart</S.Link>
          </li>
        </S.MenuList>
      </S.Header>

      <S.Main>{children}</S.Main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
