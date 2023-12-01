import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Container from "./Container"
import Content from "./Content"

import Logo from "./Logo"
import Tier from "./Tier"
import ComingSoon from "../../assets/images/designs/comingSoon.svg"

const Logos = ({ scrollRef }) => {
  const {
    allGoogleSpreadsheetSponsors: { edges },
  } = useStaticQuery(graphql`
    query {
      allGoogleSpreadsheetSponsors {
        edges {
          node {
            tier
            link
            image
            alt
          }
        }
      }
    }
  `)

  const TIERS = ["Tera", "Giga", "Mega", "Kilo", "Byte", "In Kind"]
  return (
    <Container ref={scrollRef}>
      {edges.length > 0 ? (
        <Content>
          <h1>Past Sponsors</h1>
          {TIERS.map(tier => (
            <Tier key={tier}>
              {edges
                .map(({ node }) => node)
                .filter(sponsor => sponsor.tier === tier)
                .map(({ link, image, alt }) => (
                  <Logo
                    key={link}
                    tier={tier}
                    link={link}
                    image={image}
                    alt={alt}
                  />
                ))}
            </Tier>
          ))}
        </Content>
      ) : null}
      <div className="coming-soon">
        <img src={ComingSoon}></img>
        <h2 className="coming-soon_text">and more coming soon...!</h2>
      </div>
      
    </Container>
  )
}

export default Logos
