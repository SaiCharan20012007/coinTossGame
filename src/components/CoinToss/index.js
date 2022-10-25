// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, result: true}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({result: true})
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({result: false})
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {heads, tails, result} = this.state
    const total = heads + tails
    const imageUrl = result
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="des">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" />
          <button className="btn" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <ul className="unorderedList">
            <li>
              <p>Total: {total}</p>
            </li>
            <li>
              <p>Heads: {heads}</p>
            </li>
            <li>
              <p>Tails: {tails}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
