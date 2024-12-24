import styled from 'styled-components';
const mainColor = '#1F17FF';

export const StyledForm = styled.form`
  background-color: #fff;
  width: 50%;
  margin: 0 auto;
  padding: 4rem;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  h3 {
    font-size: 2.5rem;
  }
  .input-box {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    input {
      width: 65rem;
    }
  } // input box

  .profile-img-box {
    display: flex;
    gap: 4rem;
    .text-wrap {
      font-size: 1.4rem;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }
`;
