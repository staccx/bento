import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import json from "rollup-plugin-json"

const generateConfig = pkg => {
  const dependencies = Object.keys(pkg.dependencies || {})

  const external = id => {
    return dependencies.includes(id) || !/^[./]/.test(id)
  }

  return {
    input: "./src/export.js",
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
        exclude: ["node_modules/**"],
        plugins: ["external-helpers"]
      }),
      resolve(),
      commonjs()
    ]
  }
}

export default generateConfig
