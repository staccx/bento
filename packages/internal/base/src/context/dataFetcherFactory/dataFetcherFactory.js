import React, { createContext, useState, useContext, useEffect } from "react"
import { commonPropTypes } from "../../constants/themeContants"
import useInterval from "../../hooks/useInterval"
import axios from "axios"
import isEqual from "lodash.isequal"

const create = (
  initialPath,
  initialData,
  options = {
    baseUrl: "/api",
    headers: {
      "stacc-scenario": localStorage.getItem("scenario") || "basic"
    },
    loop: 5000
  }
) => {
  const Context = createContext()

  const api = axios.create({
    baseURL: options.baseUrl,
    headers: options.headers
  })

  const DataProvider = ({ children }) => {
    const [state, setState] = useState({ data: initialData, isLoading: true })
    const [path, setPath] = useState(initialPath)

    const fetch = async () => {
      await api
        .get(path)
        .then(
          ({ data }) =>
            isEqual(data, state.data) || setState({ data, isLoading: false })
        )
        .catch(() =>
          setState(prevState => ({ ...prevState, isLoading: false }))
        )
    }

    useEffect(() => {
      fetch()
    }, [path])

    if (options.loop) {
      // eslint-disable-next-line
      useInterval(async () => {
        await fetch()
      }, options.loop)
    }

    return (
      <Context.Provider value={{ ...state, setPath }}>
        {children}
      </Context.Provider>
    )
  }

  DataProvider.propTypes = { children: commonPropTypes.children }

  const useData = () => useContext(Context)

  return [DataProvider, useData]
}

export default create
