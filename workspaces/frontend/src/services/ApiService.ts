import axios, { AxiosResponse } from 'axios';
import { ApiLoginResponse, ApiRegisterResponse, ApiUser } from '../types';
import { LocalStorageService } from './LocalStorageService';

const instance_auth = axios.create({
  baseURL: 'http://localhost:8000/api/auth',
  headers: {
    Authorization: LocalStorageService.getToken()
      ? `Bearer ${LocalStorageService.getToken()}`
      : '',
  },
});

export class ApiService {
  static async register(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) {
    return instance_auth
      .post('/register', { name, email, password, password_confirmation })
      .then(
        (res: AxiosResponse<ApiRegisterResponse>) => res,
        (rej) => rej
      );
  }

  static async login(email: string, password: string) {
    return instance_auth
      .post('/login', { email, password })
      .then((res: AxiosResponse<ApiLoginResponse>) => {
        return res;
      });
  }
  static async userProfile() {
    return instance_auth
      .get('/user-profile')
      .then((res: AxiosResponse<ApiUser>) => {
        return res;
      });
  }
}
