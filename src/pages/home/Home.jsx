import React, { Suspense, lazy } from 'react'
import "./Home.scss"
import Nav from '../../layouts/nav/Nav'
import Hero from '../../components/hero/Hero'
import Search from '../../components/search-section/Search'
import Loading from '../../layouts/loading/Loading'
// import Table from '../../components/table/Table'
const Table = lazy(()=>import("../../components/table/Table"))

const Home = () => {
  return (
    <>
        <Nav/>
        <Hero/>
        <Search/>
        <Suspense fallback={<Loading type = {1}/>}>
          <Table/>
        </Suspense>
    </>
  )
}

export default Home