import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { applyVariants, spacing, commonPropTypes } from "../../../theming"
import themeProps from "./Flag.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

/**
 * This is the Flag component. The component can be used to display a list with images.
 * The flag object is a design pattern similar to the media object, however it
 * utilises `display: table[-cell];` to give us control over the vertical
 * alignments of the text and image.
 */
const Flag = ({
  children,
  className,
  img,
  reverse,
  top,
  bottom,
  responsive,
  flush,
  large,
  small,
  tiny,
  ...otherProps
}) => (
  <FlagObject
    className={className}
    reverse={reverse}
    top={top}
    bottom={bottom}
    responsive={responsive}
    flush={flush}
    large={large}
    small={small}
    tiny={tiny}
    {...otherProps}
  >
    <FlagImg>{img}</FlagImg>
    <FlagBody>{children}</FlagBody>
  </FlagObject>
)

const FlagImg = styled.div`
  margin-right: ${spacing.medium};
  > svg {
    display: block;
  }
`

const FlagBody = styled.div`
  flex: 1 1 0%;

  &,
  > :last-child {
    margin-bottom: 0;
  }
`

const reverse = css`
  > ${FlagImg} {
    order: 1;
    margin-right: 0;
    margin-left: ${spacing.medium};
  }
`

const reverseLarge = css`
  > ${FlagImg} {
    margin-right: 0;
    margin-left: ${spacing.large};
  }
`

const reverseSmall = css`
  > ${FlagImg} {
    margin-right: 0;
    margin-left: ${spacing.small};
  }
`

const reverseTiny = css`
  > ${FlagImg} {
    margin-right: 0;
    margin-left: ${spacing.tiny};
  }
`

const top = css`
  align-items: flex-start;
`

const bottom = css`
  align-items: flex-end;
`

const flush = css`
  > ${FlagImg} {
    padding-right: 0;
    padding-left: 0;
  }
`

const large = css`
  > ${FlagImg} {
    margin-right: ${spacing.large};
  }
  ${props => (props.reverse ? reverseLarge : null)};
`

const small = css`
  > ${FlagImg} {
    margin-right: ${spacing.small};
  }
  ${props => (props.reverse ? reverseSmall : null)};
`

const tiny = css`
  > ${FlagImg} {
    margin-right: ${spacing.tiny};
  }
  ${props => (props.reverse ? reverseTiny : null)};
`

const responsive = css`
  @media screen and (max-width: ${props => props.responsive}px) {
    display: block;

    > ${FlagImg}, > ${FlagBody} {
      display: block;
      margin: 0;
    }
    > ${FlagImg} {
      width: auto;
      margin-bottom: ${spacing.medium};
    }

    ${FlagImg} > img {
      max-width: 100%;
    }
  }
`

const FlagObject = styled.div`
  display: flex;
  align-items: center;
  ${props => (props.reverse ? reverse : null)};
  ${props => (props.top ? top : null)};
  ${props => (props.bottom ? bottom : null)};
  ${props => (props.flush ? flush : null)};
  ${props => (props.large ? large : null)};
  ${props => (props.small ? small : null)};
  ${props => (props.tiny ? tiny : null)};
  ${props => (props.responsive > 0 ? responsive : null)};
  ${applyVariants(themeProps.object)};
`

Flag.defaultProps = {
  className: "",
  reverse: null,
  top: null,
  bottom: null,
  responsive: 0,
  flush: null,
  large: null,
  small: null,
  tiny: null
}

Flag.propTypes = {
  /**
   * The component can be nested and is a requirement.
   */
  children: commonPropTypes.children.isRequired,
  /**
   * The component must have an img and is a requirement.
   */
  img: commonPropTypes.children.isRequired,
  /**
   * The component can be styled by assigning a class.
   */
  className: PropTypes.string,
  /**
   * The reversed prop makes the image be reversed.
   */
  reverse: PropTypes.bool,
  /**
   * This prop aligns the text to the top.
   */
  top: PropTypes.bool,
  /**
   * This prop aligns the text to the bottom.
   */
  bottom: PropTypes.bool,
  /**
   * This prop is set to fit the current viewport size.
   */
  responsive: PropTypes.number,
  /**
   * Position of the text baseline.
   */
  flush: PropTypes.bool,
  /**
   * The size of the text.
   */
  large: PropTypes.bool,
  /**
   * The size of the text.
   */
  small: PropTypes.bool,
  /**
   * The size of the text.
   */
  tiny: PropTypes.bool
}
Flag.themeProps = themeProps
Flag.createVariants = componentCreateFactory(Flag)

export default Flag
