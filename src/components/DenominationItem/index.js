// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominate, debited} = props
  const {value} = denominate
  const onDenomination = () => {
    debited(value)
  }
  return (
    <li className="list-item">
      <button type="button" className="btn" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
