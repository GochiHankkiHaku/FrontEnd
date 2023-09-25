import { useState, useEffect } from 'react';
import { PostApi } from 'apis/lib/post';
import { Posts } from '../utils/searchPage.type';

export const useGetPosts = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  const getPosts = async () => {
    try {
      const res = await PostApi.getPosts();
      setPosts(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return posts;
};
