module.exports = function(plop) {
  plop.setGenerator("Create theme", {
    description: "Creates new theme",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Theme name"
      },
      {
        type: "input",
        name: "client",
        message: "Which client"
      },
      {
        type: "checkbox",
        choices: ["Yes", "No"],
        name: "docs",
        message: "Theme for docs?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "packages/clients/{{client}}/theme.js",
        templateFile: "templates/plop/CreateTheme/theme.hbs",
        force: true
      }
    ]
  })
  plop.setGenerator("Create base component", {
    description: "Create new base component",
    prompts: [
      {
        type: "input",
        name: "fileName",
        message: "Enter filename (root is src/components)"
      },
      {
        type: "list",
        name: "type",
        message: "Which type do you want",
        choices: [
          "Pure component",
          "Functional component",
          "Vanilla",
        ]
      },
      {
        type: "checkbox",
        name: "deps",
        message: "Choose what you need",
        choices: [
          "animations",
          "color",
          "formatting",
          "i18n",
          "formatting",
          "math",
          "theme",
          "utils"
        ]
      },
      {
        type: "confirm",
        name: "confirm",
        message: "Are you sure?"
      }
    ],
    actions: [

    ]
  })
}
