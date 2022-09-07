import styled from "styled-components"
import * as styleVars from "../variable"
import BgGridSquare from "../../assets/images/designs/faq-grid-square.svg"

const Container = styled.div`
  background-image: url(${BgGridSquare}), linear-gradient(#fed9af, #ffb260);
  position: relative;
  height: 1080px;

  .QuestionBox {
    border: 1px solid ${styleVars.faqBlue2};
    padding: 10px 10px;
    border-radius: 5px;
    text-align: left;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.5s ease;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    box-sizing: border-box;
    background-color: white;

    a {
      color: ${styleVars.faqBlue1};
    }

    .questionRow {
      display: flex;

      .question {
        color: ${styleVars.hackBlack80};
      }

      .spacer {
        flex: 1;
      }

      .expandButton > img {
        opacity: 30%;
        position: relative;
        top: 0px;
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
    }

    .answer {
      color: ${styleVars.hackBlack60};
      margin-top: 10px;
      font-size: 0.9em;
      display: none;
      font-family: "Hind Siliguri", sans-serif;
    }

    &.expanded {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      align-self: stretch;

      .answer {
        display: block;
      }

      .expandButton > img {
        transform: rotate(-180deg);
      }

      .question {
        border-color: ${styleVars.hackWhite} !important;
      }
    }

    &:hover {
      .expandButton > img {
        opacity: 90%;
      }
    }
  }
  
  @media only screen and (max-width: 1300px) {
    height: 990px;
  }

  @media only screen and (max-width: 1000px) {
    height: 1350px;
  }

  @media only screen and (max-width: 900px) {
    height: 1440px;
  }

  @media only screen and (max-width: 425px) {
    height: 1710px;
  }

  @media only screen and (max-width: 325px) {
    height: 1980px;
  }

  &.hidden {
    display: none !important;
  }
`

export default Container
