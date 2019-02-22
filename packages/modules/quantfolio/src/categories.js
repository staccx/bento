export const getCategories = async client => {
  try {
    const result = await client.get("/meta/categories", {})

    return result.data
  } catch (e) {
    throw e
  }
}
