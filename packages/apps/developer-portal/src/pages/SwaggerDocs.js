import React from "react"
import { Layout, Box } from "@staccx/base"
import ApiRenderer from "../components/ApiRenderer"

const SwaggerDocs = () => (
  <Layout paddingTop="large">
    <Box variant="codeBlock">
      <ApiRenderer url={"https://demo.quantfol.io/swagger/v1/swagger.json"} />
    </Box>
    <Box variant="codeBlock">
      <ApiRenderer url={"http://petstore.swagger.io/v2/swagger.json"} />
    </Box>
  </Layout>
)

export default SwaggerDocs
