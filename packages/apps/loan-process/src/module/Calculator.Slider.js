import React from "react"
import { Slider2, CurrencyInput, Layout, theming } from "@staccx/base"

class CalculatorSlider extends React.Component {
  state = {
    sum: parseInt(this.props.defaultValue, 10),
    sliderSum: parseInt(this.props.defaultValue, 10),
    step: this.props.step,
    percentage: parseInt(this.props.defaultValue, 10) / this.props.max
  }

  onInputChange = value => {
    if (value) {
      this.setState({ sum: parseInt(value, 10) })
      this.setState({ percentage: parseInt(value, 10) / this.props.max })
      this.props.onChange(parseInt(value, 10))
      if (
        this.state.sum >= this.props.min &&
        this.state.sum <= this.props.max
      ) {
        this.setState({ sliderSum: parseInt(value, 10) })
      }
    } else {
      this.setState({ sum: "" })
    }
  }

  onSliderChange = value => {
    this.setState({ sum: parseInt(value, 10) })
    this.setState({ sliderSum: parseInt(value, 10) })
    this.setState({ percentage: parseInt(value, 10) / this.props.max })
    this.props.onChange(parseInt(value, 10))
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
            value={this.state.sum}
            onChange={e => this.onInputChange(e.target.rawValue)}
            onFocus={() => this.setState({ step: 1 })}
            variant="calculatorSlider"
            percentage={this.state.percentage}
          />
          <Slider2
            min={min}
            max={max}
            step={this.state.step}
            defaultValue={this.state.sliderSum}
            onUpdate={value => this.onSliderChange(value)}
            onFocus={() => this.setState({ step: this.props.step })}
            variant={["calculatorSlider", theming.VARIANT_DEFAULT]}
          />
        </Layout>
      </div>
    )
  }
}

export default CalculatorSlider
