import qs from "qs"

export default ({ summary, method, path, headers, body, queryParams }) =>
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
`
