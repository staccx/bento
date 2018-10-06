import React from "react"
import { Layout, Button, Heading, Text, Wrapper } from "@staccx/base"
import { backwards } from "../components/transitions/transitions"

const End = ({ history }) => {
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">
          Avslutt abonnementet {/* TODO: Sanitytext */}
        </Heading>
        <Text>
          Klikk nedenfor for å avslutte abonnementet ditt. Ihht vilkårene for
          tjenesten løper ditt abonnement fram til{" "}
          <code>dagens dato + 30 dager</code>.{/* TODO: Sanitytext */}
        </Text>

        <div>
          <Button
            onClick={() =>
              history.push({
                pathname: "/app/end/confirmation"
              })
            }
          >
            Avslutt abonnement {/* TODO: Sanitytext */}
          </Button>
          <Button
            onClick={() =>
              history.push({
                pathname: "/app/profile",
                state: backwards
              })
            }
            variant="secondary"
          >
            Tilbake {/* TODO: Sanitytext */}
          </Button>
        </div>
      </Layout>
    </Wrapper>
  )
}

export default End
