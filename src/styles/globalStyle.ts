import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = (bgColor: string) => css`
  ${reset}

  * {
    scrollbar-width: none;
    -ms-overflow-style: none;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    scrollbar-width: none;
    -ms-overflow-style: none;
    height: 100%;
  }

  #root {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    letter-spacing: -0.04em;
  }

  html {
    font-size: 10px;
  }
  button {
    border: 0;
  }
  body {
    background-color: ${bgColor};
  }

  ::-webkit-scrollbar {
    display: none;
  }

  br.mobile-only {
    display: none;
  }

  @media screen and (max-width: 767px) {
    html {
      font-size: 9px;
    }
    br.mobile-only {
      display: block;
    }

    br.desktop-only {
      display: none;
    }
  }
`;
