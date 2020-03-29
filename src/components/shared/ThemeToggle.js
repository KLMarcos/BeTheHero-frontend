import styled from 'styled-components'
import { mediaBreakpoints } from './../../utils/styleUtils'

const ThemeToggle = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  display: none;

  @media ${mediaBreakpoints.large} {
    display: block;
  }
`
export default ThemeToggle
