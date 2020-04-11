import React, { useState, useEffect } from 'react'
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0 3rem;
  width: 100%;
  height: 5rem;
  z-index: 11;
  color: ${(props) => props.theme.colors.navbar.text};
  transition: ${transitionAll};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  ${breakpoints.desktop`
  padding: 0 2.5rem;`};
  ${breakpoints.tablet`
  padding: 0 1.6rem;`};
`
const Nav = styled.nav`
  display: grid;
  grid-template-columns: 3rem auto minmax(auto, 1fr) 3rem;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 12;
  font-family: ${fonts.style.navbar};
  font-size: ${fonts.size.navbar.default};
  counter-reset: item 0;
`

const Brand = styled.div`
  a {
    display: block;
    color: ${(props) => props.theme.colors.navbar.brand_color};
    width: 42px;
    height: 42px;
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

function Navbar() {
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
    <Header>
      <Helmet>
        <body className={showSide ? 'blur' : ''} />
      </Helmet>
      <Nav>
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

export default Navbar
