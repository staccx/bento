import React from "react"
import styled from "styled-components"
import { media } from "../../styleUtils"
import PropTypes from "prop-types"
import { spacing, font, color } from "@staccx/theme"
import { Heading } from "@staccx/base"

const SectionHeading = ({ level, children, align }) => (
  <StyledHeading level={level} align={align}>
    {children}
  </StyledHeading>
)

const StyledHeading = styled(Heading)`
  /* margin-bottom: ${spacing("mediumWhitespace")}; */
  font-size: ${font("hugePlus")};
  color: ${color("secondary")};
  text-align: ${p => (p.align === "left" ? "left" : "center")};
  margin-bottom: ${spacing("huge")};
  ${media.chromeTablet`
    font-size: ${font("huge")};
    margin-bottom: ${spacing("large")};
  `}
`

SectionHeading.defaultProps = {
  level: 2,
  align: "center"
}

SectionHeading.propTypes = {
  children: PropTypes.any.isRequired
}

export default SectionHeading
