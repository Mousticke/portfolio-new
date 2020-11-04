import React, { useState, useRef, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { transitionAll, fonts } from '@styles'
import { CSSTransition } from 'react-transition-group'
import experiencesData from '@config/experiencesData'

const StyledGrid = styled.div`
  display: grid;
  visibility: visible;
  grid-template-rows: minmax(0, auto) minmax(0, auto) minmax(0, auto);
  grid-template-columns: 2fr 3fr;
  grid-template-areas:
    'title title'
    'list list'
    'info mission';
`
const StyledExperienceTitle = styled.h2`
  grid-area: title;
`

const StyledListExperienceContainer = styled.div`
  grid-area: list;
`

const StyledInfoExperienceContainer = styled.div`
  grid-area: info;
`

const StyledMissionExperienceContainer = styled.div`
  grid-area: mission;
`

const StyledListContainer = styled.ul`
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  width: max-content;
  list-style: none;
  overflow-x: auto;
`

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5rem;
  font-size: 1rem;
  padding: 1em 1em;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  background-color: transparent;
  white-space: nowrap;
  border: 0px;
  border-radius: 0px;
  border-bottom: 2px solid #70767d;
  color: ${({ isActive, ...props }) =>
    isActive ? `${props.theme.colors.button.text}` : `${props.theme.colors.button.transparent_text_green}`};
  font-family: ${fonts.style.mono};
  transition: ${transitionAll};

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.button.hover_navyBlue};
    color: ${(props) => props.theme.colors.button.text};
    outline: 0px;
  }
`
const StyledBorderHighlight = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  width: ${({ refWidth }) => `${refWidth}px`};
  background: ${(props) => props.theme.colors.barBorder.background};
  transform: translateX(calc(${({ totalWidthPrevious, refWidth }) => totalWidthPrevious - refWidth} * 1px));
  transition: transform 0.25s cubic-bezier(0.28, 0.9, 0.35, 0.96);
  transition-delay: 0.1s;
`

const StyledExperienceContent = styled.div`
  flex-grow: 1;
  width: 100%;
  height: auto;
  padding-top: 0.5rem;
`

function Experience() {
  const [activeExpId, setActiveExpId] = useState(0)
  const [length, setLength] = useState(0)
  const [mission] = useState(null)
  const [refWidth, setRefWidth] = useState(0)
  const [totalRefWidth, setTotalRefWidth] = useState(0)
  const tabMissions = useRef([React.createRef()])

  const focusedMission = useCallback(() => {
    if (tabMissions.current[mission]) {
      tabMissions.current[mission].focus()
    }
  }, [mission])

  const updateLength = () => {
    const value = experiencesData.length
    setLength(experiencesData.length)
    tabMissions.current = tabMissions.current.splice(0, value)
    for (let i = 0; i < value; i += 1) {
      tabMissions.current[i] = tabMissions.current[i] || React.createRef()
    }
    tabMissions.current = tabMissions.current.map((item) => item || React.createRef())
  }

  useEffect(() => {
    updateLength()
    tabMissions.current[0].current.focus()
    setRefWidth(tabMissions.current[0].current.clientWidth)
    setTotalRefWidth(tabMissions.current[0].current.clientWidth)
  }, [length])

  useEffect(() => {
    focusedMission()
  }, [focusedMission])

  return (
    <StyledGrid>
      <StyledExperienceTitle className='numbered-heading'>Experience</StyledExperienceTitle>

      <StyledListExperienceContainer>
        <StyledListContainer role='tablist' aria-label='Experiences lists'>
          {experiencesData &&
            experiencesData.map(({ id, company }, i) => (
              <li key={id}>
                <StyledButton
                  isActive={activeExpId === i}
                  id={`exp-${i}`}
                  onClick={() => {
                    setActiveExpId(i)
                    setRefWidth(tabMissions.current[i].current && tabMissions.current[i].current.clientWidth)
                    setTotalRefWidth(i)
                    for (let index = 0; index < i + 1; index += 1) {
                      setTotalRefWidth(
                        (prevState) =>
                          prevState +
                          (tabMissions.current[index].current && tabMissions.current[index].current.clientWidth)
                      )
                    }
                  }}
                  aria-selected={activeExpId === i}
                  aria-controls={`info-${i}`}
                  role='tab'
                  tabIndex={activeExpId === i ? '0' : '-1'}
                  ref={tabMissions.current[i]}
                >
                  {company}
                </StyledButton>
              </li>
            ))}

          <StyledBorderHighlight totalWidthPrevious={totalRefWidth} refWidth={refWidth} />
        </StyledListContainer>
      </StyledListExperienceContainer>

      {experiencesData &&
        experiencesData.map(({ id }, i) => (
          <CSSTransition key={id} in={activeExpId === { i }} timeout={250} classNames='fade'>
            <StyledExperienceContent
              id={`info-${i}`}
              role='tabpanel'
              tabIndex={activeExpId === i ? '0' : '-1'}
              aria-labelledby={`exp-${i}`}
              aria-hidden={activeExpId !== i}
              hidden={activeExpId !== i}
            >
              <StyledInfoExperienceContainer>
                <p>
                  Here come the info experience
                  {i}
                </p>
              </StyledInfoExperienceContainer>
              <StyledMissionExperienceContainer>
                <p>
                  Here come the mission experience
                  {i}
                </p>
              </StyledMissionExperienceContainer>
            </StyledExperienceContent>
          </CSSTransition>
        ))}
    </StyledGrid>
  )
}

export default Experience
