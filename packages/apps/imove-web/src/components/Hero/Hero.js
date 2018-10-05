import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"
import HeroBlob from "./Hero.Blob"
import CallToAction from "./Hero.CallToAction"
import ExtraCars from "./Hero.ExtraCars"

const Hero = ({ data }) => {
  const isReversed = data.variant === "secondary"
  return (
    <Content>
      <HeroTop>
        <StyledWrapper size="largePlus" isReversed={isReversed}>
          <CarColumn isReversed={isReversed}>
            <CallToAction
              heading={data.heading}
              headingSub={data.headingSub}
              buttons={data.buttons}
              hverdagsbil={data.hverdagsbil}
            />
          </CarColumn>
          <BlobColumn>
            <HeroBlob
              logo={data.logoWhite}
              heading={data.headingSecondary}
              headingSub={data.headingSecondarySub}
            />
          </BlobColumn>
        </StyledWrapper>
      </HeroTop>
      <StyledWrapper size="largePlus">
        <ExtraCars data={data.extraCars} isReversed={isReversed} />
      </StyledWrapper>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing("huge")} 0;
`

const HeroTop = styled.div`
  display: block;
  width: 100%;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0) 0%, #f6f6f6 100%);
  padding-bottom: ${spacing("large")};
`

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${p => (p.isReversed ? "row-reverse" : "row")};
`

const CarColumn = styled.div`
  display: flex;
  align-items: bottom;
  width: 50%;
  padding-right: ${p => (p.isReversed ? "0" : `${spacing("large")(p)}`)};
  padding-left: ${p => (p.isReversed ? `${spacing("large")(p)}` : "0")};
`

const BlobColumn = styled.div`
  width: 50%;
`

export default Hero
