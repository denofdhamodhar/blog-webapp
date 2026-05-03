import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

// todo: you forgot that the syntax of class (rewise it)
export class authServices {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.ENDPOINT_URL).setProject(conf.PROJECT_ID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const result = await this.account.create({
        userId: ID.unique(),
        email: email,
        password: password,
        name: name,
      });
      console.log(result);
      return result
    } catch (error) {
      console.log("Appwrite :: Create Account Error ::", error.message);
    }
  }

  async loginAccount({ email, password }) {
    try {
      const result = await this.account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      console.log(result);
      return result
    } catch (error) {
      console.log("Appwrite :: Login Account Error ::", error.message);
    }
  }

  async getCurrentUser() {
    try {
      const result = await this.account.get();
      console.log(result);
      return result
    } catch (error) {
      console.log("Appwrite :: Get User Error ::", error.message);
    }
  }

  async logout() {
    try {
      const result = await this.account.deleteSessions();
      console.log(result);
    } catch (error) {
      console.log("Appwrite :: Logout Error ::", error.message);
    }
  }
}

const AuthServices = new authServices();
export default AuthServices;
