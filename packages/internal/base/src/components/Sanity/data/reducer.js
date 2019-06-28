import produce from "immer"

export const actionTypes = {
  setDocument: "setDocument",
  setType: "setType",
  fetch: "fetch"
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

export default reducer
