import React from "react"
import { Layout, Button, Heading, Text } from "@staccx/base"
import { backwards } from "../components/transitions/transitions"

const End = ({ history }) => {
  return (
    <Layout>
      <Heading level="1">Avslutt abonnementet {/* TODO: Sanitytext */}</Heading>
      <Text>
        Klikk nedenfor for å avslutte abonnementet ditt. Ihht vilkårene for
        tjenesten løper ditt abonnement fram til{" "}
        <code>dagens dato + 30 dager</code>.{/* TODO: Sanitytext */}
      </Text>

      <div>
        <Button
          onClick={() =>
            history.push({
              pathname: "/end/confirmation"
            })
          }
        >
          Avslutt abonnement {/* TODO: Sanitytext */}
        </Button>
        <Button
          onClick={() =>
            history.push({
              pathname: "/profile",
              state: backwards
            })
          }
          variant="secondary"
        >
          Tilbake {/* TODO: Sanitytext */}
        </Button>
      </div>
    </Layout>
  )
}

export default End
