import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

const Logo = ({ inverted }) => (
  <Svg
    width="72"
    height="15"
    viewBox="0 0 72 15"
    fill="none"
    xmlns="http://www.w3.org/2000/Svg"
    inverted={inverted}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.29 0h2.42l-.05 8.98v5.8H43.4v-1.47c-.58 1.1-2.32 1.69-3.59 1.69a5.89 5.89 0 0 1-.42-11.78c1.53-.16 3.32.48 3.9 1.22V0zm-.45 10.58c.2-.42.32-.87.34-1.34v-.37a3.4 3.4 0 0 0-4.77-2.92 3.42 3.42 0 0 0-1.99 3.5 3.47 3.47 0 0 0 4.34 2.86 3.34 3.34 0 0 0 2.08-1.73zM14.64 9.1a5.88 5.88 0 1 1 11.77 0 5.88 5.88 0 0 1-11.77 0zm3.52 2.38a3.4 3.4 0 0 0 3.67.74 3.36 3.36 0 0 0 1.08-5.49 3.4 3.4 0 0 0-2.37-1 3.4 3.4 0 0 0-3.37 3.38c0 .89.36 1.74 1 2.37z"
    />
    <path d="M10.29 10.48L2.62 1.43H0v13.52h2.73V5.9L10.5 15h2.36V1.43h-2.57v9.05z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M65.47 3.23A5.9 5.9 0 1 0 65.9 15c1.23 0 2.87-.63 3.61-1.9v1.74h2.28V9.25a5.76 5.76 0 0 0-6.3-6.02zm3.87 6.02a3.35 3.35 0 0 1-3.81 3.16 3.48 3.48 0 0 1-2.97-2.95 3.42 3.42 0 0 1 3.39-3.8c1.8 0 3.29 1.43 3.4 3.22v.37zM52.9 3.21a5.85 5.85 0 0 0-5.76 5.95A5.88 5.88 0 0 0 53.06 15c2.33 0 4.6-1.37 5.5-3.63l-2.27-.68a3.59 3.59 0 0 1-2.54 1.94 3.56 3.56 0 0 1-3.65-1.73l8.83-2.42c-.27-2.32-2.27-5.37-6.03-5.26zM49.63 8.8a3.46 3.46 0 0 1 2.32-3.2 3.23 3.23 0 0 1 4.07 1.47l-6.4 1.73z"
    />
    <path d="M33.57 5.68V3.2c-2.16 0-2.88 1.13-3.24 1.72V3.59h-2.47V15h2.52V9.37c0-2.57 1.44-3.58 3.2-3.7z" />
  </Svg>
)

const Svg = styled.svg`
  width: 75px;
  fill: ${p => (p.inverted ? theming.color.white : theming.color.primary)};
`

export const LogoStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Logo },
  "logo"
)

export default Logo
