import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

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

const FlagImg = styled.div`
  display: table-cell;
  width: 1px;
  vertical-align: middle;
  padding-right: ${p => p.theme.spacing.medium};
  > img {
    max-width: none;
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
    padding-left: ${p => p.theme.spacing.medium};
  }
`

const reverseLarge = css`
  > ${FlagImg} {
    padding-right: 0;
    padding-left: ${p => p.theme.spacing.large};
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
    padding-right: ${p => p.theme.spacing.large};
  }
  ${props => (props.reverse ? reverseLarge : null)};
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
      padding-bottom: ${p => p.theme.spacing.medium};
    }

    ${FlagImg} > img {
      max-width: 100%;
    }
  }
`

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
