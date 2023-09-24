import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`
  padding-bottom: 520px;
  border-bottom: 4px solid ${styleVars.primary};

  .hero__wrapper {
    display: flex;
    flex-direction: column;
    z-index: 1;
    text-align: center;
    width: 100%;
    padding-top: 270px;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .hero__color-blur-1 {
    position: absolute;
    z-index: -1;
  }

  .hero__color-blur-2 {
    position: absolute;
    z-index: -1;
    right: 0;
    top: 320px;
  }

  .hero__grid {
    display: grid;
    grid-template-columns: 243px 1fr 1fr;
    grid-template-rows: 1fr 60px 130px;
    gap: 28px;
    max-width: 930px;

    & > div {
      border: 2.5px solid ${styleVars.primary};
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .hero__heading-image {
      grid-column: 1 / span 3;
    }

    .hero__grid__shapes {
      grid-column: 1;
      grid-row: 2 / span 2;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .hero__grid__location {
      grid-column: 2;
      grid-row: 2;
    }

    .hero__grid__date {
      grid-column: 3;
      grid-row: 2;
    }

    .hero__grid__signup {
      grid-column: 2 / span 2;
      grid-row: 3;
    }

    .hero__grid__text {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: ${styleVars.secondary};
      margin-top: 0;
      margin-bottom: 14px;
      font-family: "Brown", san-serif;
    }
  }

  .hero__heading {
    display: none; /* Leave in h1 for SEO */
  }

  .hero__grid__subheading {
    font-size: 24px;
    line-height: normal;
    margin: 0;
    font-weight: 400;
    text-align: center;
    color: ${styleVars.primary};
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

  .hero__left-floating-land {
    position: absolute;
    top: 10%;
    left: -64px;
    width: 30%;
    min-width: 15em;
  }

  .hero__right-floating-land {
    position: absolute;
    top: 25%;
    right: -64px;
    width: 30%;
    min-width: 15em;
    z-index: 1;
  }

  .hero__center-floating-land {
    position: relative;
    min-width: 400px;
    width: 49%;
    margin-top: -96px;
    z-index: 2;
  }

  .hero__yellow-star {
    position: absolute;
    top: 5%;
    left: 50%;
    width: 5%;
    z-index: 2;
  }

  .hero__green-star {
    position: absolute;
    margin-top: 35%;
    top: 10%;
    left: 5%;
    width: 5%;
  }

  .hero__left-green-firework {
    position: absolute;
    margin-top: 15%;
    top: 10%;
    left: 16px;
    width: 15%;
    z-index: 2;
  }

  .hero__left-yellow-firework {
    position: absolute;
    margin-top: 5%;
    top: 10%;
    left: 15%;
    width: 10%;
    z-index: 2;
  }

  .hero__right-green-firework {
    position: absolute;
    margin-top: 15%;
    top: 25%;
    width: 18%;
    right: 0;
    z-index: 2;
  }

  .hero__right-yellow-firework {
    position: absolute;
    margin-top: -12%;
    top: 25%;
    width: 20%;
    right: 0;
    z-index: 2;
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

    .hero__grid__subheading {
      text-align: center;
      padding-bottom: 0;
      font-size: 20px;
    }

    .hero__grid__text {
      display: block;
      text-align: center;
      margin: auto;
      margin-top: 16px;
      font-size: 18px;
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

  @media only screen and (max-width: 768px) {
    .hero__left-floating-land {
      visibility: hidden;
    }
  
    .hero__right-floating-land {
      visibility: hidden;
    }

    .hero__left-green-firework {
      visibility: hidden;
    }

    .hero__left-yellow-firework {
      visibility: hidden;
    }

    .hero__right-yellow-firework {
      visibility: hidden;
    }

    .hero__right-green-firework {
      visibility: hidden;
    }

    .hero__yellow-star {
      visibility: hidden;
    }

    .hero__green-star {
      visibility: hidden;
    }
  }

  @media only screen and (max-width: 410px) {
    .hero__line {
      display: block;
    }
  }
`

export default HeroStyles
