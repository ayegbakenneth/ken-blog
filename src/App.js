import './App.css';
import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function App() {
      const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
        
      
  return (

      <div className="App">
        <div className="content">
        
        <header className="App-header">
          { error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
          {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Kenneth Ayegba')} title="Kenneth Ayegba blogs" />}
          
        </header>
        
        </div>
      </div>

  );
}

export default App;
