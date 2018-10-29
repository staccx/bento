import React from "react"
import styled from "styled-components"
import { Box, Image, theming } from "@staccx/base"
import { getStreetViewImageUrl } from "../store/property"

const Marker = ({ location }) => (
  <Box variant={"marker"} size={theming.commonPropTypes.spacing.small}>
    <Img
      src={getStreetViewImageUrl(location, 128)}
      alt={"streetviewimage"}
      round
    />
  </Box>
)

const Img = styled(Image)`
  border: 8px solid ${theming.color.primary};
`

export default Marker
