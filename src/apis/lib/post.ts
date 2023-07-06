import { axiosClient } from 'apis/apiClient';
import { AxiosResponse } from 'axios';

export interface PostResponse {
  address: string;
  date: string;
  menuname: string;
  application: number;
  number: number;
}

export class PostApi {
  static async getList(): Promise<PostResponse[]> {
    const res = await axiosClient.get('/post/listall', {});
    console.log('res :>> ', res);
    return res.data;
  }
}
