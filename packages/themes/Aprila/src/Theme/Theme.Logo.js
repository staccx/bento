import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

const Logo = ({ inverted }) => (
  <SVG xmlns="http://www.w3.org/2000/SVG" viewBox="0 0 126 26">
    <g fill="none" fillRule="evenodd">
      <g className="symbol">
        <path
          className="dot"
          fill="#FF7E69"
          d="M11.59 19.36a5.8 5.8 0 1 1-11.6.01 5.8 5.8 0 0 1 11.6-.01z"
        />
        <path
          className="slash"
          fill={inverted ? "#FFFFFF" : "#3B2C7C"}
          d="M10.18.91a5 5 0 0 0-1.21 6.96l1.38 1.97 9.27 13.2a4.98 4.98 0 1 0 8.15-5.75L17.12 2.12A4.98 4.98 0 0 0 10.18.91z"
        />
      </g>
      <g
        className="aprila"
        fill={inverted ? "#FFFFFF" : "#3B2C7C"}
        fillRule="nonzero"
        transform="translate(38 4)"
      >
        <path d="M9.15 14.08H7.69a.27.27 0 0 1-.26-.28v-.85a3.41 3.41 0 0 1-2.87 1.36C2.01 14.31 0 12.25 0 9.38c0-2.87 2-4.93 4.56-4.93 1.3 0 2.24.55 2.87 1.37V5c0-.16.11-.28.26-.28h1.46c.15 0 .27.12.27.28v8.82c0 .15-.12.27-.27.27zM2.05 9.4c0 1.64 1.03 3 2.74 3 1.65 0 2.75-1.3 2.75-3 0-1.72-1.1-3-2.75-3-1.7 0-2.75 1.35-2.75 3zm18.76 0c0 2.87-2.01 4.93-4.56 4.93-1.3 0-2.24-.54-2.86-1.35v4.74c0 .16-.12.28-.27.28h-1.45a.27.27 0 0 1-.27-.28V5c0-.16.11-.28.27-.28h1.45c.15 0 .27.12.27.28v.84a3.41 3.41 0 0 1 2.86-1.36c2.55 0 4.56 2.06 4.56 4.93zm-7.55 0c0 1.71 1.1 3 2.74 3 1.72 0 2.75-1.36 2.75-3s-1.03-3-2.75-3c-1.64 0-2.74 1.28-2.74 3zm14.96-4.43l-.34 1.47a.27.27 0 0 1-.36.19 3.64 3.64 0 0 0-1.23-.22c-1.27 0-2.17.92-2.17 2.51v4.88c0 .16-.12.28-.27.28H22.4a.27.27 0 0 1-.27-.28V4.99c0-.16.11-.28.27-.28h1.43c.15 0 .27.12.27.28v.78c.6-.9 1.54-1.3 2.65-1.3.5 0 .91.05 1.3.17.12.05.2.2.17.33zm3.34-3.5a1.4 1.4 0 0 1-1.4 1.44c-.8 0-1.4-.62-1.4-1.43 0-.82.6-1.45 1.4-1.45.79 0 1.4.63 1.4 1.45zm-.67 12.6h-1.46a.27.27 0 0 1-.27-.27V4.99c0-.16.12-.28.27-.28h1.46c.15 0 .27.12.27.28v8.82c0 .15-.12.27-.27.27zm3.98 0h-1.46a.27.27 0 0 1-.27-.27V.28c0-.16.12-.28.27-.28h1.46c.16 0 .27.12.27.28V13.8c0 .15-.11.27-.27.27zm10.74 0h-1.45a.27.27 0 0 1-.27-.27v-.85a3.41 3.41 0 0 1-2.87 1.36c-2.55 0-4.56-2.06-4.56-4.93 0-2.87 2.01-4.93 4.56-4.93 1.3 0 2.24.55 2.87 1.37V5c0-.16.12-.28.27-.28h1.45c.15 0 .27.12.27.28v8.82c0 .15-.12.27-.27.27zm-7.1-4.67c0 1.64 1.04 3 2.76 3 1.65 0 2.74-1.3 2.74-3 0-1.72-1.1-3-2.74-3-1.72 0-2.75 1.35-2.75 3z" />
      </g>
      <g
        className="bank"
        fill={inverted ? "#FFFFFF" : "#FF7E69"}
        fillRule="nonzero"
        transform="translate(85 4)"
      >
        <path d="M10.27 9.4c0 2.87-2 4.93-4.56 4.93-1.3 0-2.23-.54-2.86-1.36v.85c0 .15-.11.27-.27.27H1.13a.27.27 0 0 1-.27-.27V.28C.86.12.98 0 1.13 0h1.45c.16 0 .27.12.27.28v5.55a3.41 3.41 0 0 1 2.86-1.36c2.55 0 4.56 2.06 4.56 4.93zm-7.55 0c0 1.71 1.1 3 2.75 3 1.71 0 2.75-1.36 2.75-3s-1.04-3-2.75-3c-1.65 0-2.75 1.28-2.75 3zm17.57 4.68h-1.45a.27.27 0 0 1-.27-.28v-.85a3.41 3.41 0 0 1-2.86 1.36c-2.56 0-4.57-2.06-4.57-4.93 0-2.87 2.01-4.93 4.57-4.93 1.29 0 2.24.55 2.86 1.37V5c0-.16.12-.28.27-.28h1.45c.16 0 .27.12.27.28v8.82c0 .15-.11.27-.27.27zM13.2 9.4c0 1.64 1.04 3 2.76 3 1.65 0 2.75-1.3 2.75-3 0-1.72-1.11-3-2.75-3-1.72 0-2.75 1.35-2.75 3zm17.83-1.21v5.61c0 .16-.11.28-.27.28H29.3a.27.27 0 0 1-.27-.28V8.87c0-1.58-.8-2.46-2.12-2.46-1.29 0-2.37.87-2.37 2.48v4.91c0 .16-.11.28-.27.28H22.8a.27.27 0 0 1-.27-.28V4.99c0-.16.12-.28.27-.28h1.45c.15 0 .26.12.26.28v.87a3.19 3.19 0 0 1 2.8-1.39c2.19 0 3.71 1.53 3.71 3.72zm3.71.08h1l2.93-3.47c.06-.06.13-.09.2-.09h1.8c.22 0 .35.29.19.46l-3.42 3.95 3.5 4.52c.15.18.03.44-.2.44H38.9a.28.28 0 0 1-.21-.1l-2.95-3.84h-1v3.68c0 .15-.11.27-.26.27H33a.27.27 0 0 1-.27-.27V.28c0-.16.12-.28.27-.28h1.47c.15 0 .26.12.26.28v8z" />
      </g>
    </g>
  </SVG>
)

const SVG = styled.svg`
  width: 140px;
  height: 40px;
`
export const LogoStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Logo },
  "logo"
)

export default Logo
