import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const StyledCitation = styled.div`
  grid-area: citation;
  blockquote {
    text-align: center;
  }
  p {
    font-size: 0.83rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-style: italic;
    &:before {
      content: open-quote;
    }
    &:after {
      content: close-quote;
    }
  }
  footer {
    font-size: 0.83rem;
    color: ${(props) => props.theme.colors.text.quote_author};
    &:before {
      content: '\\2014\\00a0';
    }
  }
`
function Citation({ isMounted }) {
  return (
    <TransitionGroup component={null}>
      <CSSTransition in={isMounted.current} classNames='fade' timeout={1000} appear unmountOnExit>
        <StyledCitation>
          <blockquote>
            <p>
              If debugging is the process of removing software bugs, then programming must be the process of putting
              them in.
            </p>
            <footer>Edsger W. Dijkstra</footer>
          </blockquote>
        </StyledCitation>
      </CSSTransition>
    </TransitionGroup>
  )
}

Citation.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default React.memo(Citation)
