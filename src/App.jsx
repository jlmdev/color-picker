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
  handleRandomButtonClick = event => {
    this.setState({ hue: Math.floor(Math.random() * 361) })
    this.setState({ saturation: Math.floor(Math.random() * 101) })
    this.setState({ lightness: Math.floor(Math.random() * 101) })
  }

  render() {
    return (
      <div
        className="main-body"
        style={{
          backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`,
        }}
      >
        <ul>
          <li className="title">Color Picker</li>
          <li className="slider">
            <input
              type="range"
              value={this.state.hue}
              max="360"
              onChange={this.handleHueChange}
            />
            <label htmlFor="hue">Hue</label>
          </li>
          <li className="slider">
            <input
              type="range"
              value={this.state.saturation}
              max="100"
              onChange={this.handleSaturationChange}
            />
            <label htmlFor="saturation">Saturation</label>
          </li>
          <li className="slider">
            <input
              type="range"
              value={this.state.lightness}
              max="100"
              onChange={this.handleLightnessChange}
            />
            <label htmlFor="lightness">Lightness</label>
          </li>
          <li className="button-container">
            <input
              className="button"
              type="button"
              value="Random"
              onClick={this.handleRandomButtonClick}
            />
          </li>
        </ul>
      </div>
    )
  }
}

export default App
