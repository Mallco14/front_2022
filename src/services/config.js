import axios from 'redaxios';


const baseURL = "https://back2022-production.up.railway.app/test";

const instance = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type":"application/json",
    },
});
export default instance;