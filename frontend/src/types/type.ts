export interface RegisterUserVariables {
  email: string;
  password: string;
  username: string;
}

export interface RegisterUserResponse {
  username: string;
  email: string;
  id: string;
  // register: {
  //   id: string;
  //   email: string;
  //   username: string;
  //   password: string;
  // };
}

export interface LoginUserVariables {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  user: {
    id: string;
    email: string;
    username: string;
    isAdmin: boolean;
  };
  login: {
    token: string;
    // user: {
    //   id: string;
    //   email: string;
    //   username: string;
    // };
  };
}
