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
        <meta
          name="description"
          content="Come check out how Shehriyar Nadeem can help you level up your career as a software engineer."
        />
        <meta
          name="keywords"
          content="Javascript, Building Websites, Learn React, Software Engineer Blogs, Learn Javascript"
        />
        <meta
          name="image"
          content="https://shehriyarnadeem.dev/urlThumbnail.png"
        />
        <meta property="og:url" content="http://shehriyarnadeem.dev" />
        <meta property="og:title" content="Shehriyar Nadeem" />
        <meta
      property="og:description"
      content="Come check out how Shehriyar Nadeem can help you level up your career as a software engineer."
    />
    <meta
      property="og:image"
      content="https://shehriyarnadeem.dev/urlThumbnail.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@Sharlil" />
    <meta name="twitter:site" content="@Sharlil" />
    <meta name="twitter:title" content="Shehriyar Nadeem" />
    <meta
      name="twitter:description"
      content="Come check out how Shehriyar Nadeem can help you level up your career as a software engineer."
    />
    <meta
      name="twitter:image"
      content="https://shehriyarnadeem.dev/urlThumbnail.png"
    />
    <meta name="twitter:alt" content="Shehriyar Nadeem" />
    <link rel="canonical" href="http://shehriyarndeem.dev" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100" rel="stylesheet"></link>
    {/* <!-- Fathom - beautiful, simple website analytics --> */}
    <script src="https://cdn.usefathom.com/script.js" data-site="HXSYKITK" defer></script>
   {/* <!-- / Fathom --> */}
      </Head>

      <main className="min-h-screen  bg-primary dark:bg-primary place-items-center grid">
        <div>
          <Introduction />
          <div className="flex-1">
            <Heading title="WRITINGS" Icon={PencilIcon} />
            <div className="py-4 lg:px-0 px-3 mx-auto">
              {posts.length > 0 ?
                posts.map((post) => {
                  return <CardList post={post} key={Math.random()} />;
                }) : (<div key={Math.random()}></div>)}
            </div>
          </div>
          <div className="py-11"></div>
        </div>
      </main>
    </div>
  )
}



