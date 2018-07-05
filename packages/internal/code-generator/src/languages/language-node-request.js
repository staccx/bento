import { blast } from "../utils"
const prettier = require("prettier/standalone")
const plugins = [require("prettier/parser-babylon")]

const generate = ({ summary, method, path, headers, body, queryParams }) =>
  // language=JavaScript
  `
/**
 * ${summary}
 */
const request = require("request");
    const options = { 
      method: "${method}",
      url: "${path}",
      headers: ${blast(headers)},
      formData: ${blast(body)},
      qs: ${blast(queryParams)}
    }
    
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
    
      console.log(body);
    });
  `

export default {
  generate: opts => {
    const code = generate(opts)
    let prettierCode
    try {
      prettierCode = prettier.format(code, {
        parser: "babylon",
        plugins
      })
    } catch (e) {
      // console.log("prettier error", e, code)
    }
    return prettierCode || code
  },
  label: "javascript"
}
