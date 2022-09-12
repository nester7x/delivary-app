import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Menu from '../../components/Menu';
import Button from '../../components/Button';

export const Wrapper = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    padding: 30px 24px;
  }
`;

export const ProductWrapper = styled.div`
  padding: 15px 15px 15px 44px;
  border-radius: 4px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-left: 4px solid #b16825;
`;

export const MenuItems = styled(Menu)`
  display: ${(props) => props.currentShop || 'none'};
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

export const AddBtn = styled(Button)`
  && {
    font-size: 9px;
    padding: 10px;
    border-radius: 10px;
    background-color: #954e0c;
  }
`;

export const ShopBtn = styled(Button)`
  && {
    width: 150%;
    padding: 10px 20px;
    font-size: 12px;
    border-radius: 2px;
    box-shadow: 2px 0 4px 2px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    &.active-tabs {
      width: 180%;
      background-color: #c27833;
      z-index: 100;
    }
  }
`;
