export interface User {
  id: string;
  username: string;
  email: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserInput {
  username: string;
  email: string;
  password: string;
  name?: string;
}

export interface LoginUserInput {
  username: string;
  password: string;
}