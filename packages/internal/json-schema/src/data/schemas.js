export const nested = {
  schema: {
    title: "A list of tasks",
    type: "object",
    required: ["title"],
    properties: {
      title: {
        type: "string",
        title: "Task list title",
        description: "A sample title",
        placeholder: "This is a title"
      },
      tasks: {
        type: "array",
        title: "Tasks",
        items: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              title: "Title",
              description: "A sample title"
            },
            details: {
              type: "string",
              title: "Task details",
              description: "Enter the task details"
            },
            done: {
              type: "boolean",
              title: "Done?",
              default: false
            }
          }
        }
      }
    }
  },
  uiSchema: {
    tasks: {
      items: {
        details: {
          "ui:widget": "textarea"
        }
      }
    }
  }
}

export const simple = {
  schema: {
    title: "A registration form",
    description: "A simple form example.",
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        title: "First name"
      },
      lastName: {
        type: "string",
        title: "Last name"
      },
      age: {
        type: "integer",
        title: "Age"
      },
      email: {
        type: "string",
        title: "Email"
      },
      bio: {
        type: "string",
        title: "Bio"
      },
      password: {
        type: "string",
        title: "Password",
        minLength: 3
      },
      telephone: {
        type: "string",
        title: "Telephone",
        minLength: 10
      }
    }
  },
  uiSchema: {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": ""
    },
    age: {
      "ui:title": "Age of person",
      "ui:description": "(earthian year)"
    },
    bio: {},
    password: {
      "ui:options": {
        inputType: "password"
      },
      "ui:help": "Hint: Make it strong!"
    },
    date: {
      "ui:widget": "alt-datetime"
    },
    telephone: {
      "ui:options": {
        inputType: "tel"
      },
      "ui:widget": "phone"
    }
  }
}

export const arrays = {
  schema: {
    definitions: {
      Thing: {
        type: "object",
        properties: {
          name: {
            type: "string",
            default: "Default name"
          }
        }
      }
    },
    type: "object",
    properties: {
      listOfStrings: {
        type: "array",
        title: "A list of strings",
        items: {
          type: "string",
          default: "bazinga"
        }
      },
      multipleChoicesList: {
        type: "array",
        title: "A multiple choices list",
        items: {
          type: "string",
          enum: ["foo", "bar", "fuzz", "qux"]
        },
        uniqueItems: true
      },
      fixedItemsList: {
        type: "array",
        title: "A list of fixed items",
        items: [
          {
            title: "A string value",
            type: "string",
            default: "lorem ipsum"
          },
          {
            title: "a boolean value",
            type: "boolean"
          }
        ],
        additionalItems: {
          title: "Additional item",
          type: "number"
        }
      },
      minItemsList: {
        type: "array",
        title: "A list with a minimal number of items",
        minItems: 3,
        items: {
          $ref: "#/definitions/Thing"
        }
      },
      defaultsAndMinItems: {
        type: "array",
        title: "List and item level defaults",
        minItems: 5,
        default: ["carp", "trout", "bream"],
        items: {
          type: "string",
          default: "unidentified"
        }
      },
      nestedList: {
        type: "array",
        title: "Nested list",
        items: {
          type: "array",
          title: "Inner list",
          items: {
            type: "string",
            default: "lorem ipsum"
          }
        }
      },
      unorderable: {
        title: "Unorderable items",
        type: "array",
        items: {
          type: "string",
          default: "lorem ipsum"
        }
      },
      unremovable: {
        title: "Unremovable items",
        type: "array",
        items: {
          type: "string",
          default: "lorem ipsum"
        }
      },
      noToolbar: {
        title: "No add, remove and order buttons",
        type: "array",
        items: [
          {
            type: "string",
            default: "lorem ipsum"
          }
        ]
      },
      fixedNoToolbar: {
        title: "Fixed array without buttons",
        type: "array",
        items: [
          {
            title: "A number",
            type: "number",
            default: 42
          },
          {
            title: "A boolean",
            type: "boolean",
            default: false
          }
        ],
        additionalItems: {
          title: "A string",
          type: "string",
          default: "lorem ipsum"
        }
      }
    }
  },
  uiSchema: {
    listOfStrings: {
      items: {
        "ui:emptyValue": ""
      }
    },
    multipleChoicesList: {
      "ui:widget": "checkboxes"
    },
    fixedItemsList: {
      items: [
        {
          "ui:widget": "textarea"
        },
        {
          "ui:widget": "select"
        }
      ],
      additionalItems: {
        "ui:widget": "updown"
      }
    },
    unorderable: {
      "ui:options": {
        orderable: false
      }
    },
    unremovable: {
      "ui:options": {
        removable: false
      }
    },
    noToolbar: {
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      }
    },
    fixedNoToolbar: {
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      }
    }
  }
}

