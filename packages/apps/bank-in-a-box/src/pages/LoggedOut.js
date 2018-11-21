import React from "react"
import { Layout, LayoutItem, ThemeComponent, Box } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const LoggedOut = ({ history }) => (
  <Layout variant="loggedOut">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <Box variant="center">
        <ThemeComponent tagName="IconLoggedOutConfirmation" />
      </Box>
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
      <Box variant="center">
        <TranslatedText
          i18nKey="ConfirmLogoutHeading"
          fallback="Du er nå logget ut"
        />
      </Box>
    </LayoutItem>
  </Layout>
)

export default LoggedOut
