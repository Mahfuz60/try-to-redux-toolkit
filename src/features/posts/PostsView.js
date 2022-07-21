import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';
import './PostView.css';

const PostsView = () => {
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div className='postContainer'>
      <h2>Redux-Toolkit User Post</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <section>
        {posts.map((post, id) => {
          return (
            <div key={id}>
              <div className='card'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PostsView;
