import React from "react"
import { renderHook } from "@testing-library/react-hooks"
import { render, screen } from "@testing-library/react"
import axios from "axios"
import useBrRegSearch from "./useBrRegSearch"

const result = [
  {
    _embedded: {
      enheter: [
        {
          organisasjonsnummer: "920162665",
          navn: "VELFAC",
          organisasjonsform: {
            kode: "UTLA",
            beskrivelse: "Utenlandsk enhet",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/UTLA"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-21",
          registrertIMvaregisteret: false,
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Danmark",
            landkode: "DK",
            poststed: "DK-8700 HORSENS",
            adresse: ["Bygholm Søpark 23"]
          },
          stiftelsesdato: "1969-09-29",
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920162665"
            }
          }
        },
        {
          organisasjonsnummer: "920162673",
          navn: "UNG KYRKJESONG VEST",
          organisasjonsform: {
            kode: "FLI",
            beskrivelse: "Forening/lag/innretning",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/FLI"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-21",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse:
              "Utøvende kunstnere og underholdningsvirksomhet innen musikk",
            kode: "90.011"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "4027",
            poststed: "STAVANGER",
            adresse: ["c/o Tuva Ystad Gederø", "Steinstølveien 17"],
            kommune: "STAVANGER",
            kommunenummer: "1103"
          },
          stiftelsesdato: "2017-12-19",
          institusjonellSektorkode: {
            kode: "7000",
            beskrivelse: "Ideelle organisasjoner"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: true,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Nynorsk",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920162673"
            }
          }
        },
        {
          organisasjonsnummer: "920162967",
          navn: "SALOLE FORMIDLING",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-27",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse:
              "Utøvende kunstnere og underholdningsvirksomhet ikke nevnt annet sted",
            kode: "90.019"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "0491",
            poststed: "OSLO",
            adresse: ["Hareveien 21"],
            kommune: "OSLO",
            kommunenummer: "0301"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920162967"
            }
          }
        },
        {
          organisasjonsnummer: "920162991",
          navn: "SUNNIVA NORBERG",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-21",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse:
              "Utøvende kunstnere og underholdningsvirksomhet innen musikk",
            kode: "90.011"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "1160",
            poststed: "OSLO",
            adresse: ["Lambertseterveien 2A"],
            kommune: "OSLO",
            kommunenummer: "0301"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920162991"
            }
          }
        },
        {
          organisasjonsnummer: "920163149",
          navn: "INTERNATIONAL ART SCENE",
          organisasjonsform: {
            kode: "FLI",
            beskrivelse: "Forening/lag/innretning",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/FLI"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse:
              "Aktiviteter i andre interesseorganisasjoner ikke nevnt annet sted",
            kode: "94.991"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "0555",
            poststed: "OSLO",
            adresse: [
              "c/o Karolina Malgorzata Lisik",
              "Thorvald Meyers gate 16A"
            ],
            kommune: "OSLO",
            kommunenummer: "0301"
          },
          stiftelsesdato: "2017-12-13",
          institusjonellSektorkode: {
            kode: "7000",
            beskrivelse: "Ideelle organisasjoner"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: true,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163149"
            }
          }
        },
        {
          organisasjonsnummer: "920163203",
          navn: "SAMEIET BJØNNLIÅSVEIEN OG DEL AV LIAVEIEN",
          organisasjonsform: {
            kode: "SAM",
            beskrivelse: "Tingsrettslig sameie",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/SAM"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2018-01-04",
          registrertIMvaregisteret: false,
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "7340",
            poststed: "OPPDAL",
            adresse: ["c/o Arild Hagen", "Gamle Kongeveg 421"],
            kommune: "OPPDAL",
            kommunenummer: "5021"
          },
          stiftelsesdato: "2016-09-12",
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163203"
            }
          }
        },
        {
          organisasjonsnummer: "920163351",
          navn: "OSA AGE WITH EDGE",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse: "Reklamebyråer",
            kode: "73.110"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "0753",
            poststed: "OSLO",
            adresse: ["Ostadalsveien 77"],
            kommune: "OSLO",
            kommunenummer: "0301"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163351"
            }
          }
        },
        {
          organisasjonsnummer: "920163475",
          navn: "MELCHOR M. ZAPANTA NORWAY CARE SERVICES",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: true,
          naeringskode1: {
            beskrivelse: "Rengjøring av bygninger",
            kode: "81.210"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "0985",
            poststed: "OSLO",
            adresse: ["Stovner Senter 13"],
            kommune: "OSLO",
            kommunenummer: "0301"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163475"
            }
          }
        },
        {
          organisasjonsnummer: "920163491",
          navn: "EDGY CORP JOHANSEN",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse: "Programmeringstjenester",
            kode: "62.010"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "7021",
            poststed: "TRONDHEIM",
            adresse: ["Karolinerveien 9B"],
            kommune: "TRONDHEIM",
            kommunenummer: "5001"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163491"
            }
          }
        },
        {
          organisasjonsnummer: "920163548",
          navn: "TORE AAS",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse: "Malerarbeid",
            kode: "43.341"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "0481",
            poststed: "OSLO",
            adresse: ["Kyrre Grepps gate 5"],
            kommune: "OSLO",
            kommunenummer: "0301"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163548"
            }
          }
        },
        {
          organisasjonsnummer: "920163637",
          navn: "NORDVIK EFTF",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse: "Utleie av egen eller leid fast eiendom ellers",
            kode: "68.209"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "7078",
            poststed: "SAUPSTAD",
            adresse: ["Saupstadbrinken 3"],
            kommune: "TRONDHEIM",
            kommunenummer: "5001"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163637"
            }
          }
        },
        {
          organisasjonsnummer: "920163734",
          navn: "REDNAS CONSULT TORE GRELLAND",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: true,
          naeringskode1: {
            beskrivelse: "Annen teknisk konsulentvirksomhet",
            kode: "71.129"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "4020",
            poststed: "STAVANGER",
            adresse: ["Laberget 92"],
            kommune: "STAVANGER",
            kommunenummer: "1103"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163734"
            }
          }
        },
        {
          organisasjonsnummer: "920163793",
          navn: "INDRE FOSEN TIGERS",
          organisasjonsform: {
            kode: "FLI",
            beskrivelse: "Forening/lag/innretning",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/FLI"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-28",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse: "Idrettslag og -klubber",
            kode: "93.120"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "7100",
            poststed: "RISSA",
            adresse: ["c/o Ronny Overland", "Bjørneråsveien 163"],
            kommune: "INDRE FOSEN",
            kommunenummer: "5054"
          },
          stiftelsesdato: "2017-11-02",
          institusjonellSektorkode: {
            kode: "7000",
            beskrivelse: "Ideelle organisasjoner"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: true,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163793"
            }
          }
        },
        {
          organisasjonsnummer: "920163866",
          navn: "SJÅFØRPOOL NORGE OLSEN",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: true,
          naeringskode1: {
            beskrivelse: "Grunnarbeid",
            kode: "43.120"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "8617",
            poststed: "DALSGRENDA",
            adresse: ["Stien 5"],
            kommune: "RANA",
            kommunenummer: "1833"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: true,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163866"
            }
          }
        },
        {
          organisasjonsnummer: "920163920",
          navn: "ALLAN FALKMO HANSEN",
          organisasjonsform: {
            kode: "ENK",
            beskrivelse: "Enkeltpersonforetak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: true,
          naeringskode1: {
            beskrivelse: "Melkeproduksjon på storfe",
            kode: "01.410"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "8640",
            poststed: "HEMNESBERGET",
            adresse: ["Sundsveien 4"],
            kommune: "HEMNES",
            kommunenummer: "1832"
          },
          institusjonellSektorkode: {
            kode: "8200",
            beskrivelse: "Personlig næringsdrivende"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920163920"
            }
          }
        },
        {
          organisasjonsnummer: "920164056",
          navn: "TRØNDELAG FRP",
          organisasjonsform: {
            kode: "FLI",
            beskrivelse: "Forening/lag/innretning",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/FLI"
              }
            }
          },
          postadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "7404",
            poststed: "TRONDHEIM",
            adresse: ["Postboks 435"],
            kommune: "TRONDHEIM",
            kommunenummer: "5001"
          },
          registreringsdatoEnhetsregisteret: "2018-01-18",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse: "Partipolitiske organisasjoner",
            kode: "94.920"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "7011",
            poststed: "TRONDHEIM",
            adresse: ["Nordre gate 6"],
            kommune: "TRONDHEIM",
            kommunenummer: "5001"
          },
          stiftelsesdato: "2017-12-18",
          institusjonellSektorkode: {
            kode: "7000",
            beskrivelse: "Ideelle organisasjoner"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920164056"
            }
          }
        },
        {
          organisasjonsnummer: "920164064",
          navn: "SHOPBOX",
          organisasjonsform: {
            kode: "NUF",
            beskrivelse: "Norskregistrert utenlandsk foretak",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/NUF"
              }
            }
          },
          hjemmeside: "www.shopbox.com",
          registreringsdatoEnhetsregisteret: "2018-01-23",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse: "Databehandling, datalagring og tilknyttede tjenester",
            kode: "63.110"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Danmark",
            landkode: "DK",
            poststed: "2400 KØBENHAVN NV",
            adresse: ["Rentemestervej 2B"]
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920164064"
            }
          }
        },
        {
          organisasjonsnummer: "920164145",
          navn: "GRORUDDALEN FRIIDRETTSKLUBB",
          organisasjonsform: {
            kode: "FLI",
            beskrivelse: "Forening/lag/innretning",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/FLI"
              }
            }
          },
          hjemmeside: "www.gfikfriidrett.com",
          postadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "1087",
            poststed: "OSLO",
            adresse: ["v/Lars Sundt", "Bekkevollveien 3D"],
            kommune: "OSLO",
            kommunenummer: "0301"
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: false,
          naeringskode1: {
            beskrivelse: "Idrettslag og -klubber",
            kode: "93.120"
          },
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Norge",
            landkode: "NO",
            postnummer: "0981",
            poststed: "OSLO",
            adresse: ["Smiuvegen 253"],
            kommune: "OSLO",
            kommunenummer: "0301"
          },
          stiftelsesdato: "2017-10-12",
          institusjonellSektorkode: {
            kode: "7000",
            beskrivelse: "Ideelle organisasjoner"
          },
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: true,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920164145"
            }
          }
        },
        {
          organisasjonsnummer: "920164307",
          navn: "MASAI CLOTHING COMPANY APS",
          organisasjonsform: {
            kode: "UTLA",
            beskrivelse: "Utenlandsk enhet",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/UTLA"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: false,
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Danmark",
            landkode: "DK",
            poststed: "DK-1267 KØBENHAVN K",
            adresse: ["Hammerensgade 1 st tv"]
          },
          stiftelsesdato: "1986-05-10",
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920164307"
            }
          }
        },
        {
          organisasjonsnummer: "920164315",
          navn: "INNOLINK INVEST LIMITED",
          organisasjonsform: {
            kode: "UTLA",
            beskrivelse: "Utenlandsk enhet",
            _links: {
              self: {
                href:
                  "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/UTLA"
              }
            }
          },
          registreringsdatoEnhetsregisteret: "2017-12-22",
          registrertIMvaregisteret: false,
          antallAnsatte: 0,
          forretningsadresse: {
            land: "Storbritannia",
            landkode: "GB",
            poststed: "SW1Y 5EA LONDON",
            adresse: ["Stron House 100 Pall Mall"]
          },
          stiftelsesdato: "2017-12-13",
          registrertIForetaksregisteret: false,
          registrertIStiftelsesregisteret: false,
          registrertIFrivillighetsregisteret: false,
          konkurs: false,
          underAvvikling: false,
          underTvangsavviklingEllerTvangsopplosning: false,
          maalform: "Bokmål",
          _links: {
            self: {
              href:
                "https://data.brreg.no/enhetsregisteret/api/enheter/920164315"
            }
          }
        }
      ]
    },
    _links: {
      first: {
        href:
          "https://data.brreg.no/enhetsregisteret/api/enheter/?page=0&size=20"
      },
      self: {
        href: "https://data.brreg.no/enhetsregisteret/api/enheter/"
      },
      next: {
        href:
          "https://data.brreg.no/enhetsregisteret/api/enheter/?page=1&size=20"
      },
      last: {
        href:
          "https://data.brreg.no/enhetsregisteret/api/enheter/?page=50184&size=20"
      }
    },
    page: {
      size: 20,
      totalElements: 1003684,
      totalPages: 50185,
      number: 0
    }
  }
]

