import styled from 'styled-components';
import { pxr } from './pxTorem';
<<<<<<< HEAD
const mainColor = '#1F17FF';
export const ContentBox =styled.div`
    width:110rem;
    margin: 0 auto;
    margin-bottom: 10rem;
` //SingleIconBtn

export const InputBox = styled.input`
padding: ${pxr(20)};
border: 1px solid #EDEDED;

&:focus {
    outline: ${mainColor};
  }
`;
=======

export const ContentBox = styled.div`
  width: 110rem;
  margin: 0 auto;
`; //SingleIconBtn

export const InputBox = styled.input`
  padding: 1.5rem;
  border: 1px solid #ededed;
  width: 100%;

`; //InputBox

export const FormBox = styled.div`
    h3 {
      font-size: 2rem;
      margin-bottom: 4rem;
    }
    width: 50%;
    background-color: #fff;
    margin: 0 auto;
    padding: 4rem;
    form {
      display: flex;
      flex-direction: column;
      gap: 4rem 0;
      .input-wrap {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        input[type="radio"]{
          width: 3rem;
          padding-left: 1rem;
        }
        span {
          width: 12rem;
          font-size: 1.6rem;
        }
      }
      .submit-btn{
        padding: 2rem;
        font-size: 1.4rem;
      }
    }
`;
>>>>>>> feature/supabase
