import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import SinglePage from '../pages/singlepage/SinglePage'

const Routesss = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<SinglePage/>}/>
    </Routes>
  )
}

export default Routesss