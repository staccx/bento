import React, { Component } from "react"
import PropTypes from "prop-types"
import { Field } from "formik"
import Alert from "../../Alert/Alert"
import formFieldTypes from "./formFieldTypes"

class FormField extends Component {
  render() {
    return (
      <Field name={this.props.name}>
        {({ field, form: { touched, errors, ...form } }) => (
          <React.Fragment>
            {this.props.children({
              name: this.props.name,
              field,
              form
            })}
            {this.props.renderError &&
              this.props.renderError({
                error: errors[this.props.name],
                touched: touched[this.props.name]
              })}
            {!this.props.renderError &&
              touched[this.props.name] &&
              errors[this.props.name] && (
                <Alert variant="error" type="warning">
                  {errors[this.props.name]}
                </Alert>
              )}
          </React.Fragment>
        )}
      </Field>
    )
  }
}

FormField.propTypes = {
  children: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  renderError: PropTypes.func,
  integer: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  nullable: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.oneOf(Object.keys(formFieldTypes))
}

export default FormField
