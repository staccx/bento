import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  List,
  ExpandListItem,
  Fraction,
  SplitListItem,
  Wrapper,
  theming
} from "@staccx/base"
import { lerp } from "@staccx/math"
import { i18nInstance } from "@staccx/i18n"
import getActualRisk from "../../../utils/getActualRisk"

const listOptions = (options, prop = null, separator = "&") => {
  const doMap = option => {
    return prop ? i18nInstance.convert(option[prop]) : option
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

const Showing = ({ risk, duration, sectors }) => {
  return (
    <span>
      Showing <strong>{risk}</strong> risk, <strong>{duration}</strong>
      {sectors.length > 0 && (
        <span>
          , with extra focus on{" "}
          <strong>{listOptions(sectors, "heading")}</strong>
        </span>
      )}
    </span>
  )
}

class PortfolioFilter extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      risk: getActualRisk(this.props.currentRisk),
      isExpanded: false,
      filterExpanded: false
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
    this.props.setRisk(lerp(1, 100, (index + 1) / 5))
  }

  render() {
    // TODO: refactor. not rely on cms content max fields. Provide functions?
    const {
      setStep,
      filterHeader,
      editButtonLabel,
      riskToleranceLabel,
      noOptionsLabel,
      optionsLabel,
      purposeLabel,
      riskLabels,
      horizonLabels,
      themes,
      horizon,
      currentRisk
    } = this.props

    const riskLabel = riskLabels[getActualRisk(currentRisk) - 1]

    const horizonLabel = horizonLabels[horizon - 1]

    const editButton = i18nInstance.convert(editButtonLabel)

    return (
      <Wrap size={"medium"} breakout>
        <List>
          <Expand
            title={
              <Showing
                risk={riskLabel}
                duration={horizonLabel}
                sectors={themes}
              />
            }
            id="gfdgsfd54"
            expanded={this.state.filterExpanded}
            onClick={() =>
              this.setState({ filterExpanded: !this.state.filterExpanded })
            }
          >
            <FilterContent>
              <Heading>{i18nInstance.convert(filterHeader)}</Heading>
              <List>
                <AnswersListItem>
                  <strong> {i18nInstance.convert(riskLabel)}</strong>
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
                  <strong>{i18nInstance.convert(purposeLabel)}</strong>
                  <AnswersListDetails>
                    <div>
                      <div>{horizonLabels[horizon - 1]}</div>
                      <Subtle>{horizonLabel}</Subtle>
                    </div>
                    <EditLink href="#purpose" onClick={() => setStep(2)}>
                      {editButton}
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
                <AnswersListItem>
                  <strong>{i18nInstance.convert(riskToleranceLabel)}</strong>
                  <AnswersListDetails>
                    {riskLabel}
                    <EditLink href="#risk" onClick={() => setStep(3)}>
                      {editButton}
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
                <AnswersListItem>
                  <strong>{i18nInstance.convert(optionsLabel)}</strong>
                  <AnswersListDetails>
                    <span>
                      {listOptions(themes, "heading")}
                      {themes.length === 0 && (
                        <NoWrap>{i18nInstance.convert(noOptionsLabel)}</NoWrap>
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
    color: ${theming.color.white};
    background-image: linear-gradient(
      90deg,
      ${theming.getProp("gradient", "laserStart") || theming.color.white} 8.41%,
      ${theming.getProp("gradient", "laserEnd")} 95.8%
    );
    ${theming.fontSmoothing};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02),
      0px 8px 8px rgba(0, 0, 0, 0.03), 0px 16px 16px rgba(0, 0, 0, 0.03),
      0px 32px 32px rgba(0, 0, 0, 0.03), 0px 64px 64px rgba(0, 0, 0, 0.03);
    border-radius: 15px;
    z-index: 2;

    &:hover,
    &:focus {
      color: ${theming.color.white};

      > svg {
        fill: ${theming.color.white} !important;
      }
    }
  }

  > div {
    max-width: none;
    padding: 0;
  }
`

const FilterContent = styled.div`
  padding-top: ${theming.spacing.medium};
`

const DotButton = styled.button`
  margin-bottom: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  border: 0;
  border-radius: 50%;
  background-color: ${({ filled }) =>
    filled ? theming.color.primary : theming.color.line};
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background-color: ${({ filled }) =>
      filled ? theming.color.primary : theming.color.secondary}
    opacity: ${p => (p.filled ? 1 : 0.6)};
  }
`

const AnswersListItem = styled(SplitListItem)`
  padding: ${theming.spacing.small};
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
  color: ${theming.color.wcag};
  font-size: ${theming.font.tiny};
  font-style: normal;
  text-transform: uppercase;
`

const EditLink = styled.a`
  text-decoration: none;
  color: ${theming.color.primary};

  &:hover,
  &:active,
  &:focus {
    color: ${theming.color.secondary};
  }
`

export default PortfolioFilter

PortfolioFilter.propTypes = {
  currentRisk: PropTypes.number,
  editButtonLabel: PropTypes.any,
  filterHeader: PropTypes.any,
  horizon: PropTypes.any,
  horizonLabels: PropTypes.any,
  noOptionsLabel: PropTypes.any,
  optionsLabel: PropTypes.any,
  purposeLabel: PropTypes.any,
  riskLabels: PropTypes.any,
  riskToleranceLabel: PropTypes.any,
  setRisk: PropTypes.func,
  setStep: PropTypes.func,
  themes: PropTypes.array
}

PortfolioFilter.defaultProps = {
  currentRisk: 1
}
