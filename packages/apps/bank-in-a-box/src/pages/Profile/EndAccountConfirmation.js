import React from "react"
import PropTypes from "prop-types"
import { Layout, LayoutItem, Heading, Text, Button } from "@staccx/base"
import { formatPhone } from "@staccx/formatting"
import { TranslatedText } from "@staccx/i18n"

const EndAccountConfirmation = ({ accountNumber }) => (
  <Layout variant="endAccountConfirmation">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <img src="https://www.aprila.no/_nuxt/img/hero.72d0083.svg" alt="" />
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
      <Heading level="1" variant="accountSubheading">
        <TranslatedText
          i18nKey="konto-er-avsluttet"
          fallback="Konto er avsluttet og penger på vei"
        />
      </Heading>
      <Text>
        <TranslatedText
          i18nKey="pengene-er-na-sendt-til"
          fallback="Pengene er nå sendt til"
        />{" "}
        {formatPhone(accountNumber, "XXXX XX XXXXX")}. <br />{" "}
        <TranslatedText
          i18nKey="du-kan-regne-med-at"
          fallback="Du kan regne med at de er på konto innen 1 til 2 virkedager"
        />
      </Text>
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="600" area="main">
      <div>
        {/* TODO: må linkes opp */}
        <Button>
          <TranslatedText i18nKey={"logg-ut"}>Logg ut</TranslatedText>
        </Button>
      </div>
    </LayoutItem>
  </Layout>
)

EndAccountConfirmation.defaultProps = {
  accountNumber: 99999999999
}

EndAccountConfirmation.propTypes = {
  accountNumber: PropTypes.number
}

export default EndAccountConfirmation
