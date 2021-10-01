import axios, { AxiosResponse } from 'axios';
import {
  ApiLoginResponse,
  ApiOffer,
  ApiRegisterResponse,
  ApiUser,
  GenericApiResponse,
} from '../types';
import { LocalStorageService } from './LocalStorageService';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
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
    return instance
      .post('/auth/register', { name, email, password, password_confirmation })
      .then(
        (res: AxiosResponse<ApiRegisterResponse>) => res,
        (rej) => rej
      );
  }

  static async login(email: string, password: string) {
    return instance.post('/auth/login', { email, password }).then(
      (res: AxiosResponse<ApiLoginResponse>) => {
        return res;
      },
      (rej) => rej
    );
  }
  static async userProfile() {
    return instance.get('/auth/user-profile').then(
      (res: AxiosResponse<ApiUser>) => {
        return res;
      },
      (rej) => rej
    );
  }

  static async newOffer(offer_name: string) {
    return instance.post('offers/create-offer', { offer_name }).then(
      (res: AxiosResponse<GenericApiResponse>) => {
        return res;
      },
      (rej) => rej
    );
  }

  static async getOffers() {
    return instance.get('offers/get-all').then(
      (res: AxiosResponse<ApiOffer>) => {
        return res;
      },
      (rej) => rej
    );
  }

  static async getObtainedOffers(user_id: string) {
    return instance.get(`offers/get-offers-for-user/${user_id}`).then(
      (res: AxiosResponse<ApiOffer>) => {
        return res;
      },
      (rej) => rej
    );
  }

  static async obtainOffer(offer_id: string, user_id: string) {
    return instance
      .post('offers/obtain-offer', { offer_id, user_id })
      .then((res: AxiosResponse<GenericApiResponse>) => res);
  }

  static async redeemOffer(offer_id: string, user_id: string) {
    return instance
      .delete('offers/redeem-offer', { data: { offer_id, user_id } })
      .then((res: AxiosResponse<GenericApiResponse>) => res);
  }
}
