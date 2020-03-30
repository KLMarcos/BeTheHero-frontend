import styled from 'styled-components'
import { mediaBreakpoints } from './../../utils/styleUtils'

export const NewIncidentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.div`
  width: 100%;
  padding: 30px;
  background: ${({ theme }) => theme.mainBackground};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  section {
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
  }

  section h1 {
    margin: 64px 0 32px;
    font-size: 32px;
    text-align: center;
  }

  section p {
    font-size: 18px;
    line-height: 32px;
    color: #737380;
    text-align: center;
  }

  form {
    width: 100%;
    max-width: 450px;
  }

  form input,
  form textarea {
    margin-top: 8px;
  }

  form .input-group {
    display: flex;
  }

  form .input-group input + input {
    margin-left: 8px;
  }

  @media ${mediaBreakpoints.small} {
  }

  @media ${mediaBreakpoints.medium} {
    flex-direction: row;
  }

  @media ${mediaBreakpoints.large} {
    padding: 96px;

    section h1 {
      text-align: unset;
    }

    section p {
      text-align: unset;
    }

    box-shadow: 0 0 100px ${({ theme }) => theme.shadownColor};
    border-radius: 8px;
  }

  @media ${mediaBreakpoints.extraLarge} {
  }
`
