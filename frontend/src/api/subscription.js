import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const subscribe = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/api/subscribe`, { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};
