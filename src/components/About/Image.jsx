import styled from "styled-components"

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  position: relative;
  left: 120px;
  width: 560px;
  height: auto;
  margin-top: -140px;

  @media only screen and (max-width: 1345px) {
    top: auto;
    width: 471px;
    left: 0;
  }

  @media only screen and (max-width: 1118px) {
    max-width: 80%;
    margin: 0 auto;
    padding: 0;
  }
`

export default Image
