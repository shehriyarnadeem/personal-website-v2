import axios from "axios";

export const sendGraphQlQueryPost = async (query) => {
  const res = await axios.post("https://api.hashnode.com", { query });
  return res.data;
};
