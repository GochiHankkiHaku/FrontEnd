import { useState, useEffect } from 'react';
import { PostApi } from 'apis/lib/post';
import { PostDetail } from '../utils/searchPage.type';

export const useGetPostDetail = (post_idx: string) => {
  const [postDetail, setPostDetail] = useState<PostDetail>();

  const getPostDetail = async () => {
    try {
      const res = await PostApi.getPost(post_idx);
      setPostDetail(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  return postDetail;
};
