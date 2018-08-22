import React from "react"
import { Layout, Heading } from "@staccx/base"
import PageHead from "../components/PageHead/PageHead"
import FeatureList from "../components/FeatureList/FeatureList"
import Story from "../components/Story/Story"
import ContactUs from "../components/ContactUs/ContactUs"

const Service = () => (
  <div>
    <Layout paddingTop="grid" rowGap="grid">
      <PageHead
        heading="Core banking infrastructure"
        lede="Stacc Core provides highly automated and flexible administration of credit and savings accounts. Run your financial services company efficiently on a modern platform that promotes innovation and business agility."
        illustration="/img/core.png"
      />
      <FeatureList />
      <div>
        <Layout>
          <Heading level={2}>Seamless integration</Heading>
          <Story
            heading="API"
            body="The platform can be fully accessed through an API enabling you to leverage the functionality of the platform in other systems such as web and mobile banking solutions, self service solutions, agent servicing solutions and whatever system in which you need access to the data and features of your financial services platform."
            illustration="/img/connected.png"
          />
          <Story
            heading="Power BI"
            body="Integration with Microsoft Power BI and Microsoft Office comes out of the box, enabling you to analyze your portfolio, clients, transactions and more in every dimension thinkable."
            illustration="/img/bars.png"
            callToAction={"Explore analytics"}
            isEven
          />
        </Layout>
      </div>
      <ContactUs
        person={{
          name: "Geir Nordrik",
          phone: "+47 123 12 123",
          email: "geirn@stacc.com",
          img: "/img/geirn.png"
        }}
      />
    </Layout>
  </div>
)

export default Service
