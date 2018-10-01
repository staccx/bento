import React from "react"
import { Layout, Button, Box } from "@staccx/base"
import Contact from "../components/Contact"

const Profile = ({ history }) => (
  <Box variant="center">
    <Layout>
      <Contact />
      <Button
        onClick={() =>
          history.push({
            pathname: "/profile"
          })
        }
      >
        Lagre {/* TODO: Sanitytext */}
      </Button>
    </Layout>
  </Box>
)

export default Profile
