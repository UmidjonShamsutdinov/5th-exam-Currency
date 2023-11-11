import React from 'react'
import img from "../../assets/LOGO.svg"
import { Container } from '../../utils/Container'
import "./Nav.scss"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Container>
      <nav>
          <div className="logo">
              <Link to="/">
                <img src={img} alt="" className='logo'/>
              </Link>
          </div>
          <div className="nav__elements">
              <select>
                  <option value="usd">USD</option>
              </select>
              <button>WATCHLIST</button>
          </div>
      </nav>
    </Container>
  )
}

export default Nav