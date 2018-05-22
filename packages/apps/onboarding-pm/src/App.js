import React, { Component } from "react"
import styled from "styled-components"
import { JsonSchema, Layout, Wrapper } from "@staccx/base"
import { ThemeProxyProvider, spacing } from "@staccx/theme"
import theme from "./theme.js"

const schema = {
  type: "object",
  properties: {
    mobilephone: {
      type: "string",
      title: "Mobiltelefon",
      format: "tel"
    },
    email: {
      type: "string",
      title: "E-post",
      format: "email"
    },
    funding: {
      type: "array",
      title: "Hva er opprinnelsen til midlene som spares?",
      items: {
        type: "string",
        enum: ["salary", "gift", "savings", "property"],
        enumNames: [
          "Lønn/Pensjon",
          "Gave/arv",
          "Oppsparte midler",
          "Salg av eiendom"
        ]
      }
    },
    "Huk av kun dersom dette gjelder deg:": {
      type: "object",
      properties: {
        foreignCitizen: {
          type: "boolean",
          title:
            "Jeg har utenlandsk statsborgerskap og/eller skatteplikt utenfor Norge."
        },
        notOnlyPrivatePurpose: {
          type: "boolean",
          title: "Kontoen er ikke til privat bruk."
        }
      },
      dependencies: {
        foreignCitizen: {
          properties: {
            foreignCitizenExposed: {
              type: "boolean",
              title:
                "Jeg er eller har vært politisk eksponert person i utlandet."
              /* TODO: Skal kun vises om den over er valgt */
            }
          }
        }
      }
    },
    Samtykke: {
      type: "object",
      properties: {
        electronicDocumentation: {
          type: "boolean",
          title: "Jeg samtykker til mottak av elektronisk kommunikasjon"
        },
        newsAndAdvertisment: {
          type: "boolean",
          title:
            "Jeg samtykker til mottak av av tilbud og nyheter om andre produkter fra Nordsjøbanken."
        }
      }
    }
  }
}

const uiSchema = {
  items: {
    dimensions: {
      length: {
        "ui:widget": "range" // could also be "select"
      }
    },
    string: {
      "ui:widget": "text"
    }
  },
  mobilephone: {
    "ui:widget": "phone",
    "ui:placeholder": "000 00 000"
  },
  email: {
    "ui:widget": "email",
    "ui:placeholder": "eksempel@eksempel.com"
  },
  funding: {
    "ui:widget": "checkboxes",
    "ui:title": "Hva er opprinnelsen til midlene som spares?"
    // "ui:description": "The best password"
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Wrapper size="medium">
          <Form schema={schema} uiSchema={uiSchema} />
        </Wrapper>
      </ThemeProxyProvider>
    )
  }
}

const Form = styled(JsonSchema)`
  > div {
    padding-top: ${spacing.large};
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
`

export default App
