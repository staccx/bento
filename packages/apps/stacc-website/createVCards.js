const vCard = require("vcards-js")
const SanityHelper = require("sanity-query-helper")
const imageUrlBuilder = require("@sanity/image-url")
var dashIt = require("@staccx/formatting").dashIt
const download = require("image-downloader")
const fs = require("fs")
const shortid = require("shortid")
const downloadImage = ({ url, dest }) => download.image({ url, dest })
const _cliProgress = require("cli-progress")
const path = require("path")

const bar1 = new _cliProgress.Bar({}, _cliProgress.Presets.shades_classic)

let counter = 0
const helper = new SanityHelper({
  sanityOptions: {
    projectId: "8j24leyc",
    dataset: "production",
    useCdn: true,
    token:
      "skBqBzqHiXow55HSqs1yFZf8MVCKBDh9VJ4t5LMYr8LstpJe1fScFAqB3S19rHiwqucM6krAZr6oMSMe29uXPQSp20V0hEyvONNV7B4kHGSoaZqWRiYMfIvmeDxnTzdDfovZyNU1yHqM9hHyZm0o8rL4w18LibIGJ5uon68axReHVsEffKWA"
  }
})

const replaceChars = val => {
  return val
  try {
    const returnValue = val
      ? val
          .replace("æ", "ae")
          .replace("Æ", "Ae")
          .replace("ø", "oe")
          .replace("Ø", "Oe")
          .replace("å", "aa")
          .replace("Å", "Aa")
      : val

    return returnValue
  } catch (ex) {
    console.log("failed", val)
    throw ex
  }
}
const imageHelper = imageUrlBuilder(helper.client)
helper
  .ofType("person")
  .send()
  .then(async people => {
    await prepare()
    counter = 0
    console.log("Preparing cards")
    bar1.start(people.length, 0)

    const cards = await getCards(people)
    bar1.stop()
    console.log("Cards created.")
    counter = 0
    bar1.start(cards.length, 0)
    console.log("Saving cards...")
    cards.forEach(({ card, filename }, index) => {
      // card.saveToFile(`./public/vcards/${filename}.vcf`
      const contents = card.getFormattedString()
      const removed = contents
        .replace("VALUE=uri;", "")
        .replace("tel:", "")
        .replace(/CHARSET=UTF-8/g, "")
      fs.writeFileSync(`./public/vcards/${filename}.vcf`, removed, "utf8")
      bar1.update(index)
      // console.log(card.photo)
    })
    bar1.stop()
    console.log(`Created ${cards.length} vCards...`)
  })
  .catch(error => {
    console.log("Error happened!", error)
    bar1.stop()
    process.exit(1)
  })

const getCards = async people => {
  return Promise.all(people.map(createCard))
}
const createCard = async person => {
  let card = vCard()
  // card.version = "4.0"
  const name = person.name.split(" ")

  card.firstName = replaceChars(name[0])

  if (name.length > 2) {
    card.middleName = replaceChars(name.slice(1, name.length - 1).join(" "))
  }

  card.lastName = replaceChars(name[name.length - 1])

  card.organization = "Stacc"

  const imageUrl = imageHelper
    .image(person.image)
    .width(300)
    .format("jpg")
    .url()
  if (imageUrl) {
    try {
      const img = await downloadImage({
        url: imageUrl,
        dest: "./" + dashIt(person.name) + ".png"
      })
      card.photo.embedFromFile(img.filename)

      fs.unlink(img.filename, () => null)
      // card.photo.url = imageUrl
      // card.photo.mediaType = "JPG"
      // card.photo.base64 = false
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
      card.socialUrls[socialLink.type] = decodeURI(socialLink.url)
    })
  }
  bar1.update(counter++)
  return {
    card,
    filename: dashIt(person.name)
  }
}

const directory = path.resolve("./public/vcards")

const prepare = () => {
  return new Promise(resolve => {
    if (fs.existsSync(directory)) {
      fs.readdir(directory, (err, files) => {
        if (err) throw err
        console.log("Deleting old ones")
        bar1.start(files.length, 0)
        for (const file of files) {
          fs.unlink(path.join(directory, file), err => {
            if (err) throw err
            bar1.update(counter++)
          })
        }

        bar1.stop()
        console.log("Done deleting")
        resolve()
      })
    } else {
      fs.mkdir(directory, resolve)
    }
  })
}
