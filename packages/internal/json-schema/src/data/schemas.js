export const nested = {
  schema: {
    title: "A list of tasks",
    type: "object",
    required: ["title"],
    properties: {
      title: {
        type: "string",
        title: "Task list title"
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
    email: {
      "ui:widget": "email"
    },
    telephone: {
      "ui:options": {
        inputType: "tel"
      },
      "ui:widget": "phone"
    }
  }
}
