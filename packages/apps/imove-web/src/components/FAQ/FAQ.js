import React from "react"
import styled from "styled-components"
import { media } from "../../styleUtils"
import { font, fontWeight, color, spacing } from "@staccx/theme"
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
      <More>
        <a href="">Flere spørsmål og svar</a>
      </More>
    </Wrapper>
  </Content>
)

const Content = styled.div`
  padding: ${spacing.huge} ${spacing("largePlus")};
  ${media.chromeTablet`
    padding: ${spacing.large} 0;
  `};
`

const List = styled.ul`
  font-size: ${font("h3")};
  color: ${color("secondary")};
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(${spacing("medium")} * -1);
  overflow: hidden;
`

const Item = styled.li`
  width: 50%;
  margin-bottom: ${spacing.large};
  padding: 0 ${spacing.medium};
`

const Question = styled.p`
  font-weight: ${fontWeight("bold")};
`

const Answer = styled.p``

const More = styled.p`
  font-size: ${font("h3")};
  font-weight: bold;
  color: ${color("secondary")};
  text-decoration-color: ${color("primary")};
  text-align: center;
  a {
    color: inherit;
    text-decoration-color: inherit;
  }
`

export default FAQ
