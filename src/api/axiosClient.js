import axios from "axios";

axios.defaults.baseURL = "https://api.ezfrontend.com/";

const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
