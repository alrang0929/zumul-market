import styled, { css } from 'styled-components';

const mainColor = '#1F17FF';

const SIZES_SCALE = {
  XL: '5rem',
  L: '4rem',
  M: '3rem',
  S: '1rem',
  XS: '0.5rem',
};

const Box = {
  ContentBox: css`
    width: 110rem;
    margin: 0 auto;
    padding-bottom: 10rem;
  `,
};

const Flex = {
  FlexBox: css`
    display: flex;
    justify-content: space-between;
    ${({ gap }) => gap && `gap: ${SIZES_SCALE[gap] || '5rem'};`}
  `,

  ColumFlexBox: css`
    display: flex;
    flex-direction: column;
    ${({ gap }) => gap && `gap: ${SIZES_SCALE[gap] || '${SIZES_SCALE.L}'};`}
  `,
};

const Input = {
  InputBox: css`
    padding: 1.5rem;
    border: 1px solid #ededed;
  `,
  MaxInputBox: css`
    padding: 1.5rem;
    border: 1px solid #ededed;
    width: 100%;
  `,
};

const Select = {
  SelectBox: css`
    width: 100%;
    padding: 1.5rem;
    border: 1px solid #ededed;
  `,
};

const Form = {
  FormBox: css`
    h3 {
      font-size: 2rem;
      margin-bottom: ${SIZES_SCALE.L};
    }
    width: 50%;
    background-color: #fff;
    margin: 0 auto;
    padding: ${SIZES_SCALE.L};

    display: flex;
    flex-direction: column;
    gap: ${SIZES_SCALE.L} 0;
    .input-wrap {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      input[type='radio'] {
        width: 3rem;
        padding-left: 1rem;
      }
      span {
        width: 12rem;
        font-size: 1.6rem;
      }
    }
    .submit-btn {
      padding: 2rem;
      font-size: ${SIZES_SCALE.L};
    }
  `,
};

export const DivBox = styled.div`
  ${(props) => Box[props.divStyles] || Box.ContentBox}
`;

export const FlexBox = styled.div`
  ${(props) => Flex[props.flexStyles] || Flex.FlexBox}
`;

export const SlideBox = styled.div`
  ${(props) => Slide[props.SlideStyles] || Slide.Slide}
`;

export const SelectBox = styled.select`
  ${(props) => Select[props.selectStyles] || Select.SelectBox}
`;

export const InputBox = styled.input`
  ${(props) => Input[props.inputStyles] || Input.InputBox}
`;

export const FormBox = styled.form`
  ${(props) => Form[props.FormStyles] || Form.FormBox}
`;
