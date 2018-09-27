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
  CheckBox
} from "@staccx/base"

const Contact = ({ name, phone, email, postalNumber, consent }) => (
  <Layout>
    <Heading level="1">Kontaktinfo</Heading>

    <Input label="Fullt navn" value={name} />
    <PhoneInput label="Telefon" />
    <EmailInput label="Epostadresse" />
    <PostalCodeInput label="Postnr" />
    <CheckBox
      group="consent"
      id="fds45fds54"
      defaultChecked={consent}
      onChange={() => null}
    >
      Jeg samtykker til at imove lagrer informasjon om meg og at jeg kan
      kontaktes på e-post
    </CheckBox>
  </Layout>
)

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  postalNumber: PropTypes.number,
  consent: PropTypes.bool
}

Contact.defaultProps = {
  name: "",
  phone: "",
  email: "",
  postalNumber: "",
  consent: false
}

export default Contact
