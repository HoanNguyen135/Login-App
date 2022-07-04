import { api } from ".";

const Login = {
  login({
    username,
    password
  }) {
    return api.call().get(`/basic-auth/${username}/${password}`, {
      auth: {
        username,
        password
      },
    });
  },
};

export default Login;
