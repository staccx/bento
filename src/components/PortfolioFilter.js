import React, { Component } from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import {
  List,
  ExpandListItem,
  fontSmoothing,
  Fraction,
  Slider,
  SplitListItem
} from "@staccx/base"
import {
  getActualRisk,
  horizonLabels,
  horizonYears,
  optionList,
  riskLabels
} from "../stores/apiStore"
import { inverseLerp, lerp } from "@staccx/base/dist/index.es"

const listOptions = (options, prop = null, separator = "&") => {
  const doMap = option => (prop ? option[prop] : option)
  return options.length > 1
    ? options
        .slice(0, options.length - 1)
        .map(doMap)
        .join(", ") +
        ` ${separator} ` +
        options.slice(-1).map(doMap)
    : options
}

const Showing = ({ risk, duration, sectors }) => {
  return (
    <span>
      Showing <strong>{risk}</strong> risk, <strong>{duration}</strong>
      {sectors.length > 0 && (
        <span>
          , with extra focus on <strong>{listOptions(sectors, "label")}</strong>
        </span>
      )}
    </span>
  )
}

@inject("uiStore", "apiStore")
@observer
class PortfolioFilter extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      risk: getActualRisk(this.props.apiStore.currentRisk),
      isExpanded: false
    }
    this.handleFractionClick = this.handleFractionClick.bind(this)
    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleExpand = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  handleFractionClick = index => {
    this.setState({
      risk: index + 1
    })
    this.props.apiStore.setRisk(lerp(1, 100, (index + 1) / 5))
  }

  render() {
    const { uiStore, apiStore } = this.props
    const { setStep } = uiStore

    const riskLabel =
      riskLabels[getActualRisk(this.props.apiStore.currentRisk) - 1]

    const horizonLabel = horizonLabels[apiStore.horizon - 1]

    const options = apiStore.optionList.map(option => {
      return optionList.find(t => t.code === option)
    })
    return (
      <List>
        <Expand
          title={
            <Showing
              risk={riskLabel}
              duration={horizonLabel}
              sectors={options}
            />
          }
          id="gfdgsfd54"
          expanded={uiStore.filterExpanded}
          onClick={() => uiStore.setFilterExpanded(!uiStore.filterExpanded)}
        >
          <FilterContent>
            <div>
              <div>
                Risk
                <Fraction
                  onClick={this.handleFractionClick}
                  value={this.state.risk}
                  max={5}
                  maxComponent={<DotButton type="button" />}
                  valueComponent={<DotButton type="button" filled />}
                />
              </div>
              <div>
                Time horizon
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  value={apiStore.horizon}
                  percentage={(apiStore.horizon - 1) / 4 * 100}
                  onChange={e => apiStore.setHorizon(e.target.value)}
                  name="time-horizon"
                />
              </div>
            </div>
            <div>
              My answers
              <List>
                <AnswersListItem>
                  <strong>Purpose</strong>
                  <AnswersListDetails>
                    {horizonLabel}
                    <Subtle>{horizonYears[apiStore.horizon - 1]}</Subtle>
                    <EditLink href="#purpose" onClick={() => setStep(2)}>
                      Edit
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
                <AnswersListItem>
                  <strong>Risk tolerance</strong>
                  <AnswersListDetails>
                    {riskLabel}
                    <EditLink href="#risk" onClick={() => setStep(3)}>
                      Edit
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
                <AnswersListItem>
                  <strong>Themes</strong>
                  <AnswersListDetails>
                    <span>
                      {listOptions(options, "label")}
                      {options.length === 0 && (
                        <NoWrap>No themes selected</NoWrap>
                      )}
                    </span>
                    <EditLink href="#themes" onClick={() => setStep(4)}>
                      Edit
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
              </List>
            </div>
          </FilterContent>
        </Expand>
      </List>
    )
  }
}

const Expand = styled(ExpandListItem)`
  > button {
    position: relative;
    display: flex;
    align-items: center;
    color: ${p => p.theme.color.white};
    background-image: linear-gradient(
      90deg,
      ${p => p.theme.gradient.laser[0]} 8.41%,
      ${p => p.theme.gradient.laser[1]} 95.8%
    );
    ${fontSmoothing};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02),
      0px 8px 8px rgba(0, 0, 0, 0.03), 0px 16px 16px rgba(0, 0, 0, 0.03),
      0px 32px 32px rgba(0, 0, 0, 0.03), 0px 64px 64px rgba(0, 0, 0, 0.03);
    border-radius: 15px;
    z-index: 2;

    &:hover,
    &:focus {
      color: ${p => p.theme.color.white};

      > svg {
        fill: ${p => p.theme.color.white} !important;
      }
    }
  }

  > div {
    max-width: none;
    padding: 0;
  }
`

const FilterContent = styled.div`
  display: flex;
  margin: 0 ${p => p.theme.spacing.medium};
  padding: ${p => p.theme.spacing.medium};
  background-color: ${p => p.theme.color.white};
  border: 1px solid ${p => p.theme.color.primary};
  border-top-width: 0;
  border-radius: ${p => p.theme.borderRadius};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02),
    0px 8px 8px rgba(0, 0, 0, 0.02);

  > div {
    flex-basis: 50%;
  }
`

const DotButton = styled.button`
  margin-bottom: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  border: 0;
  border-radius: 50%;
  background-color: ${p =>
    p.filled ? p.theme.color.primary : p.theme.color.line};
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background-color: ${p =>
      p.filled ? p.theme.color.primary : p.theme.color.secondary};
    opacity: ${p => (p.filled ? 1 : 0.6)};
  }
`

const AnswersListItem = styled(SplitListItem)`
  padding: ${p => p.theme.spacing.small};
  align-items: flex-start;
  > * {
    flex-grow: 1;
    width: 50%;
  }
`

const AnswersListDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

const NoWrap = styled.span`
  white-space: nowrap;
`

const Subtle = styled.i`
  color: ${p => p.theme.color.wcag};
  font-size: ${p => p.theme.font.size.tiny};
  font-style: normal;
  text-transform: uppercase;
`

const EditLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.color.primary};

  &:hover,
  &:active,
  &:focus {
    color: ${p => p.theme.color.secondary};
  }
`

export default PortfolioFilter
