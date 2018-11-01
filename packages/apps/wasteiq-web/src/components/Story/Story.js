import React from "react"
import styled from "styled-components"
import {
  Heading,
  Paragraph,
  Layout,
  Box,
  ThemeComponent,
  Flag,
  theming
} from "@staccx/base"

const Story = ({ color, icon, iconColor }) => {
  return (
    <Box
      variant={[theming.VARIANT_DEFAULT, "story"]}
      color={color}
      as={"article"}
      size={"medium"}
    >
      <Layout variant={"storyContent"}>
        <header>
          <Heading level={2}>Harvest data</Heading>
          <IconContainer>
            <ThemeComponent tagName={icon} color={iconColor} autoWidth />
          </IconContainer>
        </header>
        <div>
          <Layout rowGap={"gridSmall"}>
            <Paragraph>
              Reward sustainable behaviour. Spend time on innovation, not
              integration. WasteIQ is a cloud based platform for public waste
              management. We collect and upcycle data from urban waste
              infrastructure. The digital foundation for a more sustainable
              tomorrow.
            </Paragraph>
            <div>
              <Layout rowGap={"small"}>
                <Heading level={4}>Collect data from</Heading>
                <Layout as={"ul"} rowGap={"small"}>
                  <li>
                    <Flag img={""}>Bin collection trucks</Flag>
                  </li>
                  <li>
                    <Flag img={""}>Underground systems</Flag>
                  </li>
                  <li>
                    <Flag img={""}>Recycling plants</Flag>
                  </li>
                </Layout>
              </Layout>
            </div>
          </Layout>
        </div>
      </Layout>
    </Box>
  )
}

const IconContainer = styled.div`
  @media (min-width: ${theming.wrapper("medium")}) {
    position: relative;
    max-height: 25vh;
    min-height: 250px;

    > * {
      position: absolute;
      bottom: -${theming.spacing.large};
      left: -${theming.spacing.large};
    }
  }

  @media (max-width: ${theming.wrapper("medium")}) {
    > * {
      position: absolute;
      max-height: 23vh;
      bottom: 0;
      left: 0;
    }
  }
`

export default Story
