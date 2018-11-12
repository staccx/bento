import React from "react"
import { Slider2, CurrencyInput, Layout } from "@staccx/base"

class CalculatorSlider extends React.Component {
  state = {
    sum: parseInt(this.props.defaultValue, 10),
    sliderSum: parseInt(this.props.defaultValue, 10)
  }

  onInputChange = value => {
    if (value) {
      this.setState({ sum: parseInt(value, 10) })
      if (this.state.sum > this.props.min && this.state.sum < this.props.max) {
        this.setState({ sliderSum: parseInt(value, 10) })
      }
    } else {
      this.setState({ sum: 0 })
    }
  }

  onSliderChange = value => {
    this.setState({ sum: parseInt(value, 10) })
    this.setState({ sliderSum: parseInt(value, 10) })
  }

  render() {
    const { name, label, max, min, step } = this.props

    return (
      <div>
        <Layout rowGap="small">
          <CurrencyInput
            name={name}
            label={label}
            value={this.state.sum}
            onChange={e => this.onInputChange(e.target.rawValue)}
          />
          <Slider2
            min={min}
            max={max}
            step={1000}
            defaultValue={this.state.sliderSum}
            onChange={value => this.onSliderChange(value)}
          />
        </Layout>
      </div>
    )
  }
}

export default CalculatorSlider
