import React from "react"
import { Heading, Text } from "@staccx/base"

export default ({ info }) => (
  <div>
    <Heading>{info.title}</Heading>
    <Text>{info.version}</Text>
  </div>
)
