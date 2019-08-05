import React, { createContext, useReducer, useMemo } from "react"
import PropTypes from "prop-types"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "@sanity/client"
import { groqGetDocumentById, groqGetType } from "./groqs"
import reducer, { actionTypes } from "../data/reducer"

export const Context = createContext({})

const initialState = {
  documents: {},
  types: {},
  queries: {}
}

const SanityProvider = ({
  children,
  projectId,
  dataset,
  useCdn,
  serializers,
  withCredentials
}) => {
  const [data, dispatch] = useReducer(reducer, initialState)
  const client = sanityClient({
    projectId,
    dataset,
    useCdn,
    withCredentials
  })

  const builder = imageUrlBuilder(client)

  const getImageUrl = (image, options = {}) =>
    builder
      .image(image)
      .withOptions(options)
      .url()

  const getDocument = async id => {
    if (data.documents[id]) {
      return
    }

    const document = await client.fetch(groqGetDocumentById(), { id })

    dispatch({ type: actionTypes.setDocument, document })
  }

  const getType = async type => {
    if (data.types[type]) {
      return
    }
    const documents = await client.fetch(groqGetType(), { type })

    dispatch({ type: actionTypes.setType, documents, documentType: type })
  }

  const query = async (groq, id, params) => {
    if (data.queries[groq]) {
      return
    }

    const result = await client.fetch(groq, params)

    dispatch({ type: actionTypes.fetch, result, id })
  }

  const value = useMemo(() => {
    return data
  }, [data])

  return (
    <Context.Provider
      value={{
        ...value,
        getImageUrl,
        buildImage: builder.image,
        getDocument,
        getType,
        query,
        sanityOptions: {
          projectId,
          dataset
        },
        serializers,
        fetch: client ? client.fetch : null
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default SanityProvider

SanityProvider.propTypes = {
  children: PropTypes.any.isRequired,
  dataset: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  useCdn: PropTypes.bool,
  withCredentials: PropTypes.bool
}

SanityProvider.defaultProps = {
  useCdn: true,
  withCredentials: false
}
