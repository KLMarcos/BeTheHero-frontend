import styled from 'styled-components'
import { mediaBreakpoints } from './../../utils/styleUtils'

export const LogonContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  section.form {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 30px;
  }

  section.form form {
    margin-top: 100px;
  }

  section.form form h1 {
    font-size: 32px;
    margin-bottom: 32px;
    text-align: center;
  }

  .heroes-img {
    display: none;
  }

  @media ${mediaBreakpoints.small} {
  }

  @media ${mediaBreakpoints.medium} {
    justify-content: space-between;

    .heroes-img {
      display: block;
      max-width: 45%;
    }
  }

  @media ${mediaBreakpoints.large} {
    section.form {
      margin-right: 30px;
    }

    section.form form h1 {
      text-align: left;
    }

    .heroes-img {
      max-width: unset;
    }
  }

  @media ${mediaBreakpoints.extraLarge} {
  }
`
