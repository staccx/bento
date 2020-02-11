import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { commonPropTypes, themePropTypes } from "../../constants/themeContants"
import { applyVariants } from "../../theming"

const Image = ({
  src,
  className,
  round,
  variant,
  aspectRatio,
  stretch,
  width,
  srcset,
  ...otherProps
}) => {
  if (aspectRatio) {
    const antecedent = parseInt(aspectRatio.split(":")[0], 10)
    const consequent = parseInt(aspectRatio.split(":")[1], 10)
    const ratio = consequent / antecedent

    return (
      <CropContainer
        className={className}
        ratio={ratio}
        variant={variant}
        round={round}
        width={width}
        {...otherProps}
      >
        <CroppedImg
          srcSet={srcset}
          src={src}
          stretch={stretch}
          variant={variant}
        />
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
  ${applyVariants(Image.themeProps.image)};
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
  ${applyVariants(Image.themeProps.container)};
`

Image.defaultProps = {
  className: "",
  size: "medium",
  round: false,
  aspectRatio: ""
}

Image.propTypes = {
  /**
   * The component can be nested around children, but is not required.
   */
  children: commonPropTypes.children,
  /**
   * This is the selection of the class to style the component.
   */
  className: PropTypes.string,
  /**
   * This prop is used to set the size of the component.
   */
  size: commonPropTypes.spacing,
  /**
   * This prop is used to make the component round.
   */
  round: PropTypes.bool,
  /**
   * This prop is used to set the aspect ratio of the component.
   */
  aspectRatio: PropTypes.string
}

export default Image
