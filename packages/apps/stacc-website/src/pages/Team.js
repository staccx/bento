import React from "react"
import { Heading, Wrapper, Input, Layout, Loading } from "@staccx/base"
import { SanityList } from "@staccx/sanity"
import GoTo from "../components/GoTo/GoTo"
import Person from "../components/Person/Person"

const Team = () => (
  <Wrapper size="medium">
    <Layout paddingTop="grid" rowGap="grid">
      <div>
        <Heading level={3}>Stacc</Heading>
        Stacc AS is a software company group located in Bergen, Norway.
        Management has 25 years of experience with strategy, business
        development and technology in the financial services industry. We are
        currently 62 employees and growing rapidly. We are always seeking
        skilled and talented individuals to join us on this adventure.
        <GoTo to="/jobs">See current openings</GoTo>
      </div>
      <Layout rowGap="medium">
        <Heading level="2">Looking for someone?</Heading>
        <Input id="peopleSearch" placeholder="Search employees" />
      </Layout>
      <ul>
        <SanityList type={"person"} pick={"company->, ..."}>
          {({ result }) => {
            if (!result) {
              return <Loading />
            }
            return result.map(person => (
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
            ))
          }}
        </SanityList>
      </ul>
    </Layout>
  </Wrapper>
)

export default Team
