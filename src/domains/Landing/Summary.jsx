import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { transitionAll, breakpoints } from '@styles'
import metaTag from '@config/metadata'

const SummaryContainer = styled.div`
  grid-area: summary;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledParagraphSummary = styled.p`
  font-size: 1rem;
  transition: ${transitionAll};
  ${breakpoints.tablet`
  text-align: center;
  `};
`

const StyledButton = styled.button`
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 1rem 1.8rem;
  line-height: 1;
  border-radius: 3px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.button.text};
  background-color: ${(props) => props.theme.colors.button.inner};
  border: 1px solid ${(props) => props.theme.colors.button.border};
  transition: ${transitionAll};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.button.hover};
  }
`

const StyledLink = styled.a`
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 1rem 1.8rem;
  line-height: 1;
  border-radius: 3px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.button.text};
  background-color: ${(props) => props.theme.colors.button.inner};
  border: 1px solid ${(props) => props.theme.colors.button.border};
  transition: ${transitionAll};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.button.hover};
  }
`

function Summary({ isMounted }) {
  return (
    <TransitionGroup component={SummaryContainer}>
      <CSSTransition in={isMounted.current} classNames='fadeup' timeout={1000} appear unmountOnExit>
        <StyledParagraphSummary>
          Young engineer based in Luxembourg specializing in industrial engineering, front-end development, software
          development and project management
        </StyledParagraphSummary>
      </CSSTransition>
      <TransitionGroup component={ButtonsContainer}>
        <CSSTransition in={isMounted.current} classNames='fadeup' timeout={1000} appear unmountOnExit>
          <StyledLink
            href={`mailto:${metaTag.email}?subject=Contact from your Portfolio`}
            style={{ transitionDelay: `${100}ms` }}
          >
            Contact Me
          </StyledLink>
        </CSSTransition>
        <CSSTransition in={isMounted.current} classNames='fadeup' timeout={1000} appear unmountOnExit>
          <StyledButton style={{ transitionDelay: `${200}ms` }}>Explore Me</StyledButton>
        </CSSTransition>
      </TransitionGroup>
    </TransitionGroup>
  )
}

Summary.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default React.memo(Summary)
