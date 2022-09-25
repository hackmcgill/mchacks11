import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  margin: auto;

  @media only screen and (max-width: 1345px) {
    justify-content: space-between;
    max-width: 1000px;
  }

  @media only screen and (max-width: 1118px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 0 30px;
  }
`

export default Content
