import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import {
  targetSize,
  spacing,
  borderRadius,
  font,
  color,
  themify
} from "@staccx/theme"

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
    {...otherProps}
  >
    <FlagImg>{img}</FlagImg>
    <FlagBody>{children}</FlagBody>
  </FlagObject>
)

export const FLAG_IMG = "FLAG_IMG"
const FlagImg = styled.div`
  display: table-cell;
  width: 1px;
  vertical-align: middle;
  padding-right: ${spacing.medium()};
  > img {
    max-width: none;
  }
  ${themify(FLAG_IMG)};
`

export const FLAG_BODY = "FLAG_BODY"
const FlagBody = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: auto;

  &,
  > :last-child {
    margin-bottom: 0;
  }
  ${themify(FLAG_BODY)};
`

export const FLAG_REVERSE = "FLAG_REVERSE"
const reverse = css`
  direction: rtl;
  > ${FlagImg}, > ${FlagBody} {
    direction: ltr;
  }

  > ${FlagImg} {
    padding-right: 0;
    padding-left: ${spacing.medium()};
  }
  ${themify(FLAG_REVERSE)};
`

export const FLAG_REVERSE_LARGE = "FLAG_REVERSE_LARGE"
const reverseLarge = css`
  > ${FlagImg} {
    padding-right: 0;
    padding-left: ${spacing.large()};
  }
  ${themify(FLAG_REVERSE_LARGE)};
`

export const FLAG_TOP = "FLAG_TOP"
const top = css`
  > ${FlagImg}, > ${FlagBody} {
    vertical-align: top;
  }
  ${themify(FLAG_TOP)};
`

export const FLAG_BOTTOM = "FLAG_BOTTOM"
const bottom = css`
  > ${FlagImg}, > ${FlagBody} {
    vertical-align: bottom;
  }
  ${themify(FLAG_BOTTOM)};
`

export const FLAG_FLUSH = "FLAG_FLUSH"
const flush = css`
  > ${FlagImg} {
    padding-right: 0;
    padding-left: 0;
  }
  ${themify(FLAG_FLUSH)};
`

export const FLAG_LARGE = "FLAG_LARGE"
const large = css`
  > ${FlagImg} {
    padding-right: ${spacing.large()};
  }
  ${props => (props.reverse ? reverseLarge : null)};
  ${themify(FLAG_LARGE)};
`

export const FLAG_RESPONSIVE = "FLAG_RESPONSIVE"
const responsive = css`
  @media screen and (max-width: ${props => props.responsive}px) {
    &,
    > ${FlagImg}, > ${FlagBody} {
      display: block;
      direction: initial;
      padding: 0;
    }
    > ${FlagImg} {
      width: auto;
      padding-bottom: ${spacing.medium()};
    }

    ${FlagImg} > img {
      max-width: 100%;
    }
    ${themify(FLAG_RESPONSIVE)};
  }
`

export const FLAG_OBJECT = "FLAG_OBJECT"
const FlagObject = styled.div`
  display: table;
  width: 100%;
  border-spacing: 0;
  ${props => (props.reverse ? reverse : null)};
  ${props => (props.top ? top : null)};
  ${props => (props.bottom ? bottom : null)};
  ${props => (props.flush ? flush : null)};
  ${props => (props.large ? large : null)};
  ${props => (props.responsive > 0 ? responsive : null)};
  ${themify(FLAG_OBJECT)};
`

Flag.defaultProps = {
  className: "",
  reverse: null,
  top: null,
  bottom: null,
  responsive: 0,
  flush: null,
  large: null
}

Flag.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  img: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string,
  reverse: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  responsive: PropTypes.number,
  flush: PropTypes.bool,
  large: PropTypes.bool
}

export default Flag
