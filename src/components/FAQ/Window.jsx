import styled from "styled-components"
import * as styleVars from "../variable"

import WindowSvg from "../../assets/images/designs/faq-window.svg"
import WindowSvgMid from "../../assets/images/designs/faq-window-mid.svg"
import WindowSvgLong from "../../assets/images/designs/faq-window-long.svg"

export const Window = styled.div`
  --scaling-factor: 1 / 1442 * 100vw;
  position: relative;
  margin: auto;

  width: calc(1271 * var(--scaling-factor));
  height: calc(876 * var(--scaling-factor));
  max-width: 1271px;
  max-height: 876px;

  text-align: center;

  background-image: url(${WindowSvg});
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    color: ${styleVars.faqBlue1};
    font-size: 36px;
    font-weight: 400;
  }

  .content {
    position: relative;
    top: min(154px, calc(154 * var(--scaling-factor)));
    left: min(20px, calc(20 * var(--scaling-factor)));

    height: calc(693 * var(--scaling-factor));
    width: calc(1202 * var(--scaling-factor));
    max-height: 693px;
    max-width: 1202px;

    padding-top: 40px;
  }

  .grid {
    display: grid;
    width: 80%;
    max-width: 750px;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    justify-content: center;
    align-items: start;
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

    .grid {
      width: 90%;
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
    
    .grid {
      position: initial;
      display: flex;
      height: initial;
      width: 100%;
      flex-flow: column wrap;
      align-content: center;
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
