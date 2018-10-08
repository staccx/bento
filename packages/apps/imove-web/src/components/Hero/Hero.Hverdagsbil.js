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
  @media only screen and (max-width: ${wrapper("large")}) {
    margin-top: 2vw;
  }
`

const FirstColumn = styled.div`
  width: 75%;
  padding-right: 20px;
`

const SecondColumn = styled.div`
  flex: 1;
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
