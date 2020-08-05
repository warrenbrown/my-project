import Message from './components/Message';

import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import NotFound from './components/NotFound';
import PostForm from './components/PostForm';

function App() {
  const [message, setMessage ] = useState(null)
  const [ posts, setPosts ] = useState([
    {
      id: 1,
      slug: 'hello-react',
      title: 'Hello React',
      body: 'Lorem ipsum amet.'
    },
    {
      id: 2,
      slug: 'my-life',
      title: 'My Life As A React Developer',
      body: 'Lorem ipsum amet.'
    },
    {
      id: 3,
      slug: 'react-today',
      title: 'React Today Blog',
      body: 'Lorem ipsum amet.'
    }
  ]);

  const setFlashMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null);
    }, 1600);
  };

  const addNewPost = (post) => {
    post.id = posts.length + 1;
    post.slug = encodeURIComponent(
    post.title.toLowerCase().split(" ").join('-')
    );
    setPosts([...posts, post])
    setFlashMessage();
  }

  return (
    <Router>
       <div className="App">
        <Header/>
        {message && <Message type={message} />}
        <Switch>
          <Route exact path='/' render={() => <Posts posts={posts} /> } />
          <Route path="/post/:postSlug" render={(props) => { const post = posts.find((post) => post.slug === props.match.params.postSlug); if (post) return <PostDetail post={post} />; else return <NotFound />}} />
          <Route exact path='/new' render={() => (<PostForm addNewPost={addNewPost} /> )} />
          <Route component={NotFound} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
