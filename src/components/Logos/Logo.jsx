import React from "react"
import styled from "styled-components"

const StyledLogo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  img {
    transition: 0.3s ease;
    margin: 18px;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;

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
  a {
    img {
      height: 280px;
    }
  }
`

const GigaLogo = styled(StyledLogo)`
  a {
    img {
      height: 210px;
    }
  }
`

const MegaLogo = styled(StyledLogo)`
  a {
    img {
      height: 120px;
    }
  }
`

const KiloLogo = styled(StyledLogo)`
  a {
    img {
      height: 90px;
    }
  }
`

const ByteLogo = styled(StyledLogo)`
  a {
    img {
      height: 50px;
    }
  }
`

const InKindLogo = styled(StyledLogo)`
  a {
    img {
      height: 50px;
    }
  }
`

export default Logo
