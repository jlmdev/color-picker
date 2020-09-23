import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 361),
    saturation: Math.floor(Math.random() * 101),
    lightness: Math.floor(Math.random() * 101),
  }

  handleHueChange = event => {
    this.setState({ hue: event.target.value })
  }
  handleSaturationChange = event => {
    this.setState({ saturation: event.target.value })
  }
  handleLightnessChange = event => {
    this.setState({ lightness: event.target.value })
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`,
        }}
      >
        <div>
          <input
            type="range"
            value={this.state.hue}
            max="360"
            onChange={this.handleHueChange}
          />
        </div>
        <div>
          <input
            type="range"
            value={this.state.saturation}
            max="100"
            onChange={this.handleSaturationChange}
          />
        </div>
        <div>
          <input
            type="range"
            value={this.state.lightness}
            max="100"
            onChange={this.handleLightnessChange}
          />
        </div>
      </div>
    )
  }
}

export default App
