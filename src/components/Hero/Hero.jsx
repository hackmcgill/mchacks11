import React from "react"
import McHacksImg from "../../assets/images/designs/mchacks11-hero-logo.svg"
import HeroShapesImg from "../../assets/images/designs/hero-shapes.svg"
import HeroColorBlur1 from "../../assets/images/designs/hero-color-blur-1.svg"
import HeroColorBlur2 from "../../assets/images/designs/hero-color-blur-2.svg"
import Martlet from "../../assets/images/designs/hero-martlet.svg"
import Button from "./Button"
import HeroStyles from "./HeroStyles"
import SignUpForm from "./SignUpForm"

const apply = () => {
  window.location = "https://app.mchacks.ca/"
}

// const live = () => {
//   window.location = "/live"
// }

const Hero = () => (
  <HeroStyles>
    <img className="hero__color-blur-1" src={HeroColorBlur1} alt="" />
    <img className="hero__color-blur-2" src={HeroColorBlur2} alt="" />
    <div className="hero__wrapper">
      <h1 className="hero__heading">McHacks 11</h1>
      <div className="hero__grid">
        <img
          className="hero__heading-image"
          src={McHacksImg}
          alt="McHacks 11"
        />
        <div className="hero__grid__shapes">
          <img src={HeroShapesImg} alt="" />
        </div>
        <div className="hero__grid__location">
          <h2 className="hero__grid__subheading">McGill University</h2>
        </div>
        <div className="hero__grid__date">
          <h2 className="hero__grid__subheading">Jan 27-28, 2024</h2>
        </div>
        <div className="hero__grid__signup">
          <img className="hero__martlet" src={Martlet} alt="" />
          <p className="hero__grid__text">
            Sign up for updates on McHacks. No spam, we promise.
          </p>
          <SignUpForm />
        </div>
      </div>
      <Button onClick={apply}>Apply Now →</Button>
      {/* <Button onClick={apply}>Application Dashboard →</Button> */}
      {/* <Button onClick={live}>Live Site →</Button> */}
    </div>
  </HeroStyles>
)

export default Hero
