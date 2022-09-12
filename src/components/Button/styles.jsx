import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default styled(Button)`
  && {
    border: none;
    font-size: 9px;
    background-color: #d78c48;
    color: #ffffff;
    :hover {
      background-color: #c27833;
    }
    :disabled {
      opacity: 0.8;
    }
  }
`;
