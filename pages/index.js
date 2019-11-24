import React from 'react'
import Head from 'next/head'
import Nav from '../src/components/nav'
import SearchInput from "../src/components/SearchInput/SearchInput"

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <SearchInput />
    </div>

    <style jsx>{`
    
    `}</style>
  </div>
)

export default Home
