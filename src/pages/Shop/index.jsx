import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import macItems from '../../data/macItems.json';
import kfcItems from '../../data/kfcItems.json';
import domItems from '../../data/dominosItems.json';

import * as S from './styles';

let initialState;
let shop = '';

if (!localStorage.getItem('cart')) {
  initialState = { type: '', items: [] };
} else {
  initialState = JSON.parse(localStorage.getItem('cart'));
  shop = JSON.parse(localStorage.getItem('cart')).type;
}

const Shops = () => {
  const items = [macItems, kfcItems, domItems];
  const [cart, setCart] = useState(initialState);
  const [toggleState, setToggleState] = useState(shop || 'mac');

  const checkItems = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')).items;
    for (let i = 0; i < cartItems.length; i += 1) {
      if (cartItems[i].id === item) {
        return true;
      }
    }
    return '';
  };

  const checkShops = (name) => {
    const cartShop = JSON.parse(localStorage.getItem('cart')).type;
    if (cartShop === name || cartShop === '') {
      return false;
    }
    return true;
  };

  const cartAdd = (id, shopName, name, price) => {
    setCart((prevState) => ({
      type: shopName,
      items: [...prevState.items, { id, shopName, name, price, count: 1 }]
    }));
    window.location.reload();
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const colName = [
    {
      key: 'name'
    },
    {
      key: 'price'
    },
    {
      Row: (label, key, item) => (
        <S.AddBtn
          variant="contained"
          color="primary"
          // eslint-disable-next-line no-restricted-globals,no-return-assign
          onClick={() => cartAdd(item.id, item.shopName, item.name, item.price)}
          disabled={checkItems(item.id)}
        >
          add to cart
        </S.AddBtn>
      )
    }
  ];

  localStorage.setItem('cart', JSON.stringify(cart));

  return (
    <S.Wrapper maxWidth="lg">
      <ButtonGroup
        className="bloc-tabs"
        variant="outlined"
        orientation="vertical"
      >
        <S.ShopBtn
          variant="contained"
          color="primary"
          className={toggleState === 'mac' ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab('mac')}
          disabled={checkShops('mac')}
          name="mac"
        >
          Mac
        </S.ShopBtn>
        <S.ShopBtn
          variant="contained"
          color="primary"
          className={toggleState === 'kfc' ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab('kfc')}
          disabled={checkShops('kfc')}
          name="kfc"
        >
          Kfs
        </S.ShopBtn>
        <S.ShopBtn
          variant="contained"
          color="primary"
          className={toggleState === 'dom' ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab('dom')}
          disabled={checkShops('dom')}
          name="dom"
        >
          Dominos
        </S.ShopBtn>
      </ButtonGroup>

      <S.ProductWrapper>
        <S.MenuItems
          currentShop={toggleState === 'mac' ? 'flex' : 'none'}
          data={items[0]}
          colName={colName}
        />
        <S.MenuItems
          currentShop={toggleState === 'kfc' ? 'flex' : 'none'}
          data={items[1]}
          colName={colName}
        />
        <S.MenuItems
          currentShop={toggleState === 'dom' ? 'flex' : 'none'}
          data={items[2]}
          colName={colName}
        />
      </S.ProductWrapper>
    </S.Wrapper>
  );
};

export default Shops;
