import React from "react"
import styled from "styled-components"
import { Heading } from "@staccx/base"
import { spacing, wrapper, font } from "@staccx/theme"
import { SanityImage } from "@staccx/sanity"
import FullWidth from "../FullWidth/FullWidth"

const ImageFullWidth = ({ image, heading }) => (
  <SanityImage image={image}>
    {({ image }) => (
      <Outer>
        {heading && <StyledHeading level={1}>{heading}</StyledHeading>}
        <Image img={image.url()} alt="" />
      </Outer>
    )}
  </SanityImage>
)

const headerHeight = "82px"

const Outer = styled.div`
  position: relative;
  margin-top: calc(-${spacing("grid")} - ${headerHeight});
`

const StyledHeading = styled(Heading)`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: ${wrapper.medium};
  z-index: 10;
  text-align: center;

  font-size: 86px;

  @media only screen and (max-width: ${wrapper.large}) {
    font-size: ${font.h1};
  }

  @media only screen and (max-width: ${wrapper.medium}) {
    font-size: ${font.h2};
  }
`

const Image = styled(FullWidth)`
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  min-height: 40vh;

  @media only screen and (max-width: ${wrapper.large}) {
    min-height: 60vh;
  }
`

export default ImageFullWidth
