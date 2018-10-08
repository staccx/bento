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
  Label,
  Wrapper
} from "@staccx/base"
import { backwards } from "../components/transitions/transitions"
import { TranslatedText } from "@staccx/i18n"

const Sell = ({ history }) => {
  const labelWidth = 120
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">
          <TranslatedText i18nKey="heading-venteliste" />
        </Heading>
        <Text>
          <TranslatedText i18nKey="intro-venteliste" />
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
              <TranslatedText i18nKey="label-motta-oppdateringer" />
            </Toggle>
          }
        >
          <Label className="" htmlFor="tilbud">
            <TranslatedText i18nKey="label-motta-oppdateringer" />
          </Label>
        </Flag>
        <ItemGroup>
          <Button
            onClick={() =>
              history.push({
                pathname: "/appwaiting-list/confirmation"
              })
            }
          >
            <TranslatedText i18nKey="knapp-ventelist-send" />
          </Button>
          <Button
            onClick={() =>
              history.push({
                pathname: "/app",
                state: backwards
              })
            }
            variant="secondary"
          >
            <TranslatedText i18nKey="knapp-tilbake" />
          </Button>
        </ItemGroup>
      </Layout>
    </Wrapper>
  )
}

export default Sell
