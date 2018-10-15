import React from "react"
import styled from "styled-components"
import { media } from "../../styleUtils"
import { spacing, color, font } from "@staccx/theme"
import { Heading } from "@staccx/base"
import { SanityImage } from "@staccx/sanity"

const ExtraCars = ({ data, isReversed }) => (
  <Row isReversed={isReversed}>
    <TextColumn>
      <InfoHeading level={2}>{data.heading}</InfoHeading>
      <p>{data.paragraph}</p>
    </TextColumn>
    <CarColumn>
      {data.cars.map(x => (
        <Car key={x._key}>
          <SanityImage image={x.img}>
            {({ image }) => <img src={image.url()} alt={x.alt} />}
          </SanityImage>
          <HeroCarHeading level={3}>{x.heading}</HeroCarHeading>
          <HeroCarSub>{x.headingSub}</HeroCarSub>
        </Car>
      ))}
    </CarColumn>
  </Row>
)

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: ${p => (p.isReversed ? "row-reverse" : "row")};
  margin-top: ${spacing("large")};
  ${media.chromeLaptop`
    flex-wrap: wrap;
  `};
`

const InfoHeading = styled(Heading)`
  color: ${color("primary")};
`

const Column = styled.div`
  padding: 0 ${spacing("large")};
`

const TextColumn = styled(Column)`
  flex: 1;
  padding-left: 0;
  ${media.chromeLaptop`
    width: 100%;
    margin-bottom: ${spacing.medium}
    padding-right: 0;
  `};
`

const CarColumn = styled(Column)`
  display: flex;
  width: 700px;
  padding-right: 0;
  justify-content: space-between;
  align-items: flex-end;
  /* margin: 0 calc(${spacing("large")} * -1); */
  ${media.chromeLaptop`
    width: 100%;
    padding-left: 0;
  `};
`

const Car = styled.div`
  padding: 0 ${spacing.large};
  ${media.chromeLaptop`
    padding: 0 ${spacing.medium}
  `} &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`

const HeroCarHeading = styled(Heading)`
  color: ${color("primary")};
  font-size: ${font("largePlus")};
`

const HeroCarSub = styled.p`
  color: ${color("gray")};
`

export default ExtraCars
