import React from "react"

import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import Container from "../Nav/Container"
import IconContainer from "../Nav/IconContainer"
import Icon from "../Nav/Icon"
import Links from "../Nav/Links"
import NavLink from "../Nav/NavLink"
import MobileMenu from "../Nav/MobileMenu"

import Logo from "../../assets/images/logos/mchacks-martlet.svg"

const LiveNav = ({ switchPage = () => {}, activePage }) => {
  const NavItems = (mobile) => (
    <>
      <NavLink
        onClick={() => switchPage("info")}
        className={activePage === "info" ? "active" : ""}
        mobile={mobile}
      >
        Info
      </NavLink>
      <NavLink
        onClick={() => switchPage("schedule")}
        className={activePage === "schedule" ? "active" : ""}
        mobile={mobile}
      >
        Schedule
      </NavLink>
      <NavLink
        onClick={() => switchPage("discord")}
        className={activePage === "discord" ? "active" : ""}
        mobile={mobile}
      >
        Discord Guide
      </NavLink>
      <NavLink
        onClick={() => switchPage("resources")}
        className={activePage === "resources" ? "active" : ""}
        mobile={mobile}
      >
        Sponsor Resources
      </NavLink>
    </>
  )
  return (
    <Container className="dark-background">
      <IconContainer>
        <Link to="/">
          <Icon src={Logo} />
        </Link>
      </IconContainer>
      <Links>{NavItems()}</Links>
      <Menu isOpen={true} styles={MobileMenu}>
        {NavItems(true)}
      </Menu>
    </Container>
  )
}

export default LiveNav
