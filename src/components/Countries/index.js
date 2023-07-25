import {CountryItem, Name, Button} from './componentStyle'

const Countries = props => {
  const {country, onVisited} = props
  const {id, name, isVisited} = country
  const addVisitStatus = isVisited ? 'Visited' : 'Visit'
  const onVisitButton = () => {
    onVisited(id)
  }

  return (
    <CountryItem>
      <Name>{name}</Name>
      {isVisited && (
        <Button as="p" isVisited={isVisited}>
          {addVisitStatus}
        </Button>
      )}
      {isVisited === false && (
        <Button type="button" isVisited={isVisited} onClick={onVisitButton}>
          {addVisitStatus}
        </Button>
      )}
    </CountryItem>
  )
}

export default Countries
