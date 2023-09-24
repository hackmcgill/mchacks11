import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  max-width: 590px;
  font-size: 16px;
  border: 2.5px solid ${styleVars.primary};
  height: min-content;
  border-radius: 20px;
  padding: 60px;

  h2 {
    color: ${styleVars.hackText};
    font-size: 36px;
    font-weight: bold;
    margin-top: 0;
  }

  p {
    color: ${styleVars.hackText};
    margin-top: 0;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1118px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export default Text
