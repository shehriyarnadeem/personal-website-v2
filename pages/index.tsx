import React from 'react';
import Head from 'next/head';
import Introduction from "../components/Home/Introduction";
import CardList from "../components/Card";
import Heading from "../components/Heading";
import { PencilIcon } from "@heroicons/react/outline";
import { getUserArticles } from '../lib/GraphQlQueries';
import { sendGraphQlQueryPost } from '../lib/helpers'

export async function getStaticProps() {

  const blogs = await sendGraphQlQueryPost(getUserArticles("shehriyarnadeem", 0));
  return {
    revalidate: 7200,
    props: blogs
  }
}

export default function index(props) {
  const {
    data: {
      user: {
        publication: { posts },
      },
    },
} = props

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
      <div>
      <Introduction />
      <div className="flex-1">
        <Heading title="WRITINGS" Icon={PencilIcon} />
        <div className="py-4 lg:px-0 px-3 mx-auto">
          {posts.length > 0 ?
            posts.map((post) => {
              return<CardList post={post} key={Math.random()}/>;
            }): (<div key={Math.random()}></div>)}
        </div>
      </div>
      <div className="py-11"></div>
    </div>
    </main>
    </div>
  )
}



