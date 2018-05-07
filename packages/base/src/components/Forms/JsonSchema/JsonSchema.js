import Form from "react-jsonschema-form"
import React from "react"
import Wrapper from "../../Layout/Wrapper/Wrapper"
import CheckBox from "../CheckBox/CheckBox"
import Input from "../Input/Input"
import Button from "../../Button/Button"
import Label from "../Label/Label"
import ArrayFieldTemplate from "./ArrayFieldTemplate"
import ObjectFieldTemplate from "./ObjectFieldTemplate"
import CustomFieldTemplate from "./CustomFieldTemplate"
import Slider from "../Slider/Slider/Slider"
import SliderKeyboardInput from "../Slider/SliderKeyboardInput/SliderKeyboardInput"
import PhoneInput from "../Input/PhoneInput/PhoneInput"

const InputWidget = ({ onChange, ...rest }) => (
  <Input {...rest} onChange={e => onChange(e.target.value)} />
)

const SliderWidget = ({ onChange, id, ...rest }) => (
  <SliderKeyboardInput
    name={id}
    {...rest}
    onChange={onChange}
    showLabel={true}
  />
)

const PhoneWidget = ({ onChange, id, ...rest }) => (
  <PhoneInput
    name={id}
    {...rest}
    onChange={e => onChange(e.target.value)}
    showLabel={true}
  />
)

const CheckboxWidget = ({ onChange, value, label, ...rest }) => (
  <CheckBox
    {...rest}
    defaultChecked={value}
    onChange={e => {
      console.log("Change", e)
      onChange(e.target.checked)
    }}
  >
    {label}
  </CheckBox>
)

const CustomTitleField = ({ title, required }) => {
  return title ? <Label>{title}</Label> : null
}
const CustomDescriptionField = ({ id, description }) => {
  return description ? <Label id={id}>{description}</Label> : null
}

const fields = {
  TitleField: CustomTitleField,
  DescriptionField: CustomDescriptionField
}

const widgets = {
  CheckboxWidget: CheckboxWidget,
  TextWidget: InputWidget,
  RangeWidget: SliderWidget,
  phone: PhoneWidget,
  email: InputWidget
}

class JsonSchema extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleChange = this.handleChange.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log("Sumitted", e)
  }

  handleErrors(e) {
    console.log("Errors", e)
  }

  handleChange(e) {
    // console.log("Change", e)
  }

  render() {
    return (
      <Wrapper>
        <Form
          schema={this.props.schema}
          widgets={widgets}
          fields={fields}
          uiSchema={this.props.uiSchema}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onError={this.handleErrors}
          ArrayFieldTemplate={ArrayFieldTemplate}
          ObjectFieldTemplate={ObjectFieldTemplate}
          FieldTemplate={CustomFieldTemplate}
        >
          <Button type={"submit"}>Submit</Button>
        </Form>
      </Wrapper>
    )
  }
}

export default JsonSchema
