import React from "react"
import Container from "./Container"
import Content from "./Content"

import Tier from "./Tier"
import Logo from "./Logo"
import { graphql, useStaticQuery } from "gatsby"

const Logos = ({ scrollRef }) => {
  const { allGoogleSpreadsheetSponsors: { edges } } = useStaticQuery(graphql`
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

  const TIERS = [
    'Tera',
    'Giga',
    'Mega',
    'Kilo',
    'Byte',
    'In Kind'
  ]

  return (
    <Container ref={scrollRef}>
      <Content>
        <h1>Our Sponsors</h1>
        {
          TIERS.map(tier =>
              <Tier>
                {
                  edges
                  .map(({ node }) => node)
                  .filter(sponsor => sponsor.tier == tier)
                  .map(({ link, image, alt }) =>
                    <Logo tier={tier} link={link} image={image} alt={alt} />
                  )
                }
              </Tier>
            )
        }
      </Content>
    </Container>
  )
}

export default Logos
