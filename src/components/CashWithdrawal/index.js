// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDecrease = value => {
    const {denominationsList} = this.props

    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <p className="letter">s</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="amount-container">
            <p className="balance">Your Balance</p>
            <p className="amount">{amount}</p>
          </div>
          <p className="rupee">in Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>

          <ul className="ul-list">
            {denominationsList.map(each => (
              <DenominationItem
                item={each}
                key={each.id}
                onDecrease={this.onDecrease}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
