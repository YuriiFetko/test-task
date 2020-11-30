export interface Card {
  id: string;
  title: string;
  body: string;
  img: string;
}

export interface User {
  email: string;
  password: string;
}

export interface AuthResponse {
  jwt_token: string;
  expire: string;
}
