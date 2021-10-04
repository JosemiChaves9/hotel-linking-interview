import axios, { AxiosResponse } from 'axios';
import {
  ApiGetOffersResponse,
  ApiLoginResponse,
  ApiNewOfferResponse,
  ApiObtainOrRedeemOfferResponse,
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
  ): Promise<ApiRegisterResponse> {
    return instance
      .post('/auth/register', { name, email, password, password_confirmation })
      .then(
        (res: AxiosResponse<ApiRegisterResponse>) => res,
        (rej) => rej.response
      );
  }

  static async login(
    email: string,
    password: string
  ): Promise<ApiLoginResponse> {
    return instance.post('/auth/login', { email, password }).then(
      (res) => res,
      (rej) => rej.response
    );
  }
  static async userProfile(): Promise<{ data: ApiUser; status: number }> {
    return instance.get('/auth/user-profile').then(
      (res: AxiosResponse<ApiUser>) => res,
      (rej) => rej.response
    );
  }

  static async newOffer(offer_name: string): Promise<ApiNewOfferResponse> {
    return instance.post('offers/create-offer', { offer_name }).then(
      (res: AxiosResponse<GenericApiResponse>) => res,
      (rej) => rej.response
    );
  }

  static async getOffers(): Promise<ApiGetOffersResponse> {
    return instance.get('offers/get-all').then(
      (res: AxiosResponse<ApiOffer>) => res,
      (rej) => rej.response
    );
  }

  static async getObtainedOffers(
    user_id: string
  ): Promise<ApiGetOffersResponse> {
    return instance.get(`offers/get-offers-for-user/${user_id}`).then(
      (res: AxiosResponse<ApiOffer>) => res,
      (rej) => rej.response
    );
  }

  static async obtainOffer(
    offer_id: string,
    user_id: string
  ): Promise<ApiObtainOrRedeemOfferResponse> {
    return instance.post('offers/obtain-offer', { offer_id, user_id }).then(
      (res: AxiosResponse<GenericApiResponse>) => res,
      (rej) => rej.response
    );
  }

  static async redeemOffer(
    offer_id: string,
    user_id: string
  ): Promise<ApiObtainOrRedeemOfferResponse> {
    return instance
      .delete('offers/redeem-offer', { data: { offer_id, user_id } })
      .then(
        (res: AxiosResponse<GenericApiResponse>) => res,
        (rej) => rej.response
      );
  }
}
