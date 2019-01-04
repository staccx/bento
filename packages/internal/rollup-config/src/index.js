import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import json from "rollup-plugin-json"

const generateConfig = (pkg, input = "./src/export.js") => {
  const dependencies = Object.keys(pkg.dependencies || {})

  const external = id => {
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
    external,
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

export default generateConfig
