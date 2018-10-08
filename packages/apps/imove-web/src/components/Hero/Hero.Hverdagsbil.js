import React from "react"
import { Heading } from "@staccx/base"
import { color, font, spacing, wrapper } from "@staccx/theme"
import { SanityImage } from "@staccx/sanity"
import styled from "styled-components"

const Hverdagsbil = ({ data }) => (
  <div>
    <SanityImage image={data.img}>
      {({ image }) => <img src={image.url()} alt={data.imgAlt} />}
    </SanityImage>
    <Columns>
      <FirstColumn>
        <HeroCarHeading level={3}>{data.heading}</HeroCarHeading>
        <HeroCarSub>{data.headingSub}</HeroCarSub>
      </FirstColumn>
      <SecondColumn>
        <HeroCarHeading level={2}>{data.hyttebilHeading}</HeroCarHeading>
        <HeroCarSub>{data.hyttebilHeadingSub}</HeroCarSub>
      </SecondColumn>
    </Columns>
  </div>
)

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing("large")};
`

const FirstColumn = styled.div``

const SecondColumn = styled.div`
  position: relative;
  top: calc(${spacing("large")} * -1 - 50px);
  @media only screen and (max-width: ${wrapper("large")}) {
    position: static;
  }
`

const HeroCarHeading = styled(Heading)`
  color: ${color("primary")};
  font-size: ${font("largePlus")};
  @media only screen and (max-width: ${wrapper("large")}) {
    font-size: ${font("large")};
  }
`

const HeroCarSub = styled.p`
  color: ${color("gray")};
`

export default Hverdagsbil
