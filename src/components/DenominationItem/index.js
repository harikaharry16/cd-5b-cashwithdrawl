// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, onDecrease} = props
  const {value, id} = item
  const onDec = () => {
    onDecrease(value)
  }

  return (
    <li className="container">
      <button className="val" onClick={onDec} type="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
