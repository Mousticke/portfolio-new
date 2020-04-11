import React from 'react'
import navLinks from '@config/navLinks'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import useMounted from '@hooks/useMounted'
import { breakpoints, fonts } from '@styles'
import { HashLink as Link } from 'react-router-hash-link'

const NavLinksWrapper = styled.div`
  grid-column: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${breakpoints.tablet`
  display: none; 
  align-items: center;
  justify-content: center;
  `};
`
const NavList = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`
const NavListItem = styled.li`
  margin: 0 0.8rem;
  position: relative;
  font-size: ${fonts.size.navbar.default};
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${(props) => props.theme.colors.navbar.number};
    font-size: ${fonts.size.navbar.default};
  }
`
const NavLinkItem = styled(Link)`
  padding: 12px 10px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.link.hover};
  }
`

function NavLinks() {
  const { isMounted } = useMounted()
  return (
    <NavLinksWrapper>
      <NavList>
        <TransitionGroup component={null}>
          {isMounted &&
            navLinks &&
            navLinks.map(({ id, url, name }, i) => (
              <CSSTransition key={id} classNames='fadedown' timeout={1000}>
                <NavListItem key={id} style={{ transitionDelay: `${i * 100}ms` }}>
                  <NavLinkItem aria-label={name} to={url}>
                    {name}
                  </NavLinkItem>
                </NavListItem>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </NavList>
    </NavLinksWrapper>
  )
}

export default NavLinks
