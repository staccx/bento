import React from "react"
import styled from "styled-components"
import { spacing, color, font } from "@staccx/theme"
import { Heading } from "@staccx/base"

const ExtraCars = ({ data, isReversed }) => (
  <Row isReversed={isReversed}>
    <Column>
      <InfoHeading level={2}>{data.heading}</InfoHeading>
      <p>{data.paragraph}</p>
    </Column>
    <CarColumn>
      {data.cars.map(x => (
        <Car key={x._key}>
          <img src={x.img} alt={x.alt} />
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
  margin: ${spacing("large")} calc(${spacing("large")} * -1) 0;
`

const InfoHeading = styled(Heading)`
  color: ${color("primary")};
`

const Column = styled.div`
  padding: 0 ${spacing("large")};
`

const CarColumn = styled(Column)`
  display: flex;
  width: 66.66%;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 calc(${spacing("large")} * -1);
`

const Car = styled.div`
  padding: 0 ${spacing("large")};
`

const HeroCarHeading = styled(Heading)`
  color: ${color("primary")};
  font-size: ${font("largePlus")};
`

const HeroCarSub = styled.p`
  color: ${color("gray")};
`

export default ExtraCars
