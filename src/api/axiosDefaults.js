import axios from "axios";

axios.defaults.baseURL = "https://moments-ci-g-a4d8733889b3.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;