import { resourceReducer } from "./backend.utils"

const data = [
  {
    key: "fond",
    value: [{ _key: "a3719339a7e0", _type: "localeString", nb: "Fond" }]
  },
  {
    key: "open_document",
    value: [{ _key: "2a5adc577aa3", _type: "localeString", nb: "Åpne" }]
  },
  {
    key: "agreementdetail-documents-title",
    value: [
      {
        _key: "987026b86d4c",
        _type: "localeString",
        nb: "Dokumenter til avtalen"
      }
    ]
  },
  {
    key: "change-agreement-back-button",
    value: [{ _key: "cc1638aee911", _type: "localeString", nb: "Tilbake" }]
  },
  {
    key: "document-banner-body",
    value: [
      {
        _key: "23461569fdc4",
        _type: "localeRichText",
        nb: [
          {
            _key: "78a87c868b40",
            _type: "block",
            children: [
              {
                _key: "78a87c868b400",
                _type: "span",
                marks: [],
                text:
                  "Kontoutskriften gir deg nyttige tips og detaljer. Her finner du den og andre dokumenter tilknyttet "
              },
              {
                _key: "78a87c868b401",
                _type: "span",
                marks: ["strong"],
                text: "avtalene"
              },
              { _key: "78a87c868b402", _type: "span", marks: [], text: "." }
            ],
            markDefs: [],
            style: "normal"
          }
        ]
      }
    ]
  },
  {
    key: "agreementdetail-savingsprofile-title",
    value: [
      { _key: "a7854687fc5a", _type: "localeString", nb: "Din spareprofil" }
    ]
  },
  {
    key: "agreementdetail-settings-title",
    value: [
      { _key: "3f92f40a50c1", _type: "localeString", nb: "Innstillinger" }
    ]
  },
  {
    key: "agreementdetail-disclaimer",
    value: [
      {
        _key: "47ab2ab04589",
        _type: "localeRichText",
        nb: [
          {
            _key: "c92e10ef0a5a",
            _type: "block",
            children: [
              {
                _key: "c92e10ef0a5a0",
                _type: "span",
                marks: [],
                text:
                  "Kostnader til forvaltning av tidligere opptjent pensjonskapital\ndekkes av deg. Din arbeidsgiver dekker kostnader til forvaltning\nav den pensjonskapital du har opptjent i arbeidsforholdet. Det kan\navtales en annen fordeling av forvaltningskostnadene for tidligere\nopptjent pensjonskapital. Din arbeidsgiver dekker kostnader til\nadministrasjon av ordningen."
              }
            ],
            markDefs: [],
            style: "normal"
          }
        ]
      }
    ]
  },
  {
    key: "CanBeStarted",
    value: [
      { _key: "5900f1a484b5", _type: "localeString", nb: "Kan startes om" }
    ]
  },
  {
    key: "change-agreement-confirm-heading",
    value: [
      {
        _key: "69c75eeffab8",
        _type: "localeString",
        nb: "Bekreft ny spareprofil"
      }
    ]
  },
  {
    key: "kursdato",
    value: [{ _key: "4755547b8fa5", _type: "localeString", nb: "Kursdato" }]
  },
  {
    key: "from",
    value: [
      {
        _key: "e0e958ac0cd4",
        _type: "localeRichText",
        nb: [
          {
            _key: "8fb7ea0bf9c1",
            _type: "block",
            children: [
              { _key: "8fb7ea0bf9c10", _type: "span", marks: [], text: "fra" }
            ],
            markDefs: [],
            style: "normal"
          }
        ]
      }
    ]
  },
  {
    key: "agreementDetailHeroDaysValue",
    value: [{ _key: "c4e2f72bc34b", _type: "localeString", nb: "Dagens verdi" }]
  },
  {
    key: "min-side",
    value: [{ _key: "cd5ca26c6a4d", _type: "localeString", nb: "Min side" }]
  },
  {
    key: "rentefond",
    value: [{ _key: "506ecfaa07a2", _type: "localeString", nb: "Rentefond" }]
  },
  {
    key: "change-agreement-back",
    value: [{ _key: "fd8140eeba10", _type: "localeString", nb: "Tilbake" }]
  },
  {
    key: "withdrawal",
    value: [
      {
        _key: "18043573ea13",
        _type: "localeString",
        nb: "Utbetaling av pensjon"
      }
    ]
  },
  {
    key: "riskReduction",
    value: [{ _key: "14873177282b", _type: "localeString", nb: "Nedtrapping" }]
  },
  {
    key: "document-banner-button",
    value: [
      { _key: "03863ed54924", _type: "localeString", nb: "Mine dokumenter" }
    ]
  },
  {
    key: "seeDetails",
    value: [{ _key: "06a04a9815cd", _type: "localeString", nb: "Se detaljer" }]
  },
  {
    key: "avkastning",
    value: [{ _key: "c84cebb45947", _type: "localeString", nb: "Avkastning" }]
  },
  {
    key: "document-banner-title",
    value: [
      {
        _key: "4e6461448096",
        _type: "localeString",
        nb: "Se hvordan det gikk med dine avtaler i 2019"
      }
    ]
  },
  {
    key: "endre-til",
    value: [{ _key: "71754dd25bbd", _type: "localeString", nb: "Endre til" }]
  },
  {
    key: "page-min-pensjon",
    value: [{ _key: "e213959c572c", _type: "localeString", nb: "Min pensjon" }]
  },
  {
    key: "change-agreement-next-button",
    value: [
      { _key: "bdbefeb5f141", _type: "localeString", nb: "Bekreft endring" }
    ]
  },
  {
    key: "risk-reduction-confirm-button",
    value: [{ _key: "49b0d76c8049", _type: "localeString", nb: "Bekreft" }]
  },
  {
    key: "NotStarted",
    value: [{ _key: "fe54c69527d5", _type: "localeString", nb: "Ikke startet" }]
  },
  {
    key: "change-agreement-confirm-message",
    value: [
      {
        _key: "182a24ca7f37",
        _type: "localeString",
        nb: "Du vil se endringene på profilen din om noen dager."
      }
    ]
  },
  {
    key: "beholdning",
    value: [{ _key: "6fc5bb10c687", _type: "localeString", nb: "Beholdning" }]
  },
  {
    key: "agreement-item-avkastning",
    value: [{ _key: "5504138a59d8", _type: "localeString", nb: "Avkastning" }]
  },
  {
    key: "home-title",
    value: [{ _key: "53cd33be244c", _type: "localeString", nb: "Min pensjon" }]
  },
  {
    key: "change-agreement-completed-button",
    value: [
      {
        _key: "6602352d13a9",
        _type: "localeString",
        nb: "Til pensjonsoversikt"
      }
    ]
  },
  {
    key: "risk-reduction-choice-heading",
    value: [
      {
        _key: "a4e48f2baa1c",
        _type: "localeString",
        nb: "Ønsker du nedtrapping?"
      }
    ]
  },
  {
    key: "change-agreement-receipt-heading",
    value: [
      {
        _key: "a6ab15805b62",
        _type: "localeString",
        nb: "Du har nå endret spareprofil til"
      }
    ]
  },
  {
    key: "logout",
    value: [{ _key: "778d058bf968", _type: "localeString", nb: "Logg ut" }]
  },
  {
    key: "change-agreement-legalese",
    value: [
      {
        _key: "05e7b3cb5d71",
        _type: "localeString",
        nb:
          "Vi flytter dagens beholdning og fremtidige betalinger fra {{fromProduct}} til {{toProduct}}.  Jeg forstår at endringer i min porteføje kan påvirke risikoen for svingninger i markedsverdien og fremtidig avkastning."
      }
    ]
  },
  {
    key: "unread",
    value: [{ _key: "c936e4425f88", _type: "localeString", nb: "Ulest" }]
  },
  {
    key: "risk-reduction-choice-no",
    value: [{ _key: "7bffde9c0f23", _type: "localeString", nb: "Nei" }]
  },
  {
    key: "agreementdetail-total-value",
    value: [{ _key: "ca039514b467", _type: "localeString", nb: "Dagens verdi" }]
  },
  {
    key: "gebyr",
    value: [{ _key: "53e3be073466", _type: "localeString", nb: "gebyr" }]
  },
  {
    key: "aksjer",
    value: [{ _key: "2ef8023c3d38", _type: "localeString", nb: "Aksjer" }]
  },
  {
    key: "risk-reduction-text",
    value: [
      {
        _key: "0c22fcbb6251",
        _type: "localeRichText",
        nb: [
          {
            _key: "5fcdeedf8595",
            _type: "block",
            children: [
              {
                _key: "5fcdeedf85950",
                _type: "span",
                marks: [],
                text:
                  "Nedtrapping betyr at akjseandelen trappes ned 10 år før\nutbetaling. Det vil si at andelen aksjer reduseres og andelen\nrentefond går opp. Slik får du mindre svingninger i saldoen\nnår det nærmer seg utbetaling."
              }
            ],
            markDefs: [],
            style: "normal"
          }
        ]
      }
    ]
  },
  {
    key: "valgt",
    value: [{ _key: "67d2fe00344c", _type: "localeString", nb: "Valgt" }]
  },
  {
    key: "innskudd",
    value: [{ _key: "06613df842bc", _type: "localeString", nb: "Innskudd" }]
  },
  {
    key: "edit",
    value: [{ _key: "a7f05d521b07", _type: "localeString", nb: "Endre" }]
  },
  {
    key: "home-my-agreements",
    value: [{ _key: "df837759fb8f", _type: "localeString", nb: "Mine avtaler" }]
  },
  {
    key: "document-more-button",
    value: [
      { _key: "bd61cb3ca72d", _type: "localeString", nb: "Se eldre dokumenter" }
    ]
  },
  {
    key: "documents-heading",
    value: [{ _key: "c48ee60d15ce", _type: "localeString", nb: "Dokumenter" }]
  },
  {
    key: "agreement-item-beholding",
    value: [{ _key: "29bd316cfc23", _type: "localeString", nb: "Beholdning" }]
  },
  {
    key: "risk-reduction-header",
    value: [{ _key: "6c7b71beb3fe", _type: "localeString", nb: "Nedtrapping" }]
  },
  {
    key: "fra",
    value: [{ _key: "d30fc1cad4cc", _type: "localeString", nb: "fra" }]
  },
  {
    key: "risk-reduction-choice-yes",
    value: [{ _key: "00deac1d4e4f", _type: "localeString", nb: "Ja" }]
  }
]

describe("Backend utils", () => {
  describe("Resource reducer", () => {
    it("Should reduce", () => {
      const reducer = resourceReducer("nb")

      const output = data.reduce(reducer, {})

      expect(Array.isArray(data)).toBe(true)
      expect(Array.isArray(output)).toBe(false)

      const testValue = data[1]
      expect(testValue.key).toBe("open_document")
      expect(output[testValue.key]).not.toBeUndefined()
      expect(output[testValue.key][0]).toBe(testValue.value[0].nb)
      expect(output[data[0].key][0]).toBe(data[0].value[0].nb)
    })
  })
})
