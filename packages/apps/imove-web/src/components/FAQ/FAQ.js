import React from "react"
import styled from "styled-components"
import { fontWeight, spacing } from "@staccx/theme"
import { Wrapper } from "@staccx/base"
import SectionHeading from "../SectionHeading/SectionHeading"

const FAQ = ({ data }) => (
  <Content>
    <Wrapper>
      <SectionHeading>{data.heading}</SectionHeading>
      <List>
        {data.faq.map(qa => (
          <Item key={qa._key}>
            <Question>{qa.question}</Question>
            <Answer>{qa.answer}</Answer>
          </Item>
        ))}
      </List>
    </Wrapper>
  </Content>
)

const Content = styled.div`
  padding: ${spacing.huge} ${spacing("largePlusPlus")};
`

const List = styled.ul``

const Item = styled.li``

const Question = styled.p`
  font-weight: ${fontWeight("bold")};
`

const Answer = styled.p``

export default FAQ
