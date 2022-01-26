import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-backend-1989.herokuapp.com",
});

export default instance;
