import styled from 'styled-components';
import { pxr } from './pxTorem';
const mainColor = '#1F17FF';

export const SingleIconBtn = styled.button`
  cursor: pointer;
  background-color: #e9efff;
  color: ${mainColor};
  border: transparent;
  border-radius: 999px;
  padding: 1rem;
  font-size: 2rem;
`; 

export const BasicBtn = styled.button`
  cursor: pointer;
  background-color: ${mainColor};
  color: #fff;
  width: fit-content;
  border: transparent;
  border-radius: 999px;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  white-space : nowrap
`; 

export const SubmitBtn = styled.button`
  width: 100%;
  height: 6rem;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: ${mainColor};
  color: #fff;
  border: transparent;
  border-radius: 999px;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
`