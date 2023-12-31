import CreateCustomerData from "../types/Customer/CreateCustomerData";
import axios from "./axios";

function createCustomer(data: CreateCustomerData) {
  return axios.post("/customer", data);
}

function getAllCustomer() {
  return axios.get("/customer");
}

export default { createCustomer, getAllCustomer };
