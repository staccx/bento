import React from "react"
import { Heading, Paragraph, ItemGroup, Box } from "@staccx/base"

const Story = () => {
  return (
    <Box color={"pinkLight"} as={"article"} size={"medium"}>
      <ItemGroup>
        <header>
          <Heading level={2}>Enabling the circular economy</Heading>
        </header>
        <div>
          <Paragraph>
            Reward sustainable behaviour. Spend time on innovation, not
            integration. WasteIQ is a cloud based platform for public waste
            management. We collect and upcycle data from urban waste
            infrastructure. The digital foundation for a more sustainable
            tomorrow.
          </Paragraph>
        </div>
      </ItemGroup>
    </Box>
  )
}

export default Story
