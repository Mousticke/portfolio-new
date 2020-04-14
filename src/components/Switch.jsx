import React, { useContext } from 'react'
import styled from 'styled-components'
import night from '@resources/night.png'
import sunny from '@resources/sunny.png'
import { transitionAll } from '@styles'
import { ThemeContext } from '../App'

const SwitchContainer = styled.div`
  display: flex;
  position: relative;
  grid-area: theming;
  justify-content: center;
`

const SwitchLabel = styled.label`
  position: relative;
  width: 40px;
  height: 16px;
  z-index: 100;
  transition: ${transitionAll};
  & > input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .slider {
      background-color: #1d3548;
    }
    &:focus + .slider {
      box-shadow: 0 0 1px #1d3548;
    }
    &:checked + .slider:before {
      -webkit-transform: translateX(1.1rem);
      -ms-transform: translateX(1.1rem);
      transform: translateX(1.1rem);
      background-image: url(${night});
      background-repeat: no-repeat;
      background-color: black;
    }
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    &:before {
      position: absolute;
      border-radius: 50%;
      content: '';
      height: 24px;
      width: 24px;
      left: 0em;
      top: -0.25em;
      background-color: white;
      background-image: url(${sunny});
      background-repeat: no-repeat;
      background-position: center;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
`

function Switch() {
  const { theme, dispatch } = useContext(ThemeContext)

  return (
    <SwitchContainer>
      <span style={{ paddingRight: `1rem` }}>Light</span>
      <SwitchLabel htmlFor='theme' className='switch'>
        <input
          id='theme'
          type='checkbox'
          checked={theme.isDark}
          onChange={() => dispatch({ type: theme.isDark ? 'LIGHT' : 'DARK', payload: !theme.isDark })}
        />
        <span className='slider round' />
      </SwitchLabel>
      <span style={{ paddingLeft: `1rem` }}>Dark</span>
    </SwitchContainer>
  )
}

export default Switch
