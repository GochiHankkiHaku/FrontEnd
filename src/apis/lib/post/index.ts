import { axiosClient } from 'apis/apiClient';
import { PostResponse, WriteRequest } from './type';

export class PostApi {
  static async getPosts(): Promise<PostResponse[]> {
    const res = await axiosClient.get('/post/listall', {});
    return res.data;
  }

  static async write(gatheringInfo: WriteRequest) {
    const res = await axiosClient.post('/post/write', gatheringInfo);
    return res;
  }

  static async getPost(id: string) {
    const res = await axiosClient.get(`/post/${id}`);
    return res.data;
  }
}
