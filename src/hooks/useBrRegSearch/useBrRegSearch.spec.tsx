import React from "react"
import { renderHook } from "@testing-library/react-hooks"
import { render, screen } from "@testing-library/react"

import axios from "axios"
import useBrRegSearch from "./useBrRegSearch"

jest.mock("axios", () => {
  return {
    create: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() }
    }
  }
})

const staccData = {
  _embedded: {
    enheter: [
      {
        organisasjonsnummer: "981078365",
        navn: "STACC AS",
        organisasjonsform: {
          kode: "AS",
          beskrivelse: "Aksjeselskap",
          _links: {
            self: {
              href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS"
            }
          }
        },
        registreringsdatoEnhetsregisteret: "1999-09-16",
        registrertIMvaregisteret: true,
        naeringskode1: {
          beskrivelse: "Konsulentvirksomhet tilknyttet informasjonsteknologi",
          kode: "62.020"
        },
        antallAnsatte: 17,
        forretningsadresse: {
          land: "Norge",
          landkode: "NO",
          postnummer: "5006",
          poststed: "BERGEN",
          adresse: ["Thormøhlens gate 53C"],
          kommune: "BERGEN",
          kommunenummer: "4601"
        },
        stiftelsesdato: "1999-08-17",
        institusjonellSektorkode: {
          kode: "2100",
          beskrivelse: "Private aksjeselskaper mv."
        },
        registrertIForetaksregisteret: true,
        registrertIStiftelsesregisteret: false,
        registrertIFrivillighetsregisteret: false,
        sisteInnsendteAarsregnskap: "2018",
        konkurs: false,
        underAvvikling: false,
        underTvangsavviklingEllerTvangsopplosning: false,
        maalform: "Bokmål",
        _links: {
          self: {
            href: "https://data.brreg.no/enhetsregisteret/api/enheter/981078365"
          }
        }
      },
      {
        organisasjonsnummer: "917082391",
        navn: "STACC FLOW AS",
        organisasjonsform: {
          kode: "AS",
          beskrivelse: "Aksjeselskap",
          _links: {
            self: {
              href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS"
            }
          }
        },
        registreringsdatoEnhetsregisteret: "2016-04-22",
        registrertIMvaregisteret: true,
        naeringskode1: {
          beskrivelse: "Andre tjenester tilknyttet informasjonsteknologi",
          kode: "62.090"
        },
        antallAnsatte: 8,
        forretningsadresse: {
          land: "Norge",
          landkode: "NO",
          postnummer: "5006",
          poststed: "BERGEN",
          adresse: ["Thormøhlens gate 53C"],
          kommune: "BERGEN",
          kommunenummer: "4601"
        },
        stiftelsesdato: "2016-04-18",
        institusjonellSektorkode: {
          kode: "2100",
          beskrivelse: "Private aksjeselskaper mv."
        },
        registrertIForetaksregisteret: true,
        registrertIStiftelsesregisteret: false,
        registrertIFrivillighetsregisteret: false,
        sisteInnsendteAarsregnskap: "2018",
        konkurs: false,
        underAvvikling: false,
        underTvangsavviklingEllerTvangsopplosning: false,
        maalform: "Bokmål",
        _links: {
          self: {
            href: "https://data.brreg.no/enhetsregisteret/api/enheter/917082391"
          }
        }
      },
      {
        organisasjonsnummer: "930851752",
        navn: "STACC INSIGHT AS",
        organisasjonsform: {
          kode: "AS",
          beskrivelse: "Aksjeselskap",
          _links: {
            self: {
              href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS"
            }
          }
        },
        registreringsdatoEnhetsregisteret: "1995-02-19",
        registrertIMvaregisteret: true,
        frivilligMvaRegistrertBeskrivelser: ["Utleier av bygg eller anlegg"],
        naeringskode1: {
          beskrivelse: "Utgivelse av annen programvare",
          kode: "58.290"
        },
        antallAnsatte: 32,
        forretningsadresse: {
          land: "Norge",
          landkode: "NO",
          postnummer: "5006",
          poststed: "BERGEN",
          adresse: ["Thormøhlens gate 53C"],
          kommune: "BERGEN",
          kommunenummer: "4601"
        },
        stiftelsesdato: "1981-11-02",
        institusjonellSektorkode: {
          kode: "2100",
          beskrivelse: "Private aksjeselskaper mv."
        },
        registrertIForetaksregisteret: true,
        registrertIStiftelsesregisteret: false,
        registrertIFrivillighetsregisteret: false,
        sisteInnsendteAarsregnskap: "2019",
        konkurs: false,
        underAvvikling: false,
        underTvangsavviklingEllerTvangsopplosning: false,
        maalform: "Bokmål",
        _links: {
          self: {
            href: "https://data.brreg.no/enhetsregisteret/api/enheter/930851752"
          }
        }
      },
      {
        organisasjonsnummer: "920318886",
        navn: "STACC X AS",
        organisasjonsform: {
          kode: "AS",
          beskrivelse: "Aksjeselskap",
          _links: {
            self: {
              href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS"
            }
          }
        },
        registreringsdatoEnhetsregisteret: "2018-01-26",
        registrertIMvaregisteret: true,
        naeringskode1: {
          beskrivelse: "Programmeringstjenester",
          kode: "62.010"
        },
        antallAnsatte: 10,
        forretningsadresse: {
          land: "Norge",
          landkode: "NO",
          postnummer: "5006",
          poststed: "BERGEN",
          adresse: ["Thormøhlens gate 53C"],
          kommune: "BERGEN",
          kommunenummer: "4601"
        },
        stiftelsesdato: "2018-01-08",
        institusjonellSektorkode: {
          kode: "2100",
          beskrivelse: "Private aksjeselskaper mv."
        },
        registrertIForetaksregisteret: true,
        registrertIStiftelsesregisteret: false,
        registrertIFrivillighetsregisteret: false,
        sisteInnsendteAarsregnskap: "2018",
        konkurs: false,
        underAvvikling: false,
        underTvangsavviklingEllerTvangsopplosning: false,
        maalform: "Bokmål",
        _links: {
          self: {
            href: "https://data.brreg.no/enhetsregisteret/api/enheter/920318886"
          }
        }
      }
    ]
  }
}

