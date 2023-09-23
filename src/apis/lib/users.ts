import { axiosClient } from 'apis/apiClient';

interface CreateReviewRequest {
  userIdx: number;
  postIdx: number;
  reviewType: 'good' | 'great' | 'notgood';
}
export class UserApi {
  static createReview = async ({ userIdx, postIdx, reviewType }: CreateReviewRequest) => {
    const res = await axiosClient.put(
      `/users/review/${userIdx}/${postIdx}/?reviewType=${reviewType}`,
    );
    return res.data;
  };
}
