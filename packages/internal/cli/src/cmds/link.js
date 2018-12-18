const path = require("path")
const rollup = require("rollup")
const babel = require("rollup-plugin-babel")
const commonjs = require("rollup-plugin-commonjs")
const resolve = require("rollup-plugin-node-resolve")
const json = require("rollup-plugin-json")
const { executeAsync, setupSpinner, runCommand } = require("./__helpers")

const generateConfig = function generateConfig(pkg, input) {
  var dependencies = Object.keys(pkg.dependencies || {})

  var external = function external(id) {
    // babelHelpers needs to be internal
    if (id.includes("babelHelpers")) return false

    // module is external if it is listed in dependencies,
    // or if its name doesn't begin with . or /
    return dependencies.includes(id) || !/^[./]/.test(id)
  }

  return {
    input,
    output: [
      {
        file: pkg.main,
        format: "cjs"
      },
      {
        file: pkg.module,
        format: "es"
      }
    ],
    external: external,
    plugins: [
      json(),
      babel({
        // needed to fix "regeneratorRuntime is not defined"
        runtimeHelpers: true,

        exclude: ["node_modules/**"],

        // transform-runtime need to fix "regeneratorRuntime is not defined"
        plugins: [
          "external-helpers",
          "transform-runtime",
          "styled-components",
          "transform-decorators-legacy"
        ],

        presets: [
          [
            "env",
            {
              modules: false
            }
          ],
          "stage-0",
          "react"
        ]
      }),
      resolve(),
      commonjs()
    ]
  }
}

const link = async function({ input, watch }) {
  const fail = function() {
    process.exit(1)
  }
  const cwd = process.cwd()
  const spinner = setupSpinner()
  let pkg = null
  try {
    pkg = require(path.resolve(cwd, "package.json"))
  } catch (e) {
    spinner.fail("No package file here. Please navigate to root of bundle")
    fail()
  }

  if (!pkg) {
    spinner.fail("No package file here. Please navigate to root of bundle")
    fail()
  }

  if (!input) {
    spinner.fail("input not provided. try again")
    fail()
  }

  if (watch) {
    const watcher = rollup.watch(generateConfig(pkg, input))
    watcher.on("event", async event => {
      switch (event.code) {
        case "END":
          await runCommand({
            onFail: console.log,
            failText: "Failed to build",
            startText: "Building...",
            succeedText: "Built and pushed",
            spinner,
            debug: false,
            command: async () => {
              executeAsync("yalc", ["push"], { cwd })
            }
          })
          break
        default:
          break
      }
    })
  } else {
    await runCommand({
      onFail: console.log,
      failText: "Failed to build",
      startText: "Building...",
      succeedText: "Built and pushed",
      spinner,
      debug: false,
      command: async () => {
        await rollup.rollup(generateConfig(pkg, input))
        executeAsync("yalc", ["push"], { cwd })
      }
    })
  }
}

module.exports = link
