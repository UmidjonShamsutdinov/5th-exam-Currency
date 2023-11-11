import React, {useEffect, useState} from 'react'
import "./SinglePage.scss"
import Nav from '../../layouts/nav/Nav'
import { apiInstance } from '../../api/api'
import Loading from '../../layouts/loading/Loading'
import { numberToCurrency } from '../../helpers'





const SinglePage = () => {
  const [id, setId] = useState(window.location.pathname)
  const [data, setData] = useState(null)


    useEffect(()=>{
       try {
        apiInstance(`/coins/${id}`)
        .then(response => {
            response.data && setData(response.data)
        })
       
       } catch (error) {
        console.log(error);
       }
    },[])
    console.log(data);
  return (
    data ? <>
      <Nav/>
      <div className="single__page-main">
        <div className="single__page-info">
          <img src={data.image.large} alt="img" />
          <h2 className='item-name'>{data.name}</h2>
          <p>{data.description.en.split(".")[0] + "."}</p>
          <div className="item-info">
            <strong>Rank: <span>{data.coingecko_rank}</span></strong>
            <strong>Current Price: <span>{numberToCurrency(data.market_data.current_price.usd, 0)}</span></strong>
            <strong>Market_Cap: <span style={{color:"#fff"}}>{numberToCurrency(data.market_data.market_cap.usd, 0)}M</span></strong>
          </div>
        </div>
        <div className="chart__div">
          <h1>admin</h1>
        </div>
      </div>
    </> : <Loading type={1}/>
  )
}

export default SinglePage