export const references = {
  schema: {
    definitions: {
      address: {
        type: "object",
        properties: {
          street_address: {
            type: "string",
            title: "Street Address"
          },
          city: {
            type: "string"
          },
          state: {
            type: "string"
          }
        },
        required: ["street_address", "city", "state"]
      },
      node: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          children: {
            type: "array",
            items: {
              $ref: "#/definitions/node"
            }
          }
        }
      }
    },
    type: "object",
    properties: {
      billing_address: {
        title: "Billing address",
        $ref: "#/definitions/address"
      },
      shipping_address: {
        title: "Shipping address",
        $ref: "#/definitions/address"
      },
      tree: {
        title: "Recursive references",
        $ref: "#/definitions/node"
      }
    }
  },
  uiSchema: {
    "ui:order": ["shipping_address", "billing_address", "tree"]
  }
}

export const custom = {
  schema: {
    title: "A localisation form",
    type: "object",
    required: ["lat", "lon"],
    properties: {
      lat: {
        type: "number"
      },
      lon: {
        type: "number"
      }
    }
  },
  uiSchema: {
    "ui:field": "geo"
  }
}

export const errors = {
  schema: {
    title: "Contextualized errors",
    type: "object",
    required: ["firstName", "active", "skills", "multipleChoicesList"],
    properties: {
      firstName: {
        type: "string",
        title: "First name",
        minLength: 8,
        pattern: "\\d+"
      },
      active: {
        type: "boolean",
        title: "Active"
      },
      skills: {
        type: "array",
        items: {
          type: "string",
          minLength: 5
        }
      },
      multipleChoicesList: {
        type: "array",
        title: "Pick max two items",
        uniqueItems: true,
        maxItems: 2,
        items: {
          type: "string",
          enum: ["foo", "bar", "fuzz"]
        }
      }
    }
  },
  uiSchema: {}
}

export const large = {
  schema: {
    definitions: {
      largeEnum: {
        type: "string",
        enum: [
          "option #0",
          "option #1",
          "option #2",
          "option #3",
          "option #4",
          "option #5",
          "option #6",
          "option #7",
          "option #8",
          "option #9",
          "option #10",
          "option #11",
          "option #12",
          "option #13",
          "option #14",
          "option #15",
          "option #16",
          "option #17",
          "option #18",
          "option #19",
          "option #20",
          "option #21",
          "option #22",
          "option #23",
          "option #24",
          "option #25",
          "option #26",
          "option #27",
          "option #28",
          "option #29",
          "option #30",
          "option #31",
          "option #32",
          "option #33",
          "option #34",
          "option #35",
          "option #36",
          "option #37",
          "option #38",
          "option #39",
          "option #40",
          "option #41",
          "option #42",
          "option #43",
          "option #44",
          "option #45",
          "option #46",
          "option #47",
          "option #48",
          "option #49",
          "option #50",
          "option #51",
          "option #52",
          "option #53",
          "option #54",
          "option #55",
          "option #56",
          "option #57",
          "option #58",
          "option #59",
          "option #60",
          "option #61",
          "option #62",
          "option #63",
          "option #64",
          "option #65",
          "option #66",
          "option #67",
          "option #68",
          "option #69",
          "option #70",
          "option #71",
          "option #72",
          "option #73",
          "option #74",
          "option #75",
          "option #76",
          "option #77",
          "option #78",
          "option #79",
          "option #80",
          "option #81",
          "option #82",
          "option #83",
          "option #84",
          "option #85",
          "option #86",
          "option #87",
          "option #88",
          "option #89",
          "option #90",
          "option #91",
          "option #92",
          "option #93",
          "option #94",
          "option #95",
          "option #96",
          "option #97",
          "option #98",
          "option #99"
        ]
      }
    },
    title: "A rather large form",
    type: "object",
    properties: {
      string: {
        type: "string",
        title: "Some string"
      },
      choice1: {
        $ref: "#/definitions/largeEnum"
      },
      choice2: {
        $ref: "#/definitions/largeEnum"
      },
      choice3: {
        $ref: "#/definitions/largeEnum"
      },
      choice4: {
        $ref: "#/definitions/largeEnum"
      },
      choice5: {
        $ref: "#/definitions/largeEnum"
      },
      choice6: {
        $ref: "#/definitions/largeEnum"
      },
      choice7: {
        $ref: "#/definitions/largeEnum"
      },
      choice8: {
        $ref: "#/definitions/largeEnum"
      },
      choice9: {
        $ref: "#/definitions/largeEnum"
      },
      choice10: {
        $ref: "#/definitions/largeEnum"
      }
    }
  },
  uiSchema: {
    choice1: {
      "ui:placeholder": "Choose one"
    }
  }
}

export const alternatives = {
  schema: {
    definitions: {
      Color: {
        title: "Color",
        type: "string",
        anyOf: [
          {
            type: "string",
            enum: ["#ff0000"],
            title: "Red"
          },
          {
            type: "string",
            enum: ["#00ff00"],
            title: "Green"
          },
          {
            type: "string",
            enum: ["#0000ff"],
            title: "Blue"
          }
        ]
      }
    },
    title: "Image editor",
    type: "object",
    required: ["currentColor", "colorMask", "blendMode"],
    properties: {
      currentColor: {
        $ref: "#/definitions/Color",
        title: "Brush color"
      },
      colorMask: {
        type: "array",
        uniqueItems: true,
        items: {
          $ref: "#/definitions/Color"
        },
        title: "Color mask"
      },
      colorPalette: {
        type: "array",
        title: "Color palette",
        items: {
          $ref: "#/definitions/Color"
        }
      },
      blendMode: {
        title: "Blend mode",
        type: "string",
        enum: ["screen", "multiply", "overlay"],
        enumNames: ["Screen", "Multiply", "Overlay"]
      }
    }
  },
  uiSchema: {
    blendMode: {
      "ui:enumDisabled": ["multiply"]
    }
  }
}

