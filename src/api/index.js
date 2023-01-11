import axios from "axios";

const API_URL = "https://api.giphy.com/v1/gifs";

export const getTrending = async (limit = 10) => {
  try {
    const apiResponse = await axios.get(
      `${API_URL}/trending?api_key=${
        import.meta.env.VITE_API_KEY
      }&limit=${limit}`
    );

    const data = apiResponse.data;

    return data;
  } catch (e) {
    return "Failed to get data";
  }
};

export const getSpecificGif = async (id) => {
  try {
    const apiResponse = await axios.get(
      `${API_URL}/${id}?api_key=${import.meta.env.VITE_API_KEY}`
    );

    const data = apiResponse.data;

    return data;
  } catch (e) {
    return "Failed to get data";
  }
};
