import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');

  html {
    font-size: 10px;
    font-family: 'Pretendard Variable', Pretendard, apple-system, system-ui,
      Roboto, sans-serif;
    color: #131313;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
  }

  a {
    text-decoration: none;
  }

  ul, ol, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    border: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-size: 100%;
  }
`;