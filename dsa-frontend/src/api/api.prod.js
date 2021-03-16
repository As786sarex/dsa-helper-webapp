import axios from 'axios';

const BASE_URL = 'http://localhost:9999/api';

export const getAllProblemNames = async (key) => {
  const result = await axios.get(`${BASE_URL}/getAllProblem`);
  return result.data.data;
};

export const getProblemById = async (id) => {
  const result = await axios.get(`${BASE_URL}/getProblemById/${id}`);
  return result.data.data;
};
