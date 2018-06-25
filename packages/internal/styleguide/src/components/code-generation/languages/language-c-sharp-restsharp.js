import Prism from "prismjs"
import qs from "qs"

import "prismjs/components/prism-csharp"

export default {
  generate: ({ summary, method, path, headers, body, queryParams }) =>
    // language=JavaScript
    `
  /**
* ${summary}
*/
var client = new RestClient(${path}${
      queryParams ? `?${qs.stringify(queryParams)}` : ""
    });
var request = new RestRequest(Method.${method});
${
      headers
        ? Object.keys(headers).map(
            key => `request.AddHeader("${key}", ${headers[key]});\n`
          )
        : ""
    }
${
      body
        ? Object.keys(body).map(
            key =>
              `request.AddParameter("${key}", ${
                body[key]
              }, ParameterType.RequestBody);\n`
          )
        : ""
    }
IRestResponse response = client.Execute(request);
`,
  className: "language-csharp",
  language: "csharp",
  grammar: Prism.languages.csharp
}
