import React from "react"
import styled from "styled-components"
import { Heading, Paragraph, ItemGroup, Button, Layout } from "@staccx/base"

const Hero = () => {
  return (
    <Outer>
      <Layout rowGap={"gridSmall"}>
        <Heading level={1}>Enabling the circular economy</Heading>
        <Paragraph>
          Reward sustainable behaviour. Spend time on innovation, not
          integration. WasteIQ is a cloud based platform for public waste
          management. We collect and upcycle data from urban waste
          infrastructure. The digital foundation for a more sustainable
          tomorrow.
        </Paragraph>
        <ItemGroup>
          <Button color={"green"}>WasteIQ for waste management</Button>
          <Button color={"blue"}>WasteIQ for infrastructure companies</Button>
        </ItemGroup>
      </Layout>
    </Outer>
  )
}

const Outer = styled.div``

export default Hero
