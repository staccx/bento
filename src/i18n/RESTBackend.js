import axios from "axios"
import { i18nLogger } from "./I18n"
import { resourceReducer } from "./backend.utils"

const RESTBackend = {
  init(services, options) {
    this.services = services
    // this.options = Object.assign({}, options, this.options || {})
    if (!options.rest) {
      throw new Error("This backend requires rest options")
    }

    const { headers = {}, url } = options.rest

    i18nLogger.info("RESTBacked created")
    this.url = url
    this.headers = headers
    i18nLogger.debug(
      `Got options for RESTBackend: url: ${url} & headers: ${headers}`,
      options
    )
  },

  readMulti: function(languages, namespaces, callback) {
    throw new Error("Not supported yet")
  },

  read: function(language, namespace, callback) {
    this.getTranslations(language, namespace, callback)
  },

  getTranslations: function(language, namespace, callback) {
    i18nLogger.debug("RESTBackend::getTranslations", language, namespace)
    axios
      .get(this.url, {
        ...(this.headers && { headers: this.headers })
      })
      .then(result => result.data)
      .then(data => {
        const resources = data.reduce(resourceReducer(language), {})

        callback(null, resources)
      })
  },

  create: function(languages, namespace, key, fallbackValue) {
    i18nLogger.debug("TODO:", "create new entry if missing", key)
    if (typeof languages === "string") languages = [languages]

    const payload = {}
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

RESTBackend.type = "backend"

export default RESTBackend
