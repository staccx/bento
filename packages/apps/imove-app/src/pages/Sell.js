import React from "react"
import {
  Layout,
  Button,
  ItemGroup,
  Heading,
  Text,
  Input,
  EmailInput,
  PhoneInput,
  Wrapper
} from "@staccx/base"
import profile from "../data/profile"
import { backwards } from "../components/transitions/transitions"
import { TranslatedText } from "@staccx/i18n"

const Sell = ({ history }) => {
  const labelWidth = 120
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">
          <TranslatedText i18nKey="heading-selg-min-bil" />
        </Heading>
        <Text>
          <TranslatedText i18nKey="intro-selg-bil" />
        </Text>

        <Input
          label="Fullt navn"
          value={profile.name}
          labelWidth={labelWidth}
        />
        <PhoneInput
          label="Telefon"
          value={profile.tel}
          labelWidth={labelWidth}
        />
        <EmailInput
          label="Epostadresse"
          value={profile.mail}
          labelWidth={labelWidth}
        />
        <div>
          <Input label="Registreringsnr." labelWidth={labelWidth} />
          <Text variant="legalese">
            <TranslatedText i18nKey="valgfritt-under-input" />
          </Text>
        </div>
        <div>
          <Input label="Kilometerstand" labelWidth={labelWidth} />
          <Text variant="legalese">
            <TranslatedText i18nKey="valgfritt-under-input" />
          </Text>
        </div>
        <ItemGroup>
          <Button
            onClick={() =>
              history.push({
                pathname: "/app/sell/confirmation"
              })
            }
          >
            <TranslatedText i18nKey="knapp-selg-bil" />
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
            <TranslatedText i18nKey="knapp-tilbake" />
          </Button>
        </ItemGroup>
      </Layout>
    </Wrapper>
  )
}

export default Sell
