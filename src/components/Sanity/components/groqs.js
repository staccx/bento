export const groqGetDocumentById = () => `*[_id == $id][0]`

export const groqGetType = () => `*[_type == $type]`
