import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
      posts: []
  };

  componentDidMount() {
  }

  render() {
    const { posts, counter } = this.state;

    return ( 
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
