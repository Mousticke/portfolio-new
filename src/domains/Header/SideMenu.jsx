import React from 'react'
import PropTypes from 'prop-types'
import navLinks from '@config/navLinks'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { transitionAll, breakpoints, fonts } from '@styles'

const StyledSideContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${transitionAll};
  transform: translateX(${(props) => (props.sideMenuOpen ? 0 : 100)}vw);
  visibility: ${(props) => (props.sideMenuOpen ? 'visible' : 'hidden')};
  display: none;
  ${breakpoints.tablet`display: block;`};
`

const StyledAside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.navbar.aside};
  padding: 50px;
  width: 100vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.style.navbar};
  box-shadow: 16px 0px 30px -17px ${(props) => props.theme.colors.navbar.box_shadow};
  ${breakpoints.tablet`padding: 25px;`};
  ${breakpoints.tiny`padding: 10px;`};
`

const StyledNavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.colors.navbar.text};
`

const StyledList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`

const StyledListItem = styled.li`
  margin: 0 auto 1.1rem;
  position: relative;
  font-size: ${fonts.size.lg};
  counter-increment: item 1;
  ${breakpoints.tablet`
    margin: 0 auto 10px;
    font-size: ${fonts.size.md};
  `};
  ${breakpoints.tiny`font-size: ${fonts.size.xs};`};
  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: ${(props) => props.theme.colors.navbar.number};
    font-size: ${fonts.size.sm};
    margin-bottom: 5px;
  }
`

const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: ${transitionAll};
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    color: ${(props) => props.theme.colors.link.hover};
    outline: 0;
  }
  padding: 3px 20px 20px;
  width: 100%;
`

function SideMenu({ sideMenuOpen, toggle }) {
  const handleMenuClick = (e) => {
    const { target } = e
    const isLink = target.hasAttribute('href')
    const isNotMenu = target.classList && target.classList[0].includes('StyledContainer')

    if (isLink || isNotMenu) {
      toggle()
    }
  }
  return (
    <StyledSideContainer sideMenuOpen={sideMenuOpen} onClick={handleMenuClick} aria-hidden={!sideMenuOpen}>
      <StyledAside>
        <StyledNavLinks>
          <StyledList>
            {navLinks &&
              navLinks.map(({ id, url, name }) => (
                <StyledListItem key={id}>
                  <NavLink aria-label={name} to={url}>
                    {name}
                  </NavLink>
                </StyledListItem>
              ))}
          </StyledList>
        </StyledNavLinks>
      </StyledAside>
    </StyledSideContainer>
  )
}

SideMenu.propTypes = {
  sideMenuOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default SideMenu
