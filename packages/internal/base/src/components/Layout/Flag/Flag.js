import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { spacing, themify, themeProps } from "@staccx/theme"

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
  display: table-cell;
  width: 1px;
  vertical-align: middle;
  padding-right: ${spacing.medium()};
  > img {
    max-width: none;
  }
  > svg {
    display: block;
  }
`

const FlagBody = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: auto;

  &,
  > :last-child {
    margin-bottom: 0;
  }
`

const reverse = css`
  direction: rtl;
  > ${FlagImg}, > ${FlagBody} {
    direction: ltr;
  }

  > ${FlagImg} {
    padding-right: 0;
    padding-left: ${spacing.medium()};
  }
`

const reverseLarge = css`
  > ${FlagImg} {
    padding-right: 0;
    padding-left: ${spacing.large()};
  }
`

const reverseSmall = css`
  > ${FlagImg} {
    padding-right: 0;
    padding-left: ${spacing.small()};
  }
`

const reverseTiny = css`
  > ${FlagImg} {
    padding-right: 0;
    padding-left: ${spacing.tiny()};
  }
`

const top = css`
  > ${FlagImg}, > ${FlagBody} {
    vertical-align: top;
  }
`

const bottom = css`
  > ${FlagImg}, > ${FlagBody} {
    vertical-align: bottom;
  }
`

const flush = css`
  > ${FlagImg} {
    padding-right: 0;
    padding-left: 0;
  }
`

const large = css`
  > ${FlagImg} {
    padding-right: ${spacing.large()};
  }
  ${props => (props.reverse ? reverseLarge : null)};
`

const small = css`
  > ${FlagImg} {
    padding-right: ${spacing.small()};
  }
  ${props => (props.reverse ? reverseSmall : null)};
`

const tiny = css`
  > ${FlagImg} {
    padding-right: ${spacing.tiny()};
  }
  ${props => (props.reverse ? reverseTiny : null)};
`

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
  ${props => (props.small ? small : null)};
  ${props => (props.tiny ? tiny : null)};
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
  large: null,
  small: null,
  tiny: null
}

Flag.propTypes = {
  children: themeProps.children.isRequired,
  img: themeProps.children.isRequired,
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
