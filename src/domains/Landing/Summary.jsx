import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { transitionAll, breakpoints } from '@styles'
import metaTag from '@config/metadata'
import { ModalContext } from '@context/modalContext'
import { Map } from '@components'
import resumeEN from '@resources/resumeEN.pdf'

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

function Summary({ isMounted }) {
  const { handleModal } = useContext(ModalContext)
  return (
    <SummaryContainer>
      <TransitionGroup appear component={null}>
        <CSSTransition in={isMounted} classNames='fadeup' timeout={1000} unmountOnExit>
          <StyledParagraphSummary>
            Young engineer based in Luxembourg specializing in industrial engineering, front-end development, software
            development and project management
          </StyledParagraphSummary>
        </CSSTransition>
      </TransitionGroup>
      <TransitionGroup appear component={ButtonsContainer}>
        <CSSTransition in={isMounted} classNames='fadeup' timeout={1000} unmountOnExit>
          <a
            className='boxButton'
            href={`mailto:${metaTag.email}?subject=Contact from your Portfolio`}
            aria-label='Contact'
            style={{ transitionDelay: `${100}ms` }}
          >
            Contact Me
          </a>
        </CSSTransition>
        <CSSTransition in={isMounted} classNames='fadeup' timeout={1000} unmountOnExit>
          <a className='boxButton' href={resumeEN} aria-label='Resumé' style={{ transitionDelay: `${100}ms` }}>
            Resumé
          </a>
        </CSSTransition>
        <CSSTransition in={isMounted} classNames='fadeup' timeout={1000} unmountOnExit>
          <button
            type='button'
            className='boxButton'
            style={{ transitionDelay: `${100}ms` }}
            aria-label='Explore'
            onClick={() => handleModal(<Map />)}
          >
            Explore Me
          </button>
        </CSSTransition>
      </TransitionGroup>
    </SummaryContainer>
  )
}

Summary.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default React.memo(Summary)
