import styled from 'styled-components'
import { mediaBreakpoints } from './../../utils/styleUtils'

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto 1fr auto auto;
    grid-template-rows: auto auto;
    align-items: center;
  }

  header span {
    font-size: 15px;
    grid-column-start: 2;
    grid-column-end: 3;
    align-self: center;
    justify-self: center;
  }

  header img {
    height: 30px;
  }

  header a {
    margin-top: 0;
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 5;
    justify-self: center;
  }

  header button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.secondaryText};
    background: transparent;
    transition: border-color 0.2s;
    grid-column-start: 4;
  }

  header button:hover {
    border-color: #999;
  }

  h1 {
    margin-top: 40px;
    margin-bottom: 24px;
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    list-style: none;
  }

  @media ${mediaBreakpoints.small} {
  }

  @media ${mediaBreakpoints.medium} {
    ul {
      grid-template-columns: 1fr 1fr;
    }

    header a {
      margin-top: 0;
      grid-row: 1;
      grid-column-start: 3;
      grid-column-end: 4;
      justify-self: center;
      padding: 0 30px;
    }

    header span {
      align-self: unset;
      justify-self: unset;
    }

    h1 {
      text-align: unset;
    }
  }

  @media ${mediaBreakpoints.large} {
    header img {
      height: 64px;
    }
  }

  @media ${mediaBreakpoints.extraLarge} {
  }
`

const IncidentItem = styled.li`
  background: ${({ theme }) => theme.secondaryBackground};
  padding: 24px;
  border-radius: 8px;
  position: relative;

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    transition: opacity 0.2s;
    background: transparent;
  }

  button:hover {
    opacity: 0.8;
  }

  strong {
    display: block;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.secondaryText};
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    line-height: 21px;
  }

  @media ${mediaBreakpoints.small} {
  }

  @media ${mediaBreakpoints.medium} {
  }

  @media ${mediaBreakpoints.large} {
  }

  @media ${mediaBreakpoints.extraLarge} {
  }
`

export { ProfileContainer, IncidentItem }
