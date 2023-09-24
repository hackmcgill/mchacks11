import styled from "styled-components"

export const Image = styled.img`
  object-fit: contain;
  width: 505px;
  height: 336px;
  background-color: lightgrey;

  @media only screen and (max-width: 1345px) {
    width: 400px;
  }

  @media only screen and (max-width: 1118px) {
    display: none;
  }
`

export default Image
