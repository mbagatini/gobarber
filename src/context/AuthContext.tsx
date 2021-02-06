import React, { createContext, useCallback } from 'react';

import api from '../services/api';

interface AuthContextDTO {
  name: string;
  handleSignIn(credentials: SignInCredentials): Promise<void>;
}

interface SignInCredentials {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC = ({ children }) => {
  const handleSignIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: '', handleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
