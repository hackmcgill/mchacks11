import styled from "styled-components"

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  position: relative;
  width: 900px;
  right: 165px;
  top: -140px;
  margin-bottom: -140px;
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
