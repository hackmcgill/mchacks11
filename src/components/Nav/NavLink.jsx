import styled from "styled-components"
import * as styleVars from "../variable"

export const NavLink = styled.a`
  margin-right: 2.8rem;
  cursor: pointer;
  color: ${props => props.mobile ? styleVars.hackBlack : styleVars.hackWhite};
  text-decoration: none;

  &.active,
  &:focus,
  &:hover,
  &:active {
    color: ${props => props.mobile ? styleVars.darkSecondaryBlue : styleVars.yellow};
    background: transparent;
  }
`

export default NavLink
