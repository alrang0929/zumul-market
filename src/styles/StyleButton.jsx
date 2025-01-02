import styled, { css } from 'styled-components';

const mainColor = '#1F17FF';

const buttonStyles = {
  singleIcon: css`
    cursor: pointer;
    background-color: #e9efff;
    color: ${mainColor};
    border: transparent;
    border-radius: 999px;
    padding: 1rem;
    font-size: 2rem;
  `,
  basicMain: css`
    cursor: pointer;
    background-color: ${mainColor};
    color: #fff;
    width: fit-content;
    border: transparent;
    border-radius: 999px;
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    white-space: nowrap;
  `,
  submit: css`
    width: 100%;
    height: 6rem;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: ${mainColor};
    color: #fff;
    border: transparent;
    /* border-radius: 999px; */
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
  `,
  rectangleMain: css`
    cursor: pointer;
    background-color: ${mainColor};
    color: #fff;
    border: transparent;
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
  `,
  iconButton: css`
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    background-color:transparent;
    border: transparent;
  `,
};

export const Button = styled.button`
  ${(props) => buttonStyles[props.buttontype] || buttonStyles.basicMain}
`;
