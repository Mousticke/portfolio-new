import React, { useContext } from 'react'
import { FaFacebookF, FaGithub, FaStackOverflow, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import styled, { ThemeContext } from 'styled-components'
import { Button } from '@components'

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
        className='facebookButton'
        backgroundColor={themeContext.colors.constant.facebookButton}
        size='xs'
        shape='rounded'
      >
        <FaFacebookF />
      </Button>
      <Button backgroundColor={themeContext.colors.constant.githubButton} size='xs' shape='rounded'>
        <FaGithub />
      </Button>
      <Button backgroundColor={themeContext.colors.constant.stackOverflowButton} size='xs' shape='rounded'>
        <FaStackOverflow />
      </Button>
      <Button backgroundColor={themeContext.colors.constant.instagramButton} size='xs' shape='rounded'>
        <FaInstagram />
      </Button>
      <Button backgroundColor={themeContext.colors.constant.linkedInButton} size='xs' shape='rounded'>
        <FaLinkedinIn />
      </Button>
    </Socialize>
  )
}

export default SocialContainer
