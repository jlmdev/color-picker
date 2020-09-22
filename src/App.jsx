import React, { Component } from 'react'
import { Slider } from './components/Slider'

class App extends Component {
  render() {
    return (
      <div>
        <Slider id="hue" sliderMax="360" />
        <Slider id="saturation" sliderMax="100" />
        <Slider id="lightness" sliderMax="100" />
      </div>
    )
  }
}

export default App
