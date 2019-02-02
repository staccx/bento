import qs from "qs"

const addHeaders = headers => {
  if (headers) {
    let result = ""
    Object.keys(headers).map(key => {
      result += `.addHeader("${key}", "${headers[key]}")\n`
    })
    return result
  }
}

const generate = ({ summary, method, path, headers, body, queryParams }) =>
  // language=JavaScript
  `
/**
 * ${summary}
 */
OkHttpClient client = new OkHttpClient();
${
  body
    ? `
        MediaType mediaType = MediaType.parse("application/json; charset=utf-8");
        RequestBody body = RequestBody.create(mediaType, '${JSON.stringify(
          body
        )}');`
    : `
        RequestBody body = null;
        `
}

Request request = new Request.Builder()
  .url("${path}${queryParams ? `?${qs.stringify(queryParams)}` : ""}")
  .method("${method.toLowerCase()}", body)
${addHeaders(headers)}
  .build();

Response response = client.newCall(request).execute();
`

export default {
  generate: opts => {
    const code = generate(opts)
    return code
  },

  label: "java"
}
