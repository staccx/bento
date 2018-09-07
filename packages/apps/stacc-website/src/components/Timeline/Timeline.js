import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Heading } from "@staccx/base"
import { spacing, color } from "@staccx/theme"

const Timeline = ({ items }) => (
  <Outer>
    <Content>
      {items.map(item => (
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
  padding-left: ${spacing.medium};

  &:not(:last-child) {
    border-left: 1px solid ${color("g3")};
    padding-bottom: ${spacing.medium};
  }
`

const Time = styled(Heading)`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${spacing.medium};
    height: ${spacing.medium};
    border: 4px solid ${color.primary};
    border-radius: 50%;
    background-color: ${color.white};
    transform: translateX(-50%);
  }
`

const Body = styled.p``

Timeline.propTypes = {
  items: PropTypes.array
}

export default Timeline
