import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import {
  font,
  fontFamily,
  applyVariants,
  commonPropTypes
} from "../../../theming"
import themeProps from "./Headling.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

/**
 * Heading is Bentos header tag, it take a prop called Level with a range from 1-6.
 * This level tag is what sets the size of the heading.
 */
const Heading = ({ level, children, className, ...restProps }) => {
  switch (level) {
    case "h1":
    case "H1":
    case "1":
    case 1:
      return (
        <HeadingH1 level={1} className={className} {...restProps}>
          {children}
        </HeadingH1>
      )

    case "h2":
    case "H2":
    case "2":
    case 2:
      return (
        <HeadingH2 level={2} className={className} {...restProps}>
          {children}
        </HeadingH2>
      )

    case "h3":
    case "H3":
    case "3":
    case 3:
      return (
        <HeadingH3 level={3} className={className} {...restProps}>
          {children}
        </HeadingH3>
      )

    case "h4":
    case "H4":
    case "4":
    case 4:
      return (
        <HeadingH4 level={4} className={className} {...restProps}>
          {children}
        </HeadingH4>
      )

    case "h5":
    case "H5":
    case "5":
    case 5:
      return (
        <HeadingH5 level={5} className={className} {...restProps}>
          {children}
        </HeadingH5>
      )

    case "h6":
    case "H6":
    case "6":
    case 6:
      return (
        <HeadingH6 level={6} className={className} {...restProps}>
          {children}
        </HeadingH6>
      )

    default:
      return (
        <HeadingH1 level={1} className={className} {...restProps}>
          {children}
        </HeadingH1>
      ) // 👈 we always have to return something
  }
}

export const HeadingsStyle = css`
  font-family: ${fontFamily.heading};
  ${applyVariants(themeProps.heading)};
`

const HeadingH1 = styled.h1`
  font-size: ${font.h1};
  ${HeadingsStyle};
`

const HeadingH2 = styled.h2`
  font-size: ${font.h2};
  ${HeadingsStyle};
`

const HeadingH3 = styled.h3`
  font-size: ${font.h3};
  ${HeadingsStyle};
`

const HeadingH4 = styled.h4`
  font-size: ${font.h4};
  ${HeadingsStyle};
`

const HeadingH5 = styled.h5`
  font-size: ${font.h5};
  ${HeadingsStyle};
`

const HeadingH6 = styled.h6`
  font-size: ${font.h6};
  ${HeadingsStyle};
`

Heading.defaultProps = {
  level: "h1",
  className: null
}

Heading.propTypes = {
  children: commonPropTypes.children.isRequired,
  /**
   * The level prop determines the size of the heading, default is set to level 1 or h1
   */
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
}
Heading.themeProps = themeProps
Heading.createVariants = componentCreateFactory(Heading)

export default Heading
