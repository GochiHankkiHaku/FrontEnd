import { axiosClient } from 'apis/apiClient';
import { Menu } from './type';

export interface PostResponse {
  address: string;
  date: string;
  menuname: string;
  application: number;
  number: number;
  img: string;
}

export class MenuApi {
  static getMenu = async (): Promise<Menu[]> => {
    const res = await axiosClient.get('/menu/listall', {});
    return res.data;
  };
}
