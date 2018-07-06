import fileStatus from "./fileStatus"

const cases = [
  {
    type: "loan",
    id: "53674",
    status: 2,
    customer: {
      name: "Eva Anita Bjerknes",
      ssn: "06107042294",
      address: "Borgenveien 5",
      postCode: 1739,
      postArea: "Borgenhaugen",
      phoneNumber: "472 61 188",
      eMail: "anita.bjerknes@gmail.com",
      ref: "02-2018-510032"
    },
    cosigner: {
      name: "Eivind Kjellevold",
      ssn: "10108218324",
      address: "Borgenveien 5",
      postCode: 1739,
      postArea: "Borgenhaugen",
      phoneNumber: "912 12 217",
      eMail: "eivind.kjellevold@gmail.com",
      ref: "02-2018-510033"
    },
    vehicle: {
      make: "Volvo",
      year: 2018,
      model: "S90",
      type: "Personbil",
      chassisType: "4 dører sedan",
      variant: "T8 AWD Twin E, R-Des. Pro",
      options:
        "AWTG-81 SC, Uten soltak, Krystal hvit Metallic 707, 70700, Skinn Sport R-design RCOR, Hengerfeste se",
      maxMileage: 15000,
      mileageOverageFee: 2.5
    },
    financing: {
      price: 829000,
      oneTimeFee: 29021,
      startRent: 71200,
      startRentIncTax: 89000,
      rentCalculationBasis: 597804,
      rentLength: 36,
      rentFrequency: "monthly",
      restValue: 496930,
      arrangementFee: 4863,
      installmentFee: 106,
      totalInterest: 0.0049,
      termRent: 4990
    },
    messages: [
      {
        from: "Bjarne Bankaas",
        date: "28.06.2018",
        time: "11:19",
        body:
          "Du fikk ikke med hele fødselsnummeret i kontrakten. Kan du scanne og sende den på nytt, så skal jeg få godkjent den før jeg går i dag?"
      },
      {
        from: "Bjarne Bankaas",
        date: "28.06.2018",
        time: "11:20",
        body:
          "Jeg går klokken 15:00 forresten, og trenger den i hende innen kl 14:00"
      }
    ],
    documents: [
      {
        name: "Kopi av ID til lånetaker",
        status: fileStatus.empty
      },
      {
        name: "Kopi av ID til medlånetaker",
        status: fileStatus.rejected
      },
      {
        name: "Kjøpekontrakt",
        status: fileStatus.approved
      },
      {
        name: "Lånedokument",
        status: fileStatus.uploaded
      },
      {
        name: "Tinglysningsskjema",
        status: fileStatus.uploaded
      }
    ]
  },
  {
    type: "loan",
    id: "24543",
    status: 2,
    customer: {
      name: "Marius Hauken",
      ssn: "23088912345",
      address: "Borgenveien 5",
      postCode: 1739,
      postArea: "Borgenhaugen",
      phoneNumber: "472 61 188",
      eMail: "marius.hauken@gmail.com",
      ref: "02-2018-32891"
    },
    cosigner: {
      name: "Robin Sandborg",
      ssn: "21018612345",
      address: "Borgenveien 5",
      postCode: 1739,
      postArea: "Borgenhaugen",
      phoneNumber: "912 12 217",
      eMail: "robin.sandborg@gmail.com",
      ref: "02-2018-32891-2"
    },
    vehicle: {
      make: "Volvo",
      year: 2018,
      model: "XC90",
      type: "Personbil",
      chassisType: "4 dører suv",
      variant: "T8 AWD Twin E, R-Des. Pro",
      options:
        "AWTG-81 SC, Uten soltak, Krystal hvit Metallic 707, 70700, Skinn Sport R-design RCOR, Hengerfeste se",
      maxMileage: 15000,
      mileageOverageFee: 2.5
    },
    financing: {
      price: 829000,
      oneTimeFee: 29021,
      startRent: 71200,
      startRentIncTax: 89000,
      rentCalculationBasis: 597804,
      rentLength: 36,
      rentFrequency: "monthly",
      restValue: 496930,
      arrangementFee: 4863,
      installmentFee: 106,
      totalInterest: 0.049,
      termRent: 4990
    }
  },
  {
    type: "loan",
    id: "21789",
    status: 2,
    customer: {
      name: "Espen Sæverud",
      ssn: "23088912345",
      address: "Borgenveien 5",
      postCode: 1739,
      postArea: "Borgenhaugen",
      phoneNumber: "472 61 188",
      eMail: "espen.saeverud@gmail.com",
      ref: "02-2018-32891"
    },
    vehicle: {
      make: "Volvo",
      year: 2018,
      model: "V60",
      type: "Personbil",
      chassisType: "4 dører sedan",
      variant: "T8 AWD Twin E, R-Des. Pro",
      options:
        "AWTG-81 SC, Uten soltak, Krystal hvit Metallic 707, 70700, Skinn Sport R-design RCOR, Hengerfeste se",
      maxMileage: 15000,
      mileageOverageFee: 2.5
    },
    financing: {
      price: 829000,
      oneTimeFee: 29021,
      startRent: 71200,
      startRentIncTax: 89000,
      rentCalculationBasis: 597804,
      rentLength: 36,
      rentFrequency: "monthly",
      restValue: 496930,
      arrangementFee: 4863,
      installmentFee: 106,
      totalInterest: 0.049,
      termRent: 4990
    }
  }
]

export default caseId => (!caseId ? cases : cases.find(c => c.id === caseId))
