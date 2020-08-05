import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import NotFound from './components/NotFound';

function App() {
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

  return (
    <Router>
       <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Posts posts={posts} /> } />
          <Route path="/post/:postSlug" render={(props) => { const post = posts.find((post) => post.slug === props.match.params.postSlug); if (post) return <PostDetail post={post} />; else return <NotFound />}} />
          <Route component={NotFound} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
