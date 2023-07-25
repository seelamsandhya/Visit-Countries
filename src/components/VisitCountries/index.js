import {Component} from 'react'
import Countries from '../Countries'
import VisitedCountries from '../VisitedCountries'

import {
  CountriesContainer,
  Heading,
  CountriesOptionsCard,
  VisitedCard,
} from './componentStyle'

class VisitCountries extends Component {
  constructor(props) {
    super(props)
    this.state = {countriesList: props.initialCountriesList}
  }

  onVisited = id => {
    const {countriesList} = this.state
    const newList = countriesList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isVisited: !eachItem.isVisited}
      }
      return eachItem
    })
    this.setState({countriesList: newList})
  }

  onRemove = id => {
    const {countriesList} = this.state
    const updatedList = countriesList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isVisited: !eachItem.isVisited}
      }
      return eachItem
    })
    this.setState({countriesList: updatedList})
  }

  getList = () => {
    const {countriesList} = this.state
    const filterList = countriesList.filter(
      eachItem => eachItem.isVisited === true,
    )
    return filterList
  }

  render() {
    const {countriesList} = this.state
    const filteredList = this.getList()

    return (
      <CountriesContainer>
        <Heading>Countries</Heading>
        <CountriesOptionsCard>
          {countriesList.length > 0 &&
            countriesList.map(eachItem => (
              <Countries
                key={eachItem.id}
                country={eachItem}
                onVisited={this.onVisited}
              />
            ))}
        </CountriesOptionsCard>
        <Heading>Visited Countries</Heading>
        <VisitedCard>
          {filteredList.length > 0 &&
            filteredList.map(eachItem => (
              <VisitedCountries
                key={eachItem.id}
                visitedCountry={eachItem}
                onRemove={this.onRemove}
              />
            ))}
          {filteredList.length === 0 && (
            <Heading as="p" align>
              No Countries Visited Yet!
            </Heading>
          )}
        </VisitedCard>
      </CountriesContainer>
    )
  }
}

export default VisitCountries