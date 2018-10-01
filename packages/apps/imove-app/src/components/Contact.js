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

const Contact = ({ name, phone, email, postalNumber, consent }) => (
  <Layout>
    <Heading level="1">Kontaktinfo</Heading>

    <Input label="Fullt navn" value={name} />
    <PhoneInput label="Telefon" />
    <EmailInput label="Epostadresse" />
    <PostalCodeInput label="Postnr" />
    <Flag
      img={
        <Toggle
          className=""
          defaultChecked={false}
          disabled={false}
          group="testddd"
          id="Samtykke"
          input={{}}
          onChange={() => null}
        >
          Jeg samtykker til at imove lagrer informasjon om meg og at jeg kan
          kontaktes på e-post
        </Toggle>
      }
    >
      <Label className="" htmlFor="Samtykke">
        Jeg samtykker til at imove lagrer informasjon om meg og at jeg kan
        kontaktes på e-post
      </Label>
    </Flag>
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
