// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDebited = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <div className="head-container">
            <div className="logo">
              <p>S</p>
            </div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="bal-head">Your Balance</p>
            <div>
              <p className="bal-amount">{amount}</p>
              <span className="rupees">In Rupess</span>
            </div>
          </div>
          <p className="with-para"> WithDraw</p>
          <p className="sum-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-amount">
            {denominationsList.map(eachList => (
              <DenominationItem
                denominate={eachList}
                key={eachList.id}
                debited={this.onDebited}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
