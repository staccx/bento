import React, { Component } from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import {
  List,
  ExpandListItem,
  fontSmoothing,
  Fraction,
  SplitListItem,
  Wrapper
} from "@staccx/base"
import { font, getThemeProp, color, spacing, mapProp } from "@staccx/theme"
import { lerp } from "@staccx/math"
import {
  getActualRisk,
  horizonLabels,
  horizonYears,
  riskLabels
} from "../stores/apiStore"

const listOptions = (options, prop = null, translate, separator = "&") => {
  const doMap = option => {
    return prop ? translate(option[prop]) : option
  }
  return options.length > 1
    ? options
        .slice(0, options.length - 1)
        .map(doMap)
        .join(", ") +
        ` ${separator} ` +
        options.slice(-1).map(doMap)
    : options.map(doMap)
}

const Showing = ({ risk, duration, sectors, translate }) => {
  return (
    <span>
      Showing <strong>{risk}</strong> risk, <strong>{duration}</strong>
      {sectors.length > 0 && (
        <span>
          , with extra focus on{" "}
          <strong>{listOptions(sectors, "heading", translate)}</strong>
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
    const { setStep, cmsTheme, cmsSummary, translate } = uiStore

    const riskLabel =
      riskLabels[getActualRisk(this.props.apiStore.currentRisk) - 1]

    const horizonLabel = horizonYears[apiStore.horizon - 1]

    const options = apiStore.optionList.map(option => {
      return cmsTheme.answers.find(t => t.value[0] === option)
    })

    const editButtonLabel = translate(cmsSummary.editButtonLabel)

    return (
      <Wrap size={"medium"} breakout>
        <List>
          <Expand
            title={
              <Showing
                risk={riskLabel}
                duration={horizonLabel}
                sectors={options}
                translate={translate}
              />
            }
            id="gfdgsfd54"
            expanded={uiStore.filterExpanded}
            onClick={() => uiStore.setFilterExpanded(!uiStore.filterExpanded)}
          >
            <FilterContent>
              <Heading>{translate(cmsSummary.filterHeader)}</Heading>
              <List>
                <AnswersListItem>
                  <strong> {translate(cmsSummary.riskLabel)}</strong>
                  <AnswersListDetails>
                    <Fraction
                      onClick={this.handleFractionClick}
                      value={this.state.risk}
                      max={5}
                      maxComponent={<DotButton type="button" />}
                      valueComponent={<DotButton type="button" filled />}
                    />
                  </AnswersListDetails>
                </AnswersListItem>
                <AnswersListItem>
                  <strong>{translate(cmsSummary.purposeLabel)}</strong>
                  <AnswersListDetails>
                    <div>
                      <div>{horizonLabels[apiStore.horizon - 1]}</div>
                      <Subtle>{horizonLabel}</Subtle>
                    </div>
                    <EditLink href="#purpose" onClick={() => setStep(2)}>
                      {editButtonLabel}
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
                <AnswersListItem>
                  <strong>{translate(cmsSummary.riskToleranceLabel)}</strong>
                  <AnswersListDetails>
                    {riskLabel}
                    <EditLink href="#risk" onClick={() => setStep(3)}>
                      {editButtonLabel}
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
                <AnswersListItem>
                  <strong>{translate(cmsSummary.optionsLabel)}</strong>
                  <AnswersListDetails>
                    <span>
                      {listOptions(options, "heading", translate)}
                      {options.length === 0 && (
                        <NoWrap>{translate(cmsSummary.noOptionsLabel)}</NoWrap>
                      )}
                    </span>
                    <EditLink href="#themes" onClick={() => setStep(4)}>
                      {editButtonLabel}
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
              </List>
            </FilterContent>
          </Expand>
        </List>
      </Wrap>
    )
  }
}

const Wrap = styled(Wrapper)`
  padding: 0;
`

const Heading = styled.h4`
  text-align: center;
  font-weight: bold;
`

const Expand = styled(ExpandListItem)`
  > button {
    position: relative;
    color: ${color.white};
    background-image: linear-gradient(
      90deg,
      ${getThemeProp("gradient", "laserStart") || color.white} 8.41%,
      ${getThemeProp("gradient", "laserEnd")} 95.8%
    );
    ${fontSmoothing};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02),
      0px 8px 8px rgba(0, 0, 0, 0.03), 0px 16px 16px rgba(0, 0, 0, 0.03),
      0px 32px 32px rgba(0, 0, 0, 0.03), 0px 64px 64px rgba(0, 0, 0, 0.03);
    border-radius: 15px;
    z-index: 2;

    &:hover,
    &:focus {
      color: ${color.white};

      > svg {
        fill: ${color.white} !important;
      }
    }
  }

  > div {
    max-width: none;
    padding: 0;
  }
`

const FilterContent = styled.div`
  padding-top: ${spacing.medium};
`

const DotButton = styled.button`
  margin-bottom: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  border: 0;
  border-radius: 50%;
  background-color: ${({ filled }) => (filled ? color.primary : color.line)};
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background-color: ${({ filled }) =>
      filled ? color.primary : color.secondary}
    opacity: ${p => (p.filled ? 1 : 0.6)};
  }
`

const AnswersListItem = styled(SplitListItem)`
  padding: ${spacing.small};
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

const Subtle = styled.div`
  color: ${color.wcag};
  font-size: ${font.tiny};
  font-style: normal;
  text-transform: uppercase;
`

const EditLink = styled.a`
  text-decoration: none;
  color: ${color.primary};

  &:hover,
  &:active,
  &:focus {
    color: ${color.secondary};
  }
`

export default PortfolioFilter
