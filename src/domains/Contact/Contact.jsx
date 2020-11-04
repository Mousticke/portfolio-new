import React from 'react'
import styled from 'styled-components'
import useMounted from '@hooks/useMounted'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import metaTag from '@config/metadata'

const StyledGrid = styled.div`
  visibility: visible;
  align-self: center;
  justify-content: center;
  text-align: center;
  padding-right: 5rem;
  padding-left: 5rem;
  .contact-subhead {
    font-size: clamp(2rem, 3rem, 4rem);
    font-weight: 700;
    justify-content: center;
  }
`

function Contact() {
  const isMounted = useMounted()
  return (
    <TransitionGroup appear component={StyledGrid}>
      <CSSTransition in={isMounted.current} classNames='fadeup' timeout={1000} unmountOnExit>
        <h5 className='contact-heading'>Are you still interested ?</h5>
      </CSSTransition>

      <CSSTransition in={isMounted.current} classNames='fadeup' timeout={1000} unmountOnExit>
        <h2 className='contact-subhead'>Let&apos;s Get In Touch !</h2>
      </CSSTransition>

      <CSSTransition in={isMounted.current} classNames='fadeup' timeout={1000} unmountOnExit>
        <p>
          I am not looking for any new opportunities. Nevertheless, you can always contact me via e-mail. My inbox is
          always open and I am ready for any collaboration or projects. Whether you contact me for an issue, question,
          comment or just for a greeting, I will try my best to answer you, should the e-mail is not a spam.
        </p>
      </CSSTransition>

      <CSSTransition in={isMounted.current} classNames='fadeup' timeout={1000} unmountOnExit>
        <a
          className='boxButton'
          href={`mailto:${metaTag.email}?subject=Contact from your Portfolio`}
          aria-label='Contact'
          style={{ transitionDelay: `${100}ms` }}
        >
          Contact Me
        </a>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Contact
