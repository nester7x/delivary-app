import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '../../components/Button';
import Input from '../../components/Input';

export const Wrapper = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    padding: 30px 24px;
  }
`;

export const Form = styled.form`
  padding: 15px;
  border-radius: 4px;
  width: 30%;
`;

export const InputStyled = styled(Input)`
  && {
    width: 100%;
    line-height: 17px;
    font-size: 14px;
    input {
      padding: 15px 20px;
    }
  }
`;

export const Price = styled.p`
  margin: 18px 0 21px 0;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

export const SubmitBtn = styled(Button)`
  && {
    padding: 10px 34px;
    font-size: 16px;
    line-height: 19px;
    background: #be7028;
    border-radius: 10px;
    text-transform: none;
    color: #ffffff;
    opacity: 1;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const Items = styled.ul`
  padding: 15px 15px 15px 44px;
  border-radius: 4px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-left: 4px solid #b16825;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-transform: capitalize;
  padding: 10px;
  width: 50%;
  background-color: #be7028;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 10px 20px;
  color: #000;
  position: relative;
`;

export const DeleteBtn = styled.span`
  && {
    cursor: pointer;
    position: absolute;
    right: 10px;
    width: 15px;
    height: 15px;
    top: 10px;
    opacity: 0.7;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 10px;
    :after {
      position: absolute;
      content: '';
      top: 50%;
      width: 100%;
      height: 3px;
      border-radius: 20px;
      transform: rotateZ(45deg);
      background-color: #7d4c1f;
    }
    :before {
      position: absolute;
      content: '';
      width: 100%;
      top: 50%;
      height: 3px;
      border-radius: 20px;
      transform: rotateZ(-45deg);
      background-color: #7d4c1f;
    }
    :hover {
      opacity: 1;
    }
  }
`;

export const Par = styled(Typography)`
  text-align: center;
  padding: 10px;
  color: #ffffff;
  :nth-child(1) {
    font-size: 20px;
    line-height: 24px;
  }
  :nth-child(2) {
    width: 100%;
    font-size: 15px;
    line-height: 18px;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ChangeValBtn = styled.button`
  color: #ffffff;
  background-color: transparent;
  padding: 0 15px 5px;
  font-size: 20px;
  width: max-content;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 10px;
  :hover {
    background-color: #b16825;
  }
`;

export const ItemCount = styled(Input)`
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  background-color: #d38034;
  box-shadow: inset 3px 4px 3px -1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 75px;
  pointer-events: none;
  margin: 0 10px;
  input {
    padding: 1px 24px;
    text-align: center;
  }
`;
