import React from "react"
import { Heading, Wrapper, Input, Layout, Loading } from "@staccx/base"
import { SanityList } from "@staccx/sanity"
import Person from "../components/Person/Person"
import SectionHead from "../components/SectionHead/SectionHead"
import ContentLinks from "../components/ContentLinks/ContentLinks"
import ContentLinksItem from "../components/ContentLinks/ContentLinks.Item"

const Team = () => (
  <Wrapper>
    <Layout paddingTop="grid" rowGap="grid">
      <SectionHead
        heading="Team Stacc"
        headingLevel={1}
        lede="Get all this content from Sanity please. Stacc AS is a software company group located in Bergen, Norway. The management has 25 years of experience with strategy, business development and technology in the financial services industry."
      />
      <ContentLinks>
        <ContentLinksItem
          heading="About the company"
          url="/some/page"
          body="Read more about Stacc, our mission, philosophy and goals"
        />
        <ContentLinksItem
          heading="Join our team"
          url="/careers"
          body="Want to move finance forward? Help us create the next generation of finance technology."
        />
      </ContentLinks>
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
            console.log(result)
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
