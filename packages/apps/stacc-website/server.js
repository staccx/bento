const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const path = require("path")
const fs = require("fs")
const Helper = require("sanity-query-helper")
const imageUrlBuilder = require("@sanity/image-url")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const compression = require("compression")
const config = require("./stacc.config")

const filePath = path.resolve(__dirname, "./build", "index.html")

const dashIt = input => input.replace(/\s/g, "-").toLowerCase()

const metaFallback = {
  title: "Stacc",
  description:
    "Stacc creates financial technology that simplifies innovation and improves business performance. Don’t let technology slow you down.",
  image:
    "https://cdn.sanity.io/images/8j24leyc/production/ec6d45591df4f7a78906974042a85763da3784f0-312x312.png"
}

const metaMiddleware = (req, res, next) => {
  let pathMatch = true
  let subpageTitleMatch = true

  if (req.url.indexOf(".") !== -1) {
    next()
    return
  }

  const sanity = new Helper({
    sanityOptions: {
      dataset: "production",
      projectId: "8j24leyc",
      useCdn: true
    }
  })

  const builder = imageUrlBuilder(sanity.client)

  const sender = sanity
    .doCompare(`"${req.url}" match path.current`)
    .pick("meta, path, subpages")

  const replaceOG = meta => {
    /**
     * we’re using urls without trailing a "/", redirect if non-slash-ending url matches a valid page/subpage
     * see recommendations on https://webmasters.googleblog.com/2010/04/to-slash-or-not-to-slash.html
     */
    if (
      req.url !== "/" &&
      req.url.endsWith("/") &&
      (pathMatch || subpageTitleMatch)
    ) {
      return res.redirect(301, req.url.slice(0, -1))
    }

    let status = 200

    /**
     * send the 404 page with a 404 status
     */
    if (!(pathMatch || subpageTitleMatch)) {
      status = 404
    }

    fs.readFile(filePath, "utf8", function(err, data) {
      if (err) {
        return console.log(err)
      }
      const page = data
        .replace(/\$OG_TITLE/g, meta.title)
        .replace(/\$OG_DESCRIPTION/g, meta.description)
        .replace(/\$OG_IMAGE/g, meta.image)
      res.status(status).send(page)
    })
  }

  sender
    .send()
    .then(result => {
      if (req.url === "/") {
        // We are at the root and can therefore just use the first element
        return result[0]
      }

      const trimmedUrl = req.url.endsWith("/") ? req.url.slice(0, -1) : req.url

      pathMatch = result.some(
        resultObject => resultObject.path.current === trimmedUrl
      )

      subpageTitleMatch = result.some(
        resultObject =>
          resultObject.subpages &&
          resultObject.subpages.some(
            subpage => dashIt(subpage.title) === trimmedUrl.split("/").pop()
          )
      )

      /**
       *      Our query will always include root "/".
       *      This is extremely predictable,
       *      and we can therefore pick the second element
       */
      return result.length > 1 ? result[1] : result[0]
    })
    .then(({ meta }) => {
      // read in the index.html file
      replaceOG({
        ...metaFallback,
        ...meta,
        image: builder.image(meta.image).url()
      })
    })
    .catch(() => {
      console.error("no meta found")
      replaceOG(metaFallback)
    })
}

app.use(morgan("common"))
app.use(helmet())
app.use(cors())
app.use(compression())

/**
 * Redirects
 */
config.redirects.forEach(redirect => {
  app.get(redirect.source, (req, res) => {
    res.redirect(redirect.type, redirect.destination)
  })
})

config.aliases.forEach(alias => {
  app.get(alias.source, (req, res) => {
    res.redirect(301, alias.destination)
  })
})

app.use(metaMiddleware)

app.use(express.static(path.resolve(__dirname, "./build")))

app.get("*", function(request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html")
  response.sendFile(filePath)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
