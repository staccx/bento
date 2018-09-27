import React from "react"
import { Input, Loading, Search, Layout, Heading } from "@staccx/base"
import { SanityList } from "@staccx/sanity"
import { Person } from "../_codeSplitting"

const PeopleList = () => {
  return (
    <SanityList type={"person"} pick={"company->, ..."}>
      {({ result }) => {
        if (!result) {
          return <Loading />
        }
        return (
          <Search
            indexer={"_id"}
            documents={result}
            indicises={["name", "title", ["company", "name"], "email"]}
          >
            {({ result: r, search }) => {
              return (
                <Layout rowGap="medium">
                  <Heading level="2">Looking for someone?</Heading>
                  <Input
                    id="peopleSearch"
                    placeholder="Search employees"
                    onChange={e => search(e.target.value)}
                  />

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
                          alias={person.alias}
                        />
                      ))}
                  </ul>
                </Layout>
              )
            }}
          </Search>
        )
      }}
    </SanityList>
  )
}

PeopleList.propTypes = {}

export default PeopleList
