import findTags from "./findTags"

const openapi = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Swagger Petstore",
    license: {
      name: "MIT"
    }
  },
  host: "petstore.swagger.io",
  basePath: "/v1",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/pets": {
      get: {
        summary: "List all pets",
        operationId: "listPets",
        tags: ["a", "b"],
        parameters: [
          {
            name: "limit",
            in: "query",
            description: "How many items to return at one time (max 100)",
            required: false,
            type: "integer",
            format: "int32"
          }
        ],
        responses: {
          "200": {
            description: "An paged array of pets",
            headers: {
              "x-next": {
                type: "string",
                description: "A link to the next page of responses"
              }
            },
            schema: {
              $ref: "#/definitions/Pets"
            }
          },
          default: {
            description: "unexpected error",
            schema: {
              $ref: "#/definitions/Error"
            }
          }
        }
      },
      post: {
        summary: "Create a pet",
        operationId: "createPets",
        tags: ["c"],
        responses: {
          "201": {
            description: "Null response"
          },
          default: {
            description: "unexpected error",
            schema: {
              $ref: "#/definitions/Error"
            }
          }
        }
      }
    },
    "/pets/{petId}": {
      get: {
        summary: "Info for a specific pet",
        operationId: "showPetById",
        tags: ["d"],
        parameters: [
          {
            name: "petId",
            in: "path",
            required: true,
            description: "The id of the pet to retrieve",
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "Expected response to a valid request",
            schema: {
              $ref: "#/definitions/Pets"
            }
          },
          default: {
            description: "unexpected error",
            schema: {
              $ref: "#/definitions/Error"
            }
          }
        }
      }
    }
  },
  definitions: {
    Pet: {
      required: ["id", "name"],
      properties: {
        id: {
          type: "integer",
          format: "int64"
        },
        name: {
          type: "string"
        },
        tag: {
          type: "string"
        }
      }
    },
    Pets: {
      type: "array",
      items: {
        $ref: "#/definitions/Pet"
      }
    },
    Error: {
      required: ["code", "message"],
      properties: {
        code: {
          type: "integer",
          format: "int32"
        },
        message: {
          type: "string"
        }
      }
    }
  }
}

const openapiWithTagsonRoot = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Swagger Petstore",
    license: {
      name: "MIT"
    }
  },
  tags: [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }]
}

describe("findTags", () => {
  it("Should find tags", () => {
    expect(findTags(openapi)).toEqual([
      { name: "a" },
      { name: "b" },
      { name: "c" },
      { name: "d" }
    ])
  })

  it("Should find tags on root", () => {
    expect(findTags(openapi)).toEqual([
      { name: "a" },
      { name: "b" },
      { name: "c" },
      { name: "d" }
    ])
  })
})
