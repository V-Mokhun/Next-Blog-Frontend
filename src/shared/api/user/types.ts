export interface SignUpValues {
  email: string;
  name: string;
  username: string;
  password: string;
}

export interface LogInValues {
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface SignUpData {
  jwt: string;
  user: User;
}
