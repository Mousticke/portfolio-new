import React from 'react'
import styled from 'styled-components'

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
function Citation() {
  return (
    <StyledCitation>
      <blockquote>
        <p>
          If debugging is the process of removing software bugs, then programming must be the process of putting them
          in.
        </p>
        <footer>Edsger W. Dijkstra</footer>
      </blockquote>
    </StyledCitation>
  )
}

export default Citation
