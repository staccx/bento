import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"
import HeroBlob from "./Hero.Blob"
import CallToAction from "./Hero.CallToAction"
import ExtraCars from "./Hero.ExtraCars"

const Hero = ({ heroType, heroMain, heroSecondary, extraCars }) => {
  if (heroMain === "secondary") {
    // heroSecondary-stuff
  } else {
    // primary:
    return (
      <Content>
        <HeroTop>
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
        </HeroTop>
        <StyledWrapper size="largePlus">
          <ExtraCars data={extraCars} />
        </StyledWrapper>
      </Content>
    )
  }
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${spacing("huge")};
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
