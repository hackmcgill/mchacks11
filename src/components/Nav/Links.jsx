import styled from "styled-components"
import * as styleVars from "../variable"

export const Links = styled.div`
  padding: 1.2rem 0;
  align-items: center;
  position: fixed;
  top: 16px;
  left: 140px;
  display: flex;

  .Nav__socials {
    position: fixed;
    transition: right 0.25s ease-in-out;
    z-index: 1;

    right: ${props => (props.hasBorder ? "4rem" : "16.5rem")};
  }

  .Nav__mlh-banner {
    position: fixed;
    top: 0;
    right: 4.5rem;
    width: 90px;
    height: auto;
    transition: opacity 0.15s ease-in-out;
    opacity: ${props => (props.hasBorder ? "0" : "1")};
    z-index: 0;

    img {
      filter: drop-shadow(2px 4px 2px rgb(0 0 0 / 0.15));
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: none;
  }
`

export default Links
