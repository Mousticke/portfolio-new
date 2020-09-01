import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'

const StyledTypist = styled.div`
  grid-area: typist;
  display: flex;
  justify-content: center;
  .typist {
    &-import,
    &-keyword,
    &-from {
      color: ${'#7fdbca'};
    }
    &-react {
      color: ${'#d6deeb'};
    }
    &-functionName {
      color: ${'#ef9839'};
    }
    &-text {
      color: ${'#addb67'};
      &-html {
        color: ${'#fff'};
      }
    }
    &-braces {
      color: ${'#c792ea'};
    }
    &-className {
      font-style: italic;
    }
    &-indent {
      &-0 {
        margin-left: 0rem;
      }
      &-1 {
        margin-left: 1rem;
      }
      &-2 {
        margin-left: 2rem;
      }
      &-3 {
        margin-left: 4rem;
      }
    }
  }
`

function TypistIntro() {
  const [typed, setTyped] = useState(false)

  useEffect(() => {
    setTyped(false)
  }, [typed])

  return (
    <StyledTypist>
      <Typist avgTypingDelay={50}>
        <span className='typist-indent-0'>
          <span className='typist-import'>import &nbsp;</span>
          <span className='typist-react'>React&nbsp;</span>
          <span className='typist-from'>from&nbsp;</span>
          <span className='typist-text'>&apos;React&apos;&nbsp;</span>
        </span>
        <p />
        <span className='typist-indent-0'>
          <span className='typist-keyword'>const&nbsp;</span>
          <span className='typist-functionName'>Akim&nbsp;</span>
          <span className='typist-keyword'>=&nbsp;</span>
          <span className='typist-braces'>()&nbsp;</span>
          <span className='typist-keyword'>=&gt;&nbsp;</span>
          <span className='typist-keyword'>{`{`}</span>
        </span>
        <div />
        <span className='typist-indent-1'>
          <span className='typist-keyword'>return&nbsp;</span>
          <span className='typist-braces'>(&nbsp;</span>
        </span>
        <div />
        <span className='typist-indent-2'>
          <span className='typist-braces'>{`<`}</span>
          <span className='typist-keyword'>div&nbsp;</span>
          <span className='typist-className'>className=&nbsp;</span>
          <span className='typist-text'>&quot;d-flex&quot;</span>
          <span className='typist-braces'>{`>`}</span>
        </span>
        <div />
        <span className='typist-indent-3'>
          <span className='typist-text-html'>This is Akim&apos;s Portfolio&nbsp;</span>
        </span>
        <div />
        <span className='typist-indent-2'>
          <span className='typist-braces'>{`</`}</span>
          <span className='typist-keyword'>div</span>
          <span className='typist-braces'>{`>`}</span>
        </span>
        <div />
        <span className='typist-indent-2'>
          <span className='typist-braces'>)</span>
        </span>
        <div />
        <span className='typist-indent-1'>
          <span className='typist-braces'>{`}`}</span>
        </span>
        <p />
        <span className='typist-indent-0'>
          <span className='typist-keyword'>export default&nbsp;</span>
          <span className='typist-functionName'>Akim</span>
        </span>
      </Typist>
    </StyledTypist>
  )
}

export default TypistIntro
