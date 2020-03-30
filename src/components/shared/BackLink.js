import styled from 'styled-components'
import { mediaBreakpoints } from './../../utils/styleUtils'
import { Link } from 'react-router-dom'

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 8px;
  }

  @media ${mediaBreakpoints.small} {
  }

  @media ${mediaBreakpoints.medium} {
  }

  @media ${mediaBreakpoints.large} {
    justify-content: flex-start;
  }

  @media ${mediaBreakpoints.extraLarge} {
  }
`

export default BackLink
