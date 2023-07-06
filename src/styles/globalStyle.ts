import { MAXWIDTH } from 'common/constants';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'EF_jejudoldam';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  html {
    font-size: 62.5%; // 1rem = 10px 로 변경

  }
  body {
    /* height: 100vh; */
    max-width: ${MAXWIDTH}px;
    margin: auto;
    
    font-family: SUIT Variable, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // reset css
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  // 인풋 기본 스타일 제거
  input {
    border: none;
  }
  // 인풋 태그 테두리 하이라이트 제거
  input:focus {
    outline: none;
  }
  /* select 기본 스타일 제거 */
  select {
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
  }
  // list 기본 스타일 제거
  li {
    list-style-type: none;
  }
`;
