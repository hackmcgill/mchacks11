import styled from "styled-components"
import * as styleVars from "../variable"

export const Image = styled.img`
  object-fit: contain;
  width: 505px;
  height: 336px;
  background-color: lightgrey;

  @media only screen and (max-width: ${styleVars.mdUp}) {
    display: none;
  }
`

export default Image
