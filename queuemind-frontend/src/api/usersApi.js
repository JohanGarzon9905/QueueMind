import axios from "axios";

const API = "https://localhost:7232/api/users";

export const getUsers = async (token) => {
  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};