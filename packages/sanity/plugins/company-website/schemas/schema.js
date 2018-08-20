import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import { default as unique } from "./unique"
export default createSchema({
  name: "default",
  types: schemaTypes.concat([unique])
})
