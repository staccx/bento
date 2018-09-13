export const blast = obj => {
  if (!obj) return "{}"
  return JSON.stringify(obj, null, 2)
  // const keys = Object.keys(obj)
  // let result = "{"
  // keys
  //   .map((key, index) => {
  //     return `"${key}": "${obj[key]}"${index < keys.length - 1 ? "," : ""}`
  //   })
  //   .map(element => {
  //     if (element) {
  //       result += element
  //     }
  //   })
  // result += "}"
  // return result
}

export const fromOpenApi = openApi => {
  const codeGeneratorInputs = {}
  const paths = Reflect.ownKeys(openApi.paths)

  paths.map(path => {
    const operations = Reflect.ownKeys(openApi.paths[path])

    operations.map(operation => {
      const op = openApi.paths[path][operation]
      const requestBody = op.requestBody

      // set root url to the global servers' url if no specific servers for this path
      let rootUrl
      if (openApi.paths[path].servers) {
        rootUrl = openApi.paths[path].servers.length
          ? openApi.paths[path].servers[0].url
          : openApi.paths[path].servers.url
      } else {
        rootUrl = openApi.servers
          ? openApi.servers.length
            ? openApi.servers[0].url
            : openApi.servers.url
          : ""
      }

      const result = fromOperation(rootUrl, path, operation, op, requestBody)

      if (!codeGeneratorInputs[path]) {
        codeGeneratorInputs[path] = {}
      }

      codeGeneratorInputs[path][operation] = result
    })
  })

  return codeGeneratorInputs
}

const fromOperation = (
  rootUrl,
  path,
  operationType,
  operationObject,
  requestBody
) => {
  const result = {
    summary: operationObject.summary || "no summary",
    method: operationType,
    path: rootUrl + path,
    headers: { Accept: "application/json" },
    queryParams: {},
    body: {}
  }

  if (requestBody && operationType === "post") {
    if (requestBody.content && requestBody.content["application/json"]) {
      const content = requestBody.content["application/json"]
      let example
      if (content.examples) {
        const exampleKey = Reflect.ownKeys(content.examples)[0]
        example = content.examples[exampleKey]
      } else if (content.example) {
        const keys = Object.keys(content.example)
        if (keys.length === 1 && typeof content.example[keys[0]] === "object") {
          example = content.example[keys[0]]
        } else {
          example = content.example
        }
      }

      if (example) {
        result.body = example
      }
    }
  }

  const parameters = operationObject.parameters || []

  if (parameters) {
    parameters.map(parameter => {
      switch (parameter.in) {
        case "query": {
          result.queryParams[parameter.name] = "testQueryValue"
          break
        }

        case "header": {
          if (
            !["Accept", "Content-Type", "Authorization"].includes(
              parameter.name
            )
          ) {
            result.headers[parameter.name] = "testHeaderValue"
          }
          break
        }

        case "path": {
          // replace {name} in path
          result.path = result.path.replace(
            new RegExp(`\{${parameter.name}\}`, "g"),
            parameter.name + "_testPathValue"
          )
          break
        }

        case "cookie": {
          // Cookie: name=value; name2=value2; name3=value3
          if (!result.headers.Cookie) {
            result.headers.Cookie = ""
          } else {
            result.headers.Cookie = result.headers.Cookie.concat("; ")
          }

          result.headers.Cookie = result.headers.Cookie.concat(
            `${parameter.name}=testCookieValue`
          )
          break
        }
      }
    })
  }

  return result
}

const getDummyValue = type => {
  switch (type) {
  }
}

const resolveReference = (openApi, ref) => {}
