import axios from "./axios";

function signIn(data: { email: string; password: string }) {
  return axios.post("/auth/signin", data);
}

export default { signIn };
