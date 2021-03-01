import TextEffect from "./TextEffect"
import {
  bounceUp,
  hi,
  outNow,
  scaleElastic,
  stretchIn
} from "./TextEffect.effects"
import styled from "styled-components"

export default {
  title: "effects/Text Effect",
  component: TextEffect
}

export const ScaleElastic = args => (
  <TextEffect {...scaleElastic()}>{args.text}</TextEffect>
)

ScaleElastic.args = {
  text: "This text will scale elastically"
}

export const BounceUp = args => (
  <TextEffect {...bounceUp()}>{args.text}</TextEffect>
)

BounceUp.args = {
  text: "This text will bounce up in"
}

const Wrap = styled.h1`
  font-weight: 800;
  font-size: 3.8rem;
  overflow-wrap: anywhere;
`

export const OutNow = () => (
  <Wrap>
    <TextEffect {...outNow()}>
      <span>Out</span> <span>Now</span>
    </TextEffect>
  </Wrap>
)

export const StretchIn = () => (
  <TextEffect WrapperComponent={Wrap} {...stretchIn()}>
    A new production
  </TextEffect>
)

export const Hi = () => (
  <TextEffect
    WrapperComponent={Wrap}
    wrapperProps={{ className: "letters" }}
    {...hi()}
  >
    <span>Hi</span>
    <span>!</span>
  </TextEffect>
)
