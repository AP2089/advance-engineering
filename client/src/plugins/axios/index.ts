import axios from 'axios';
import { apiUrl } from '@/config';
import { IUserStore } from '@/types/User';

let userStore = localStorage.getItem('userStore');
let authorization = null;

if (userStore) {
  const userData: IUserStore = JSON.parse(userStore);

  authorization = `Bearer ${userData.token}`;
}

export default axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    common: {
      Authorization: authorization
    }
  }
});

export * from 'axios';