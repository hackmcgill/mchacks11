import React, {useRef, useState} from "react"

import SEO from "../components/SEO/SEO"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import DiscordGuide from "../components/Discord/DiscordGuide"

const scrollTo = ref => {
  if (!ref || !ref.current) {
    return
  }
  window.scrollTo(0, ref.current.offsetTop - 100)
}

const DiscordGuidePage = () => {
  const aboutRef = useRef(null)
  const sponsorRef = useRef(null)

  return (
    <div>
      <SEO />
      <Nav
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToSponsor={() => scrollTo(sponsorRef)}
        darkBackground={true}
      />
      <DiscordGuide />
      <Footer />
    </div>
  )
}

export default DiscordGuidePage