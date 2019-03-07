import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

const Logo = ({ inverted, centered, width, height }) => (
  <LogoImg
    inverted={inverted}
    centered={centered}
    width={width}
    height={height}
    viewBox="0 0 79 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <LogoText
      inverted={inverted}
      centered={centered}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M68.234 13.237c2.897-.03 8.516-.103 8.516-2.525 0-1.1-1.207-1.776-2.81-1.776-2.78 0-4.765 1.923-5.706 4.3zm-.515 2.025a8.97 8.97 0 0 0-.073 1.072c0 2.172 1.03 3.405 3.456 3.405 1.388 0 2.562-.418 3.712-1.23A1.112 1.112 0 0 1 76.1 20.32C74.452 21.474 72.788 22 70.867 22c-3.986 0-5.736-2.232-5.736-5.637 0-4.858 3.574-9.526 8.883-9.526 3.353 0 4.986 1.864 4.986 3.92 0 3.654-5.25 4.52-11.28 4.505zM51.129 7.088a3.945 3.945 0 0 1 3.693 2.552l3.255 8.642a.133.133 0 0 0 .25 0l3.267-8.643a3.95 3.95 0 0 1 3.696-2.551l-5.643 13.754a1.561 1.561 0 0 1-2.89-.001L51.129 7.088zM48.284 14.382c0-2.95-1.647-5.387-4.677-5.387-3.015 0-4.648 2.422-4.648 5.387 0 2.98 1.633 5.46 4.648 5.46 3.03 0 4.677-2.495 4.677-5.46zm-11.913 0c0-4.169 2.927-7.545 7.236-7.545 4.31 0 7.266 3.376 7.266 7.545 0 4.198-2.957 7.618-7.266 7.618-4.31 0-7.236-3.42-7.236-7.618zM28.864 6.837c-2.067 0-3.854.958-4.829 3.036-.723-2.166-2.48-3.036-4.474-3.036-1.78 0-3.347.727-4.22 2.418a2.505 2.505 0 0 0-.565-1.27 2.314 2.314 0 0 0-1.83-.897h-.03c-.024 0-.048-.004-.073-.004V20.55a1.261 1.261 0 0 0 1.26 1.26h.017c.69 0 1.248-.558 1.248-1.245v-7.273c0-2.358 1.402-4.126 3.706-4.126 2.23 0 3.116 1.562 3.116 3.89v7.508a1.246 1.246 0 1 0 2.495 0v-7.272c0-2.358 1.418-4.126 3.692-4.126 2.303 0 3.13 1.62 3.13 4.259v7.14c0 .687.558 1.245 1.247 1.245h.015c.69 0 1.248-.558 1.248-1.245V13.13c0-3.552-1.55-6.293-5.153-6.293zM7.1 7.084V20.55c0 .696.565 1.26 1.262 1.26.697 0 1.262-.564 1.262-1.26V9.604c0-1.392-1.13-2.52-2.524-2.52z"
    />
    <LogoBlob
      inverted={inverted}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.523 5.037H5.05V2.518A2.521 2.521 0 0 0 2.523 0 2.52 2.52 0 0 0 0 2.518c0 .698.285 1.326.74 1.78a2.507 2.507 0 0 0 1.783.739z"
      fill="url(#gradient)"
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="1.714"
        y1="6.038"
        x2=".309"
        y2=".703"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#92F8B8" />
        <stop offset="1" stopColor="#1D966C" />
      </linearGradient>
    </defs>
  </LogoImg>
)

const LogoText = styled.path`
  fill: ${p => (p.inverted ? theming.color.white : theming.color.secondary)};
`

const LogoBlob = styled.path`
  fill: url(#gradient);
`

const LogoImg = styled.svg`
  margin-left: ${p => p.centered && "auto"};
  margin-right: ${p => p.centered && "auto"};
  width: ${p => (!p.width && p.height ? "auto" : !p.width && "79px")};
  height: ${p => (!p.height && p.width ? "auto" : !p.height && "22px")};
`

Logo.defaultProps = {
  inverted: null
}

export const LogoStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Logo },
  "logo"
)

export default Logo
