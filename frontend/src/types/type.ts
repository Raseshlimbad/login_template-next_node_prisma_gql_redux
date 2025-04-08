export interface RegisterUserVariables {
  email: string;
  password: string;
  username: string;
}

export interface RegisterUserResponse {
  // username: string;
  // email: string;
  // id: string;
  user: {
    id: string;
    email: string;
    username: string;
    password: string;
    isAdmin: boolean;
  };
}

export interface LoginUserVariables {
  email: string;
  password: string;
}

export interface RegisterUserVariables {
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  isAdmin?: boolean;
}

export interface AuthPayload {
  token: string;
  user: User;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LoginUserResponse extends AuthPayload {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RegisterUserResponse extends AuthPayload {}
