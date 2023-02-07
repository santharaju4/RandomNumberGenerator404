// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onChangeNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    console.log(newRandomNumber)
    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="app-container">
        <div className="randomNumberContainer">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onChangeNumber}
          >
            Generate
          </button>
          <p className="randomNumber"> {randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
