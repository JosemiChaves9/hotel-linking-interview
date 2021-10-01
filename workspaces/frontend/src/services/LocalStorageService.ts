export class LocalStorageService {
  static setToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  static getToken() {
    return localStorage.getItem('access_token');
  }

  static removeItem(item: string) {
    localStorage.removeItem(item);
  }
}
