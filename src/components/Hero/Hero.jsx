import React from "react"
import GridImg from "../../assets/images/designs/grid.svg"
import McHacksImg from "../../assets/images/designs/mchacks10-hero-logo.svg"
import MountainsImg from "../../assets/images/designs/mountains.svg"
import Button from "./Button"
import HeroStyles from "./HeroStyles"
import { ArrowStyles } from "./FloatingStyles"
import ArrowImg from "../../assets/images/designs/arrow.svg"
import SignUpForm from "./SignUpForm"

/*const apply = () => {
  window.location = "https://app.mchacks.ca/"
}*/

const Live = () => {
  window.location = "/live"
}

const Hero = () => (
  <HeroStyles>
    <div className="hero__wrapper">
      <div className="hero__container">
        <img
          className="hero__heading-image"
          width={520}
          height={160}
          src={McHacksImg}
          alt="McHacks"
        />
        <h1 className="hero__heading">
          McHacks
        </h1>
        <h2 className="hero__topsubheading">McGill University · Jan 28-29, 2023</h2>
        {/*<div className="hero-header">
          <ArrowStyles src={ArrowImg} />
          <ArrowStyles src={ArrowImg} style={{ left: 25 }} />
        </div>*/}
        {/*<Button onClick={Live}>Live Site →</Button>*/}
        <p className="hero__subheading">Sign up for updates on McHacks. No spam, we promise.</p>
        <div className="hero__email">
          <SignUpForm />
        </div>
      </div>
      <img
        className="hero__bottom-border-img"
        src={MountainsImg}
        alt="Background image"
      />
    </div>
    <div style={{position: 'relative'}}>
      <img
        className="hero__grid"
        src={GridImg}
      />
      <img
        className="hero__grid hidden"
        src={GridImg}
      />
    </div>
  </HeroStyles>
)

export default Hero
