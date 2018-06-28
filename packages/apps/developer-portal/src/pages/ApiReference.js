import React from "react"
import {
  Layout,
  Box,
  Heading,
  Paragraph,
  Text,
  CodeRenderer,
  List,
  SplitListItem,
  Table
} from "@staccx/base"
import OpenApiConsumer from "../components/OpenApiConsumer"
import { Link } from "react-router-dom"

const request = `var Fundu = require("fundu")(
  "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
);

Fundu.balance.listTransactions({ limit: 3 }, function(err, transactions) {
  // asynchronously called
});
`

const response = `{
  "object": "list",
  "url": "/v1/balance/history",
  "has_more": false,
  "data": [
    {
      "id": "txn_19XJJ02eZvKYlo2ClwuJ1rbA",
      "object": "balance_transaction",
      "amount": 999,
      "available_on": 1483920000,
      "created": 1483315442,
      "currency": "usd",
      "description": null,
      "exchange_rate": null,
      "fee": 59,
      "fee_details": [
        {
          "amount": 59,
          "application": null,
          "currency": "usd",
          "description": "Fundu processing fees",
          "type": "fundu_fee"
        }
      ],
      "net": 940,
      "source": "ch_19XJJ02eZvKYlo2CHfSUsSpl",
      "status": "pending",
      "type": "charge"
    },
    {...},
    {...}
  ]
}`

const attributes = [
  {
    attribute: { name: "type", type: "string" },
    description: "The type of error returned. One of"
  },
  {
    attribute: { name: "charge", type: "optional string" },
    description: "For card errors, the ID of the failed charge."
  },
  {
    attribute: { name: "code", type: "optional string" },
    description:
      "For some errors that could be handled programmatically, a short string indicating the error code reported."
  }
]

const ApiReference = () => (
  <OpenApiConsumer>
    {({ sorted, openapi, info }) => {
      return (
        <Layout
          paddingTop="large"
          paddingBottom="huge"
          variant="documentationApiReferences"
          rowGap="huge"
        >
          <div>
            <Heading id="info" variant="documentation" level={2}>
              {`${info.title} (${info.version})`}
            </Heading>
            <Box flush>
              <Layout>
                <div>
                  <Layout>
                    <Paragraph>{info.description}</Paragraph>
                  </Layout>
                </div>
                <div>
                  <Layout rowGap="large">
                    <div>
                      <Heading level={4}>
                        <span>Contact</span>
                      </Heading>
                      <Paragraph>{info.contact.email}</Paragraph>
                    </div>
                    <div>
                      <Heading level={4}>
                        <span>License</span>
                      </Heading>
                      <a href={info.license.url}>{info.license.name}</a>
                    </div>
                    <div>
                      <Heading level={4}>
                        <a href={info.termsOfService}>
                          <span>Terms of service</span>
                        </a>
                      </Heading>
                    </div>
                  </Layout>
                </div>
              </Layout>
            </Box>
          </div>
          <div>
            <Heading id="authentication" variant="documentation" level={2}>
              Some path
            </Heading>
            <Box variant="codeBlock" flush>
              <Layout variant="documentationApiExample">
                <div>
                  <Layout>
                    <Paragraph>
                      Authenticate your account by including your secret key in
                      API requests. You can manage your API keys in the
                      Dashboard. Your API keys carry many privileges, so be sure
                      to keep them secure! Do not share your secret API keys in
                      publicly accessible areas such GitHub, client-side code,
                      and so forth. Inline code example{" "}
                      <Text variant="documentationInline">400</Text>
                    </Paragraph>
                  </Layout>
                </div>
                <div>
                  <Layout rowGap="large">
                    <div>
                      <Heading level={4} variant="apiExample">
                        <span>Example request</span>
                      </Heading>
                      <CodeRenderer code={request} />
                    </div>
                    <div>
                      <Heading level={4} variant="apiExample">
                        <span>Example response</span>
                      </Heading>
                      <CodeRenderer code={response} />
                    </div>
                  </Layout>
                </div>
              </Layout>
            </Box>
          </div>
          {Object.keys(sorted).map(tag => (
            <div>
              <Heading id={tag} variant="documentation" level={2}>
                {tag}
              </Heading>
              {sorted[tag].map(operation => {
                return (
                  <div>
                    <Heading level={3}>
                      {operation.path} {operation.type}
                    </Heading>
                    <Box variant="codeBlock" flush>
                      <Layout variant="documentationApiExample">
                        <div>
                          <Layout>
                            <Paragraph>
                              {operation.summary}
                              <Text variant="documentationInline">400</Text>
                            </Paragraph>
                          </Layout>
                        </div>
                        <div>
                          <Layout rowGap="large">
                            <div>
                              <Heading level={4} variant="apiExample">
                                <span>Example request</span>
                              </Heading>
                              <CodeRenderer code={request} />
                            </div>
                            <div>
                              <Heading level={4} variant="apiExample">
                                <span>Example response</span>
                              </Heading>
                              <CodeRenderer code={response} />
                            </div>
                          </Layout>
                        </div>
                      </Layout>
                    </Box>
                  </div>
                )
              })}
              <Box variant="codeBlock" flush>
                <Layout variant="documentationApiExample">
                  <div>
                    <Layout>
                      <Paragraph>
                        fundu uses conventional HTTP response codes to indicate
                        the success or failure of an API request. In general:
                        Codes in the{" "}
                        <Text variant="documentationInline">2xx</Text> range
                        indicate success. Codes in the{" "}
                        <Text variant="documentationInline">4xx</Text> range
                        indicate an error that failed given the information
                        provided (e.g., a required parameter was omitted, a
                        charge failed, etc.). Codes in the{" "}
                        <Text variant="documentationInline">5xx</Text> range
                        indicate an error with Fundu's servers (these are rare).
                      </Paragraph>

                      <div className="method-list">
                        <Heading level={5} className="method-list-title">
                          Attributes
                        </Heading>

                        <Table data={attributes} variant="documentationAttr">
                          {({ value }) => (
                            <td>
                              <h3>{value.name ? value.name : value}</h3>
                              <span>{value.type ? value.type : value}</span>
                            </td>
                          )}
                        </Table>
                      </div>
                    </Layout>
                  </div>
                  <div>
                    <Layout rowGap="large">
                      <div>
                        <Heading level={4} variant="apiExample">
                          <span>Example request</span>
                        </Heading>
                        <CodeRenderer code={request} />
                      </div>
                    </Layout>
                  </div>
                </Layout>
              </Box>
            </div>
          ))}
        </Layout>
      )
    }}
  </OpenApiConsumer>
)

export default ApiReference
