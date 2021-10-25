import React from 'react'
import { sendGraphQlQueryPost } from '../lib/helpers';
import { getBlogPost, getUserArticles } from '../lib/GraphQlQueries';
function BlogPost() {

    return (
        <div>
            <h1>Hello there</h1>
        </div>
    )
}

export default BlogPost

// export async function getStaticProps({ params }) {
//     const { slug } = params;
//     const data = await sendGraphQlQueryPost(getBlogPost(slug))

//     return { props: { data } };
// }

// export async function getStaticPaths() {
//     // Improve my using Admin SDK to select empty docs
//     const res = await sendGraphQlQueryPost(getUserArticles("shehriyarnadeem", 0));

//     return {
//         // must be in this format:
//         // paths: [
//         //   { params: { username, slug }}
//         // ],
//         path: ['/'],
//         fallback: 'blocking',
//     };
// }

