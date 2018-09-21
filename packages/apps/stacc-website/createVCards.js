const vCard = require("vcards-js")
const SanityHelper = require("sanity-query-helper")
const imageUrlBuilder = require("@sanity/image-url")
var dashIt = require("@staccx/formatting").dashIt
const download = require("image-downloader")
const fs = require("fs")
const shortid = require("shortid")
const downloadImage = ({ url, dest }) => download.image({ url, dest })

const helper = new SanityHelper({
  sanityOptions: {
    projectId: "8j24leyc",
    dataset: "production",
    useCdn: true,
    token:
      "skBqBzqHiXow55HSqs1yFZf8MVCKBDh9VJ4t5LMYr8LstpJe1fScFAqB3S19rHiwqucM6krAZr6oMSMe29uXPQSp20V0hEyvONNV7B4kHGSoaZqWRiYMfIvmeDxnTzdDfovZyNU1yHqM9hHyZm0o8rL4w18LibIGJ5uon68axReHVsEffKWA"
  }
})
const imageHelper = imageUrlBuilder(helper.client)
console.log(imageHelper)
helper
  .ofType("person")
  .send()
  .then(people => {
    const cards = people.map(person => {
      let card = vCard()

      const name = person.name.split(" ")

      card.firstName = name[0]

      if (name.length > 2) {
        card.middleName = name.slice(1, name.length - 2)
      }

      card.lastName = name[name.length - 1]

      card.organization = "Stacc"

      const imageUrl = imageHelper
        .image(person.image)
        .width(1024)
        .format("png")
        .url()
      if (fs.existsSync("./" + dashIt(person.name) + ".png")) {

        try {

          card.photo.embedFromFile("./" + dashIt(person.name) + ".png")
        } catch (ex) {
          console.log(ex.message)
        }
      }

      card.workPhone = person.phone

      card.workUrl = "https://stacc.com"

      card.role = person.title

      card.email = person.email

      if (person.socialLinks) {
        person.socialLinks.forEach(socialLink => {
          card.socialUrls[socialLink.type] = socialLink.url
        })
      }

      return {
        card,
        filename: dashIt(person.name)
      }
    })

    cards.forEach(({ card, filename }) => {
      card.saveToFile(`./public/vcards/${filename}.vcf`)
      // console.log(card.photo)
    })

    console.log("Done")
  })
