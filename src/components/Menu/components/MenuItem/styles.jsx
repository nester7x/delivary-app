import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const InfoItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-transform: capitalize;
  padding: 10px;
  width: 47%;
  background: #be7028;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 10px 20px;
  color: #000;
`;

export const Par = styled(Typography)`
  text-align: center;
  padding: 10px;
  color: #fff;
  :nth-child(1) {
    font-size: 20px;
    grid-column: 1/-1;
    grid-row: 1;
  }
  :nth-child(2) {
    font-size: 15px;
    grid-column: 1/2;
    grid-row: 2;
  }
  :nth-child(3) {
    grid-column: 2/2;
    grid-row: 2;
  }
`;
