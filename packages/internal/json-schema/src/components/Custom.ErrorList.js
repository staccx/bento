import React from "react"
import { Wrapper, Layout, List, Heading, ExpandListItem } from "@staccx/base"

export default props => {
  const { errors } = props
  return (
    <Layout>
      <Wrapper>
        <Heading level={3}>Errors</Heading>
        <List>
          {errors.map((error, i) => {
            return (
              <ExpandListItem
                key={i}
                title={`${error.property} - ${error.name}`}
              >
                {error.message}
              </ExpandListItem>
            )
          })}
        </List>
      </Wrapper>
    </Layout>
  )
}
