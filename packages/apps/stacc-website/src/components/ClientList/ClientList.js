import React from "react"
import styled from "styled-components"
import { List, Loading, theming } from "@staccx/base"
import { SanityList } from "@staccx/sanity"
import { ClientPreview } from "../_codeSplitting"

const ClientList = props => {
  console.log("here")
  return (
    <SanityList
      type={"client"}
      filter={"hide != true"}
      pick={"caseStudies[]->, ..."}
    >
      {({ result }) => {
        if (!result) {
          return <Loading />
        }
        console.log(result)
        return (
          <ClientsList>
            {result.map(client => {

              return (
                <li key={client._id}>
                  <ClientPreview
                    name={client.name}
                    logo={client.logo}
                    description={client.description}
                    website={client.url}
                    websiteName={
                      client.url ? client.url.replace(/(^\w+:|^)\/\//, "") : ""
                    }
                    cases={client.caseStudies || []}
                  />
                </li>
              )
            })}
          </ClientsList>
        )
      }}
    </SanityList>
  )
}

ClientList.propTypes = {}

export const ClientsList = styled(List)`
  display: grid;

  row-gap: ${theming.spacing.large};

  @media only screen and (min-width: ${theming.wrapper.medium}) {
    grid-template-columns: 1fr 1fr;
    column-gap: ${theming.spacing.large};
  }
`

export default ClientList
