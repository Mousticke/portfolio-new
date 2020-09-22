import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import akim2020 from '@resources/akim2020.jpg'
import { transitionAll, breakpoints } from '@styles'

const HeroContainer = styled.div`
  grid-area: hero;
  display: flex;
  align-items: center;
  ${breakpoints.tablet`
  justify-content: center;
  `};
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
  transition: ${transitionAll};
`

function Hero({ isMounted }) {
  return (
    <TransitionGroup component={HeroContainer}>
      <CSSTransition in={isMounted.current} classNames='fade' timeout={1000} appear unmountOnExit>
        <StyledImage src={akim2020} alt='Akim Benchiha' />
      </CSSTransition>
    </TransitionGroup>
  )
}

Hero.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default React.memo(Hero)
