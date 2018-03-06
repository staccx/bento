import React, { Component } from "react"
import styled from "styled-components"
import {
  List,
  ExpandListItem,
  Wrapper,
  fontSmoothing,
  Fraction
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

class PortfolioFilter extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { risk: 3 }
    this.handleFractionClick = this.handleFractionClick.bind(this)
  }

  handleFractionClick = value => {
    this.setState({
      risk: value
    })
  }

  render() {
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
        >
          <FilterContent>
            <div>
              Risk
              <Fraction
                value={this.state.risk}
                max={5}
                maxComponent={
                  <DotButton
                    type="button"
                    onClick={() => this.handleFractionClick(5)}
                  />
                }
                valueComponent={
                  <DotButton
                    type="button"
                    onClick={() => this.handleFractionClick(2)}
                    filled
                  />
                }
              />
              <button onClick={() => console.log("cøac")}>Test!</button>
            </div>
            <div>My choices</div>
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
    background-color: ${p => p.theme.color.primary};
    opacity: 0.6;
  }
`

export default PortfolioFilter