describe("useBrregSearch", () => {
  beforeAll(() => {
    axios.get = jest.fn(() => Promise.resolve({ data: { result: result } }))
  })

  it("search", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useBrRegSearch("Stacc")
    )
    await waitForNextUpdate()
    expect(result.current.results).not.toBeUndefined()
    expect(result.current.results.length).toBe(4)
  })
  it("Should work with org nr", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useBrRegSearch("920318886")
    )
    await waitForNextUpdate()
    expect(result.current.results).not.toBeUndefined()
    expect(result.current.results.length).toBe(1)
    expect(result.current.results[0].navn).toBe("STACC X AS")
  })
  describe("Rendering", () => {
    it("should render Results", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useBrRegSearch("Stacc")
      )
      await waitForNextUpdate()
      render(
        <div>
          {result.current.results.map(result => {
            return <p key={result.navn}>{result.navn}</p>
          })}
        </div>
      )
      expect(screen.getByText("STACC AS")).toBeInTheDocument()
      expect(screen.getByText("STACC X AS")).toBeInTheDocument()
    })
    it("should render empty array", async () => {
      const { result } = renderHook(() => useBrRegSearch("S"))
      render(
        <div>
          {result.current.results.map(result => {
            return <p key={result.navn}>{result.navn}</p>
          })}
        </div>
      )
      expect(screen.getAllBy * "STACC").toBeNaN()
    })
    it("should render empty array not exisiting company", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useBrRegSearch("ThisCompanyHopeFullyDontExist")
      )
      await waitForNextUpdate()
      render(
        <div>
          {result.current.results.map(result => {
            return <p key={result.navn}>{result.navn}</p>
          })}
        </div>
      )
      expect(screen.getAllBy * "ThisCompanyHopeFullyDontExist").toBeNaN()
    })
  })
})
