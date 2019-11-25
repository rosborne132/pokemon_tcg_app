import React from 'react';
import Head from 'next/head';
import SearchInput from '../src/components/SearchInput/SearchInput';

const Home = () => (
    <div className="body">
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="hero">
            <SearchInput />
        </div>

        <style jsx>
            {`      
      .hero {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
        </style>
    </div>
);

export default Home;
