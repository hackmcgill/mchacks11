import styled from "styled-components"
import * as styleVars from "../variable"

const Container = styled.section`
  background-image: linear-gradient(#FFF7DC 75%, #E6FCDD);
  position: relative;
  height: 1500px;

  .faq__confetti_top {
    right: 30px;
    top: -40px;
  }

  .faq__confetti_bottom {
    left: -40px;
    bottom: 20px;
  }

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

  @media only screen and (max-width: 1000px) {
    height: 1800px;
    overflow: hidden;
  }

  @media only screen and (max-width: 768px) {
    height: 2000px;
  }

  &.hidden {
    display: none !important;
  }
`

export default Container
