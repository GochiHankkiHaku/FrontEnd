import { axiosClient } from 'apis/apiClient';

export interface PostResponse {
  address: string;
  date: string;
  menuname: string;
  application: number;
  number: number;
  img: string;
}

export class PostApi {
  static async getPosts(): Promise<PostResponse[]> {
    const res = await axiosClient.get('/post/listall', {});
    return res.data;
  }

  static async write(date: string, time: string, number: number, menuname: string, money: number) {
    const res = await axiosClient.post('/post/write', {
      menuname,
      date,
      time,
      number,
      money,
      lat: 33.449701,
      lng: 126.917109,
    });
    return res;
  }

  static async getPost(id: string) {
    const res = await axiosClient.get(`/post/${id}`);
    return res.data;
  }
}
