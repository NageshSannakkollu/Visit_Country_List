import './index.css'

const VisitedCountryItem = props => {
  const {visitedCountryDetails, removeCountryFromVisitedList} = props
  const {id, name, imageUrl, isVisited} = visitedCountryDetails

  const onClickRemoveFromList = () => {
    removeCountryFromVisitedList(id)
  }
  return (
    <li className="visited-country-container">
      {isVisited && (
        <div>
          <img
            src={imageUrl}
            alt="thumbnail"
            className="visited-country-image"
          />
          <div className="name-button-container">
            <p className="country-name-heading">{name}</p>
            <button
              type="button"
              className="remove-button"
              onClick={onClickRemoveFromList}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default VisitedCountryItem
