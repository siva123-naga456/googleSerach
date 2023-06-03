// Write your code here
import './index.css'

const SuggestionsItems = props => {
  const {items, updateSearchInput} = props
  const {suggestion} = items

  const clickArrow = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="list-container">
      <p className="para">{suggestion}</p>
      <button type="button" className="button-text">
        <img
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          onClick={clickArrow}
        />
      </button>
    </li>
  )
}
export default SuggestionsItems
