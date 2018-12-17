export default errors => {
  return errors.map(error => {
    console.log(error)
    if (error.params.format && error.params.format === "email") {
      error.message = "Email!!!"
    }
    return error
  })
}
