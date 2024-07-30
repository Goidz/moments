import axios from "axios";

axios.defaults.baseURL = "https://drf-api-moments-c2d4f3a26fc0.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;