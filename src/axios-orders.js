import axios from "axios";

const instance = axios.create({
    baseURL: "https://reactjs-builder.firebaseio.com/"
});

export default instance;