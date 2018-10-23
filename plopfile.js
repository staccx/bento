const spawn = require("child_process").spawn
const fs = require("fs")
const path = require("path")
const ora = require("ora")

const ab2str = buf => {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
}

const executeAsync = (cmd, params, opts, onLog) => {
  return new Promise((resolve, reject) => {
    execute(cmd, params, opts, onLog, onLog, resolve, reject)
  })
}

const execute = (
  cmd,
  params,
  opts = {},
  onStdOut = () => null,
  onStdErr = () => null,
  onExit = () => null,
  onError = () => null
) => {
  const env = {
    ...process.env,
    FORCE_COLOR: 1,
    NPM_CONFIG_COLOR: "always"
  }
  const child = spawn(cmd, params, {
    shell: true,
    env,
    stdio: [null, null, null, "ipc"],
    detached: true,
    ...opts
  })

  child.stdout.on("data", data => onStdOut(ab2str(data)))
  child.stderr.on("data", data => onStdErr(ab2str(data)))
  child.on("close", onExit)
  child.on("error", onError)

  return child
}
module.exports = function(plop) {
  plop.setActionType("makeAppReady", function(answers, config, plop) {
    return new Promise(async (resolve, reject) => {
      const { packages = [], module, styled } = answers

      const spinner = ora({
        text: "Setup",
        spinner: "monkey"
      })

      try {
        spinner.start("Initializing")
        await executeAsync("yarn", ["install"], { cwd: config.cwd })
        spinner.succeed("Initialized")
      } catch (ex) {
        console.error(ex)
        reject(ex)
        throw ex
      }
      try {
        if (packages.length > 0) {
          spinner.start(`Add packages: [${packages.join(", ")}]`)
          await executeAsync(`yarn`, ["add", ...packages], { cwd: config.cwd })
          spinner.succeed(`Added: [${packages.join(", ")}]`)
        }
        if (styled) {
          spinner.start("Add: styled-components")
          await executeAsync("yarn", ["add", "styled-components", "--peer"], {
            cwd: config.cwd
          })
          spinner.succeed("Added: styled-components (peer-dependency)")
        }

        if (module) {
          spinner.start("Add: @staccx/rollup-config")
          await executeAsync(`yarn`, ["add", "-D", "@staccx/rollup-config"], {
            cwd: config.cwd
          })
          spinner.succeed("Added: @staccx/rollup-config (dev-dependency")
        }

        spinner.start("Linking")
        await executeAsync("lerna", ["link"], {
          cwd: config.cwd
        })
        spinner.succeed("Linked!")
        spinner.succeed("App ready for use.")
        resolve(true)
      } catch (ex) {
        console.error(ex)
        reject(ex)
        throw ex
      }
    })
  })
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
        path: "packages/themes/{{client}}/theme.js",
        templateFile: "templates/plop/CreateTheme/theme.hbs",
        force: true
      }
    ]
  })
  plop.setGenerator("base component", {
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
        path: "packages/internal/base/src/components/{{name}}/{{name}}.js",
        templateFile:
          "templates/plop/CreateBaseComponent/templates/Component.hbs"
      },
      {
        type: "add",
        path:
          "packages/internal/base/src/components/{{name}}/{{name}}.preview.js",
        templateFile: "templates/plop/CreateBaseComponent/templates/Preview.hbs"
      },
      {
        type: "add",
        path: "packages/internal/base/src/components/{{name}}/{{name}}.md",
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
        type: "checkbox",
        name: "packages",
        message: "Which packages do they need?",
        choices: [
          "@staccx/base",
          "@staccx/i18n",
          "@staccx/sanity",
          "@staccx/animations",
          "@staccx/formatting",
          "@staccx/open-id",
          "@staccx/math",
          "@staccx/utils",
          "@staccx/theme(deprecated use base instead)",
          "@staccx/dealerpad",
          "@staccx/loan-process",
          "@staccx/aprila-theme",
          "@staccx/nordea-theme",
          "@staccx/norefjell-theme",
          "@staccx/stacc-theme",
          "@staccx/styrke-theme",
          "@staccx/volvo-theme",
          "@staccx/fundu-theme",
          "@staccx/imove-theme",
          "@staccx/code-generator",
          "@staccx/color",
          "@staccx/login-oidc",
          "@staccx/soy"
        ]
      },
      {
        type: "confirm",
        name: "styled",
        message: "Uses styled components?"
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

      adds.push({
        type: "makeAppReady",
        cwd: path.resolve(__dirname, `packages/apps/${data.name}/`)
      })

      return adds
    }
  })
}
