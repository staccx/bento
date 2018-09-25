/*eslint-disable */
import { observable, action } from "mobx"
import { apiKey } from "../config/googleMaps"
// import axios from "axios"
const googleMapsClient = require("@google/maps").createClient({
  key: apiKey,
  Promise: Promise
})
const BASE = "https://maps.googleapis.com/maps/api"
// const streetview = axios.create({
//   baseURL: BASE
// })
const wait = async () => new Promise(resolve => setTimeout(resolve, 100))

const geocode = async address =>
  googleMapsClient.geocode({ address }).asPromise()

export const getStreetViewImageUrl = (location, size) =>
  `${BASE}/streetview?key=${apiKey}&location=${location.lat}, ${
    location.lng
  }&size=${[size, size].join("x")}`

const mapAddressResults = result =>
  result.json.results
    .map(result => ({
      address: result.formatted_address,
      ...result.geometry.location
    }))
    .slice(0, 1)
    .reduce((acc, curr) => curr, {})

class Property {
  @observable
  property = null
  @observable isLoading = true

  @action
  findPropertyByNumner = async gardNr => {
    // TODO
  }

  @action
  findPropertyByAdress = async address => {
    this.isLoading = true
    const addressInfo = await this.getAddressInfo(address)
    this.property = await this.getProperty(addressInfo)
    this.isLoading = false
  }

  @action
  findPropertyByNationalId = async nid => {
    this.isLoading = true
    const propertyDetails = await this.getPropertyDetails(nid)
    if (!propertyDetails) {
      return null
    }

    this.property = await this.getProperty(propertyDetails)
    this.isLoading = false
    return this.property
  }

  getPropertyDetails = async nid => {
    await wait()
    const address = await this.getAddress(nid)
    const addressInfo = await this.getAddressInfo(address)
    return {
      ...addressInfo
    }
  }

  getProperty = async details => {
    await wait()
    const value = await this.getValue(details)
    return {
      value,
      details: { ...details }
    }
  }

  getValue = async addressInfo => {
    await wait()

    return 1000000 + 10000000 * Math.random()
  }

  getAddress = async nid => {
    await wait()

    return "Klubben 5, 5914 Isdalstø"
  }

  getAddressInfo = async address => {
    await wait()

    const result = await geocode(address)
    const info = await mapAddressResults(result)
    return info
  }
}

const property = new Property()
export default property
/* eslint-enable */
