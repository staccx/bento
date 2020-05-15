import extractTextFromBlocks from "./extractTextFromBlocks"

const sanityBlock = [
  {
    _key: "0e80857d4c3b",
    _type: "block",
    children: [
      {
        _key: "0e80857d4c3b0",
        _type: "span",
        marks: [],
        text: "Kontakt oss"
      }
    ],
    markDefs: [],
    style: "h2"
  },
  {
    _key: "9611034e2b1f",
    _type: "block",
    children: [
      {
        _key: "9611034e2b1f0",
        _type: "span",
        marks: [],
        text: ""
      },
      {
        _key: "9611034e2b1f1",
        _type: "span",
        marks: ["4c299e8e9b27"],
        text: "kundeservice@frende.no"
      },
      {
        _key: "9611034e2b1f2",
        _type: "span",
        marks: [],
        text: "\nTlf.: 55 15 36 00"
      }
    ],
    markDefs: [
      {
        _key: "4c299e8e9b27",
        _type: "link",
        href: "mailto:kundeservice@frende.no"
      }
    ],
    style: "normal"
  },
  {
    _key: "cd60b478136e",
    _type: "block",
    children: [
      {
        _key: "cd60b478136e0",
        _type: "span",
        marks: [],
        text:
          "Åpningstider\n- Mandag til fredag: 08.00-16.00\n- Torsdag: 08.00-18.00"
      }
    ],
    markDefs: [],
    style: "normal"
  },
  {
    _key: "4d8a27e4972a",
    _type: "block",
    children: [
      {
        _key: "4d8a27e4972a0",
        _type: "span",
        marks: [],
        text:
          "Trenger du øyeblikkelig hjelp?\nRing oss på 55 15 36 00\nhele døgnet"
      }
    ],
    markDefs: [],
    style: "normal"
  },
  {
    _key: "d723b4612d45",
    _type: "block",
    children: [
      {
        _key: "d723b4612d450",
        _type: "span",
        marks: [],
        text: "Postadresse: Frende Forsikring,\npostboks 7335, 5020 Bergen"
      }
    ],
    markDefs: [],
    style: "normal"
  },
  {
    _key: "9b34dd86a4fb",
    _type: "block",
    children: [
      {
        _key: "9b34dd86a4fb0",
        _type: "span",
        marks: [],
        text: ""
      },
      {
        _key: "9b34dd86a4fb1",
        _type: "span",
        marks: ["b7a8434c3029"],
        text: "Gå til kundeservice"
      },
      {
        _key: "9b34dd86a4fb2",
        _type: "span",
        marks: [],
        text: ""
      }
    ],
    markDefs: [
      {
        _key: "b7a8434c3029",
        _type: "link",
        href: "https://www.frende.no/kundeservice/"
      }
    ],
    style: "normal"
  },
  {
    _key: "97d12dc01139",
    _type: "block",
    children: [
      {
        _key: "97d12dc011390",
        _type: "span",
        marks: [],
        text: ""
      }
    ],
    markDefs: [],
    style: "normal"
  }
]

describe("extractTextFromBlocks", () => {
  it("should extract", () => {
    const data = extractTextFromBlocks(sanityBlock)
    expect(data).not.toEqual(sanityBlock)
    expect(data).toBe(`Kontakt osskundeservice@frende.no
Tlf.: 55 15 36 00Åpningstider
- Mandag til fredag: 08.00-16.00
- Torsdag: 08.00-18.00Trenger du øyeblikkelig hjelp?
Ring oss på 55 15 36 00
hele døgnetPostadresse: Frende Forsikring,
postboks 7335, 5020 BergenGå til kundeservice`)
  })
})
