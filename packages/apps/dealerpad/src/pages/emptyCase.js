export const emptyCase = {
  id: " ",
  status: "",
  applicationId: " ",
  productName: "",
  vendorName: "",
  customers: [
    {
      firstName: " ",
      lastName: " ",
      phoneNumber: " ",
      email: " "
    },
    {
      firstName: " ",
      lastName: " ",
      phoneNumber: " ",
      email: " "
    }
  ],
  conditions: {
    "copy-of-id": {
      description: "",
      uri: ""
    },
    "copy-of-id-coapplicant": {
      description: ""
    },
    "purchase-contract": {
      description: ""
    }
  },
  funding: {
    purchasePrice: 0,
    oneTimeFee: 0,
    "startRent(eks mva)": 0,
    "startRent(inc mva)": 0,
    rentCalculationBasis: "",
    rentPeriodMnd: 0,
    rentTerm: "månedlig",
    salvage: 0,
    "establishmentFees(inc mva)": 0,
    installmentFees: 0,
    totalFee: 0,
    "termFeePerMnd(inc mva)": 0,
    purchasePriceWithExtra: 0
  },
  car: {
    type: "",
    vehicle: "",
    yearModel: "",
    bodyStyle: "",
    enhancement: ["", "", "", "", "", "", ""],
    model: "",
    maxDriveRange: 0,
    pricePerKm: 0
  },
  documents: [
    {
      condition: {
        description: "",
        uri: ""
      },
      name: "",
      task: {
        taskType: "",
        taskId: "",
        flowId: "",
        createdAt: "",
        permissions: {
          read: true,
          save: false,
          complete: false,
          delete: true
        },
        context: {
          conditionType: "",
          uri: ""
        }
      }
    },
    {
      condition: {
        description: ""
      },
      name: ""
    },
    {
      condition: {
        description: ""
      },
      name: ""
    }
  ]
}
