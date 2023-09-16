import { axiosClient } from 'apis/apiClient';
import { Menu } from './type';

export class MenuApi {
  static getMenu = async (): Promise<Menu[]> => {
    const res = await axiosClient.get('/menu/listall', {});
    return res.data;
  };
}
