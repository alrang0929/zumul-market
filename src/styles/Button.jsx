import styled from 'styled-components';
import { pxr } from './pxTorem';
const mainColor = "#1F17FF";

export const SingleIconBtn =styled.button`
    background-color: #E9EFFF;
    color: ${mainColor};
    border: transparent;
    border-radius: ${pxr(999)};
    padding: ${pxr(10)};
    font-size: ${pxr(20)};
` //SingleIconBtn
export const BasicBtn =styled.button`
    background-color: ${mainColor};
    color: #fff;
    border: transparent;
    border-radius: ${pxr(999)};
    padding: ${pxr(8)+" "+pxr(15)} ;
    font-size:  ${pxr(12)};

` //SingleIconBtn