import React from 'react';
import Head from 'next/head'
import Home from './home';
import { getUserArticles } from '../lib/GraphQlQueries';
import { sendGraphQlQueryPost } from '../lib/helpers'
import { useDarkMode } from '../lib/hooks'

export async function getStaticProps() {

  const blogs = await sendGraphQlQueryPost(getUserArticles("shehriyarnadeem", 0));

  return {
    props: { blogs }
  }
}

export default function index(props) {

  return (
    <div>
      <Head>
        <title>Shehriyar Nadeem</title>
        <meta name="description" content="Shehriyar Nadeem personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100" rel="stylesheet"></link>
      </Head>

      <main className="min-h-screen bg-primary dark:bg-primary place-items-center grid">
        <Home props={props} />
      </main>

    </div>
  )
}



