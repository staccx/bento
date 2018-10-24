import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Heading, theming } from "@staccx/base"

const Timeline = ({ items }) => (
  <Outer>
    <Content>
      {items &&
        items.map(item => (
          <Item>
            <Time level={4}>{item.title}</Time>
            <Body>{item.subtitle}</Body>
          </Item>
        ))}
    </Content>
  </Outer>
)

const Outer = styled.div``

const Content = styled.ol``

const Item = styled.li`
  position: relative;
  padding-left: ${theming.spacing.medium};

  &:not(:last-child) {
    border-left: 1px solid ${theming.color("g3")};
    padding-bottom: ${theming.spacing.medium};
  }
`

const Time = styled(Heading)`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${theming.spacing.medium};
    height: ${theming.spacing.medium};
    border: 4px solid ${theming.color.primary};
    border-radius: 50%;
    background-color: ${theming.color.white};
    transform: translateX(-50%);
  }
`

const Body = styled.p``

Timeline.propTypes = {
  items: PropTypes.array
}

export default Timeline
