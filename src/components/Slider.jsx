import React, { Component } from 'react'

export class Slider extends Component {
  state = {
    value: 0,
  }

  handleSliderChange = event => {
    const sliderValue = event.target.value
    this.setState({ value: sliderValue })
  }

  render() {
    return (
      <div>
        <input
          type="range"
          value={this.state.value}
          max={this.props.sliderMax}
          onChange={this.handleSliderChange}
        />
      </div>
    )
  }
}
