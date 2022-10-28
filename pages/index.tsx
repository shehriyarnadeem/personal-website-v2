import React from 'react';
import Head from 'next/head';
import Introduction from "../components/Home/Introduction";
import CardList from "../components/Card";
import Heading from "../components/Heading";
import { PencilIcon } from "@heroicons/react/outline";
import { getUserArticles } from '../common/GraphQlQueries';
import { sendGraphQlQueryPost } from '../common/utils/apiUtils'
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {

  const blogs = await sendGraphQlQueryPost(getUserArticles("shehriyarnadeem", 0));
  const videos = await fetchMyAPI();
  return {
    revalidate: 7200,
    props: {blogs, videos}
  }
}

async function fetchMyAPI() {
  let response = await fetch('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCFdsGxVtQP-zX0JV_R4iFMg&maxResults=100&key=AIzaSyDp_UL8FlQNiZnh1U5s5SC5vH09fkIgN5Y');
  const data =  response.json();
  return data;
}
export default function index(props) {
  
  const { blogs:{data:{user:{publication: { posts }}}}} = props;
  const {videos} = props;
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
        <meta name="google-site-verification" content="8SncLVGBqWIau-lr7iETiDx8F8bWqLo1v9LkQyf9_R8" />
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
    <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lobster&family=Mulish:wght@200&display=swap" rel="stylesheet" />
    {/* <!-- Fathom - beautiful, simple website analytics --> */}
    <script src="https://cdn.usefathom.com/script.js" data-site="HXSYKITK" defer></script>
    
   {/* <!-- / Fathom --> */}
      </Head>

      <main className="min-h-screen  bg-primary dark:bg-primary place-items-center grid">
        <div>
          <Introduction />
          <div className="flex-1">
              <Heading title="WRITINGS" Icon={PencilIcon} placementStyle="justify-center" extrastyle='text-4xl' />
               <div className="py-4 lg:px-0 px-3 mx-auto flex flex-wrap justify-evenly space-y-10 items-center">
              {posts.length > 0 ?
                posts.map((post) => {
                  return (
                  <> 
                <div>
                  <div className="cursor-pointer" key={Math.random()}>
                      <Link href={`/blogs/${post.slug}`}>
                          <Image src={post.coverImage || 'https://dummyimage.com/250/ffffff/000000 '} className="rounded-lg shadow-lg" width={550} height={300} objectFit="cover" alt="dummy"/>
                      </Link>
                  </div>
                  <CardList post={post} key={Math.random()} />
                  </div>
                  </>
                )
                }) : (<div key={Math.random()}></div>)}
          </div>
          </div>
          <div className='justify-center flex cursor-pointer'><Link href={`/blogs`}><h3 className="text-xl dark:text-dark text-light  hover:dark:text-white">Read More</h3></Link></div>
          <div className="py-11"></div>
        </div>
      </main>
    </div>
  )
}



