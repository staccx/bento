import React from "react"
import { Heading, Wrapper, Input, Layout, Loading, Search } from "@staccx/base"
import { SanityList, SanityDocument, SanityImage } from "@staccx/sanity"
import { getLinkItem } from "../components/ContentLinks/ContentLinks.Item"
import { ContentLinks, Person, SectionHead } from "../components/_codeSplitting"
import Meta from "./Meta"

const Team = () => (
  <Wrapper>
    <SanityDocument id={"ae56715e-4e83-4748-b307-524787231b6b"}>
      {({ document }) => (
        <React.Fragment>
          {document && (
            <Layout>
              <Meta meta={document.meta} />
              <SanityImage image={document.header.head.image}>
                {({ image }) => (
                  <SectionHead
                    heading={document.header.head.title}
                    lede={document.header.head.body}
                    headingLevel={document.header.head.isPageHeader ? 1 : 2}
                    illustration={image.url()}
                  />
                )}
              </SanityImage>

              <ContentLinks>
                {document.header.links.map(getLinkItem)}
              </ContentLinks>
            </Layout>
          )}
          <SanityList type={"person"} pick={"company->, ..."}>
            {({ result }) => {
              if (!result) {
                return <Loading />
              }
              return (
                <Layout paddingTop="grid" rowGap="grid">
                  <Search
                    indexer={"_id"}
                    documents={result}
                    indicises={["name", "title", ["company", "name"], "email"]}
                  >
                    {({ result: r, search }) => {
                      return (
                        <React.Fragment>
                          <Layout rowGap="medium">
                            <Heading level="2">Looking for someone?</Heading>
                            <Input
                              id="peopleSearch"
                              placeholder="Search employees"
                              onChange={e => search(e.target.value)}
                            />
                          </Layout>
                          <ul>
                            {r &&
                              r.map(person => (
                                <Person
                                  name={person.name}
                                  image={person.image}
                                  title={person.title}
                                  company={person.company}
                                  phone={person.phone}
                                  email={person.email}
                                  linkedin={person.linkedin}
                                  twitter={person.twitter}
                                  link={person.link}
                                />
                              ))}
                          </ul>
                        </React.Fragment>
                      )
                    }}
                  </Search>
                </Layout>
              )
            }}
          </SanityList>
        </React.Fragment>
      )}
    </SanityDocument>
  </Wrapper>
)

export default Team
