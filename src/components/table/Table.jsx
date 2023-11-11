import React, { useEffect, useReducer } from 'react'
import "./Table.scss"
import { Container } from '../../utils/Container'
import { apiInstance } from '../../api/api'
import { numberToCurrency } from '../../helpers'
import { Link } from 'react-router-dom'
import { AiFillEye } from "react-icons/ai"


const reducer = (state, action) =>{
    return action
}




const Table = () => {
    const [state, dispatch] = useReducer(reducer,[])

    useEffect(()=>{
       try {
        apiInstance("/coins/markets?vs_currency=USD&order=gecko_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h")
        .then(res => {
            dispatch(res.data);
        })
       
       } catch (error) {
        console.log(error);
       }
    },[])
    console.log(state);
  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>24h Change</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((e)=>
                        <tr key={e.id}>
                            <td>
                                <Link to={`/${e.id}`} className='table__link'>
                                    <div className='table__image-content'>
                                        <img src={e.image} alt="" />
                                        <div className='table__symbol-info'>
                                            <p>{e.symbol.toUpperCase()}</p>
                                            <p>{e.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            </td>
                            <td>{numberToCurrency(e.current_price, 1)}</td>
                            <td>
                                <button><AiFillEye/></button>
                                {e.price_change_percentage_24h.toFixed(2)>0 ? <span className='green'>+{e.price_change_percentage_24h.toFixed(2)} %</span> : e.price_change_percentage_24h.toFixed(2)<0 ? <span className='red'>{e.price_change_percentage_24h.toFixed(2)} %</span> : <span className='gray'>{e.price_change_percentage_24h.toFixed(2)} %</span>}
                            </td>
                            <td>{numberToCurrency(e.market_cap, 2)} M</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </Container>
  )
}

export default Table