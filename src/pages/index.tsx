import Head from 'next/head';
import React from 'react';
import { Hero, NavBar } from '../components';

const Home = () => {
  return (
    <>
      <Hero />
      <Head>
        <title>Alvaro Castle</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
      </main>
    </>
  );
};
export default Home;
