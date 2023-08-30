import React from "react"
import styled from "styled-components"

const StyledLogo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1em 4rem;

  a {
    max-width: 100%;
    max-height: 100%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    transition: 1s;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const Logo = ({ tier, link, image, alt }) => {
  const content = <Content link={link} image={image} alt={alt} />

  switch (tier) {
    case "Tera":
      return <TeraLogo children={content} />
    case "Giga":
      return <GigaLogo children={content} />
    case "Mega":
      return <MegaLogo children={content} />
    case "Kilo":
      return <KiloLogo children={content} />
    case "Byte":
      return <ByteLogo children={content} />
    case "In Kind":
      return <InKindLogo children={content} />
    default:
      return null
  }
}

const Content = ({ link, image, alt }) => {
  return (
    <a href={link}>
      <img src={image} alt={alt} />
    </a>
  )
}

const TeraLogo = styled(StyledLogo)`
  flex-basis: 90%;
  align-self: center;
  padding: 2%;

  a {
    img {
      max-height: 25vh;
      max-width: 25vw;
    }
  }
`

const GigaLogo = styled(StyledLogo)`
  flex-basis: 65%;
  align-self: center;
  padding: 2%;

  a {
    img {
      max-height: 10vh;
    }
  }
`

const MegaLogo = styled(StyledLogo)`
  flex-basis: 45%;
  align-self: center;
  padding: 2%;

  a {
    img {
      max-height: 9vh;
    }
  }
`

const KiloLogo = styled(StyledLogo)`
  flex-basis: 21%;
  align-self: center;
  padding: 2%;

  a {
    img {
      max-height: 6vh;
    }
  }
`

const ByteLogo = styled(StyledLogo)`
  flex-basis: 18%;
  align-self: center;
  padding: 1%;

  a {
    img {
      max-height: 5vh;
    }
  }
`

const InKindLogo = styled(StyledLogo)`
  flex-basis: 7%;
  align-self: center;
  padding: 1.5%;

  a {
    img {
      max-height: 4vh;
    }
  }
`

export default Logo
