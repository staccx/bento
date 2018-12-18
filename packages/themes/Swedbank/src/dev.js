// const { executeAsync } = require("../../../internal/cli/src/cmds/__helpers ")
const rollup = require("rollup")
const babel = require("rollup-plugin-babel")
const commonjs = require("rollup-plugin-commonjs")
const resolve = require("rollup-plugin-node-resolve")
const json = require("rollup-plugin-json")
const pkg = require("../package.json")

const generateConfig = function generateConfig(pkg) {
  var dependencies = Object.keys(pkg.dependencies || {})

  var external = function external(id) {
    // babelHelpers needs to be internal
    if (id.includes("babelHelpers")) return false

    // module is external if it is listed in dependencies,
    // or if its name doesn't begin with . or /
    return dependencies.includes(id) || !/^[./]/.test(id)
  }

  return {
    input: "./src/theme/index.js",
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

const watcher = rollup.watch(generateConfig(pkg))

watcher.on("event", event => {
  switch (event.code) {
    default:
      console.log(event.code)
      break
  }
})
