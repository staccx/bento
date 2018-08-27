import React from "react"
import { Layout, Heading } from "@staccx/base"
import PageHead from "../components/PageHead/PageHead"
import Story from "../components/Story/Story"

const ServicesInfrastructure = ({ match }) => {
  console.log(match)
  return (
    <div>
      <Layout paddingTop="grid" rowGap="grid">
        <PageHead
          heading="Infrastructure & architecture"
          lede="Not just one guy in a hoodie – two whole teams of them, backed by several guys with suits and dress shoes. "
        />
        <Heading level={2}>Products</Heading>
        <Story
          heading="Core banking infrastructure"
          body="Highly automated and flexible administration of credit and savings accounts."
          callToAction={"Stacc Core"}
          callToActionUrl={"/services/core"}
          isReverse={false}
        />
        <Story
          heading="Financial advice solution"
          body="Flexible solutions for self-service, efficient interaction between financial advisors and customers, and effective distribution of financial products."
          callToAction={"Stacc Core"}
          callToActionUrl={"/services/core"}
          isReverse={false}
        />
        <Story
          heading="Rådgiver PM"
          body="Analyze your customers financial situation so you can give the best financial advice"
          callToAction={"Stacc Core"}
          callToActionUrl={"/services/core"}
          isReverse={false}
        />
        <Heading level={2}>Services</Heading>
        <p>Something smart here</p>
      </Layout>
    </div>
  )
}

export default ServicesInfrastructure
