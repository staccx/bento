import React from "react"
import {
  Layout,
  Button,
  ItemGroup,
  Heading,
  Text,
  EmailInput,
  Toggle,
  Flag,
  Label
} from "@staccx/base"
import { backwards } from "../components/transitions/transitions"

const Sell = ({ history }) => {
  const labelWidth = 120
  return (
    <Layout>
      <Heading level="1">Bli pilotkunde</Heading>
      <Text>
        Vi har dessverre ikke plass til flere pilotkunder nå, men håper på å
        åpne opp for flere snart. Skriv inn din epostadresse nedenfor for å
        komme på vår venteliste.
      </Text>

      <EmailInput label="Epostadresse" labelWidth={labelWidth} />
      <Flag
        img={
          <Toggle
            className=""
            defaultChecked={false}
            disabled={false}
            group="testddd"
            id="tilbud"
            input={{}}
            onChange={() => null}
          >
            Jeg ønsker også å motta tilbud og oppdateringer fra imove på epost
          </Toggle>
        }
      >
        <Label className="" htmlFor="tilbud">
          Jeg ønsker også å motta tilbud og oppdateringer fra imove på epost
        </Label>
      </Flag>
      <ItemGroup>
        <Button
          onClick={() =>
            history.push({
              pathname: "/waiting-list/confirmation"
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

export default Sell
