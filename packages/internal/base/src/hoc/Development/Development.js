const Development = ({ children }) => {
  if (process.env.NODE_ENV !== "production") {
    return children
  }
  return null
}

export default Development
