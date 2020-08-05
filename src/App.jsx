import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';

function App() {
  const [ posts, setPosts ] = useState([
    {
      id: 1,
      title: 'Hello React',
      body: 'Lorem ipsum amet.'
    },
    {
      id: 2,
      title: 'My Life As A React Developer',
      body: 'Lorem ipsum amet.'
    },
    {
      id: 3,
      title: 'React Today Blog',
      body: 'Lorem ipsum amet.'
    }
  ]);
  return (
    <div className="App">
      <Header/>
      <Posts posts={posts} />
    </div>
  );
}

export default App;
