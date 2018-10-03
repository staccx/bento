import React from "react"
import { Heading } from "@staccx/base"
import { color, font, spacing } from "@staccx/theme"
import styled from "styled-components"

const Hverdagsbil = ({ data }) => (
  <div>
    <img src={data.img} alt={data.imgAlt} />
    <Columns>
      <FirstColumn>
        <HverdagsbilHeading level={2}>{data.heading}</HverdagsbilHeading>
        <HverdagsbilSub>{data.headingSub}</HverdagsbilSub>
      </FirstColumn>
      <SecondColumn>
        <HverdagsbilHeading level={2}>
          {data.hyttebilHeading}
        </HverdagsbilHeading>
        <HverdagsbilSub>{data.hyttebilHeadingSub}</HverdagsbilSub>
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
`

const HverdagsbilHeading = styled(Heading)`
  color: ${color("primary")};
  font-size: ${font("largePlus")};
`

const HverdagsbilSub = styled.p`
  color: ${color("gray")};
`

export default Hverdagsbil
