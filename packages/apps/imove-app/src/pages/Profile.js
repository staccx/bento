import React from "react"
import { Layout, Text, Button, Box } from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import ProfileLarge from "../components/Illustrations/ProfileLarge"
import profile from "../data/profile"

const Profile = ({ history }) => (
  <Box variant="center">
    <Layout>
      <ThemeComponent tagName={"logo"} fallback={null} />

      <ProfileLarge />
      <Text>
        {profile.name} <br />
        {profile.mail} <br />
        {profile.tel}
      </Text>
      <div>
        <Button variant="mainNavigation">
          Se og rediger mine detaljer {/* TODO: Sanitytext */}
        </Button>
        <Button
          onClick={() =>
            history.push({
              pathname: "/end/"
            })
          }
          variant="mainNavigation"
        >
          Avslutt abonnement {/* TODO: Sanitytext */}
        </Button>
      </div>
    </Layout>
  </Box>
)

export default Profile
