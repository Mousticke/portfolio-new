import React, { useState, useRef, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { transitionAll, fonts, breakpoints } from '@styles'
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
    'experience experience';
`
const StyledExperienceContent = styled.div`
  grid-area: experience;
  display: ${(props) => (props.isShown ? 'grid' : 'none')};
  flex-grow: 1;
  width: 100%;
  height: auto;
  padding-top: 0.5rem;
  grid-gap: 1rem;
  grid-template-rows: minmax(0, auto) minmax(0, auto);
  grid-template-columns: minmax(250px, auto) 2fr;
  grid-template-areas:
    'info mission'
    'contact contact';
  transition: ${transitionAll};
  ${breakpoints.desktop`
    grid-template-columns: minmax(100px, 200px) 2fr;
    grid-gap: 0rem;
  `}
  ${breakpoints.tablet`
  grid-template-rows: minmax(0, auto) minmax(0, auto) minmax(0, auto);
    grid-template-columns: 1fr;
    grid-gap: 0rem;
    grid-template-areas:
    'info'
    'mission'
    'contact';
  `}
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

const StyledContactExperienceContainer = styled.div`
  grid-area: contact;
  display: flex;
  flex-direction: column;
`

const StyledListContainer = styled.ul`
  display: flex;
  position: relative;
  z-index: 10;
  margin: 0;
  padding: 0;
  /*width: max-content;*/
  list-style: none;
  ${breakpoints.tablet`
    overflow-x: auto;
    
  `}
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

const StyledTitleExperience = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.heading};
  margin: 1rem 0 0 0;
  ${breakpoints.desktop`
      margin: 0.3rem 0 0 0;
  `}
`

const StyledCompanyExperience = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.link.highlight};
  transition: ${transitionAll};

  &:hover {
    font-style: italic;
    &:after {
      width: 100%;
    }
  }

  &:after {
    content: '';
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.15em;
    background-color: ${(props) => props.theme.colors.link.underline};
    transition: ${transitionAll};
    opacity: 0.5;
  }
`

const StyledListOutcomesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  overflow: hidden;
  list-style: none;
}
`
const StyledListItem = styled.li`
  position: relative;
  font-size: 0.9em;
  margin-bottom: 0.3em;
  padding-left: 1.2em;

  &:before {
    content: '◈';
    line-height: 2em;
    font-size: 0.8em;
    padding-right: 0.5em;
    color: ${(props) => props.theme.colors.list.puce};
  }
`

const StyledOutcomesExperience = styled.div`
  ${breakpoints.desktop`
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
  `}
`
const StyledComplementExperience = styled.p`
  margin: 0.3rem 0 0.3rem 0;
  font-size: 0.8rem;
  font-weight: 600;
  transition: ${transitionAll};
`

const StyledReferrals = styled.p`
  margin: 0;
`
const StyledReferralsTitle = styled.h6``

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
        experiencesData.map(({ id, company, url, title, type, summary, outcomes, startDate, endDate, contact }, i) => (
          <CSSTransition key={id} in={activeExpId === i} timeout={100} classNames='fade'>
            <StyledExperienceContent
              id={`info-${i}`}
              role='tabpanel'
              tabIndex={activeExpId === i ? '0' : '-1'}
              aria-labelledby={`exp-${i}`}
              aria-hidden={activeExpId !== i}
              isShown={activeExpId === i}
              hidden={activeExpId !== i}
            >
              <StyledInfoExperienceContainer>
                <StyledTitleExperience>{`${title}`}</StyledTitleExperience>
                <StyledCompanyExperience
                  aria-label={`${title}`}
                  href={`${url}`}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  {`@${company}`}
                </StyledCompanyExperience>
                <StyledComplementExperience>{`From ${startDate} to ${endDate}`}</StyledComplementExperience>
                <StyledComplementExperience>{`${type}`}</StyledComplementExperience>
              </StyledInfoExperienceContainer>
              <StyledMissionExperienceContainer>
                <p>{`${summary}`}</p>
                <StyledOutcomesExperience>
                  <StyledListOutcomesContainer>
                    {outcomes && outcomes.map((value) => <StyledListItem>{value}</StyledListItem>)}
                  </StyledListOutcomesContainer>
                </StyledOutcomesExperience>
              </StyledMissionExperienceContainer>
              <StyledContactExperienceContainer>
                <StyledReferralsTitle>Below my referral(s).</StyledReferralsTitle>
                {contact &&
                  contact.map(({ name, ...value }) => (
                    <div key={value.id}>
                      <StyledReferrals>{`→ ${name} - ${value.title}`}</StyledReferrals>
                    </div>
                  ))}
              </StyledContactExperienceContainer>
            </StyledExperienceContent>
          </CSSTransition>
        ))}
    </StyledGrid>
  )
}

export default Experience
