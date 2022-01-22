import React from 'react'
import Head from 'next/head';
import { sendGraphQlQueryPost } from '../../lib/helpers';
import { getBlogPost, getUserArticles } from '../../lib/GraphQlQueries';
import PostContent from '../../components/Post/PostContent'
function BlogPost(props) {
    const { data: { post } } = props.data;

    return (
        <>
        <Head>
            <meta
          name="description"
          content= {post.brief}
        />
        <meta
          name="keywords"
          content="Javascript, Building Websites, Learn React, Software Engineer Blogs, Learn Javascript"
        />
        <meta
          name="image"
          content={post.coverImage}
        />
        <meta property="og:url" content="http://shehriyarnadeem.dev" />
        <meta property="og:title" content={post.title} />
        <meta
      property="og:description"
      content={post.brief}
    />
    <meta
    property="og:image"
    content={post.coverImage}
    />
   </Head>    
        <div className="min-w-screen-lg min-h-screen bg-primary dark:bg-primary " >
            <PostContent title={post.title} image={post.coverImage} date={post.date} content={post.contentMarkdown} />
        </div>
  </>
    )
}

export default BlogPost

export async function getStaticProps({ params }) {
    const { slug } = params;

    const data = await sendGraphQlQueryPost(getBlogPost(slug))

    return { props: { data } };
}

export async function getStaticPaths() {
    // Improve my using Admin SDK to select empty docs
    const blogs = await sendGraphQlQueryPost(getUserArticles("shehriyarnadeem", 0));
    const { data: { user: { publication: { posts } } } }: any = blogs;
    const path = posts.map(post => {
        let slug = post.slug
        return { params: { slug } }
    })

    return {
        // must be in this format:
        paths: path,

        fallback: 'blocking',
    };
}