const staccXData = {
  _embedded: {
    enheter: [
      {
        organisasjonsnummer: "920318886",
        navn: "STACC X AS",
        organisasjonsform: {
          kode: "AS",
          beskrivelse: "Aksjeselskap",
          _links: {
            self: {
              href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS"
            }
          }
        },
        registreringsdatoEnhetsregisteret: "2018-01-26",
        registrertIMvaregisteret: true,
        naeringskode1: {
          beskrivelse: "Programmeringstjenester",
          kode: "62.010"
        },
        antallAnsatte: 10,
        forretningsadresse: {
          land: "Norge",
          landkode: "NO",
          postnummer: "5006",
          poststed: "BERGEN",
          adresse: ["Thormøhlens gate 53C"],
          kommune: "BERGEN",
          kommunenummer: "4601"
        },
        stiftelsesdato: "2018-01-08",
        institusjonellSektorkode: {
          kode: "2100",
          beskrivelse: "Private aksjeselskaper mv."
        },
        registrertIForetaksregisteret: true,
        registrertIStiftelsesregisteret: false,
        registrertIFrivillighetsregisteret: false,
        sisteInnsendteAarsregnskap: "2018",
        konkurs: false,
        underAvvikling: false,
        underTvangsavviklingEllerTvangsopplosning: false,
        maalform: "Bokmål",
        _links: {
          self: {
            href: "https://data.brreg.no/enhetsregisteret/api/enheter/920318886"
          }
        }
      }
    ]
  }
}
const mockFunction = data => () => Promise.resolve({ data })

describe.skip("useBrregSearch", () => {
  it("search", async () => {
    // axios.get.mockImplementationOnce(mockFunction(staccData))
    // const { result, waitForNextUpdate } = renderHook(() =>
    //   useBrRegSearch("Stacc")
    // )
    // await waitForNextUpdate()
    // expect(result.current.results).not.toBeUndefined()
    // expect(result.current.results.length).toBe(4)
  })
  it("Should work with org nr", async () => {
    // axios.mockImplementationOnce(mockFunction(staccXData))
    // const { result, waitForNextUpdate } = renderHook(() =>
    //   useBrRegSearch("920318886")
    // )
    // await waitForNextUpdate()
    // expect(result.current.results).not.toBeUndefined()
    // expect(result.current.results.length).toBe(1)
    // expect(result.current.results[0].navn).toBe("STACC X AS")
  })
  describe("Rendering", () => {
    it("should render Results", async () => {
      // axios.get.mockImplementationOnce(mockFunction(staccData))
      // const { result, waitForNextUpdate } = renderHook(() =>
      //   useBrRegSearch("Stacc")
      // )
      // await waitForNextUpdate()
      // render(
      //   <div>
      //     {result.current.results.map(result => {
      //       return <p key={result.navn}>{result.navn}</p>
      //     })}
      //   </div>
      // )
      // expect(screen.getByText("STACC AS")).toBeInTheDocument()
      // expect(screen.getByText("STACC X AS")).toBeInTheDocument()
    })
    it("should render empty array", async () => {
      // axios.get.mockImplementationOnce(mockFunction(staccData))
      // const { result } = renderHook(() => useBrRegSearch("S"))
      // render(
      //   <div>
      //     {result.current.results.map(result => {
      //       return <p key={result.navn}>{result.navn}</p>
      //     })}
      //   </div>
      // )
      // expect(screen.getAllBy * "STACC").toBeNaN()
    })
    it("should render empty array not exisiting company", async () => {
      // axios.get.mockImplementationOnce(
      //   mockFunction({ _embedded: { enheter: [] } })
      // )
      // const { result, waitForNextUpdate } = renderHook(() =>
      //   useBrRegSearch("ThisCompanyHopeFullyDontExist")
      // )
      // await waitForNextUpdate()
      // render(
      //   <div>
      //     {result.current.results.map(result => {
      //       return <p key={result.navn}>{result.navn}</p>
      //     })}
      //   </div>
      // )
      // expect(screen.getAllBy * "ThisCompanyHopeFullyDontExist").toBeNaN()
    })
  })
})
