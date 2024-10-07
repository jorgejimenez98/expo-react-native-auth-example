/* eslint-disable no-unused-vars */

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  session: string | null;
  isLoading: boolean;
  user: User | null;

  login: (sessionToken: string) => void;
  logout: () => void;
  restoreSession: () => void;
}