import React from 'react'
import { sendGraphQlQueryPost } from '../../common/utils/apiUtils';
import { getBlogPost, getUserArticles } from '../../common/GraphQlQueries';
import { BlogContent, BlogDetails } from '../../components/Blog';

function BlogPost(props) {
    const { data: { post } } = props.data;
    return (   
        <div className="bg-primary dark:bg-primary">
            <article className="max-w-3xl mx-auto p-5">
              <BlogDetails post={post} />
              <BlogContent  content={post.contentMarkdown} />
            </article>
        </div>
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

