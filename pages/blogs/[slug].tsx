import React from 'react'
import { sendGraphQlQueryPost } from '../../common/utils/apiUtils';
import { getBlogPost, getUserArticles } from '../../common/GraphQlQueries';
import { BlogContent, BlogDetails } from '../../components/blog';
import Head from 'next/head';

function BlogPost(props) {
    const { data: { post } } = props.data;
    return (
        <>
        <Head>
        <title>{post && post.title}</title>
        <meta
        name="description"
        content= {post.brief} />
        <meta
        name="keywords"
        content="Javascript, Building Websites, Learn React, Software Engineer Blogs, Learn Javascript"
        />
        <meta name="image" content={post.coverImage} />
        <meta property="og:url" content="http://shehriyarnadeem.dev" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description"content={post.brief} />
        <meta property="og:image" content={post.coverImage} />
    </Head>    
        <div className="bg-primary dark:bg-primary">
            <article className="mx-auto p-5 max-w-5xl">
              <BlogDetails post={post} />
              <BlogContent  content={post.contentMarkdown} />
            </article>
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

