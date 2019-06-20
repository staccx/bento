import sanityClient from "@sanity/client"
import loglevel from "loglevel"

const Backend = {
  init(services, options) {
    this.services = services
    // this.options = Object.assign({}, options, this.options || {})
    if (!options.sanity) {
      throw new Error("This backend requires sanity options")
    }

    this.client = sanityClient({
      ...options.sanity,
      ...(options.useCdn === undefined && { useCdn: true })
    })

    const {
      query = `*[_type == "translations" && (!defined(namespace) || namespace == $namespace)]{value, "key": i18nKey.current}`,
      params = {}
    } = options.sanity
    this.query = query

    loglevel.info("created")
    this.params = params
  },

  readMulti: function(languages, namespaces, callback) {
    throw new Error("Not supported yet")
  },

  read: function(language, namespace, callback) {
    this.getTranslations(language, namespace, callback)
  },

  getTranslations: function(language, namespace, callback) {
    this.client
      .fetch(this.query, { ...this.params, namespace })
      .then(result => {
        const resources = result.reduce((acc, current) => {
          acc[current.key] = current.value.map(item => item[language])

          return acc
        }, {})

        callback(null, resources)
      })
  },

  create: function(languages, namespace, key, fallbackValue) {
    console.log("TODO:", "create new entry if missing", key)
    if (typeof languages === "string") languages = [languages]

    let payload = {}
    payload[key] = fallbackValue || ""

    languages.forEach(lng => {
      // let url = this.services.interpolator.interpolate(this.options.addPath, {
      //   lng: lng,
      //   ns: namespace
      // })
      // this.options.ajax(url, this.options, function(data, xhr) {
      //   //const statusCode = xhr.status.toString();
      //   // TODO: if statusCode === 4xx do log
      // }, payload);
    })
  }
}

Backend.type = "backend"

export default Backend
