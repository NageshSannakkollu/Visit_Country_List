import './index.css'

const CountryItem = props => {
  const {countryDetails, visitCountry} = props
  const {name, id, isVisited} = countryDetails

  const toggleVisitButton = isVisited ? 'Visited' : 'Visit'
  const visitButtonClassName = isVisited ? 'visited' : ''

  const clickOnVisit = () => {
    visitCountry(id)
  }

  return (
    <li className="countries-list-container">
      <p className="country-name">{name}</p>
      <button
        type="button"
        className={`visit-button ${visitButtonClassName}`}
        onClick={clickOnVisit}
      >
        {toggleVisitButton}
      </button>
    </li>
  )
}

export default CountryItem
