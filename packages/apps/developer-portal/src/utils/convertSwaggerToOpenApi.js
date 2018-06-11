var converter = require("swagger2openapi")

/**
 * @link https://github.com/Mermade/swagger2openapi/blob/master/docs/options.md
 * Convert object. Options found in link
 */
export default (swagger, options) => {
  return converter.convertObj(swagger, options)
}
