import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"
import {
  Heading,
  Layout,
  Input,
  PhoneInput,
  EmailInput,
  PostalCodeInput,
  Label,
  Toggle,
  Flag
} from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const Contact = ({ name, tel, mail, postalNumber, consent }) => (
  <Layout>
    <Heading level="1">
      <TranslatedText i18nKey="heading-kontakt" />
    </Heading>

    <Input label="Fullt navn" defaultValue={name} id={"fullName"} />
    <PhoneInput label="Telefon" defaultValue={tel} id={"phone"} />
    <Input
      label="Epostadresse"
      defaultValue={mail}
      id={"email"}
      type={"email"}
    />
    <PostalCodeInput
      label="Postnr"
      defaultValue={postalNumber}
      id={"postalCode"}
    />
    <Flag
      img={
        <Toggle
          className=""
          defaultChecked={consent}
          disabled={false}
          group="testddd"
          id="Samtykke"
          input={{}}
          onChange={() => null}
        >
          <TranslatedText i18nKey="label-samtykke-lagring-kontakt" />
        </Toggle>
      }
    >
      <Label className="" htmlFor="Samtykke">
        <TranslatedText i18nKey="label-samtykke-lagring-kontakt" />
      </Label>
    </Flag>
  </Layout>
)

Contact.propTypes = {
  name: PropTypes.string,
  tel: PropTypes.number,
  mail: PropTypes.string,
  postalNumber: PropTypes.number,
  consent: PropTypes.bool
}

Contact.defaultProps = {
  name: "",
  tel: null,
  mail: "",
  postalNumber: null,
  consent: false
}

export default Contact
