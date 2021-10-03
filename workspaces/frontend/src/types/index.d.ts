export interface ApiLoginResponse {
  data: {
    access_token: string;
    token_type: string;
    expires_in: number;
    user: ApiUser;
    error: string;
  };
  status: number;
  statusText: string;
}

export interface ApiNewOfferResponse {
  data: {
    message: string;
  };
  status: number;
  statusText: string;
}

export interface ApiGetOffersResponse {
  data: ApiOffer[];
  status: number;
  statusText: string;
}

export interface ApiObtainOrRedeemOfferResponse {
  data: {
    message: string;
  };
  status: number;
  statusText: string;
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

export interface GenericApiResponse {
  message: string;
  0: number;
}

export interface ApiRegisterResponse {
  data: {
    message: string;
    user: ApiUser;
  };
  status: number;
  statusText: string;
}
