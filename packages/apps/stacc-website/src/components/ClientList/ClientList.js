import React from "react"
import styled from "styled-components"
import { spacing, wrapper } from "@staccx/theme"
import { List, Loading } from "@staccx/base"
import { SanityList } from "@staccx/sanity"
import { ClientPreview } from "../_codeSplitting"

const ClientList = props => {
  return (
    <SanityList type={"client"}>
      {({ result }) => {
        if (!result) {
          return <Loading />
        }

        return (
          <ClientsList>
            {result.map(client => (
              <li key={client._id}>
                <ClientPreview
                  name={client.name}
                  logo={client.logo}
                  description={client.description}
                  website={client.url}
                  websiteName={client.url.replace(/(^\w+:|^)\/\//, "")}
                  cases={client.caseStudies || []}
                />
              </li>
            ))}
          </ClientsList>
        )
      }}
    </SanityList>
  )
}

ClientList.propTypes = {}

const ClientsList = styled(List)`
  display: grid;

  row-gap: ${spacing.large};

  @media only screen and (min-width: ${wrapper.medium}) {
    grid-template-columns: 1fr 1fr;
    column-gap: ${spacing.large};
  }
`

export default ClientList
