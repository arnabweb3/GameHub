import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "5fc541216faf433b8f0b5cfcfb3e316f" },
});

export { CanceledError };
