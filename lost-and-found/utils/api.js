import axios from "axios";

const API_URL = "http://192.168.1.92:3333";

axios.defaults.timeout = 5000;
export const sendCreateUserReq = async (user) => {
  const res = await axios.post(`${API_URL}/users/create`, user);
  return res;
};
