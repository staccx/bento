import React from "react"
import styled from "styled-components"
import { Box, Image } from "@staccx/base"
import { themeProps, color } from "@staccx/theme"
import { getStreetViewImageUrl } from "../store/property"

const Marker = ({ location }) => (
  <Box variant={"marker"} size={themeProps.spacing.small}>
    <Img
      src={getStreetViewImageUrl(location, 128)}
      alt={"streetviewimage"}
      round
    />
  </Box>
)

const Img = styled(Image)`
  border: 8px solid ${color.primary};
`

export default Marker
