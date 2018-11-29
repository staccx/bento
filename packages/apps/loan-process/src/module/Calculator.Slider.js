import React from "react"
import { Slider2, CurrencyInput, Layout, theming } from "@staccx/base"

class CalculatorSlider extends React.Component {
  state = {
    sum: parseInt(this.props.defaultValue, 10),
    value: this.props.defaultValue,
    sliderSum: parseInt(this.props.defaultValue, 10),
    step: this.props.step,
    percentage: parseInt(this.props.defaultValue, 10) / this.props.max
  }

  constructor(props, context) {
    super(props, context)
    this.currencyInput = React.createRef()
  }

  onInputChange = e => {
    if (e.target.value) {
      const sum = parseInt(e.target.rawValue, 10)
      this.setState({
        sum,
        percentage: sum / this.props.max
      })
      this.props.onChange(sum)
      if (
        this.state.sum >= this.props.min &&
        this.state.sum <= this.props.max
      ) {
        this.setState({ sliderSum: sum })
      }
    } else {
      this.setState({ sum: "" })
    }
  }

  onSlideStart = value => {
    this.setState({ step: this.props.step })
  }

  onSliderChange = value => {
    const sum = parseInt(value, 10)
    this.setState({
      sum,
      sliderSum: sum,
      percentage: sum / this.props.max
    })
    if (this.currencyInput.current) {
      this.currencyInput.current.setRawValue(sum)
    }
    this.props.onChange(sum)
  }

  render() {
    const { name, label, max, min } = this.props

    return (
      <div>
        <Layout rowGap="small">
          <CurrencyInput
            name={name}
            id={name}
            label={label}
            onChange={this.onInputChange}
            defaultValue={this.props.defaultValue}
            ref={this.currencyInput}
            onFocus={() => this.setState({ step: 1 })}
            variant="calculatorSlider"
            options={{ onInit: console.log }}
            percentage={this.state.percentage}
          />
          <Slider2
            min={min}
            max={max}
            step={this.state.step}
            defaultValue={this.state.sliderSum}
            onUpdate={value => this.onSliderChange(value)}
            onSlideStart={value => this.onSlideStart(value)}
            variant={["calculatorSlider", theming.VARIANT_DEFAULT]}
          />
        </Layout>
      </div>
    )
  }
}

export default CalculatorSlider
