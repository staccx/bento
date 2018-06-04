import React from "react"
import styled from "styled-components"
import { Box } from "@staccx/base"
import { themeProps, color } from "@staccx/theme"
import { getStreetViewImageUrl } from "../store/property"

const Marker = ({ location }) => (
  <Box variant={"marker"} size={themeProps.spacing.small}>
    <Image src={getStreetViewImageUrl(location, 128)} alt={"streetviewimage"} />
  </Box>
)

const Image = styled.img`
  border-radius: 50%;
  border: 8px solid ${color.primary};
`

export default Marker
