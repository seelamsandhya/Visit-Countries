import {
  VisitedCountryItem,
  CountryImage,
  DetailsCard,
  CountryName,
  RemoveButton,
} from './componentStyle'

const VisitedCountries = props => {
  const {visitedCountry, onRemove} = props
  const {id, imageUrl, name} = visitedCountry
  const onRemoveButton = () => {
    onRemove(id)
  }

  return (
    <VisitedCountryItem>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <DetailsCard>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onRemoveButton}>
          Remove
        </RemoveButton>
      </DetailsCard>
    </VisitedCountryItem>
  )
}

export default VisitedCountries