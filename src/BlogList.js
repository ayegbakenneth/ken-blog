import React from 'react';

const BlogList = ({blogs, title}) => {
    
    
    return (
        <div className="blogList">
            <h2>{title}</h2>
        {blogs.map((blog) => (
            <div className="blogPreview" key={blog.id}>
                <ul>
		  <li>
		    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
		  </li>
		</ul>
            </div>
        ))}
        </div>
        
    );
}
 
export default BlogList;
