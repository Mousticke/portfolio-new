import React from 'react'
import { FaFacebookF, FaGithub, FaStackOverflow, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { Button } from '@components'
import { Link } from 'react-router-dom'
import socialLinks from '@config/socialLinks'

const Socialize = styled.div`
  grid-area: social;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
  svg {
    height: fit-content;
    width: fit-content;
    fill: white;
  }
  button,
  a {
    position: relative;
    display: block;
    &:hover {
      outline: 0;
      &:before {
        transform: scale(1.2);
        filter: blur(3px);
      }
    }
    &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      z-index: -12;
      transform: scale(0.9);
    }
  }
`

function SocialContainer({ isMounted }) {
  const getSocialIcon = (name) => {
    switch (name) {
      case 'facebook':
        return <FaFacebookF />
      case 'github':
        return <FaGithub />
      case 'linkedIn':
        return <FaLinkedinIn />
      case 'instagram':
        return <FaInstagram />
      case 'stackOverflow':
        return <FaStackOverflow />
      default:
        return <></>
    }
  }

  return (
    <TransitionGroup component={Socialize} className='socialContainer'>
      {socialLinks &&
        socialLinks.map(({ id, url, name }, i) => (
          <CSSTransition in={isMounted} key={id} classNames='fadeup' timeout={1000} appear unmountOnExit>
            <Button
              style={{ transitionDelay: `${i * 100}ms` }}
              as={Link}
              ariaLabel={name}
              href={url}
              className={`${name}Button`}
              backgroundColor='#151b27'
              size='xs'
              shape='rounded'
            >
              {getSocialIcon(name)}
            </Button>
          </CSSTransition>
        ))}
    </TransitionGroup>
  )
}

SocialContainer.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default React.memo(SocialContainer)
