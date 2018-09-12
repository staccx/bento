import React from "react"
import { Layout, Wrapper, Heading, Button, Paragraph, List } from "@staccx/base"
import Back from "../../components/Back"

const Insurance = ({ history }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <div>
          <Back history={history} path="/account/34551524578" />
          <Heading level="2">Betalingsforsikring</Heading>
        </div>
        <Paragraph>
          Betalingsforsikring gir deg trygghet og en bekymring mindre dersom du
          skulle bli sykemeldt eller miste jobben/bli permittert.
        </Paragraph>
        <Paragraph>
          I dag velger mange betalingsforsikring grunnet usikre tider i
          markedet. Du kan bestille betalingsforsikring i søknadsprosessen eller
          når du er innlogget i nettbanken.
        </Paragraph>
        <div>
          <Button>Bestill betalingsforsikring</Button>
        </div>
        <Paragraph>
          Betalingsforsikringen kan dekke månedsbeløpet på ditt lån i Norefjell
          bank ved følgende hendelser:
        </Paragraph>
        <List>
          <li>
            100 % Sykemelding (for arbeidstakere og selvstendig næringsdrivende)
          </li>
          <li>
            Sykehusinnleggelse (kun for selvstendig næringsdrivende) 100 %
          </li>
          <li>
            Arbeidsledighet/permittering som inntreffer i Norge Dødsfall (for
            arbeidstakere og selvstendig næringsdrivende)
          </li>
        </List>
        <Paragraph>Slik fungerer forsikringen</Paragraph>
        <List>
          <li>
            Ved 100% sykemelding eller 100 % arbeidsledighet/permittering i over
            30 dager kan forsikringen dekke 1/30 av månedlig terminbeløp for
            hver dag.
          </li>
          <li>
            Ved sykehusinnleggelse i over 3 hele dager betales ett månedlig
            terminbeløp og deretter 1/30 for hver dag personen er innlagt.
          </li>
          <li>
            Maksimal dekning per skadetilfelle er 12 måneder og maksimal
            månedlig ytelse er 13 000,-.
          </li>
          <li>
            Ved dødsfall kan resterende gjeld på lånet bli slettet, maksimalt
            500 000,-.
          </li>
        </List>
      </Layout>
    </Wrapper>
  )
}

export default Insurance
