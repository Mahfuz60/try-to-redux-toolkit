import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch data
export const fetchPosts = createAsyncThunk('posts/fetchPost', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
});

//postSlice
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
    error: null,
    posts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.posts = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.posts = [];
    });
  },
});

export default postSlice.reducer;
