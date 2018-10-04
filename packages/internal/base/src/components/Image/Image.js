import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, themeProps } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

const Image = ({
  src,
  className,
  round,
  variant,
  aspectRatio,
  stretch,
  width,
  ...otherProps
}) => {
  if (aspectRatio) {
    const antecedent = parseInt(aspectRatio.split(":")[0], 10)
    const consequent = parseInt(aspectRatio.split(":")[1], 10)
    const ratio = consequent / antecedent
    console.log("Image:", consequent, antecedent, ratio)
    return (
      <CropContainer
        className={className}
        ratio={ratio}
        variant={variant}
        round={round}
        width={width}
        {...otherProps}
      >
        <CroppedImg src={src} stretch={stretch} />
      </CropContainer>
    )
  }
  return (
    <Img
      src={src}
      className={className}
      round={round}
      variant={variant}
      {...otherProps}
    />
  )
}

Image.themeProps = {
  image: {
    name: "IMAGE",
    description: "image style",
    type: themePropTypes.style
  },
  container: {
    name: "IMAGE_CONTAINER",
    description: "image container style",
    type: themePropTypes.style
  }
}

export const IMAGE = "IMAGE"
export const IMAGE_CONTAINER = "IMAGE_CONTAINER"

export const Img = styled.img`
  ${p => p.round && "border-radius: 50%"};
  ${themify(Image.themeProps.image)};
`

export const CroppedImg = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: none;
  min-height: 100%;
  min-width: 100%;
`

export const CropContainer = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  padding-bottom: ${p => p.ratio * 100}%;
  min-width: 100px;
  ${p => p.width && "width: " + p.width + "px"};
  ${p => p.round && "border-radius: 50%"};
  ${themify(Image.themeProps.container)};
`

Image.defaultProps = {
  className: "",
  size: "medium",
  round: false,
  aspectRatio: ""
}

Image.propTypes = {
  children: themeProps.children,
  className: PropTypes.string,
  size: themeProps.spacing,
  round: PropTypes.bool,
  aspectRatio: PropTypes.string
}

export default Image
