import styled from "styled-components"
import * as styleVars from "../variable"

import WindowSvg from "../../assets/images/designs/faq-window.svg"
import WindowSvgMid from "../../assets/images/designs/faq-window-mid.svg"
import WindowSvgLong from "../../assets/images/designs/faq-window-long.svg"

export const Window = styled.div`
  --scaling-factor: 1 / 1442 * 100vw;
  position: relative;
  margin: auto;
  top: 80px;

  width: calc(1271 * var(--scaling-factor));
  height: calc(1185 * var(--scaling-factor));
  max-width: 1271px;
  max-height: 1185px;

  text-align: center;

  background-image: url(${WindowSvg});
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    color: ${styleVars.hackBlack};
    font-size: 36px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  .content {
    position: relative;
    top: min(154px, calc(154 * var(--scaling-factor)));
    left: min(20px, calc(20 * var(--scaling-factor)));

    height: calc(693 * var(--scaling-factor));
    width: calc(1202 * var(--scaling-factor));
    max-height: 693px;
    max-width: 1202px;

    padding-top: 70px;
  }

  .questions {
    width: 40%;
    margin: auto;
    max-width: 750px;
  }

  @media only screen and (max-width: 1400px) {
    background-image: url(${WindowSvgMid});
    width: calc(1271 * var(--scaling-factor));
    height: calc(1032 * var(--scaling-factor));
    max-height: initial;

    .content {
      padding: 50px;
      height: calc(1000 * var(--scaling-factor));
      width: calc(1202 * var(--scaling-factor));
      max-height: initial;
    }
  }

  @media only screen and (max-width: 1118px) {
    background-image: url(${WindowSvgLong});
    width: calc(1271 * var(--scaling-factor));
    height: calc(1184 * var(--scaling-factor));
    max-height: initial;

    .content {
      height: calc(1000 * var(--scaling-factor));
      width: calc(1202 * var(--scaling-factor));
      max-height: initial;
    }

    .questions {
      width: 60%;
      max-width: 750px;
    }

  }

  @media only screen and (max-width: 1000px) {
    background-image: none;
    background-color: ${styleVars.hackWhite};

    border-radius: 32px;
    max-height: none;
    max-width: 720px;
    height: initial;
    width: 100%;
    top: 300px;

    .content {
      position: initial;
      margin: auto;
      height: initial;
      width: 100%;
      max-height: none;
      padding-top: 80px;
      padding-bottom: 100px;
      padding-left: 40px;
      padding-right: 40px;
    }

    .questions {
      width: 80%;
      max-width: 500px;
    }

    .QuestionBox {
      width: 100%;
      padding: 16px 24px;
      text-align: left;
      font-size: 1.2em;
      cursor: pointer;
      margin: 20px;
      box-sizing: border-box;
    }
  }
`
export default Window
