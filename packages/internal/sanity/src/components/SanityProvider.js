import React, { createContext, useReducer, useMemo } from "react"
import PropTypes from "prop-types"
import produce from "immer"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "@sanity/client"
import { groqGetDocumentById, groqGetType } from "./groqs"

export const Context = createContext({})

const actionTypes = {
  setDocument: "setDocument",
  setType: "setType",
  fetch: "fetch"
}

const initialState = {
  documents: {},
  types: {},
  queries: {}
}

const reducer = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.setDocument:
        if (!action.document) {
          break
        }
        draft.documents[action.document._id] = action.document
        const { _type } = action.document
        if (!draft.types[_type]) {
          draft.types[_type] = []
        }
        draft.types[_type].push(action.document)
        break
      case actionTypes.setType:
        const { documentType, documents } = action

        if (!draft.types[documentType]) {
          draft.types[documentType] = documents
        }

        documents.forEach(document => {
          draft.documents[document._id] = document
        })
        break
      case actionTypes.fetch:
        draft.queries[action.id] = action.result
        break
      default:
        break
    }
  })

// TODO: Revamp sanity query help
const SanityProvider = ({
  children,
  projectId,
  dataset,
  useCdn,
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

  console.log("Rerendering")
  return (
    <Context.Provider
      value={{
        ...value,
        getImageUrl,
        buildImage: builder.image,
        getDocument,
        getType,
        query,
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
