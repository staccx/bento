import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, color, themeProps } from "@staccx/theme"

const Floor = ({ children, className, background, color, ...otherProps }) => {
  if (background && background !== "transparent" && background !== "white") {
    return (
      <PaddedEtg
        className={className}
        background={background}
        color={color}
        {...otherProps}
      >
        {children}
      </PaddedEtg>
    )
  }
  return (
    <Etg
      className={className}
      background={background}
      color={color}
      {...otherProps}
    >
      {children}
    </Etg>
  )
}

const Etg = styled.div`
  background-color: ${props => props.background};
  background-size: cover;
  color: ${p => (p.color ? p.color : color.text)};
`

const PaddedEtg = styled(Etg)`
  padding-top: ${spacing("grid")};
  padding-bottom: ${spacing("grid")};

  @media (max-width: 735px) {
    padding-top: ${spacing.large};
    padding-bottom: ${spacing.large};
  }
`

Floor.defaultProps = {
  className: "",
  background: ""
}

Floor.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string,
  background: PropTypes.string
}

export default Floor
