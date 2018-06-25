import Prism from "prismjs"
import qs from "qs"

import "prismjs/components/prism-java"

export default {
  generate: ({ summary, method, path, headers, body, queryParams }) =>
    // language=JavaScript
    `
  /**
* ${summary}
*/
OkHttpClient client = new OkHttpClient();
${
      body
        ? `RequestBody body = RequestBody.create(mediaType, ${qs.stringify(
            body
          )});`
        : ""
    }

Request request = new Request.Builder()
  .url("${path}${queryParams ? `?${qs.stringify(queryParams)}` : ""}")
  .${method.toLowerCase()}(body)
  ${
    headers
      ? Object.keys(headers).map(key => {
          const text = `.addHeader("${key}", ${headers[key]})\n`
          console.log(text)
          return text
        })
      : ""
  }  .build();

Response response = client.newCall(request).execute();
`,
  className: "language-java",
  language: "java",
  grammar: Prism.languages.java
}
