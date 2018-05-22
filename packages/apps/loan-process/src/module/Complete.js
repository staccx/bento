import React from "react"
import IllustrationSuccess from "../../components/IllustrationSuccess"
import SystemText from "../../components/SystemText"
import { Wrapper, Heading, Paragraph, Box } from "@staccx/base"
import Button from "../../components/button/Button"

const Complete = () => (
  <Wrapper size="medium">
    <Box variant="centeredContainer">
      <IllustrationSuccess />
      <Heading variant="centered">
        <SystemText
          systemKey="APPLICATION_CONFIRMATION_HEADING"
          fallback="Gode greier!"
        />
      </Heading>
      <Paragraph variant="lead">
        <SystemText
          systemKey="APPLICATION_CONFIRMATION_LEAD"
          fallback="Da har vi fått det vi trenger. Pengene skal normalt sett være tilgjengelig innen ett døgn."
        />
      </Paragraph>
      <Button to="/profile">
        <SystemText systemKey="GO_TO_MY_PROFILE" fallback="Gå til min side" />
      </Button>
    </Box>
  </Wrapper>
)

export default Complete
