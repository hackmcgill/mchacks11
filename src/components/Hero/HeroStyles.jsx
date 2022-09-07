import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`
  @keyframes slideDown {
    0% {
      clip: rect(auto, auto, 0, auto);
    }
    100% {
      clip: rect(auto, auto, 1000px, auto);
    }
  }

  background: ${styleVars.lightSecondaryBlue};

  .hero__wrapper {
    z-index: 1;
    background-color: ${styleVars.darkBlue};
    background:  linear-gradient(to bottom, ${styleVars.darkBlue}, ${styleVars.lightBlue});
    text-align: center;
    width: 100%;
  }

  .hero__container {
    padding: 0;
    padding-top: 192px;
    padding-bottom: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__heading {
    display: none; /* Leave in h1 for SEO */
  }

  .hero__heading-image {
    width: 520px;
    margin-bottom: -26px;
  }

  .hero__topsubheading {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    color: ${styleVars.hackWhite};
    margin-top: 0;
    margin-bottom: 72px;
  }

  .hero__subheading {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: ${styleVars.hackBlack10};
    margin-top: 0;
    margin-bottom: 0;
    font-family: "Brown", san-serif;
  }

  .hero__cta {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
  }

  .hero__email {
    margin-bottom: 32px;
    margin-top: 12px;
    font-family: "Brown", san-serif;
    font-size: 14px;

    display: flex;
    justify-content: center;
  }

  .hero__illustrations {
    position: center;
    heught: 100%;
    width: 1173px;
    z-index: -2;
  }

  .hero__bottom-border-img {
    text-align: center;
    width: 101%;
    z-index: -2;
    margin-bottom: -7px;
  }

  .hero__grid {
    width: 100%;
    z-index: 1;
    vertical-align: bottom;
    animation: 5s ease-out 0s 1 slideDown;
    transform-origin: top;
    position: absolute;

    &.hidden {
      position: static;
      animation: none;
      visibility: hidden;
    }
  }
 
  @media only screen and (min-width: 1078px) and (max-width: 1299px) {
    max-width: 1280px;

    .hero-wrapper {
      padding: 100px 60px;
      padding-top: 140px;
      padding-bottom: 217px;
    }

    .hero__cta {
      font-size: 14px;
    }

    .hero__illustrations {
      width: 880px;
      top: 50px;
    }
  }

  @media only screen and (max-width: 1077px) {
    text-align: center;

    .hero-wrapper {
      padding: 0 20px;
      padding-top: 80px;
      padding-bottom: 43px;
    }

    .hero__heading {
      font-size: 48px;
    }

    .hero__heading-image {
      max-width: 100%;
      height: auto;
    }

    .hero__topsubheading {
      text-align: center;
      padding-bottom: 0;
      font-size: 20px;
    }

    .hero__subheading {
      display: block;
      text-align: center;
      margin: auto;
      margin-top: 16px;
      font-size: 18px;
      border-top: 2px solid ${styleVars.darkBlue};
      border-bottom: 2px solid ${styleVars.darkBlue};
      padding: 8px 0;
      max-width: 440px;
    }

    .hero__cta {
      font-size: 14px;
      text-align: center;
    }

    .hero__email {
      text-align: center;
      margin-top: 36px;
    }

    .hero__illustrations {
      max-width: 100%;
      margin-top: 120px;

      position: static;
      top: 0;
      right: 0;
      left: 0;
    } 
  }

  @media only screen and (max-width: 410px) {
    .hero__line {
      display: block;
    }
  }
`

export default HeroStyles
