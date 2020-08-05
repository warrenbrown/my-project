import React, {useState } from 'react'
import { Redirect } from 'react-router-dom'
import Quill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const PostForm = ({ addNewPost }) => {
  const [title, setTitle ] = useState('');
  const [body, setBody ] = useState('');
  const [saved, setSaved ] = useState(false)

  const handlPostForm = (event) => {
    event.preventDefault();
    if (title) {
      const post = {
        title: title,
        body: body,
      }
      addNewPost(post)
      setSaved(true)
    } else {
      alert('Title required.');
    }
  }
  if (saved === true) {
    return <Redirect to='/' />
  }
  return (
    <form className="container" onSubmit={handlPostForm} >
      <h1>Add a New Post</h1>
      <p>
        <label htmlFor="form-title">Title:</label>
        <br/>
        <input id='form-title' value={title} onChange={event => setTitle(event.target.value)} />
      </p>
        <label htmlFor="form-body">Body:</label>
        <br/>
        <Quill onChange={(body, delta, source, editor) => { setBody(editor.getContents() ); }} />
      <p>
        <button type='submit'>Save</button>
      </p>
    </form>
  )
}

export default PostForm
