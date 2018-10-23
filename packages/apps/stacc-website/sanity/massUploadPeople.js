const SanityHelper = require("sanity-query-helper")
var Airtable = require("airtable")
var base = new Airtable({ apiKey: "keyX63bjvBxT72v4J" }).base(
  "appuN5fKyGz9u8qA1"
)
var dashIt = require("@staccx/formatting").dashIt
const download = require("image-downloader")
const fs = require("fs")
const shortid = require("shortid")

const helper = new SanityHelper({
  sanityOptions: {
    projectId: "8j24leyc",
    dataset: "production",
    useCdn: true,
    token:
      "skBqBzqHiXow55HSqs1yFZf8MVCKBDh9VJ4t5LMYr8LstpJe1fScFAqB3S19rHiwqucM6krAZr6oMSMe29uXPQSp20V0hEyvONNV7B4kHGSoaZqWRiYMfIvmeDxnTzdDfovZyNU1yHqM9hHyZm0o8rL4w18LibIGJ5uon68axReHVsEffKWA"
  }
})

helper
  .ofType("company")
  .send()
  .then(companies => {
    base("Ansatte")
      .select({
        view: "Grid view"
      })
      .eachPage(function(records) {
        if (!records) {
          // console.error(err)
          console.log("something is wrong")
          return process.exit(0)
        }

        records.forEach(function(record) {
          const { Selfie } = record.fields

          const { url, filename } = Selfie ? Selfie[0] : {}
          if (url) {
            downloadImage({ url, dest: `${record.id}_${filename}` }).then(
              result => {
                console.log(result)
                uploadImage({ filename: `./${result.filename}` }).then(
                  document => {
                    console.log("use this as a ref")
                    const doc = createDoc({
                      record,
                      companies,
                      image: document
                    })
                    console.log("Ready for uploading", doc)
                    saveDoc(doc)
                    fs.unlink(result.filename)
                  }
                )
              }
            )
          } else {
            const doc = createDoc({ record, companies, image: null })
            console.log("ready for uploading", doc)
            saveDoc(doc)
          }
          // console.log(doc)
        })
      })
  })
  .catch(console.error)

const createDoc = ({ record, companies, image }) => {
  const {
    Fornavn,
    Etternavn,
    Selskap,
    Tittel,
    Mobilnummer,

    ...rest
  } = record.fields
  const { id } = record
  const name = `${Fornavn} ${Etternavn}`
  const personCompany = companies.find(c => c.name === Selskap)

  const roles = rest["Områder"]
  const linkedIn = rest["LinkedIn-konto"]
    ? {
        _key: shortid.generate(),
        type: "linkedin",
        url: rest["LinkedIn-konto"]
      }
    : null
  const twitter = rest["Twitter-konto"]
    ? {
        _key: shortid.generate(),
        type: "twitter",
        url: rest["Twitter-konto"]
      }
    : null

  const socialLinks = [linkedIn, twitter].filter(e => e)

  return {
    _id: id,
    _type: "person",
    name,
    title: Tittel,
    ...(personCompany && {
      company: {
        _type: "reference",
        _ref: personCompany._id
      }
    }),
    phone: Mobilnummer,
    ...(rest["E-post"] && { email: rest["E-post"] }),
    slug: {
      _type: "slug",
      current: dashIt(name)
    },
    ...(image && {
      image: {
        _type: "image",
        asset: {
          _ref: image._id,
          _type: "reference"
        }
      }
    }),
    socialLinks,
    roles
  }
}

const saveDoc = doc => {
  helper.client.createOrReplace(doc).then(doc => {
    console.log("Person saved", doc.name)
  })
}

const downloadImage = ({ url, dest }) => download.image({ url, dest })
const uploadImage = ({ filename }) => {
  return helper.client.assets
    .upload("image", fs.createReadStream(filename), {
      extract: ["palette", "location"]
    })
    .then(document => {
      console.log("The file was uploaded!", document)
      return document
    })
    .catch(console.error)
}
