import axios from "axios";

export const getTurns = async (token) => {
  const res = await axios.get("https://localhost:7232/api/turns", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.data;
};

export const createTurn = async (turn, token) => {
  const res = await axios.post(
    "https://localhost:7232/api/turns",
    turn,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data;
};

export const nextTurn = async (id, token) => {
  const res = await axios.put(
    `https://localhost:7232/api/turns/${id}/next`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data;
};

export const cancelTurn = async (id, token) => {
  const res = await axios.put(
    `https://localhost:7232/api/turns/${id}/cancel`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data;
};