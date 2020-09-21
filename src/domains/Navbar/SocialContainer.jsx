import React from 'react'
import { FaFacebookF, FaGithub, FaStackOverflow, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'
import { Button } from '@components'
import { Link } from 'react-router-dom'

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

function SocialContainer() {
  return (
    <Socialize>
      <Button
        as={Link}
        ariaLabel='facebook'
        href='https://facebook.com/Mousticke'
        className='facebookButton'
        backgroundColor='#151b27'
        size='xs'
        shape='rounded'
      >
        <FaFacebookF />
      </Button>
      <Button
        as={Link}
        ariaLabel='github'
        href='https://github.com/Mousticke'
        className='githubButton'
        backgroundColor='#151b27'
        size='xs'
        shape='rounded'
      >
        <FaGithub />
      </Button>
      <Button
        as={Link}
        ariaLabel='stackOverflow'
        href='https://stackoverflow.com/users/8270034/akim-benchiha'
        className='stackOverflowButton'
        backgroundColor='#151b27'
        size='xs'
        shape='rounded'
      >
        <FaStackOverflow />
      </Button>
      <Button
        as={Link}
        ariaLabel='instagram'
        href='https://www.instagram.com/moustick_/'
        className='instagramButton'
        backgroundColor='#151b27'
        size='xs'
        shape='rounded'
      >
        <FaInstagram />
      </Button>
      <Button
        as={Link}
        ariaLabel='linkedIn'
        href='https://www.linkedin.com/in/akim-benchiha'
        className='linkedInButton'
        backgroundColor='#151b27'
        size='xs'
        shape='rounded'
      >
        <FaLinkedinIn />
      </Button>
    </Socialize>
  )
}

export default SocialContainer
