export const request = `var Fundu = require("fundu")(
  "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
);

Fundu.balance.listTransactions({ limit: 3 }, function(err, transactions) {
  // asynchronously called
});
`

export const response = `{
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

export const attributes = [
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
