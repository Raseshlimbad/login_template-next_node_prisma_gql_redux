import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  gql,
  HttpLink,
} from "@apollo/client";
import { LOGIN_USER, REGISTER_USER } from "./graphql";
import Cookies from "js-cookie";
import { LoginUserResponse, LoginUserVariables, RegisterUserResponse, RegisterUserVariables } from "@/types/type";

class ApiClient {
  private client: ApolloClient<any>;

  constructor() {
    const authLink = new ApolloLink((operation, forward) => {
      const token = Cookies.get("login_token");
      operation.setContext({
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      return forward(operation);
    });

    this.client = new ApolloClient({
      uri: "http://localhost:8001/graphql",
      cache: new InMemoryCache(),
      link: authLink.concat(
        new HttpLink({ uri: "http://localhost:8001/graphql" })
      ),
      credentials: "include",
    });
  }

  async loginUser({
    email,
    password,
  }: LoginUserVariables): Promise<LoginUserResponse> {
    try {
      const { data, errors } = await this.client.mutate({
        mutation: gql`
          ${LOGIN_USER}
        `,
        variables: { email, password },
      });

      if (errors) {
        throw new Error(errors[0]?.message || "GraphQL errors occurred");
      }

      if (!data?.login.token) {
        throw new Error("Login failed");
      }

      // Set the token in cookies
      Cookies.set('login_token', data.login.token, { expires: 7 }); // Token expires in 7 days

      return data.login;
    } catch (error) {
      throw new Error(
        `API request failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  // Register user
  async registerUser({
    username,
    email,
    password,
  }: RegisterUserVariables): Promise<RegisterUserResponse> {
    try {
      const { data, errors } = await this.client.mutate({
        mutation: gql`
          ${REGISTER_USER}
        `,
        variables: { username, email, password },
      });

      if (errors) {
        throw new Error(errors[0]?.message || "GraphQL errors occurred");
      }

      if (!data?.register) {
        throw new Error("Register failed");
      }

      // Set the token in cookies for auto-login
      if (data.register.token) {
        Cookies.set('login_token', data.register.token, { expires: 7 });
      }

      return data.register;
    } catch (error) {
      throw new Error(
        `API request failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}

export default ApiClient;
