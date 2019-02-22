import { format, getMonth } from "date-fns"

const defaultFormatFunction = month => (month === 0 ? "MMM YY" : "MMM")
const defaultParse = val => parseFloat(val).toFixed(2)
const toArray = (
  obj,
  formatFunction = defaultFormatFunction,
  parseFunction = defaultParse
) => {
  let last = 0
  return Object.keys(obj).map(key => {
    const d = new Date(key)
    const month = getMonth(d)
    const date = format(d, formatFunction(month))
    let value = parseFunction(obj[key], key)

    if (value) {
      last = value
    } else {
      value = last
    }
    return {
      name: format(d, "MMMM YYYY"),
      date,
      rawDate: d.getTime(),
      value
    }
  })
}

const parseMacros = data => country => {
  return new Promise((resolve, reject) => {
    console.log("parsing")
    const d = {
      status: data[`${country}-status`],
      indexTS: JSON.parse(data[`${country}-index-ts`]),
      comment: data[`${country}-status-comment`],
      statusTS: JSON.parse(data[`${country}-status-ts`]),
      backTestTS: JSON.parse(data[`${country}-backtest-ts`])
    }

    const indices = toArray(d.indexTS)
    const statusChartData = toArray(
      d.statusTS,
      defaultFormatFunction,
      (val, key) => {
        if (!val) {
          console.log(country, key)
          return 0
        }

        return val.toPrecision(2)
      }
    )

    const backtestChartData = toArray(
      d.backTestTS,
      month => "YYYY",
      val => val.toPrecision(2)
    )

    const getStatusGroup = status => {
      if (status >= 0.9) {
        return 1
      } else if (status >= 0.75) {
        return 0
      }
      return -1
    }
    console.time("dating" + country)
    const indexChartData = indices.map(point => {
      const find = backtestChartData.find(i => i.rawDate === point.rawDate)

      if (find) {
        // console.log("Found", find, point)
      }
      return {
        ...point,
        status: find ? getStatusGroup(find.value) : 0
      }
    })

    console.timeEnd("dating" + country)
    // console.log(indexChartData)
    // console.log(backtestChartData)
    return resolve({
      ...d,
      indexChartData,
      statusChartData,
      backtestChartData
    })
  })
}

export default parseMacros
