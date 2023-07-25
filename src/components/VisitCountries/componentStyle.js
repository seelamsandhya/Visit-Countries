import styled from 'styled-components'

export const CountriesContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
  font-weight: 500;
  font-size: ${props => (props.align ? '20px' : '30px')};
  flex-grow: ${props => (props.align ? '1' : '0')};
  text-align: ${props => (props.align ? 'center' : 'left')};
`

export const CountriesOptionsCard = styled.ul`
  width: 100%;
  height: 300px;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  background-color: #1f1f2f;
  border: 1px solid #334155;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
`
export const VisitedCard = styled.ul`
  width: 100%;
  background-color: transparent;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`