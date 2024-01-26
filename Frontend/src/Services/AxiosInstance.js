import  axios  from "axios";

const baseURL = 'http://localhost:3000/'
const axiosInstanceUser = axios.create({baseURL})

export default axiosInstanceUser