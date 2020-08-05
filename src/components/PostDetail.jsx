import React from 'react'

const PostDetail = ({ post }) => {
  return (
   <article className="post container">
     <h1>{post.title}</h1>
     <div>
       { post.body}
     </div>
   </article>
  )
}

export default PostDetail
