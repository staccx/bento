import React from "react"
import styled from "styled-components"
import { SanityImage } from "@staccx/sanity"
import FullWidth from "../FullWidth/FullWidth"

const ImageFullWidth = ({ image, className }) => {
  console.log(image)
  return (
    <FullWidth className={className}>
      <SanityImage image={image}>
        {({ image }) => <Image src={image.url()} alt="" />}
      </SanityImage>
    </FullWidth>
  )
}

const Image = styled.img`
  display: block;
`

export default ImageFullWidth
