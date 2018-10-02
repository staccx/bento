import React from "react"
import styled from "styled-components"
import { color } from "@staccx/theme"
import { Heading } from "@staccx/base"
import HeroBlob from "./Hero.Blob.js"

const Hero = ({ heroType, heroMain, heroSecondary, extraCars }) => {
  if (heroMain === "secondary") {
    // heroSecondary-stuff
  } else {
    // primary:
    return (
      <HeroInner>
        <CarColumn>
          <h2>{heroMain.heading}</h2>
          <div>{heroMain.headingSub}</div>
          <div>
            {heroMain.buttons.map(x => (
              <a href={x.url} key={x._key}>
                {x.text}
              </a>
            ))}
          </div>
          <div>
            <img
              src={heroMain.hverdagsbilImg}
              alt={heroMain.hverdagsbilImgAlt}
            />
          </div>
        </CarColumn>
        <BlobColumn>
          <HeroBlob
            logo={heroMain.logoWhite}
            heading={heroMain.headingSecondary}
            headingSub={heroMain.headingSecondarySub}
          />
        </BlobColumn>
      </HeroInner>
    )
  }
}

const HeroInner = styled.div`
  display: flex;
`

const CarColumn = styled.div`
  width: 50%;
`

const BlobColumn = styled.div`
  width: 50%;
`

export default Hero
