/* eslint-disable no-plusplus */
import React from 'react'
import PropTypes from 'prop-types'
import navLinks from '@config/navLinks'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { breakpoints, fonts } from '@styles'
import { NavHashLink as Link } from 'react-router-hash-link'

const NavLinksWrapper = styled.div`
  grid-area: navLinks;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${breakpoints.tablet`
  display: none; 
  align-items: center;
  justify-content: center;
  `};
`
const NavList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
`
const NavListItem = styled.li`
  margin: 1rem 0.8rem 0;
  position: relative;
  font-size: ${fonts.size.navbar.default};
  counter-increment: item 1;
  &:before {
    display: none;
    content: '0' counter(item) '.';
    text-align: right;
    color: ${(props) => props.theme.colors.navbar.number};
    font-size: ${fonts.size.navbar.default};
    ${breakpoints.tablet`
  display: inline-block
  `};
  }
`
const NavLinkItem = styled(Link)`
  padding: 1em 0;
  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.link.hover};
    & > span {
      border: 2px solid ${(props) => props.theme.colors.navbar.number}; !important;
    }
  }
`

const Border = styled.div`
  position: absolute;
  left: 2em;
  top: 2.5em;
  bottom: 1.5em;
  width: 1px;
  background: #273546;
`

const Circle = styled.span`
  display: block;
  position: absolute;
  left: -1.73em;
  top: 1.2em;
  border: solid 2px #304155; /*#304155 35e8c6*/
  border-radius: 50%;
  width: 1em;
  height: 1em;
  background: #151f2d;
  z-index: 111;
  ${breakpoints.tablet`
  display: none;
  `};
`

function NavLinks({ isMounted, activeLink }) {
  return (
    <NavLinksWrapper>
      <TransitionGroup component={NavList}>
        {navLinks &&
          navLinks.map(({ id, url, name, element }, i) => (
            <CSSTransition in={isMounted} key={id} classNames='fadedown' timeout={1000} appear unmountOnExit>
              <NavListItem key={id} style={{ transitionDelay: `${i * 100}ms` }}>
                <NavLinkItem
                  exact
                  className='nav-link'
                  smooth
                  aria-label={name}
                  to={url}
                  isActive={() => {
                    if (activeLink === element) return true
                    return false
                  }}
                >
                  <Circle className={name.toLowerCase()} />
                  {name}
                </NavLinkItem>
              </NavListItem>
            </CSSTransition>
          ))}
      </TransitionGroup>
      <Border />
    </NavLinksWrapper>
  )
}

NavLinks.propTypes = {
  isMounted: PropTypes.bool.isRequired,
  activeLink: PropTypes.string.isRequired,
}

export default React.memo(NavLinks)
