import axios from "axios";

const api = axios.create({
    baseURL: "http://10.3.61.45:3000"
});

export default api;
