import React, { Component } from "react"
import PropTypes from "prop-types"
import { Formik } from "formik"
import { themeProps } from "@staccx/theme"
import Button from "../../Button/Button"
const Yup = require("yup")

class Form extends Component {
  render() {
    const validationShape = React.Children.toArray(this.props.children).reduce(
      (validator, curr) => {
        const { type, required, nullable, name, min, max, integer } = curr.props

        switch (type) {
          case "string": {
            validator[name] = Yup.string()
            break
          }
          case "number": {
            validator[name] = Yup.number()
            if (min) {
              validator[name] = validator[name].min(min)
            }
            if (max) {
              validator[name] = validator[name].max(max)
            }
            if (integer) {
              validator[name] = validator[name].integer()
            }
            break
          }
          case "bool": {
            validator[name] = Yup.bool()
            break
          }
          case "email": {
            validator[name] = Yup.string().email()
            break
          }
          case "date": {
            validator[name] = Yup.date()
            break
          }
          case "url": {
            validator[name] = Yup.string().url()
            break
          }
          default: {
            validator[name] = Yup.string()
            break
          }
        }
        if (nullable) {
          validator[name] = validator[name].nullable()
        }
        if (required) {
          validator[name] = validator[name].required("Denne må du ha")
        }
        return validator
      },
      {}
    )
    const validationSchema = Yup.object().shape(validationShape)
    const { Container } = this.props
    return (
      <Formik
        initialValues={this.props.initialValues}
        validationSchema={validationSchema}
        onSubmit={this.props.onSubmit}
        render={({ handleSubmit, values, isValid, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              {Container && (
                <Container {...this.props.containerProps}>
                  {this.props.children}
                  {this.props.renderButton ? (
                    this.props.renderButton({ values, isValid, errors })
                  ) : (
                    <Button type="submit" onClick={() => null}>
                      {this.props.buttonText}
                    </Button>
                  )}
                </Container>
              )}
              {!Container && (
                <React.Fragment>
                  {this.props.children}
                  {this.props.renderButton ? (
                    this.props.renderButton({ values, isValid, errors })
                  ) : (
                    <Button type="submit" onClick={() => null}>
                      {this.props.buttonText}
                    </Button>
                  )}
                </React.Fragment>
              )}
            </form>
          )
        }}
      />
    )
  }
}

Form.propTypes = {
  children: themeProps.children.isRequired,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  renderButton: PropTypes.func
}

Form.defaultProps = {
  initialValues: {},
  onSubmit: console.log,
  containerProps: {}
}

export default Form
