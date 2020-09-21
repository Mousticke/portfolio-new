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
  ${breakpoints.tablet`
  align-items: center;
  `};
`

const StyledHeroGreeting = styled.h6`
  margin: 0;
  color: ${(props) => props.theme.colors.text.greeting};
  transition: ${transitionAll};
`
const StyledHeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: ${(props) => props.theme.colors.text.heading};
  ${breakpoints.bigDesktop`
  font-size: 3rem;
  `};
  ${breakpoints.desktop`
  font-size: 2.5rem;
  `};
  ${breakpoints.tablet`
  font-size: 3rem;
  `};
  ${breakpoints.phablet`
  font-size: 2.5rem;
  `};
  transition: ${transitionAll};
`

const StyledHeroSubTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  ${breakpoints.bigDesktop`
  font-size: 1.8rem;
  `};
  ${breakpoints.desktop`
  font-size: 1.5rem;
  `};
  ${breakpoints.tablet`
  font-size: 1.8rem;
  `};
  ${breakpoints.phablet`
  font-size: 1.5rem;
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
