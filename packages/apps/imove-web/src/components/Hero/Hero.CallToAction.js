import React from "react"
import styled from "styled-components"
import { Heading } from "@staccx/base"
import { color, font, spacing } from "@staccx/theme"
import LinkButton from "../LinkButton/LinkButton"
import Hverdagsbil from "./Hero.Hverdagsbil"

const CallToAction = ({ heading, headingSub, buttons, hverdagsbil }) => (
  <div>
    <StyledHeading level={2}>{heading}</StyledHeading>
    <HeadingSub>{headingSub}</HeadingSub>
    <Buttons>
      {buttons.map(x => (
        <LinkButton url={x.url} key={x._key}>
          {x.text}
        </LinkButton>
      ))}
    </Buttons>
    <Hverdagsbil data={hverdagsbil} />
  </div>
)

const StyledHeading = styled(Heading)`
  font-size: ${font("huge")};
`

const HeadingSub = styled.div`
  color: ${color("secondary")};
  font-size: ${font("largePlus")};
`

const Buttons = styled.div`
  margin-top: ${spacing("large")};
`

export default CallToAction
