import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import {
  commonPropTypes,
  themePropTypes
} from "../../../constants/themeContants"
import { applyVariants, spacing } from "../../../theming"

/**
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

Flag.themeProps = {
  object: {
    name: "FLAG_OBJECT",
    description: "",
    type: themePropTypes.style
  }
}

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
  ${applyVariants(Flag.themeProps.object)};
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
  children: commonPropTypes.children.isRequired,
  img: commonPropTypes.children.isRequired,
  className: PropTypes.string,
  reverse: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  responsive: PropTypes.number,
  flush: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool
}

export default Flag
