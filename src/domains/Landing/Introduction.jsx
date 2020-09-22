import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpoints, transitionAll } from '@styles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const IntroContainer = styled.div`
  grid-area: intro;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoints.tablet`
  align-items: center;
  text-align:center;
  `};
`

const StyledHeroGreeting = styled.h6`
  margin: 0;
  color: ${(props) => props.theme.colors.text.greeting};
  transition: ${transitionAll};
`
const StyledHeroTitle = styled.h1`
  font-size: 5rem;
  margin: 0;
  color: ${(props) => props.theme.colors.text.heading};
  ${breakpoints.bigDesktop`
  font-size: 4.5rem;
  `};
  ${breakpoints.desktop`
  font-size: 4rem;
  `};
  ${breakpoints.tablet`
  font-size: 4.5rem;
  `};
  ${breakpoints.phablet`
  font-size: 4rem;
  `};
  transition: ${transitionAll};
`

const StyledHeroSubTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  ${breakpoints.bigDesktop`
  font-size: 2.1rem;
  `};
  ${breakpoints.desktop`
  font-size: 1.8rem;
  `};
  ${breakpoints.tablet`
  font-size: 2.1rem;
  `};
  ${breakpoints.phablet`
  font-size: 1.8rem;
  `};
  transition: ${transitionAll};
`

function Introduction({ isMounted }) {
  return (
    <IntroContainer>
      <TransitionGroup component={null}>
        <CSSTransition in={isMounted} classNames='fadeup' timeout={1000} appear unmountOnExit>
          <StyledHeroGreeting style={{ transitionDelay: `${100}ms` }}>Hi there, my name is</StyledHeroGreeting>
        </CSSTransition>
        <CSSTransition in={isMounted} classNames='fadeup' timeout={1000} appear unmountOnExit>
          <StyledHeroTitle style={{ transitionDelay: `${200}ms` }}>Akim Benchiha</StyledHeroTitle>
        </CSSTransition>
        <CSSTransition in={isMounted} classNames='fadeup' timeout={1000} appear unmountOnExit>
          <StyledHeroSubTitle style={{ transitionDelay: `${300}ms` }}>I am a software engineer</StyledHeroSubTitle>
        </CSSTransition>
      </TransitionGroup>
    </IntroContainer>
  )
}

Introduction.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default React.memo(Introduction)
