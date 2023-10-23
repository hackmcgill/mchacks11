import React from "react"
import GreenStar from "../../assets/images/designs/green-star.svg"
import CenterFloatingLand from "../../assets/images/designs/hero-bottom-land.svg"
import LeftFloatingLand from "../../assets/images/designs/left-floating-land.svg"
import LeftGreenFirework from "../../assets/images/designs/left-green-firework.svg"
import LeftYellowFirework from "../../assets/images/designs/left-yellow-firework.svg"
import McHacksImg from "../../assets/images/designs/mchacks10-hero-logo.svg"
import RightFloatingLand from "../../assets/images/designs/right-floating-land.svg"
import RightGreenFirework from "../../assets/images/designs/right-green-firework.svg"
import RightYellowFirework from "../../assets/images/designs/right-yellow-firework.svg"
import YellowStar from "../../assets/images/designs/yellow-star.svg"
// import Button from "./Button"
import HeroStyles from "./HeroStyles"
import SignUpForm from "./SignUpForm"

// const apply = () => {
//   window.location = "https://app.mchacks.ca/"
// }

// const live = () => {
//   window.location = "/live"
// }

const Hero = () => (
  <HeroStyles>
    <div className="hero__wrapper">
      <div className="hero__container">
        <img
          className="hero__heading-image"
          width={346}
          height={106}
          src={McHacksImg}
          alt="McHacks"
        />
        <h1 className="hero__heading">McHacks</h1>
        <h2 className="hero__topsubheading">
          McGill University · Jan 27-28, 2024
        </h2>
        {/* <Button onClick={apply}>Apply Now →</Button> */}
        {/* <Button onClick={apply}>Application Dashboard →</Button> */}
        {/* <Button onClick={live}>Live Site →</Button> */}
        <p className="hero__subheading">
          Sign up for updates on McHacks. No spam, we promise.
        </p>
        <div className="hero__email">
          <SignUpForm />
        </div>
      </div>
      <img className="hero__yellow-star" src={YellowStar} aria-hidden alt="" />
      <img className="hero__green-star" src={GreenStar} aria-hidden alt="" />
      <img
        className="hero__left-green-firework"
        src={LeftGreenFirework}
        aria-hidden
        alt=""
      />
      <img
        className="hero__left-yellow-firework"
        src={LeftYellowFirework}
        aria-hidden
        alt=""
      />
      <img
        className="hero__right-green-firework"
        src={RightGreenFirework}
        aria-hidden
        alt=""
      />
      <img
        className="hero__right-yellow-firework"
        src={RightYellowFirework}
        aria-hidden
        alt=""
      />
      <img
        className="hero__left-floating-land"
        src={LeftFloatingLand}
        aria-hidden
        alt=""
      />
      <img
        className="hero__right-floating-land"
        src={RightFloatingLand}
        aria-hidden
        alt=""
      />
      <img
        className="hero__center-floating-land"
        src={CenterFloatingLand}
        aria-hidden
        alt=""
      />
    </div>
  </HeroStyles>
)

export default Hero
