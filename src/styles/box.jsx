import styled from 'styled-components';
import { pxr } from './pxTorem';
const mainColor = '#1F17FF';
export const ContentBox =styled.div`
    width:110rem;
    margin: 0 auto;
` //SingleIconBtn

export const InputBox = styled.input`
padding: ${pxr(20)};
border: 1px solid #EDEDED;

&:focus {
    outline: ${mainColor};
  }
`;