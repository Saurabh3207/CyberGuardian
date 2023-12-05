import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../Blog/config/data';
import Chip from '../Blog/common/Chip';
import EmptyList from '../Blog/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';


const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
  
    useEffect(() => {
      let blog = blogList.find((blog) => blog.id === parseInt(id));
      if (blog) {
        setBlog(blog);
      }
    }, []);
  
    return (
      <>
        <Link className='blog-goBack' to='/'>
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        {blog ? (
          <div className='blog-wrap'>
            <header>
              <p className='blog-date'>Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <div className='blog-subCategory'>
                {blog.subCategory.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
              </div>
            </header>
            <img src={blog.cover} alt='cover' />
            <p className='blog-desc' dangerouslySetInnerHTML={{ __html: blog.description }}></p>
          </div>
        ) : (
          <EmptyList />
        )}
      </>
    );
  };
  
  export default Blog;
