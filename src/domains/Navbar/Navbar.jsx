import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { transitionAll, breakpoints, fonts, sizes } from '@styles'
import useMounted from '@hooks/useMounted'
import Helmet from 'react-helmet'
import { throttle } from '@utils'
import BrandIcon from './BrandIcon'
import SideMenu from './SideMenu'
import BurgerMenu from './BurgerMenu'
import NavLinks from './NavLinks'

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  flex-direction: column;
  top: 0;
  padding: 0 3em;
  width: 12em;
  height: 100vh;
  z-index: 11;
  color: ${(props) => props.theme.colors.navbar.text};
  background: ${(props) => props.theme.colors.navbar.inner};
  transition: ${transitionAll};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  ${breakpoints.desktop`
  padding: 0 2.5rem;`};
  ${breakpoints.tablet`
  padding: 0 1.6rem;
  width: 100%;
  height: 5rem;
  background: ${(props) => (props.isTop ? `transparent` : props.theme.colors.navbar.inner_scrolled)}`};
  box-shadow: ${(props) => (props.isTop ? `none` : `0 1em 1em -1em ${props.theme.colors.navbar.box_shadow}`)};
`
const Nav = styled.nav`
  display: grid;
  grid-template-rows: 10rem 1fr 10rem;
  grid-template-columns: 12em;
  grid-template-areas:
    'logo'
    'navLinks'
    'hamburger';
  align-items: center;
  position: relative;
  height: 100vh;
  z-index: 12;
  font-family: ${fonts.style.navbar};
  font-size: ${fonts.size.navbar.default};
  counter-reset: item 0;
  transition: ${transitionAll};
  ${breakpoints.tablet`
  height: inherit;
  width: 100%;
  grid-template-rows: 5rem;
  grid-template-columns: 3rem minmax(auto, 1fr) 3rem;
  grid-template-areas:
    "logo navLinks hamburger";
  `};
`

const Brand = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: center;
  a {
    display: block;
    color: ${(props) => props.theme.colors.navbar.brand_color};
    width: 100px;
    height: 100px;
    &:hover,
    &:focus {
      svg {
        fill: ${(props) => props.theme.colors.navbar.brand_hover};
      }
    }
    svg {
      fill: transparent;
      transition: ${transitionAll};
      user-select: none;
    }
  }
`

function Navbar({ isTop }) {
  const [showSide, setShowSide] = useState(false)

  const { isMounted } = useMounted()

  const toggleSideMenu = () => {
    setShowSide(!showSide)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > sizes.tablet.max && showSide) {
        setShowSide(!showSide)
      }
    }
    window.addEventListener('resize', () => throttle(handleResize()))
    return () => {
      window.removeEventListener('resize', () => handleResize())
    }
  }, [showSide])

  return (
    <Header isTop={isTop}>
      <Helmet>
        <body className={showSide ? 'blur' : ''} />
      </Helmet>
      <Nav className='navbar'>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames='fade' timeout={1000}>
              <Brand>
                <Link to='#home' aria-label='home'>
                  <BrandIcon />
                </Link>
              </Brand>
            </CSSTransition>
          )}
        </TransitionGroup>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames='fade' timeout={1000}>
              <BurgerMenu showSide={showSide} toggleSideMenu={toggleSideMenu} />
            </CSSTransition>
          )}
        </TransitionGroup>

        <NavLinks />
      </Nav>
      <SideMenu sideMenuOpen={showSide} toggle={toggleSideMenu} />
    </Header>
  )
}

Navbar.propTypes = {
  isTop: PropTypes.bool.isRequired,
}

export default Navbar
