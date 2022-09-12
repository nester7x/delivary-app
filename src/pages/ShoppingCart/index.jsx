import React, { useState } from 'react';
import ErrorImg from '../../assets/images/errorimg.png';
// import ErrorImg from 'assets/images/errorimg.png';
import * as S from './styles';

function ShoppingCart() {
  const initialState = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState(initialState);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleUserChange = (event) => {
    const { target } = event;
    setUserData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const inc = (event) => {
    const { target } = event;

    setCart((prevState) => ({
      type: prevState.type,
      items: [
        ...prevState.items.map((item) =>
          item.id.toString() === target.name
            ? {
                ...item,
                count: Number(item.count) + 1
              }
            : item
        )
      ]
    }));
    window.location.reload();
    return '';
  };

  const dec = (event) => {
    const { target } = event;

    setCart((prevState) => ({
      type: prevState.type,
      items: [
        ...prevState.items.map((item) =>
          item.id.toString() === target.name
            ? {
                ...item,
                count: Number(item.count) > 1 ? Number(item.count) - 1 : 1
              }
            : item
        )
      ]
    }));
    window.location.reload();
    return '';
  };

  const deleteItem = (value) => {
    setCart((prevState) => ({
      type: prevState.type,
      items: [...prevState.items.filter((i) => i !== value)]
    }));

    if (cart.items.length === 1) {
      setCart((prevState) => ({
        type: '',
        items: prevState.items
      }));
    }

    window.location.reload();
    return '';
  };

  const totalPriceCount = (counter = 0) => {
    for (let i = 0; i < cart.items.length; i += 1) {
      // eslint-disable-next-line no-param-reassign
      counter += cart.items[i].price * cart.items[i].count;
    }
    return Math.round((counter + Number.EPSILON) * 100) / 100;
  };

  localStorage.setItem('cart', JSON.stringify(cart));

  return (
    <S.Wrapper>
      <S.Form>
        <S.InputStyled
          type="text"
          value={userData.name}
          name="name"
          onChange={handleUserChange}
          placeholder="name..."
        />
        <br />
        <S.InputStyled
          type="email"
          value={userData.email}
          pattern=".+@globex\.com"
          size="30"
          required
          name="email"
          onChange={handleUserChange}
          placeholder="email..."
        />
        <br />
        <S.InputStyled
          type="tel"
          value={userData.phone}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          name="phone"
          onChange={handleUserChange}
          placeholder="phone..."
        />
        <br />
        <S.InputStyled
          type="text"
          value={userData.address}
          name="address"
          onChange={handleUserChange}
          placeholder="address..."
        />
        <br />
        <S.Price>Total price: ₴{totalPriceCount()}</S.Price>
        <S.SubmitBtn type="button">Submit</S.SubmitBtn>
      </S.Form>
      <S.Items>
        {cart.items.map((item) => (
          <S.Item>
            <img src={ErrorImg} alt="error" width="100px" />
            <S.DeleteBtn onClick={() => deleteItem(item)} />
            <S.Par>{item?.name}</S.Par>
            <S.Par>{`₴${item?.price}`}</S.Par>
            <S.CountWrapper>
              <S.ChangeValBtn type="button" name={item?.id} onClick={dec}>
                -
              </S.ChangeValBtn>
              <S.ItemCount
                type="text"
                value={item?.count}
                name={item?.id.toString}
              />
              <S.ChangeValBtn type="button" name={item?.id} onClick={inc}>
                +
              </S.ChangeValBtn>
            </S.CountWrapper>
          </S.Item>
        ))}
      </S.Items>
    </S.Wrapper>
  );
}

export default ShoppingCart;
