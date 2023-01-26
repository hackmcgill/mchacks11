import React from "react"
import { useRef } from "react"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import Schedule from "../components/Schedule/Schedule"
import SEO from "../components/SEO/SEO"

const scrollTo = ref => {
    if (!ref || !ref.current) {
      return
    }
    window.scrollTo(0, ref.current.offsetTop - 100)
}
  
const SchedulePage = () => {
    const aboutRef = useRef(null)
    const sponsorRef = useRef(null)

    return (
      <div>
        <SEO />
        <Nav
          darkBackground={true}
          scrollToAbout={() => scrollTo(aboutRef)}
          scrollToSponsor={() => scrollTo(sponsorRef)}
        />
        <Schedule visible={true} />
        <Footer />
      </div>
    )
  }
  
  export default SchedulePage