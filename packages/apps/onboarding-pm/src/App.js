import React, { Component } from "react"
import { JsonSchema, Layout, Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"

const schema = {
  type: "object",
  properties: {
    mobilephone: {
      type: "string",
      title: "Mobiltelefon"
    },
    email: {
      type: "string",
      title: "E-post"
    },
    funding: {
      type: "array",
      title: "Hva er opprinnelsen til midlene som spares?",
      items: {
        type: "string",
        enum: ["salary", "gift", "savings", "property"]
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
          title: "Samtykker til mottak av elektronisk kommunikasjon"
        },
        newsAndAdvertisment: {
          type: "boolean",
          title:
            "Samtykker til mottak av av tilbud og nyheter om andre produkter fra Nordsjøbanken."
        },
        confirmed: {
          type: "boolean",
          title: "Bekreftet"
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
    "ui:widget": "phone"
  },
  email: {
    "ui:widget": "email"
  },
  url: {
    "ui:widget": "text"
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Wrapper size="medium">
          <JsonSchema schema={schema} uiSchema={uiSchema} />
        </Wrapper>
      </ThemeProxyProvider>
    )
  }
}

export default App
