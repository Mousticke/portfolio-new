import React from 'react'
import { transitionAll } from '@styles'
import styled from 'styled-components'
import akim2020 from '@resources/akim2020.jpg'

const StyledAboutHeroContainer = styled.div`
  position: relative;
  display: block;
  transition: ${transitionAll};
  box-shadow: 0px 0px 16px 2px #00e0d8;
  border-radius: 50%;
  &:hover {
    cursor pointer;
    border-radius: 50%;
    box-shadow: 0px 0px 23px 15px #00e0d8; 
    & > img{
      opacity: 0.5;
    }
    .about__img-caption{
      opacity: 1;
      color: white;
      font-weight: 700;
      font-size:1.3em;
    }
  }

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: -12;
  }
`

const StyledImageCaption = styled.div`
  transition: ${transitionAll};
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 350px;
  max-height: 350px;
  border-radius: 50%;
  position: relative;
  display: block;
  transition: ${transitionAll};
`

function Hero() {
  return (
    <StyledAboutHeroContainer>
      <StyledImage src={akim2020} alt='Akim Benchiha' />
      <StyledImageCaption className='about__img-caption'>
        <p>Download Resumé</p>
      </StyledImageCaption>
    </StyledAboutHeroContainer>
  )
}

export default Hero
