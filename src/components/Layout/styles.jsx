import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Menu from '@material-ui/core/MenuList';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #135722;
  position: sticky;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
`;

export const MenuList = styled(Menu)`
  && {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  margin: 0 20px 0 0;
  padding-top: 20px;
  color: #ffffff;
  position: relative;
  &.active:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #719a7a;
  }
`;

export const Main = styled.main`
  background-color: #d38134;
  height: calc(100vh - 62px);
`;
