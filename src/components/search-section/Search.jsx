import React from 'react'
import "./Search.scss"
import { Container } from '../../utils/Container'

const Search = () => {
  return (
    <Container>
        <div className='search__section'>
            <h2>Cryptocurrency Prices by Market Cap</h2>
            <input type="text" placeholder='Search For a Crypto Currency..'/>
        </div>
    </Container>
  )
}

export default Search