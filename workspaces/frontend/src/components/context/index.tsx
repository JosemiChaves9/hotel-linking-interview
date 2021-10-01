import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ApiService } from '../../services/ApiService';
import { LocalStorageService } from '../../services/LocalStorageService';
import { ApiUser } from '../../types';

interface Context {
  user: null | ApiUser;
}

export const UserContext = React.createContext<Context>({
  user: null,
});
export const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<ApiUser | null>(null);
  const history = useHistory();

  const getUser = async () => {
    await ApiService.userProfile().then(
      (res) => {
        if (res) {
          setUser(res.data);
        } else {
          setUser(null);
          LocalStorageService.removeItem('access_token');
        }
      },
      () => {
        LocalStorageService.removeItem('access_token');
        setUser(null);
      }
    );
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const UserProvider = () => React.useContext(UserContext);
