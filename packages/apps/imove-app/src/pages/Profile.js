import React from "react"
import { Layout, Text, Button, Box, Wrapper } from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import ProfileLarge from "../components/Illustrations/ProfileLarge"
import profile from "../data/profile"
import { TranslatedText } from "@staccx/i18n"

const Profile = ({ history }) => (
  <Wrapper size="small">
    <Box variant="center">
      <Layout paddingTop="medium" paddingBottom="huge">
        <ThemeComponent tagName={"logo"} fallback={null} />

        <ProfileLarge />
        <Text>
          {profile.name} <br />
          {profile.mail} <br />
          {profile.tel}
        </Text>
        <div>
          <Button
            onClick={() =>
              history.push({
                pathname: "/app/profile/edit"
              })
            }
            variant="mainNavigation"
          >
            <TranslatedText i18nKey="nav-se-og-rediger-mine-detaljer" />
          </Button>
          <Button
            onClick={() =>
              history.push({
                pathname: "/app/"
              })
            }
            variant="mainNavigation"
          >
            {/* TODO: Side må lages. ☝️ */}
            <TranslatedText i18nKey="nav-slett-min-bruker" />
          </Button>
        </div>
      </Layout>
    </Box>
  </Wrapper>
)

export default Profile
