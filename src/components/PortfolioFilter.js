import React, { Component } from "react"
import styled from "styled-components"
import { inject } from "mobx-react"
import {
  List,
  ExpandListItem,
  fontSmoothing,
  Fraction,
  Slider,
  SplitListItem
} from "@staccx/base"

const Showing = ({ risk, duration, sectors }) => {
  return (
    <span>
      Showing <strong>{risk}</strong> risk, <strong>{duration} term</strong>,
      with extra focus on{" "}
      <strong>
        {sectors.length > 1
          ? sectors.slice(0, sectors.length - 1).join(", ") +
            " & " +
            sectors.slice(-1).map(sector => sector)
          : sectors}
      </strong>
    </span>
  )
}

@inject("uiStore")
class PortfolioFilter extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      risk: 3,
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
  }

  render() {
    const { uiStore } = this.props
    const { setStep } = uiStore

    return (
      <List>
        <Expand
          title={
            <Showing
              risk="medium"
              duration="short"
              sectors={["Europe", "Digitalization"]}
            />
          }
          id="gfdgsfd54"
          expanded={this.state.isExpanded}
          onClick={() => this.toggleExpand()}
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
                  min={0}
                  max={20}
                  step={5}
                  defaultValue={10}
                  percentage={50}
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
                    Pension
                    <Subtle>20+ years</Subtle>
                    <EditLink href="#purpose" onClick={() => setStep(2)}>
                      Edit
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
                <AnswersListItem>
                  <strong>Risk tolerance</strong>
                  <AnswersListDetails>
                    I keep my cool
                    <Subtle>Medium</Subtle>
                    <EditLink href="#risk" onClick={() => setStep(3)}>
                      Edit
                    </EditLink>
                  </AnswersListDetails>
                </AnswersListItem>
                <AnswersListItem>
                  <strong>Themes</strong>
                  <AnswersListDetails>
                    <span>
                      <NoWrap>USA</NoWrap>, <NoWrap>Digitalisation</NoWrap>,{" "}
                      <NoWrap>Clean energy</NoWrap>
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
