import { deepfind } from "@staccx/utils"

export default (openapi, ref) => {
  const searchString = ref.replace("#/", "")
  return deepfind(openapi, searchString, "/")
}
