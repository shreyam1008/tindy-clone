import axios from "axios";

const instance = axios.create({
  baseURL: "https://tindy-bakend.herokuapp.com",
});

export default instance;
