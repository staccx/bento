import React, { Component } from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import {
  List,
  ExpandListItem,
  fontSmoothing,
  Fraction,
  Slider,
  SplitListItem,
  Wrapper,
  lerp
} from "@staccx/base"
import {
  getActualRisk,
  horizonLabels,
  horizonYears,
  optionList,
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
      <Wrapper size={"medium"}>
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
              {translate(cmsSummary.filterHeader)}
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
                    {horizonLabels[apiStore.horizon - 1]}
                    <Subtle>{horizonLabel}</Subtle>
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
      </Wrapper>
    )
  }
}

const Expand = styled(ExpandListItem)`
  > button {
    position: relative;
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
