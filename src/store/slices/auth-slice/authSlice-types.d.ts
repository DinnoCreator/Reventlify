export interface InitialState {
  isLoggedIn: boolean;
  user: any;
  errorMessage: null | string;
  loading: boolean;
  expiresAt: number | null;
}

export interface UserDetails {
    email: string;
    password: string;
  }