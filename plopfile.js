module.exports = function(plop) {
  plop.setGenerator("Theme", {
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
  plop.setGenerator("Base component", {
    description: "Create new base component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter name"
      },
      // {
      //   type: "list",
      //   name: "type",
      //   message: "Which type do you want",
      //   choices: ["Pure component", "Functional component", "Vanilla"]
      // },
      // {
      //   type: "checkbox",
      //   name: "deps",
      //   message: "Choose what you need",
      //   choices: [
      //     "animations",
      //     "color",
      //     "formatting",
      //     "i18n",
      //     "formatting",
      //     "math",
      //     "theme",
      //     "utils"
      //   ]
      // },
      {
        type: "confirm",
        name: "confirm",
        message: "Are you sure?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "packages/internal/base/components/{{name}}/{{name}}.js",
        templateFile:
          "templates/plop/CreateBaseComponent/templates/Component.hbs"
      },
      {
        type: "add",
        path: "packages/internal/base/components/{{name}}/{{name}}.preview.js",
        templateFile: "templates/plop/CreateBaseComponent/templates/Preview.hbs"
      },
      {
        type: "add",
        path: "packages/internal/base/components/{{name}}/{{name}}.md",
        templateFile: "templates/plop/CreateBaseComponent/templates/Readme.hbs"
      }
    ]
  })
  plop.setGenerator("App", {
    description: "Create new Stacc App",
    prompts: [
      {
        type: "input",
        name: "name",
        default: "My Awesome App",
        message: "Enter app name"
      },
      {
        type: "confirm",
        name: "module",
        message: "Shall this be exported as a package?"
      },
      {
        type: "confirm",
        name: "confirm",
        message: "Are you sure?"
      }
    ],
    actions: data => {
      const adds = [
        {
          type: "addMany",
          destination: "packages/apps/{{dashCase name}}/",
          base: "templates/plop/CreateApp/files",
          templateFiles: "templates/plop/CreateApp/files/**"
        },
        {
          type: "add",
          path: "packages/apps/{{dashCase name}}/package.json",
          templateFile: "templates/plop/CreateApp/templates/package.hbs"
        },
        {
          type: "add",
          path: "packages/apps/{{dashCase name}}/src/index.js",
          templateFile: "templates/plop/CreateApp/templates/index.hbs"
        },
        {
          type: "add",
          path: "packages/apps/{{dashCase name}}/src/App.js",
          templateFile: "templates/plop/CreateApp/templates/App.hbs"
        },
        {
          type: "add",
          path: "packages/apps/{{dashCase name}}/public/index.html",
          templateFile: "templates/plop/CreateApp/templates/html.hbs"
        },
        {
          type: "add",
          path: "packages/apps/{{dashCase name}}/public/manifest.json",
          templateFile: "templates/plop/CreateApp/templates/manifest.hbs"
        },
        {
          type: "add",
          path: "packages/apps/{{dashCase name}}/src/theme/Theme.js",
          templateFile: "templates/plop/CreateTheme/theme.hbs"
        }
      ]

      if (data.module) {
        adds.push({
          type: "add",
          path: "packages/apps/{{dashCase name}}/rollup.config.js",
          templateFile: "templates/plop/CreateApp/templates/rollup.hbs"
        })
      }

      return adds
    }
  })
}
