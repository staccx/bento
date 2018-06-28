import qs from "qs"

const addHeaders = headers => {
  if (headers) {
    let result = ""
    Object.keys(headers).map(key => {
      result += `request.AddHeader("${key}", "${headers[key]}");\n`
    })
    return result
  }
}

const addBody = body => {
  if (body) {
    let result = ""
    Object.keys(body).map(key => {
      result += `request.AddParameter("${key}", "${
        body[key]
      }", ParameterType.RequestBody);\n`
    })
    return result
  }
}

export default ({ summary, method, path, headers, body, queryParams }) =>
  // language=JavaScript
  `
/**
 * ${summary}
 */
var client = new RestClient("${path}${
    queryParams ? `?${qs.stringify(queryParams)}` : ""
  }");
var request = new RestRequest(Method.${method});
${addHeaders(headers)}
${addBody(body)}
IRestResponse response = client.Execute(request);
`
