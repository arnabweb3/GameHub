import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "f6d7f528159c4254bbe244d380ce110b" },
});
