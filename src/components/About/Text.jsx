import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  max-width: 440px;
  font-size: 16px;
  margin-top: 60px;

  h2 {
    color: ${styleVars.hackText};
    font-size: 36px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 40px;
  }

  p {
    color: ${styleVars.hackText};
    margin-top: 0;
    margin-bottom: 32px;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1118px) {
    padding-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }
`

export default Text
