import { axiosClient } from 'apis/apiClient';
import { AxiosResponse } from 'axios';

export interface PostResponse {
  address: string;
  date: string;
  menuname: string;
  application: number;
  number: number;
  img: string;
}

export class MenuApi {
  static async getMenu() {
    const res = await axiosClient.post('/menu/listall', {});
    console.log('res :>> ', res);
    return res;
  }
}
