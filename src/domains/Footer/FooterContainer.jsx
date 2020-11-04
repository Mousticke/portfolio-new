import React from 'react'
import styled from 'styled-components'
import { transitionAll, fonts } from '@styles'

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  color: ${(props) => props.theme.colors.text.default};
  font-family: ${fonts.style.mono};
`

const StyledTextLink = styled.a`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.link.default};
  text-decoration: none;
  text-decoration-skip-ink: auto;
  cursor: pointer;
  transition: ${transitionAll};

  &:hover {
    color: ${(props) => props.theme.colors.link.hover};
  }
`

function FooterContainer() {
  return (
    <StyledFooterContainer>
      <StyledTextLink
        aria-label='Lien github du Portfolio'
        href='https://github.com/Mousticke/portfolio-new'
        target='_blank'
        rel='noreferrer noopener'
      >
        <p>Portfolio v1</p>
        <p>Designed and built by Akim Benchiha</p>
        <p>React ~ Styled Component</p>
      </StyledTextLink>
    </StyledFooterContainer>
  )
}

export default FooterContainer
