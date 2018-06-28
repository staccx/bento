import React from "react"
import {
  Layout,
  Box,
  Heading,
  Paragraph,
  Text,
  CodeRenderer,
  List,
  SplitListItem
} from "@staccx/base"

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

const attributesTable = [
  {
    attribute: {
      heading: "type",
      type: "string"
    },
    description: `The type of error returned. One of{" "}
  <code>api_connection_error</code>,{" "}
  <code>api_error</code>,{" "}
  <code>authentication_error</code>,{" "}
  <code>card_error</code>, <code>idempotency_error</code>,{" "}
  <code>invalid_request_error</code>, or{" "}
  <code>rate_limit_error</code>`
  }
]

const ApiReference = () => (
  <Layout
    paddingTop="large"
    paddingBottom="huge"
    variant="documentationApiReferences"
    rowGap="huge"
  >
    <div>
      <Heading id="authentication" variant="documentation" level={2}>
        Authentication
      </Heading>
      <Box variant="codeBlock" flush>
        <Layout variant="documentationApiExample">
          <div>
            <Layout>
              <Paragraph>
                Authenticate your account by including your secret key in API
                requests. You can manage your API keys in the Dashboard. Your
                API keys carry many privileges, so be sure to keep them secure!
                Do not share your secret API keys in publicly accessible areas
                such GitHub, client-side code, and so forth. Inline code example{" "}
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
    <div>
      <Heading id="authentication" variant="documentation" level={2}>
        Errors
      </Heading>
      <Box variant="codeBlock" flush>
        <Layout variant="documentationApiExample">
          <div>
            <Layout>
              <Paragraph>
                fundu uses conventional HTTP response codes to indicate the
                success or failure of an API request. In general: Codes in the{" "}
                <Text variant="documentationInline">2xx</Text> range indicate
                success. Codes in the{" "}
                <Text variant="documentationInline">4xx</Text> range indicate an
                error that failed given the information provided (e.g., a
                required parameter was omitted, a charge failed, etc.). Codes in
                the <Text variant="documentationInline">5xx</Text> range
                indicate an error with Fundu's servers (these are rare).
              </Paragraph>

              <div className="method-list">
                <Heading level={5} className="method-list-title">
                  Attributes
                </Heading>
                <List variant="documentationMethodList">
                  <SplitListItem variant="documentationMethodListItem">
                    <Heading level={3} variant="documentationMethodHeading">
                      type
                      <Text variant="documentationMethodValidtionText">
                        string
                      </Text>
                    </Heading>
                    <div>
                      <p>
                        The type of error returned. One of{" "}
                        <code>api_connection_error</code>,{" "}
                        <code>api_error</code>,{" "}
                        <code>authentication_error</code>,{" "}
                        <code>card_error</code>, <code>idempotency_error</code>,{" "}
                        <code>invalid_request_error</code>, or{" "}
                        <code>rate_limit_error</code>
                      </p>
                    </div>
                  </SplitListItem>
                  <SplitListItem variant="documentationMethodListItem">
                    <Heading level={3} variant="documentationMethodHeading">
                      charge
                      <Text variant="documentationMethodValidtionText">
                        optional string
                      </Text>
                    </Heading>
                    <div>
                      <p>For card errors, the ID of the failed charge.</p>
                    </div>
                  </SplitListItem>
                  <SplitListItem variant="documentationMethodListItem">
                    <Heading level={3} variant="documentationMethodHeading">
                      code
                      <Text variant="documentationMethodValidtionText">
                        optional string
                      </Text>
                    </Heading>
                    <div>
                      <p>
                        For some errors that could be handled programmatically,
                        a short string indicating the{" "}
                        <a href="/docs/error-codes">error code</a> reported.
                      </p>
                    </div>
                  </SplitListItem>
                </List>
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
  </Layout>
)

export default ApiReference
