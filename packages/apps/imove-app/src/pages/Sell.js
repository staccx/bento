import React from "react"
import { withRouter } from "react-router"
import {
  Layout,
  Button,
  ItemGroup,
  Heading,
  Text,
  Input,
  EmailInput,
  PhoneInput
} from "@staccx/base"
import profile from "../data/profile"
import { backwards } from "../components/transitions/transitions"

const Sell = ({ history }) => {
  const labelWidth = 120
  return (
    <Layout>
      <Heading level="1">Selg min bil</Heading>
      <Text>
        Send oss en henvendelse, og vi kontakter deg om kort tid med en god
        løsning på salg av bilen.
      </Text>

      <Input label="Fullt navn" value={profile.name} labelWidth={labelWidth} />
      <PhoneInput label="Telefon" value={profile.tel} labelWidth={labelWidth} />
      <EmailInput
        label="Epostadresse"
        value={profile.mail}
        labelWidth={labelWidth}
      />
      <div>
        <Input label="Registreringsnr." labelWidth={labelWidth} />
        <Text variant="legalese">Valgfritt</Text>
      </div>
      <div>
        <Input label="Kilometerstand" labelWidth={labelWidth} />
        <Text variant="legalese">Valgfritt</Text>
      </div>
      <ItemGroup>
        <Button
          onClick={() =>
            history.push({
              pathname: "/sell/confirmation"
            })
          }
        >
          Send
        </Button>
        <Button
          onClick={() =>
            history.push({
              pathname: "/",
              state: backwards
            })
          }
          variant="secondary"
        >
          Tilbake
        </Button>
      </ItemGroup>
    </Layout>
  )
}

export default withRouter(Sell)
