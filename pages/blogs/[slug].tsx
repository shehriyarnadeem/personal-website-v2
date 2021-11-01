import React from 'react'
import { sendGraphQlQueryPost } from '../../lib/helpers';
import { getBlogPost, getUserArticles } from '../../lib/GraphQlQueries';
import PostContent from '../../components/Post/PostContent'
function BlogPost(props) {
     const {data:{post}} = props.data;
    
    return (
        <div className="min-w-screen-lg min-h-screen bg-primary dark:bg-primary " >
            <PostContent title={post.title} image={post.coverImage} date={post.date} content={post.contentMarkdown}/>
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
    const blogs =await sendGraphQlQueryPost(getUserArticles("shehriyarnadeem", 0));
    const { data: { user: { publication: { posts } } } }  = blogs;
    const path = posts.map(post=>{
        let slug = post.slug
        return {params:{slug}}
    })
   
    return {
        // must be in this format:
        paths: path,
       
        fallback: 'blocking',
    };
}

