import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        outline: 0;
      box-sizing: border-box;
    }

    body {
      align-items: center;
      background: ${({ theme }) => theme.mainBackground};
      color: ${({ theme }) => theme.mainText};
      -webkit-font-smoothing: antialised;
      font: 400 14px Roboto, sans-serif;
      transition: all 0.25s linear;
    }
    
    input,
    button,
    textarea {
      font: 400 14px Roboto, sans-serif;
    }

    button:not([disabled]) {
      cursor: pointer;
    }

    form input,
    form textarea {
      width: 100%;
      height: 60px;
      color: ${({ theme }) => theme.mainText};
      background-color:${({ theme }) => theme.inputColor};
      border: 1px solid ${({ theme }) => theme.inputBorder};
      border-radius: 8px;
      padding: 0 24px;
    }

    form textarea {
      min-height: 140px;
      max-height: 500px;
      padding: 16px 24px;
      line-height: 24px;
      resize: vertical;
    }
  `
