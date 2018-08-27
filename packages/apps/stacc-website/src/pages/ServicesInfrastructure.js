import React from "react"
import { Layout, Heading, Divider } from "@staccx/base"
import PageHead from "../components/PageHead/PageHead"
import Story from "../components/Story/Story"

const ServicesInfrastructure = ({ match }) => {
  console.log(match)
  return (
    <div>
      <Layout paddingTop="grid" rowGap="grid" paddingBottom="grid">
        <PageHead
          breadcrumb={[
            {
              label: "Services",
              url: "/services"
            }
          ]}
          heading="Infrastructure & architecture"
          lede="Not just one guy in a hoodie – two whole teams of them, backed by several guys with suits and dress shoes. "
        />
        <div>
          <Heading level={2}>Products</Heading>
          <Divider />
          <Layout paddingTop="medium" rowGap="large">
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
          </Layout>
        </div>

        <div>
          <Heading level={2}>Services</Heading>
          <Divider />
          <Layout paddingTop="medium" rowGap="large">
            <p>Something smart here</p>
          </Layout>
        </div>
      </Layout>
    </div>
  )
}

export default ServicesInfrastructure
