export interface ApiRegisterResponse {
  message: string;
  user: ApiUser;
}

export interface ApiLoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: ApiUser;
}

export interface ApiUser {
  name: string;
  email: string;
  email_verified_at?: string;
  updated_at: string;
  created_at: string;
  id: number;
  user_id: string;
}
export interface ApiOffer {
  id: string;
  offer_id: string;
  offer_name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}
