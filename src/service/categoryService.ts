import axios from "./axios";
const create = (name: string) => {
  return axios.post("/category", { name: name });
};

const getAll = () => {
  return axios.get("/category");
};
export default { create, getAll };
