import styled from 'styled-components';
import Input from '@material-ui/core/Input';

export const InputStyled = styled(Input)`
  && {
    border-bottom: 2px solid #b16825;
    color: #ffffff;
    :before {
      border-bottom: 2px solid transparent;
    }
    :after {
      border-bottom: 2px solid #ffffff;
    }
    :hover:before {
      border-bottom: 2px solid rgba(255, 255, 255, 0.25) !important;
    }
  }
`;
