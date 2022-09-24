import styled from "styled-components"

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  position: relative;
  width: 800px;
  right: 65px;
  top: -140px;
  height: auto;

  @media only screen and (max-width: 1345px) {
    top: -40px;
    width: 518px;
  }

  @media only screen and (max-width: 1118px) {
    display: none;
  }
`

export default Image
