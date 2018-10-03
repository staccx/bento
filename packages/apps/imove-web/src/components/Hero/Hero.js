import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"
import HeroBlob from "./Hero.Blob"
import CallToAction from "./Hero.CallToAction"

const Hero = ({ heroType, heroMain, heroSecondary, extraCars }) => {
  if (heroMain === "secondary") {
    // heroSecondary-stuff
  } else {
    // primary:
    return (
      <Content>
        <StyledWrapper size="largePlus">
          <CarColumn>
            <CallToAction
              heading={heroMain.heading}
              headingSub={heroMain.headingSub}
              buttons={heroMain.buttons}
              hverdagsbil={heroMain.hverdagsbil}
            />
          </CarColumn>
          <BlobColumn>
            <HeroBlob
              logo={heroMain.logoWhite}
              heading={heroMain.headingSecondary}
              headingSub={heroMain.headingSecondarySub}
            />
          </BlobColumn>
        </StyledWrapper>
      </Content>
    )
  }
}

const StyledWrapper = styled(Wrapper)`
  display: flex;
`

const Content = styled.div`
  display: flex;
`

const CarColumn = styled.div`
  display: flex;
  align-items: bottom;
  width: 50%;
  padding-right: ${spacing("large")};
`

const BlobColumn = styled.div`
  width: 50%;
`

export default Hero
