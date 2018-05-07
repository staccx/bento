import React, { Component } from "react"
import { JsonSchema, SelectSimple } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import theme from "./theme.js"

const schema1 = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false }
  }
}

const schema2 = {
  $schema: "http://json-schema.org/draft-06/schema#",
  title: "Product set",
  type: "array",
  items: {
    title: "Product",
    type: "object",
    properties: {
      id: {
        description: "The unique identifier for a product",
        type: "number"
      },
      name: {
        type: "string"
      },
      price: {
        type: "number",
        exclusiveMinimum: 0
      },
      tags: {
        type: "array",
        items: {
          type: "string"
        },
        minItems: 1,
        uniqueItems: true
      },
      dimensions: {
        type: "object",
        properties: {
          length: { type: "number" },
          width: { type: "number" },
          height: { type: "number" }
        },
        required: ["length", "width", "height"]
      }
    },
    required: ["id", "name", "price"]
  }
}

const familyScheme = {
  $schema: "http://json-schema.org/draft-06/schema#",
  description: "A representation of a person, company, organization, or place",
  type: "object",
  required: ["familyName", "givenName"],
  properties: {
    fn: {
      description: "Formatted Name",
      type: "string"
    },
    familyName: {
      type: "string"
    },
    givenName: {
      type: "string"
    },
    additionalName: {
      type: "array",
      items: {
        type: "string"
      }
    },
    honorificPrefix: {
      type: "array",
      items: {
        type: "string"
      }
    },
    honorificSuffix: {
      type: "array",
      items: {
        type: "string"
      }
    },
    nickname: {
      type: "string"
    },
    url: {
      type: "string",
      format: "uri"
    },
    email: {
      type: "object",
      properties: {
        type: {
          type: "string"
        },
        value: {
          type: "string",
          format: "email"
        }
      }
    },
    tel: {
      type: "object",
      properties: {
        type: {
          type: "string"
        },
        value: {
          type: "string",
          format: "phone"
        }
      }
    },
    tz: {
      type: "string"
    },
    photo: {
      type: "string"
    },
    logo: {
      type: "string"
    },
    sound: {
      type: "string"
    },
    bday: {
      type: "string",
      format: "date"
    },
    title: {
      type: "string"
    },
    role: {
      type: "string"
    },
    org: {
      type: "object",
      properties: {
        organizationName: {
          type: "string"
        },
        organizationUnit: {
          type: "string"
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
    }
  },
  tel: {
    value: {
      "ui:widget": "phone"
    }
  },
  email: {
    value: {
      "ui:widget": "email"
    }
  },
  url: {
    "ui:widget": "text"
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      schema: schema1,
      schemas: [schema1, schema2, familyScheme]
    }
  }

  render() {
    const { schema, schemas } = this.state
    console.log(schema)
    return (
      <ThemeProvider theme={theme}>
        <div>
          <SelectSimple
            id={"schemas"}
            onChange={e => {
              const { value } = e.target
              console.log(value)
              this.setState({ schema: schemas[value] })
            }}
          >
            {schemas.map((s, index) => (
              <option key={"schema"+index} value={index}>{`Schema-${index}`}</option>
            ))}
          </SelectSimple>
          <JsonSchema schema={schema} uiSchema={uiSchema} />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
