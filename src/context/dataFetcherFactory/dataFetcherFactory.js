import React, { createContext, useState, useContext, useEffect } from "react"
import PropTypes from "prop-types"
import { commonPropTypes } from "../../theming"
import useInterval from "../../hooks/useInterval"
import axios from "axios"
import isEqual from "lodash.isequal"

const create = () => {
  const Context = createContext()

  const DataProvider = ({
    path,
    loop,
    initialData,
    axiosOptions = {},
    fetchToken,
    children
  }) => {
    const [state, setState] = useState({
      data: initialData,
      isLoading: true
    })

    const fetch = async () => {
      if (fetchToken) {
        const token = await fetchToken()
        if (!axiosOptions.headers) axiosOptions.headers = {}
        axiosOptions.headers.authorization = `Bearer ${token}`
      }

      await axios({ method: "get", url: path, ...axiosOptions })
        .then(({ data }) => {
          if (!isEqual(data, state.data) || state.isLoading)
            setState({ data, isLoading: false })
        })
        .catch(() => null)
    }

    useEffect(() => {
      fetch()
    }, [path])

    if (loop) {
      // eslint-disable-next-line
      useInterval(async () => {
        await fetch()
      }, loop)
    }

    return <Context.Provider value={{ ...state }}>{children}</Context.Provider>
  }

  DataProvider.propTypes = {
    path: PropTypes.string,
    fetchToken: PropTypes.func,
    loop: PropTypes.number,
    initialData: PropTypes.any,
    children: commonPropTypes.children,
    axiosOptions: PropTypes.object
  }

  const useData = () => useContext(Context)

  return [DataProvider, useData]
}

export default create