export const conditional = {
  schema: {
    title: "Schema dependencies",
    description: "These samples are best viewed without live validation.",
    type: "object",
    properties: {
      simple: {
        src:
          "https://spacetelescope.github.io/understanding-json-schema/reference/object.html#dependencies",
        title: "Simple",
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          credit_card: {
            type: "number"
          }
        },
        required: ["name"],
        dependencies: {
          credit_card: {
            properties: {
              billing_address: {
                type: "string"
              }
            },
            required: ["billing_address"]
          }
        }
      },
      conditional: {
        title: "Conditional",
        $ref: "#/definitions/person"
      },
      arrayOfConditionals: {
        title: "Array of conditionals",
        type: "array",
        items: {
          $ref: "#/definitions/person"
        }
      },
      fixedArrayOfConditionals: {
        title: "Fixed array of conditionals",
        type: "array",
        items: [
          {
            title: "Primary person",
            $ref: "#/definitions/person"
          }
        ],
        additionalItems: {
          title: "Additional person",
          $ref: "#/definitions/person"
        }
      }
    },
    definitions: {
      person: {
        title: "Person",
        type: "object",
        properties: {
          "Do you have any pets?": {
            type: "string",
            enum: ["No", "Yes: One", "Yes: More than one"],
            default: "No"
          }
        },
        required: ["Do you have any pets?"],
        dependencies: {
          "Do you have any pets?": {
            oneOf: [
              {
                properties: {
                  "Do you have any pets?": {
                    enum: ["No"]
                  }
                }
              },
              {
                properties: {
                  "Do you have any pets?": {
                    enum: ["Yes: One"]
                  },
                  "How old is your pet?": {
                    type: "number",
                    default: 10
                  }
                },
                required: ["How old is your pet?"]
              },
              {
                properties: {
                  "Do you have any pets?": {
                    enum: ["Yes: More than one"]
                  },
                  "Do you want to get rid of any?": {
                    type: "boolean",
                    default: true
                  }
                },
                required: ["Do you want to get rid of any?"]
              }
            ]
          }
        }
      }
    }
  },
  uiSchema: {
    simple: {
      credit_card: {
        "ui:help": {
          type: "p",
          key: null,
          ref: null,
          props: {
            children: [
              "If you enter anything here then ",
              {
                type: "code",
                key: null,
                ref: null,
                props: {
                  children: "billing_address"
                },
                _owner: null
              },
              " will be dynamically added to the form."
            ]
          },
          _owner: null
        }
      }
    },
    conditional: {
      "Do you want to get rid of any?": {
        "ui:widget": "radio"
      }
    },
    arrayOfConditionals: {
      items: {
        "Do you want to get rid of any?": {
          "ui:widget": "radio"
        }
      },
      "ui:options": {
        addable: true,
        orderable: false,
        removable: true
      }
    },
    fixedArrayOfConditionals: {
      items: {
        "Do you want to get rid of any?": {
          "ui:widget": "radio"
        }
      },
      additionalItems: {
        "Do you want to get rid of any?": {
          "ui:widget": "radio"
        }
      }
    }
  }
}

export const onboardin1 = {
  schema: {
    title: "Bli kunde",
    type: "object",
    properties: {
      personalia: {
        required: ["phone", "email"],
        title: "Personalia",
        type: "object",
        properties: {
          phone: {
            type: "string",
            title: "Mobilnummer"
          },
          email: {
            type: "string",
            title: "E-post",
            format: "email"
          }
        }
      },
      holdings: {
        type: "object",
        title: "Om din Sparing",
        description: "Vi er pliktig blabla",
        properties: {
          origin: {
            type: "object",
            title: "Hva er opprinnelsen?",
            properties: {
              salary: {
                title: "Lønn/pensjon",
                type: "boolean",
                default: false
              },
              gift: {
                title: "Gave/arv",
                type: "boolean",
                default: false
              },
              savings: {
                title: "Oppsparte midler",
                type: "boolean",
                default: false
              },
              sales: {
                title: "Salg av eiendel",
                type: "boolean",
                default: false
              }
            }
          }
        }
      },
      consent: {
        type: "object",
        title: "Samtykke",
        description: "Ønsker du å blabla",
        properties: {
          sms: {
            title: "SMS er ok",
            type: "boolean",
            default: false
          },
          email: {
            title: "E-post er ok",
            type: "boolean",
            default: false
          }
        }
      }
    }
  },
  uiSchema: {
    personalia: {
      phone: {
        "ui:widget": "phone"
      }
    },
    holdings: {
      origin: {
        "ui:options": {
          backgroundColor: "pink"
        }
      }
    }
  }
}
