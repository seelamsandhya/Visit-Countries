import styled from 'styled-components'

export const CountryItem = styled.li`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #334155;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 15px;
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: #f8fafc;
  font-weight: 500;
  font-size: 18px;
`

export const Button = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  background-color: ${props => (props.isVisited ? 'transparent' : ' #3b82f6')};
  font-family: 'Roboto';
  color: ${props => (props.isVisited ? '#94a3b8' : '#ffffff')};
  font-weight: 500;
  font-size: 14px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  text-align: ${props => (props.isVisited ? 'center' : '')};
`