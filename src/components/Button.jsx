import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transitionAll } from '@styles'

const StyledButton = styled.button`
  font-size: 1rem;
  display: inline-block;
  font-weight: 400;
  user-select: none;
  cursor: pointer;
  transition: ${transitionAll};
  text-align: ${(props) => props.align};
  border-radius: ${(props) => (props.shape === 'square' ? `none` : `50%`)};
  padding: ${(props) => {
    switch (props.size) {
      case 'lg':
        return `0.5em 1em`
      case `md`:
        return `0.4em 0.7em`
      case `sm`:
        return `0.25em 0.5em`
      case `xs`:
        return `0.15em 0.3em`
      default:
        return `0.5em 1em`
    }
  }};
  width: ${(props) => {
    switch (props.size) {
      case 'lg':
        return `3.5em`
      case `md`:
        return `3em`
      case `sm`:
        return `2.5em`
      case `xs`:
        return `2em`
      default:
        return `3.5em`
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'lg':
        return `3.5em`
      case `md`:
        return `3em`
      case `sm`:
        return `2.5em`
      case `xs`:
        return `2em`
      default:
        return `3.5em`
    }
  }};
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
  margin: 0.3em;
  border: none;
`

const Button = React.forwardRef(({ className, backgroundColor, shape, size, align, children, type }, ref) => {
  const classes = classNames(className)
  return (
    <StyledButton
      className={classes}
      backgroundColor={backgroundColor}
      shape={shape}
      size={size}
      align={align}
      type={type}
      ref={ref}
    >
      {children}
    </StyledButton>
  )
})
Button.defaultProps = {
  className: '',
  backgroundColor: 'none',
  shape: 'square',
  size: 'lg',
  align: 'center',
  children: [],
  type: 'button',
}

Button.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
}

export default Button
