import axios from "axios";

export const getUsers = async () => {
  return await axios.get("https://reqres.in/api/users").then((res) => {
    return res.data.data;
  });
};

export const getUser = async (id) => {
  return await axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
    return res.data.data;
  });
};

export const updateUser = async (id, data) => {
  console.info(
    "The mock user would have been updated with the following data:",
    data
  );
  return await axios.put(`https://reqres.in/api/users/${id}`).then((res) => {
    return res.data.data;
  });
};

export const deleteUser = async (id) => {
  return await axios.delete(`https://reqres.in/api/users/${id}`).then((res) => {
    return res.data.data;
  });
};

export const createUser = async (data) => {
  console.info(
    "The mock user would have been created with the following data:",
    data
  );
  return await axios
    .post(`https://reqres.in/api/register`, data)
    .then((res) => {
      return res.data.data;
    });
};
