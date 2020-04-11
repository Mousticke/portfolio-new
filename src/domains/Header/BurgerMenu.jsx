import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transitionAll, breakpoints, transitionHamburger } from '@styles'

const StyledBurgerMenu = styled.div`
  grid-column: 4;
  display: none;
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 200ms;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  ${breakpoints.tablet`display: flex;`};
`
const StyledBurgerMenuInner = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: ${(props) => (props.showSide ? `1.1em` : `1.3em`)};
  width: 2.1rem;
  height: 1.6rem;
  border: ${(props) => (props.showSide ? `0` : `1px solid ${props.theme.colors.navbar.burger_box}`)};
  border-radius: 0.4rem;
  transition: ${transitionAll};
`

const StyledBurgerMenuLines = styled.div`
  position: absolute;
  width: 2.1rem;
  height: 2px;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  background-color: ${(props) => props.theme.colors.navbar.burger_lines};
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.showSide ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.showSide ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) => (props.showSide ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${(props) => props.theme.colors.navbar.burger_lines};
    position: absolute;
    left: auto;
    right: 0;
    width: 2.1rem;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 0.2rem;
  }
  &:before {
    top: ${(props) => (props.showSide ? `0` : `-10px`)};
    opacity: ${(props) => (props.showSide ? 0 : 1)};
    transition: ${(props) => (props.showSide ? transitionHamburger.beforeActive : transitionHamburger.before)};
  }
  &:after {
    bottom: ${(props) => (props.showSide ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.showSide ? `-90deg` : `0`)});
    transition: ${(props) => (props.showSide ? transitionHamburger.afterActive : transitionHamburger.after)};
  }
`

function BurgerMenu({ showSide, toggleSideMenu }) {
  const handleToggleSideMenu = () => {
    toggleSideMenu()
  }
  return (
    <StyledBurgerMenu onClick={handleToggleSideMenu}>
      <StyledBurgerMenuInner showSide={showSide}>
        <StyledBurgerMenuLines showSide={showSide} />
      </StyledBurgerMenuInner>
    </StyledBurgerMenu>
  )
}

BurgerMenu.propTypes = {
  showSide: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
}

export default BurgerMenu
