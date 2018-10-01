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

const Contact = ({ name, tel, mail, postalNumber, consent }) => (
  <Layout>
    <Heading level="1">
      Kontaktinfo
      {/* TODO: Sanitytext */}
    </Heading>

    <Input label="Fullt navn" value={name} />
    <PhoneInput label="Telefon" value={tel} />
    <EmailInput label="Epostadresse" value={mail} />
    <PostalCodeInput label="Postnr" value={postalNumber} />
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
          Jeg samtykker til at imove lagrer informasjon om meg og at jeg kan
          kontaktes på e-post
          {/* TODO: Sanitytext */}
        </Toggle>
      }
    >
      <Label className="" htmlFor="Samtykke">
        Jeg samtykker til at imove lagrer informasjon om meg og at jeg kan
        kontaktes på e-post
        {/* TODO: Sanitytext */}
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
  tel: "",
  mail: "",
  postalNumber: "",
  consent: false
}

export default Contact
