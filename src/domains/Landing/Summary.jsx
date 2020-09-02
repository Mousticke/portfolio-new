import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { transitionAll, breakpoints } from '@styles'

const SummaryContainer = styled.div`
  grid-area: summary;
  display: flex;
`

const StyledParagraphSummary = styled.p`
  font-size: 1rem;
  transition: ${transitionAll};
  ${breakpoints.tablet`
  text-align: center;
  `};
`

function Summary({ isMounted }) {
  return (
    <TransitionGroup component={SummaryContainer}>
      <CSSTransition in={isMounted.current} classNames='fade' timeout={1000} appear unmountOnExit>
        <StyledParagraphSummary>
          Young engineer based in Luxembourg specializing in industrial engineering, front-end development, software
          development and project management
        </StyledParagraphSummary>
      </CSSTransition>
    </TransitionGroup>
  )
}

Summary.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default React.memo(Summary)
