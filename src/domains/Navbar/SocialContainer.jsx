import React, { useContext } from 'react'
import { FaFacebookF, FaGithub, FaStackOverflow, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import styled, { ThemeContext } from 'styled-components'
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
  button {
    &:hover {
      outline: 0;
      opacity: 0.8;
      color: #fff;
    }
  }
`

function SocialContainer() {
  const themeContext = useContext(ThemeContext)

  return (
    <Socialize>
      <Button
        as={Link}
        ariaLabel='facebook'
        href='https://facebook.com/Mousticke'
        className='facebookButton'
        backgroundColor={themeContext.colors.constant.facebookButton}
        size='xs'
        shape='rounded'
      >
        <FaFacebookF />
      </Button>
      <Button
        as={Link}
        ariaLabel='github'
        href='https://github.com/Mousticke'
        backgroundColor={themeContext.colors.constant.githubButton}
        size='xs'
        shape='rounded'
      >
        <FaGithub />
      </Button>
      <Button
        as={Link}
        ariaLabel='stackOverflow'
        href='https://stackoverflow.com/users/8270034/akim-benchiha'
        backgroundColor={themeContext.colors.constant.stackOverflowButton}
        size='xs'
        shape='rounded'
      >
        <FaStackOverflow />
      </Button>
      <Button
        as={Link}
        ariaLabel='instagram'
        href='https://www.instagram.com/moustick_/'
        backgroundColor={themeContext.colors.constant.instagramButton}
        size='xs'
        shape='rounded'
      >
        <FaInstagram />
      </Button>
      <Button
        as={Link}
        ariaLabel='linkedIn'
        href='https://www.linkedin.com/in/akim-benchiha'
        backgroundColor={themeContext.colors.constant.linkedInButton}
        size='xs'
        shape='rounded'
      >
        <FaLinkedinIn />
      </Button>
    </Socialize>
  )
}

export default SocialContainer
